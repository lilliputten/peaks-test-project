/** @module ArticlesControlNode
 *  @desc Bare component to cintrol articles events on the top level of react nodes
 *  @since 2023.01.29, 21:22
 *  @changed 2023.01.29, 21:37
 */

import { useEffect, useMemo } from 'react';
import { useStore } from 'react-redux';

import { useAppDispatch } from '@/app/app-store';
import { RootState } from '@/app/app-reducer';
import { useParams } from '@/app/app-reducer';
import { TArticlesParams, defaultParams, fetchArticlesAction } from '@/features/articles';
import { resetData } from '@/features/articles/reducer';

type TMemo = TArticlesParams;
const defaultMemo = defaultParams;

export function ArticlesControlNode(): null {
  const dispatch = useAppDispatch();
  const appStateStore = useStore<RootState>();

  const { query, sortMode, pageNo, pageSize } = useParams();

  const memo = useMemo<TMemo>(() => ({ ...defaultMemo }), []);

  // Effect: Update data on essential parameters change
  useEffect(() => {
    const needReset =
      memo.query !== query || memo.sortMode !== sortMode || memo.pageSize !== pageSize;
    /* // DEBUG
     * console.log('[ArticlesControlNode:Effect]: Essential parameters]', {
     *   needReset,
     *   query,
     *   sortMode,
     *   pageNo,
     *   pageSize,
     *   memo,
     * });
     */
    // Call actions...
    if (needReset) {
      dispatch(resetData());
    }
    fetchArticlesAction(appStateStore);
    // Save parameters to memo
    memo.query = query;
    memo.sortMode = sortMode;
    memo.pageNo = pageNo;
    memo.pageSize = pageSize;
  }, [dispatch, appStateStore, memo, query, sortMode, pageNo, pageSize]);

  return null;
}
