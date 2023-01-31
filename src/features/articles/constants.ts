/** @module constants
 *  @since 2023.01.28, 19:17
 *  @changed 2023.01.28, 20:29
 */

import * as buildConfig from '@/config/build';
import { TShowFieldsList } from '@/core/types';
import { sortModeIds, TArticlesParams, TArticlesState } from './types';

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

// Default sort mode
export const defaultSortMode = sortModeIds[0];

// Pages per request
export const defaultPageSize = buildConfig.DEBUG ? 5 : 20;
export const startPageNo = 1;

// Default parameters
export const defaultParams: TArticlesParams = {
  query: '',
  sortMode: defaultSortMode,
  pageNo: startPageNo,
  pageSize: defaultPageSize,
};

// Default state
export const initialState: TArticlesState = {
  ...defaultParams,
  ids: [],
  articlesHash: {},
  articles: [],
  isLoading: false,
  error: undefined,
};
