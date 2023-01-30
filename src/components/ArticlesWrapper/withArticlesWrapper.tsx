/** @module withArticlesWrapper
 *  @desc Wrapping any component (articles list with ArticlesWrapper)
 *  @since 2023.01.30, 18:03
 *  @changed 2023.01.30, 19:15
 */

import React from 'react';

import { ArticlesWrapper } from './ArticlesWrapper';

interface TWithProps {
  wrapperClassName?: string;
}

export function withArticlesWrapper<P extends JSX.IntrinsicAttributes>(
  Component: React.ComponentType<P>,
) {
  return function WithArticlesWrapper(props: P & TWithProps) {
    const { wrapperClassName, ...componentProps } = props;
    return (
      <ArticlesWrapper className={wrapperClassName}>
        <Component {...(componentProps as P)} />
      </ArticlesWrapper>
    );
  };
}
