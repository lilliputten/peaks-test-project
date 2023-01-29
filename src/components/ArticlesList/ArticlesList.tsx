/** @module ArticlesList
 *  @since 2023.01.27, 19:57
 *  @changed 2023.01.29, 22:32
 */

import React from 'react';
import classnames from 'classnames';

import { useArticles, useLoading, useError } from '@/app/app-reducer';
import { safeStringify } from '@/utils/objects';
import { errorToString } from '@/utils/strings';
import LoaderSplash from '@/ui-elements/LoaderSplash';

import styles from './ArticlesList.module.scss';

interface TArticlesListProps {
  className?: string;
}

export default function ArticlesList(props: TArticlesListProps): JSX.Element {
  const { className } = props;

  // TODO: Detect end-page scrolling and invoke next articles loading.

  const isLoading = useLoading();
  const error = useError();
  const articles = useArticles();
  const isEmpty = !articles.length;

  /* // DEBUG: articles
   * useEffect(() => {
   *   console.log('[ArticlesList]: DEBUG: articles', {
   *     articles,
   *   });
   * }, [articles]);
   */

  const isLoaded = !isLoading;
  const content = isLoaded && articles && safeStringify(articles);
  return (
    <div className={classnames(className, styles.container)}>
      {error && <div className={styles.contentError}>Error: {errorToString(error)}</div>}
      {content && <div className={styles.contentContainer}>Loaded: {content}</div>}
      {/* Show small loader at the end of article items if some data has loaded */}
      {isLoading && !isEmpty && (
        <LoaderSplash
          className={styles.smallLoade}
          spinnerSize="small"
          show // Without animations!
        />
      )}
      {/* Show large covering loader splash if no data loaded */}
      <LoaderSplash
        className={styles.loaderSplash}
        show={isLoading && isEmpty}
        spinnerSize="large"
        bg="white"
        mode="cover"
        fullSize
      />
    </div>
  );
}
