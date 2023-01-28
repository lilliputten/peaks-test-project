/** @module app-reducer
 *  @since 2023.01.28, 21:01
 *  @changed 2023.01.29, 01:24
 */

import { combineReducers } from 'redux';
import { shallowEqual, TypedUseSelectorHook, useSelector } from 'react-redux';

import { TArticlesState } from '@/features/articles';
import {
  articlesReducer,
  selectLoading,
  selectError,
  selectArticles,
  selectParams,
} from '@/features/articles/reducer';

export const rootReducer = combineReducers({
  articles: articlesReducer,
});

// Genberic reducers..
export type RootState = ReturnType<typeof rootReducer>;
export const useTypedSelector: TypedUseSelectorHook<RootState> = (selector) =>
  useSelector(selector, shallowEqual);

// Articles reducers...
export const selectArticlesState = (state: RootState): TArticlesState => state.articles;
export const useArticlesState = (): TArticlesState =>
  useTypedSelector((state) => selectArticlesState(state));
export const useLoading = (): ReturnType<typeof selectLoading> => selectLoading(useArticlesState());
export const useError = (): ReturnType<typeof selectError> => selectError(useArticlesState());
export const useArticles = (): ReturnType<typeof selectArticles> =>
  selectArticles(useArticlesState());
export const useParams = (): ReturnType<typeof selectParams> => selectParams(useArticlesState());
