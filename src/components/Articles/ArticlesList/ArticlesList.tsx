/** @module ArticlesList
 *  @since 2023.01.27, 19:57
 *  @changed 2023.02.02, 01:34
 */

import React, { useMemo } from 'react';
import classnames from 'classnames';

import { useArticles } from '@/core/app/app-reducer';
import { ArticleCardById } from '../ArticleCard';
import { TWithArticlesWrapperProps, withArticlesWrapperFabric } from '../ArticlesWrapper';

import styles from './ArticlesList.module.scss';

interface TArticlesListProps extends TWithArticlesWrapperProps {
  className?: string;
}

export function ArticlesList(props: TArticlesListProps): JSX.Element {
  const { className } = props;

  // TODO: Detect end-page scrolling and invoke next articles loading. (To do it in the wrapper?)

  const articles = useArticles();

  const content = useMemo(() => {
    if (!articles.length) {
      return <div className={styles.messageSection}>No articles found.</div>;
    }
    return articles.map(({ id }) => (
      <ArticleCardById
        // cardType="large"
        // cardType="smallText"
        // cardType="small"
        cardType="medium"
        key={id}
        id={id}
      />
    ));
  }, [articles]);

  return <div className={classnames(className, styles.container)}>{content}</div>;
}

// Export wrapped version
const wrapperParams = {
  errorClassName: styles.errorSection,
  wrapperClassName: styles.outerWrapper,
};
export const WrappedArticleList =
  withArticlesWrapperFabric<TArticlesListProps>(wrapperParams)(ArticlesList);
