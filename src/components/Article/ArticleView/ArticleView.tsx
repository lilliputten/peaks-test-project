/** @module ArticleView
 *  @since 2023.01.29, 22:45
 *  @changed 2023.01.31, 23:06
 */

import React, { useEffect, useMemo } from 'react';
import classnames from 'classnames';

import { useAppDispatch } from '@/core/app/app-store';
import { TArticle, TArticleId } from '@/core/types';
import { useCurrentArticle } from '@/core/app/app-reducer';
import { setCurrentArticleId } from '@/features/article/reducer';
import { withArticleWrapper } from '../ArticleWrapper';

import styles from './ArticleView.module.scss';
import { DebugData } from '@/components/Common/DebugData/DebugData';

interface TArticleViewByIdProps extends JSX.IntrinsicAttributes {
  className?: string;
  id?: TArticleId;
}
interface TArticleViewWithDataProps extends JSX.IntrinsicAttributes {
  className?: string;
  article?: TArticle | string;
}

/* // TODO?
 * interface TArticleViewContentProps {
 *   article: TArticle;
 * }
 * function ArticleViewContent({ article }: TArticleViewContentProps): JSX.Element {
 *   const { id } = article;
 *   // DEBUG: Display only article properties
 *   const keys = article && Object.keys(article);
 *   const items =
 *     keys &&
 *     keys.map((key) => {
 *       const value = article[key as keyof TArticle] as string | boolean | number | undefined;
 *       return !!value && <DebugDataItem key={id + ':' + key} id={key} value={value} />;
 *     });
 *   [> // DEBUG
 *    * console.log('[ArticleViewWithData:DEBUG]', {
 *    *   items,
 *    *   keys,
 *    *   article,
 *    * });
 *    <]
 *   return <>{items}</>;
 * }
 */

export function ArticleViewWithData(props: TArticleViewWithDataProps): JSX.Element {
  const { className, article } = props;
  const content = useMemo(() => {
    if (!article) {
      // TODO: Throw an error?
      return 'No article data found';
    } else if (typeof article === 'string') {
      return article;
    } else {
      return <DebugData data={article} />;
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
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setCurrentArticleId(id));
  }, [id, dispatch]);
  const article = useCurrentArticle();
  return <ArticleViewWithData className={className} article={article} />;
}

// Export wrapped versions
export const WrappedArticleViewById = withArticleWrapper<TArticleViewByIdProps>(ArticleViewById);
export const WrappedArticleViewWithData =
  withArticleWrapper<TArticleViewWithDataProps>(ArticleViewWithData);
