/** @module Requestor
 *  @since 2023.01.27, 23:19
 *  @changed 2023.01.28, 01:25
 */

import { makeQuery } from '@/helpers/makeQuery';
import RequestError from './RequestError';

export interface TRequestorFetchParams {
  url: string;
  method?: 'GET' | 'POST';
  data?: string | Record<string, string | number | boolean>;
  responseType?: string; // 'json' etc
}

export interface TRequestorParams {
  id?: string;
}

// Class Requestor
class Requestor {
  id?: string;

  /// Lifecycle...

  constructor(params: TRequestorParams = {}) {
    if (params.id != undefined) {
      this.id = params.id;
    }
  }

  destroy(): void {
    // TODO?
  }

  /// Core data providers...

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  parsePlainText(res: Response, text: string): any {
    if (/^\w+:/.test(text)) {
      const chunks = text.split(/^(\w+?):\s*/gm);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const params: any = {};
      for (let i = 1; i < chunks.length; ) {
        let id = chunks[i++];
        if (id === 'code') {
          id = 'status';
        }
        let val: number | string = chunks[i++].trim();
        if (!isNaN(Number(val))) {
          val = Number(val);
        }
        params[id] = val;
      }
      // TODO: Process plain text
      return params;
    } else {
      return { text };
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  asyncGetData(res: Response): Promise<any> {
    const { headers } = res;
    const contentType = headers && headers.get('content-type');
    const isJson = contentType && contentType.includes('application/json');
    if (isJson) {
      return res.json();
    } else {
      return res.text().then((text) => {
        const params = this.parsePlainText(res, text);
        return params;
      });
    }
  }

  simpleFetchPromiseCb(
    params: TRequestorFetchParams,
    // params: { url: any; method?: 'GET' | 'POST'; data: any },
    resolve: (arg0: any) => void, // eslint-disable-line @typescript-eslint/no-explicit-any
    reject: (arg0: unknown) => any, // eslint-disable-line @typescript-eslint/no-explicit-any
  ): void {
    // prettier-ignore
    const {
      url,
      method = 'GET',
      data,
    } = params;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const headers: any = {};
    const fetchParams: RequestInit = {
      mode: 'cors', // no-cors, *cors, same-origin
      // credentials: 'include',
      // credentials: 'same-origin',
      method,
      headers,
      // redirect: 'follow',
      // referrerPolicy: 'origin',
    };
    let requestUrl = url;
    if (data && method === 'GET') {
      // Make url query if data specified
      const prefix = url.includes('?') ? '' : '?'; // Add prefix?
      requestUrl += typeof data === 'string' ? data : makeQuery(data, { prefix });
    }
    let requestDataString: string;
    if (method === 'POST' && data) {
      // TODO: Use safeStringify
      requestDataString = typeof data !== 'string' ? JSON.stringify(data) : data;
      headers['Content-Type'] = 'application/json';
      fetchParams.body = requestDataString;
    }
    /* // UNUSED: Authorization
     * const { useApiAuth, authName, authPass } = config.api;
     * if (useApiAuth && authName && authPass) {
     *   const authData = btoa(authName + ':' + authPass);
     *   const authStr = 'basic ' + authData;
     *   headers.Authorization = authStr;
     *   // fetchParams.credentials = 'include' // NOTE: Causes cors error for local dev server?
     * }
     */
    try {
      const req = fetch(requestUrl, fetchParams); // req is Promise
      req
        .then((res) => {
          // Process json and non-json reponses separately...
          return this.asyncGetData(res);
        })
        .then((result) => {
          if (result && result.error) {
            let message = 'Server error: ' + String(result.error);
            if (
              result.status === 404 ||
              result.error.includes('NotFound') ||
              result.error.includes('Not Found')
            ) {
              message = 'Resource not found (404)';
            }
            const error = new RequestError({ ...result, message });
            // prettier-ignore
            console.error('@:Requestor:simpleFetchPromiseCb: got plain text server error', error.message, { // eslint-disable-line no-console
              message,
              result,
              error,
            });
            // eslint-disable-next-line no-debugger
            debugger;
            reject(error);
          }
          resolve(result);
        })
        .catch((error) => {
          const { config, request, response = {} } = error;
          const { status, message } = error;
          if (message === 'Failed to fetch') {
            error = new Error('Couldnt establish network connection');
          }
          // eslint-disable-next-line no-console
          console.error('@:Requestor:simpleFetchPromiseCb: request failed:', error.message, {
            status,
            config,
            request,
            response,
            message,
            error,
            requestUrl,
            requestDataString,
            url,
            method,
            fetchParams,
            headers,
            params,
          });
          debugger; // eslint-disable-line no-debugger
          // TODO: Process empty CORS error (`Failed to fetch`)
          reject(error);
        });
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('@:Requestor:simpleFetchPromiseCb: catch error', String(error), {
        error,
        fetchParams,
        url,
        method,
        params,
      });
      debugger; // eslint-disable-line no-debugger
      reject(error);
    }
  }

  /** Fetch using native `fetch` method */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  simpleFetch(params: TRequestorFetchParams): Promise<any> {
    return new Promise(this.simpleFetchPromiseCb.bind(this, params));
  }

  /// Public data fetch interface...

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  fetch(params: TRequestorFetchParams): Promise<any> {
    // console.log('@:Requestor:fetch', params);
    return this.simpleFetch(params);
  }
}

export default Requestor;
