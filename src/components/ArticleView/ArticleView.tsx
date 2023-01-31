/** @module ArticleView
 *  @since 2023.01.29, 22:45
 *  @changed 2023.01.29, 22:45
 */

import React, { useMemo } from 'react';
import classnames from 'classnames';

import { TArticle, TArticleId } from '@/core/types';
import { useArticleById } from '@/core/app/app-reducer';

import styles from './ArticleView.module.scss';

interface TArticleViewByIdProps {
  className?: string;
  id?: TArticleId;
}
interface TArticleViewProps {
  className?: string;
  article?: TArticle | string;
}

// DEBUG!
interface DebugDataItemProps {
  id: string;
  value?: string | number | boolean;
}
function DebugDataItem({ id, value }: DebugDataItemProps): JSX.Element {
  return (
    <div className={styles.dataItem}>
      <span className={styles.dataItemLabel}>{id}:</span>{' '}
      <span className={styles.dataItemValue}>{value}</span>
    </div>
  );
}

interface TArticleViewContentProps {
  article: TArticle;
}

function ArticleViewContent({ article }: TArticleViewContentProps): JSX.Element {
  const { id } = article;
  // DEBUG: Display only article properties
  const keys = article && Object.keys(article);
  const items =
    keys &&
    keys.map((key) => {
      const value = article[key as keyof TArticle] as string | boolean | number | undefined;
      return !!value && <DebugDataItem key={id + ':' + key} id={key} value={value} />;
    });
  /* // DEBUG
   * console.log('[ArticleView:DEBUG]', {
   *   items,
   *   keys,
   *   article,
   * });
   */
  return <>{items}</>;
}

export function ArticleView(props: TArticleViewProps): JSX.Element {
  const { className, article } = props;
  const content = useMemo(() => {
    if (!article) {
      // TODO: Throw an error?
      return 'No article data passed';
    } else if (typeof article === 'string') {
      return article;
    } else {
      return <ArticleViewContent article={article} />;
    }
  }, [article]);
  // prettier-ignore
  return (
    <div className={classnames(className, styles.container)}>
      {content}
    </div>
  );
}

export function ArticleViewById(props: TArticleViewByIdProps): JSX.Element {
  const { className, id = '' } = props;
  const article = useArticleById(id);
  return <ArticleView className={className} article={article} />;
}
