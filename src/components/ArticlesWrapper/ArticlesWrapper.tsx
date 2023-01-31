/** @module ArticlesWrapper
 *  @desc Adds flex layout, loaders and error around articles list.
 *  @since 2023.01.30, 17:58
 *  @changed 2023.01.30, 19:10
 */

import React from 'react';
import classnames from 'classnames';

import { useArticles, useLoading, useError } from '@/core/app/app-reducer';
import { errorToString, TReactContent } from '@/utils';
import LoaderSplash from '@/ui-elements/LoaderSplash';

import styles from './ArticlesWrapper.module.scss';

interface TArticlesWrapperProps {
  className?: string;
  children?: TReactContent;
}

export function ArticlesWrapper(props: TArticlesWrapperProps): JSX.Element {
  const { className, children } = props;

  // TODO: Detect end-page scrolling and invoke next articles loading.

  const isLoading = useLoading();
  const error = useError();
  const articles = useArticles();
  const isEmpty = !articles.length;

  return (
    <div className={classnames(className, styles.container)}>
      {error && <div className={styles.contentError}>{errorToString(error)}</div>}
      <div className={styles.contentContainer}>{children}</div>
      {/* Show small loader at the end of article items if some data has loaded */}
      {isLoading && !isEmpty && (
        <LoaderSplash
          className={styles.smallLoader}
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
