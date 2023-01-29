/** @module ArticlePreview
 *  @since 2023.01.29, 22:45
 *  @changed 2023.01.29, 22:45
 */

import React from 'react';
import classnames from 'classnames';

import { TArticle, TArticleId } from '@/features/articles';

import styles from './ArticlePreview.module.scss';
import { useArticle } from '@/app/app-reducer';

interface TArticlePreviewProps {
  className?: string;
  id: TArticleId;
}

interface DataItemProps {
  id: string;
  value?: string | number | boolean;
}
function DataItem({ id, value }: DataItemProps): JSX.Element {
  return (
    <div className={styles.dataItem}>
      <span className={styles.dataItemLabel}>{id}:</span>{' '}
      <span className={styles.dataItemValue}>{value}</span>
    </div>
  );
}
export default function ArticlePreview(props: TArticlePreviewProps): JSX.Element {
  const { className, id } = props;

  const article = useArticle(id);
  const keys = article && Object.keys(article);
  const items =
    keys &&
    keys.map((key) => {
      const value = article[key as keyof TArticle] as string | boolean | number | undefined;
      return !!value && <DataItem key={id + ':' + key} id={key} value={value} />;
    });
  /* // DEBUG
   * console.log('[ArticlePreview:DEBUG]', {
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
