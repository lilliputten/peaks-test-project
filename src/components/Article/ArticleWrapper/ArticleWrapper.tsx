/** @module ArticleWrapper
 *  @desc Adds flex layout, loaders and error around articles list.
 *  @since 2023.01.31, 22:57
 *  @changed 2023.01.31, 23:01
 */

import React from 'react';
import classnames from 'classnames';

import { useArticleLoading, useArticleError } from '@/core/app/app-reducer';
import { errorToString, TReactContent } from '@/utils';
import { LoaderSplash } from '@/ui-elements';

import styles from './ArticleWrapper.module.scss';

interface TArticleWrapperProps {
  className?: string;
  children?: TReactContent;
}

export function ArticleWrapper(props: TArticleWrapperProps): JSX.Element {
  const { className, children } = props;

  const isLoading = useArticleLoading();
  const error = useArticleError();

  // // TODO: To display 'no data' splash here?
  // const article = useCurrentArticle();
  // const isEmpty = !article;

  return (
    <div className={classnames(className, styles.container)}>
      {error && <div className={styles.contentError}>{errorToString(error)}</div>}
      <div className={styles.contentContainer}>{children}</div>
      {/* Show large covering loader splash if no data loaded */}
      <LoaderSplash
        className={styles.loaderSplash}
        show={isLoading}
        spinnerSize="large"
        bg="white"
        mode="cover"
        fullSize
      />
    </div>
  );
}
