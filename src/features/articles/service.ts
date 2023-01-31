/** @module Search
 *  @since 2023.01.28, 15:57
 *  @changed 2023.01.31, 16:46
 */

import axios from 'axios';

import config from '@/config';
import { defaultFieldsString } from '@/core/constants';
import {
  TArticlesSearchResult,
  TArticlesSearchParams,
  TArticlesSearchQueryParams,
  TArticlesSearchQueryResult,
  TArticleLoadParams,
  TArticleLoadQueryParams,
  TArticleLoadResult,
  TArticleLoadQueryResult,
} from './types';
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
  srcParams: TArticlesSearchParams,
): Promise<TArticlesSearchResult> {
  const url = config.api.apiUrlPrefix + '/search';
  const { query, pageNo, pageSize, sortMode, showFields } = srcParams;
  const params: TArticlesSearchQueryParams = {
    'api-key': config.api.apiKey,
    q: query,
    page: pageNo,
    'page-size': pageSize,
    'order-by': sortMode,
    'show-fields': showFields ? showFields.join(',') : defaultFieldsString,
  };
  try {
    const res = await axios.get<TArticlesSearchQueryResult>(url, { params });
    const { data } = res;
    const response = data.response;
    const { results, ...info } = response;
    const articles = results.map(combineArticleData);
    const resultData: TArticlesSearchResult = {
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

// Fetch single article data by id

export async function fetchArticleById(srcParams: TArticleLoadParams): Promise<TArticleLoadResult> {
  const { id, showFields } = srcParams;
  const url = config.api.apiUrlPrefix + '/' + id;
  const params: TArticleLoadQueryParams = {
    'api-key': config.api.apiKey,
    'show-fields': showFields ? showFields.join(',') : defaultFieldsString,
  };
  // DEBUG
  console.log('[Search:fetchArticleById]: request start', {
    url,
    params,
    srcParams,
  });
  debugger;
  try {
    const res = await axios.get<TArticleLoadQueryResult>(url, { params });
    const { data } = res;
    const response = data.response;
    const { content } = response;
    const article = combineArticleData(content);
    const resultData: TArticleLoadResult = {
      article,
    };
    // DEBUG
    console.log('[Search:fetchArticleById]: request done', {
      article,
      content,
      resultData,
      data,
      url,
      params,
      res,
    });
    debugger;
    return resultData;
  } catch (error) {
    // NOTE: Error type is AxiosError.
    // eslint-disable-next-line no-console
    console.error('[Search:fetchArticleById]: request catch', {
      error,
      url,
      params,
      srcParams,
    });
    debugger; // eslint-disable-line no-debugger
    // TODO: Extend error with request parameters (url, params, srcParams, etc)?
    // TODO: Use our own error class, extending AxiosError?
    throw error;
  }
}
