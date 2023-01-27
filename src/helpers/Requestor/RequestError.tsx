/** @module RequestError
 *  @since 2023.01.27, 23:19
 *  @changed 2023.01.27, 23:19
 */

export interface TRequestErrorParams {
  name?: string; // 'RequestError'
  message: string; // 'Request processing error (' + status + ')',
  url?: string; // requestUrl,
  data?: unknown;
  headers?: unknown;
  method?: string; // 'GET', 'POST'
  status?: number; // 404
  reason?: string; // Custom idendtifier, 'InvalidResponse',
}

class RequestError extends Error {
  name = 'RequestError';
  message = ''; // 'Request processing error (' + status + ')'
  url?: string; // requestUrl
  data?: unknown;
  headers?: unknown;
  method?: string; // 'GET', 'POST'
  status?: number; // 404
  reason?: string; // Custom idendtifier, 'InvalidResponse'

  constructor(params: TRequestErrorParams) {
    super(params.message);
    if (params.message != undefined) {
      this.message = params.message;
    }
    if (params.url != undefined) {
      this.url = params.url;
    }
    if (params.data != undefined) {
      this.data = params.data;
    }
    if (params.headers != undefined) {
      this.headers = params.headers;
    }
    if (params.method != undefined) {
      this.method = params.method;
    }
    if (params.status != undefined) {
      this.status = params.status;
    }
    if (params.reason != undefined) {
      this.reason = params.reason;
    }
  }
}

export default RequestError;
