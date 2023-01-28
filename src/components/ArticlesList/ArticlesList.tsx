/** @module ArticlesList
 *  @since 2023.01.27, 19:57
 *  @changed 2023.01.29, 02:15
 */

import React, { useEffect, useMemo } from 'react';
import { useStore } from 'react-redux';
import classnames from 'classnames';

import { RootState } from '@/app/app-reducer';
import { useAppDispatch } from '@/app/app-store';
import { useArticles, useLoading, useError, useParams } from '@/app/app-reducer';
import { safeStringify } from '@/utils/objects';
import { errorToString } from '@/utils/strings';
import LoaderSplash from '@/ui-elements/LoaderSplash';
import { TArticlesParams, defaultParams, fetchArticlesAction } from '@/features/articles';
import { resetData } from '@/features/articles/reducer';

import styles from './ArticlesList.module.scss';

type TMemo = TArticlesParams;
const defaultMemo = defaultParams;

interface TArticlesListProps {
  className?: string;
}

export default function ArticlesList(props: TArticlesListProps): JSX.Element {
  const { className } = props;

  const dispatch = useAppDispatch();
  const appStateStore = useStore<RootState>();

  const articles = useArticles();
  const loading = useLoading();
  const error = useError();
  const { query, sortMode, pageNo, pageSize } = useParams();

  const memo = useMemo<TMemo>(() => ({ ...defaultMemo }), []);

  // Effect: Update data on essential parameters change
  useEffect(() => {
    const needReset =
      true || memo.query !== query || memo.sortMode !== sortMode || memo.pageSize !== pageSize;
    console.log('[ArticlesList:Effect: Essential parameters]', {
      needReset,
      query,
      sortMode,
      pageNo,
      pageSize,
      memo,
    });
    debugger;
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
  }, [dispatch, memo, query, sortMode, pageNo, pageSize]);

  // DEBUG: articles
  useEffect(() => {
    console.log('DEBUG: articles', {
      articles,
    });
  }, [articles]);

  const loaded = !loading;
  const content = loaded && articles && safeStringify(articles);
  return (
    <div className={classnames(className, styles.container)}>
      {error && <div className={styles.contentError}>Error: {errorToString(error)}</div>}
      {content && <div className={styles.contentContainer}>Loaded: {content}</div>}
      <LoaderSplash
        spinnerSize="large"
        bg="white"
        // bg="primary"
        // spinnerColor="white"
        mode="cover"
        show={loading}
        fullSize
      />
    </div>
  );
}
