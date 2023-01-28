/** @module reducer
 *  @since 2023.01.28, 19:17
 *  @changed 2023.01.28, 20:29
 */

import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { fetchArticles } from './service';
import { TArticleId, TArticle, TArticleSearchResult } from './types';

export interface SearchState {
  // createdArticleIds: TArticleId[];
  // modifiedArticleIds: TArticleId[];
  // removedArticleIds: TArticleId[];
  ids: TArticleId[];
  articles: Record<TArticleId, TArticle>;
  isLoading: boolean;
  error: string | undefined;
}

const initialState: SearchState = {
  /* // TODO:
   * sortMode: TSortMode;
   * pageNo: number;
   * pageSize: number;
   */
  // createdArticleIds: [],
  // modifiedArticleIds: [],
  // removedArticleIds: [],
  ids: [],
  articles: Object.create(null),
  isLoading: false,
  error: undefined,
};

const articlesAdapter = {
  setAll(state: SearchState, articles: TArticle[]) {
    // state.createdArticleIds = [];
    // state.modifiedArticleIds = [];
    // state.removedArticleIds = [];
    // const originalArticles = state.articles;

    state.ids = [];
    state.articles = Object.create(null);

    this.addMany(state, articles);

    // // TODO: Extract the common code used between setAll and addMany. Like: setAll = clear all data + addMany
    // articles.forEach((article) => {
    //   const { id } = article;
    //   state.articles[id] = article;
    //   state.ids.push(id);
    //   // if (!(id in originalArticles)) {
    //   //   state.createdArticleIds.push(id);
    //   // }
    // });
  },
  addMany(state: SearchState, articles: TArticle[]): void {
    // state.createdArticleIds = [];
    // state.modifiedArticleIds = [];
    // state.removedArticleIds = [];

    articles.forEach((article) => {
      const { id } = article;
      state.articles[id] = article;
      state.ids.push(id);
      // state.createdArticleIds.push(id);
    });
  },
  addOne(state: SearchState, article: TArticle): void {
    this.addMany(state, [article]);
  },
  // TODO: Is update functionality used?
  updateMany(state: SearchState, articles: TArticle[]): void {
    // state.createdArticleIds = [];
    // state.modifiedArticleIds = [];
    // state.removedArticleIds = [];

    articles.forEach((article) => {
      const articleId = article.id;

      if (!(articleId in state.articles)) {
        return false;
      }

      const originalArticle = state.articles[articleId];
      const newArticle = { ...originalArticle, ...article };
      // TODO: Check with `isDetectedArticle`?
      const { id } = newArticle;
      state.articles[id] = newArticle;
      // state.modifiedArticleIds.push(id);
    });
  },
  updateOne(state: SearchState, article: TArticle): void {
    this.updateMany(state, [article]);
  },
  // TODO: Is remove functionality used?
  removeMany(state: SearchState, articleIds: TArticleId[]): void {
    // state.createdArticleIds = [];
    // state.modifiedArticleIds = [];
    // state.removedArticleIds = [];

    const removedIds = new Set();
    articleIds.forEach((id) => {
      if (id in state.articles) {
        delete state.articles[id];
        // state.removedArticleIds.push(id);
        removedIds.add(id);
      }
    });
    if (removedIds.size > 0) {
      const originalIds = state.ids;
      state.ids = [];
      originalIds.forEach((id) => {
        if (!removedIds.has(id)) {
          state.ids.push(id);
        }
      });
    }
  },
  removeOne(state: SearchState, articleId: TArticle['id']): void {
    this.removeMany(state, [articleId]);
  },
};

const fetchArticlesThunk = createAsyncThunk(
  'articles/fetchArticlesThunk',
  async (): Promise<TArticleSearchResult> => {
    const params = {};
    return await fetchArticles(params);
  },
);

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    /* // TODO!
     * setSortMode: (
     *   state,
     *   action: PayloadAction<{ label: keyof Sorter; value: SortArticleValue }>,
     * ) => {
     *   state.sorter[action.payload.label] = action.payload.value;
     * },
     */
    addArticle: (state, action: PayloadAction<TArticle>) => {
      articlesAdapter.addOne(state, action.payload);
    },
    updateArticle: (state, action: PayloadAction<TArticle>) => {
      articlesAdapter.updateOne(state, action.payload);
    },
    removeArticle: (state, action: PayloadAction<TArticle['id']>) => {
      articlesAdapter.removeOne(state, action.payload);
    },
  },
  extraReducers: {
    [fetchArticlesThunk.pending.toString()]: (state: SearchState) => {
      state.isLoading = true;
      state.error = undefined;
    },
    [fetchArticlesThunk.fulfilled.toString()]: (
      state: SearchState,
      action: PayloadAction<TArticleSearchResult>,
    ) => {
      state.isLoading = false;
      state.error = undefined;
      const { articles } = action.payload;
      // If received new articles...
      if (articles.length !== state.ids.length || articles.some((n) => !(n.id in state.articles))) {
        // ...Set all articles into state...
        articlesAdapter.setAll(state, articles);
      }
    },
    [fetchArticlesThunk.rejected.toString()]: (
      state: SearchState,
      action: PayloadAction<string>,
    ) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

const getArticlesByIds = <T>(ids: TArticleId[], articles: Record<TArticleId, T>): T[] => {
  const result = ids.reduce((result, id: string) => {
    if (id in articles) {
      result.push(articles[id]);
    }
    return result;
  }, new Array<T>());
  return result;
};

const selectIds = (state: SearchState): TArticleId[] => state.ids;
const selectArticles = (state: SearchState): Record<TArticleId, TArticle> => {
  return state.articles;
};
const selectArticlesList = (state: SearchState): TArticle[] =>
  getArticlesByIds<TArticle>(selectIds(state), selectArticles(state));
// const selectCreatedArticleIds = (state: SearchState): TArticleId[] => state.createdArticleIds;
// const selectCreatedArticlesList = (state: SearchState): TArticle[] =>
//   getArticlesByIds<TArticle>(selectCreatedArticleIds(state), selectArticles(state));
// const selectModifiedArticleIds = (state: SearchState): TArticleId[] => state.modifiedArticleIds;
// const selectModifiedArticlesList = (state: SearchState): TArticle[] =>
//   getArticlesByIds<TArticle>(selectModifiedArticleIds(state), selectArticles(state));
// const selectRemovedArticleIds = (state: SearchState): TArticleId[] => state.removedArticleIds;

export {
  selectIds,
  selectArticles,
  selectArticlesList,
  // selectCreatedArticleIds,
  // selectCreatedArticlesList,
  // selectModifiedArticleIds,
  // selectModifiedArticlesList,
  // selectRemovedArticleIds,
  fetchArticlesThunk,
};

// export const {
//   addArticle,
//   updateArticle,
//   removeArticle,
// } = searchSlice.actions;

export default searchSlice.reducer;
