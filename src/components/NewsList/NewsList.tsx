/** @module NewsList
 *  @since 2023.01.27, 19:57
 *  @changed 2023.01.28, 20:29
 */

import React, { useEffect, useState } from 'react';
import classnames from 'classnames';

import { safeStringify } from '@/utils/objects';
import LoaderSplash from '@/ui-elements/LoaderSplash';
import { fetchArticles, TArticle } from '@/features/articles';

import styles from './NewsList.module.scss';

interface TNewsListProps {
  className?: string;
}

export default function NewsList(props: TNewsListProps): JSX.Element {
  const { className } = props;
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<TArticle[]>([]);
  // TODO: Use store

  useEffect(() => {
    const params = {};
    setLoading(true);
    fetchArticles(params)
      .then(({ info, articles }) => {
        // DEBUG
        console.log('[NewsList:useEffect]: request done', {
          articles,
          info,
          // data,
          params,
        });
        debugger;
        setData(articles);
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.error('[NewsList:useEffect]: request catch', {
          error,
        });
        // eslint-disable-next-line no-debugger
        debugger;
        throw error;
        // TODO: setError?
        // TODO: Show toast...
      })
      .finally(() => setLoading(false));
  }, []);
  const loaded = !loading;
  const content = loaded && data && safeStringify(data);
  return (
    <div className={classnames(className, styles.container)}>
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
