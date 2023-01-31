/** @module withArticleWrapper
 *  @desc Wrapping any component (articles list with ArticleWrapper)
 *  @since 2023.01.31, 22:57
 *  @changed 2023.01.31, 22:57
 */

import React from 'react';

import { ArticleWrapper } from './ArticleWrapper';

interface TWithProps {
  wrapperClassName?: string;
}

export function withArticleWrapper<P extends JSX.IntrinsicAttributes>(
  Component: React.ComponentType<P>,
) {
  return function WithArticleWrapper(props: P & TWithProps) {
    const { wrapperClassName, ...componentProps } = props;
    return (
      <ArticleWrapper className={wrapperClassName}>
        <Component {...(componentProps as P)} />
      </ArticleWrapper>
    );
  };
}
