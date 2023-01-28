/** @module ArticlesList
 *  @since 2023.01.27, 19:57
 *  @changed 2023.01.28, 22:10
 */

import React, { useEffect } from 'react';
import classnames from 'classnames';

import { useArticlesList, useLoading } from '@/app/app-reducer';
import { safeStringify } from '@/utils/objects';
import LoaderSplash from '@/ui-elements/LoaderSplash';

import styles from './ArticlesList.module.scss';

interface TArticlesListProps {
  className?: string;
}

export default function ArticlesList(props: TArticlesListProps): JSX.Element {
  const { className } = props;
  const articles = useArticlesList();
  const loading = useLoading();

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
