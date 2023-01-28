/** @module app-reducer
 *  @since 2023.01.28, 21:01
 *  @changed 2023.01.28, 21:01
 */

import { combineReducers } from 'redux';
import { shallowEqual, TypedUseSelectorHook, useSelector } from 'react-redux';

import articlesReducer, {
  ArticlesState,
  selectLoading,
  selectArticles,
  selectArticlesList,
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
export const useLoading = (): boolean => selectLoading(useArticlesState());
export const useArticles = (): ReturnType<typeof selectArticles> =>
  selectArticles(useArticlesState());
export const useArticlesList = (): ReturnType<typeof selectArticlesList> =>
  selectArticlesList(useArticlesState());
