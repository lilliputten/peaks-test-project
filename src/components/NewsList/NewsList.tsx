/** @module NewsList
 *  @since 2023.01.27, 19:57
 *  @changed 2023.01.28, 15:54
 */

import React, { useEffect, useMemo, useState } from 'react';
import classnames from 'classnames';

// import config from '@/config';
import { safeStringify } from '@/utils/objects';
import LoaderSplash from '@/ui-elements/LoaderSplash';
import { Search, TSearchCombinedItem } from '@/services/GuardianApis/Search';

import styles from './NewsList.module.scss';

interface TNewsListProps {
  className?: string;
}

export default function NewsList(props: TNewsListProps): JSX.Element {
  const { className } = props;
  const [loading, setLoading] = useState(true);
  const searchService = useMemo(() => new Search(), []);
  const [data, setData] = useState<TSearchCombinedItem[]>([]);
  // TODO: Use store

  useEffect(() => {
    const params = {};
    setLoading(true);
    searchService
      .querySearch(params)
      .then(({ info, results }) => {
        // DEBUG
        console.log('[NewsList:useEffect]: request done', {
          results,
          info,
          // data,
          params,
        });
        debugger;
        setData(results);
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
  }, [searchService]);
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
