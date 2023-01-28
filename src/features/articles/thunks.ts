/** @module reducer
 *  @since 2023.01.28, 19:17
 *  @changed 2023.01.28, 23:31
 */

import { AnyAction, createAsyncThunk, Store, ThunkDispatch } from '@reduxjs/toolkit';

import { TArticleSearchResult, TArticlesState } from './types';
import { fetchArticles } from './service';
import { RootState } from '@/app/app-reducer';

export type FetchArticlesThunkParams = Pick<
  TArticlesState,
  'query' | 'sortMode' | 'pageNo' | 'pageSize'
>;

export const fetchArticlesThunk = createAsyncThunk(
  'articles/fetchArticlesThunk',
  async (params: FetchArticlesThunkParams): Promise<TArticleSearchResult> => {
    /* // DEBUG
     * console.log('[thunks:fetchArticlesThunk]', {
     *   params,
     * });
     */
    return await fetchArticles(params);
  },
);

export function fetchArticlesAction(rootStore: Store<RootState>): void {
  const thunkDispatch = rootStore.dispatch as ThunkDispatch<RootState, void, AnyAction>;
  const articlesState = rootStore.getState().articles;
  const { query, sortMode, pageNo, pageSize } = articlesState;
  const params: FetchArticlesThunkParams = { query, sortMode, pageNo, pageSize };
  /* // DEBUG
   * console.log('[thunks:fetchArticlesAction]', {
   *   sortMode,
   *   params,
   *   articlesState,
   * });
   */
  thunkDispatch(fetchArticlesThunk(params));
}
