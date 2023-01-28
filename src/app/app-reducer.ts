/** @module app-reducer
 *  @since 2023.01.28, 21:01
 *  @changed 2023.01.28, 23:47
 */

import { combineReducers } from 'redux';
import { shallowEqual, TypedUseSelectorHook, useSelector } from 'react-redux';

import { ArticlesState } from '@/features/articles';
import {
  articlesReducer,
  selectLoading,
  selectError,
  selectArticles,
} from '@/features/articles/reducer';

export const rootReducer = combineReducers({
  articles: articlesReducer,
});

// Genberic reducers..
export type RootState = ReturnType<typeof rootReducer>;
export const useTypedSelector: TypedUseSelectorHook<RootState> = (selector) =>
  useSelector(selector, shallowEqual);

// Articles reducers...
export const selectArticlesState = (state: RootState): ArticlesState => state.articles;
export const useArticlesState = (): ArticlesState =>
  useTypedSelector((state) => selectArticlesState(state));
export const useLoading = (): ReturnType<typeof selectLoading> => selectLoading(useArticlesState());
export const useError = (): ReturnType<typeof selectError> => selectError(useArticlesState());
export const useArticles = (): ReturnType<typeof selectArticles> =>
  selectArticles(useArticlesState());
