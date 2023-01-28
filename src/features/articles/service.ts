/** @module Search
 *  @since 2023.01.28, 15:57
 *  @changed 2023.01.28, 20:29
 */

import axios from 'axios';

import config from '@/config';
import {
  TArticleSearchResult,
  TArticleSearchParams,
  TSearchQueryParams,
  TArticleSearchQueryResult,
} from './types';
import { defaultFieldsString } from './constants';
import { combineArticleData } from './helpers';

/* // Info:
 * @see https://open-platform.theguardian.com/documentation/search
 * example: https://content.guardianapis.com/search?q=12%20years%20a%20slave&format=json&tag=film/film,tone/reviews&from-date=2010-01-01&show-tags=contributor&show-fields=starRating,headline,thumbnail,short-url&show-refinements=all&order-by=relevance
 * example details:
 * - q=12 years a slave
 * - format=json
 * - tag=film/film,tone/reviews
 * - from-date=2010-01-01
 * - show-tags=contributor
 * - show-fields=starRating,headline,thumbnail,short-url
 * - show-refinements=all
 * - order-by=relevance
 */

export async function fetchArticles(
  srcParams: TArticleSearchParams,
): Promise<TArticleSearchResult> {
  const url = config.api.apiUrlPrefix + '/search';
  const { query, pageNo, pageSize, sortMode, showFields } = srcParams;
  const params: TSearchQueryParams = {
    'api-key': config.api.apiKey,
    q: query,
    page: pageNo,
    'page-size': pageSize,
    'order-by': sortMode,
    'show-fields': showFields ? showFields.join(',') : defaultFieldsString,
  };
  try {
    const res = await axios.get<TArticleSearchQueryResult>(url, { params });
    const { data } = res;
    const response = data.response;
    const { results, ...info } = response;
    const articles = results.map(combineArticleData);
    const resultData: TArticleSearchResult = {
      articles,
      info,
    };
    /* // DEBUG
     * console.log('[Search:fetchArticles]: request done', {
     *   articles,
     *   results,
     *   resultData,
     *   info,
     *   data,
     *   url,
     *   params,
     *   res,
     * });
     */
    return resultData;
  } catch (error) {
    // NOTE: Error type is AxiosError.
    // eslint-disable-next-line no-console
    console.error('[Search:fetchArticles]: request catch', {
      error,
      url,
      params,
      srcParams,
    });
    // debugger; // eslint-disable-line no-debugger
    // TODO: Extend error with request parameters (url, params, srcParams, etc)?
    // TODO: Use our own error class, extending AxiosError?
    throw error;
  }
}
