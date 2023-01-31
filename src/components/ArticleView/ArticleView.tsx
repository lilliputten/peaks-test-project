/** @module ArticleView
 *  @since 2023.01.29, 22:45
 *  @changed 2023.01.29, 22:45
 */

import React from 'react';
import classnames from 'classnames';

import { TArticle, TArticleId } from '@/features/articles';
import { useArticleById } from '@/core/app-reducer';

import styles from './ArticleView.module.scss';

interface TArticleViewProps {
  className?: string;
  id: TArticleId;
}

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
export function ArticleView(props: TArticleViewProps): JSX.Element {
  const { className, id } = props;

  const article = useArticleById(id);
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

  // prettier-ignore
  return (
    <div className={classnames(className, styles.container)}>
      {items}
    </div>
  );
}
