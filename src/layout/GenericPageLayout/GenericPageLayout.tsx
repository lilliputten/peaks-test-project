/** @module GenericPageLayout
 *  @desc Renders parameters for `head` page part (title, meta-data, etc).
 *  @since 2023.01.26, 23:51
 *  @changed 2023.01.26, 23:51
 */

import * as React from 'react';
// import config from '@/config';
import { TReactContent } from '@/utils/react-types';
import classnames from 'classnames';
import { THtmlHeaderProps } from '@/layout/HtmlHeader/HtmlHeader';
import HtmlHeader from '@/layout/HtmlHeader';
import PageHeader from '@/components/PageHeader';
import PageFooter from '@/components/PageFooter';
import PageContent from '@/components/PageContent';

import styles from './GenericPageLayout.module.scss';

export interface TGenericPageLayoutProps extends THtmlHeaderProps {
  className?: string;
  children?: TReactContent;
  rootPage?: boolean;
}

export default function GenericPageLayout(props: TGenericPageLayoutProps): JSX.Element {
  // NOTE: Get props from nextjs (as `pageProps`)
  const { className, children, rootPage, ...restProps } = props;
  // prettier-ignore
  return (
    <div className={classnames(className, styles.container, rootPage && styles.containerRoot)}>
      <HtmlHeader {...restProps} />
      <PageHeader rootPage={rootPage} />
      <PageContent className={styles.content} rootPage={rootPage}>
        {children}
      </PageContent>
      <PageFooter rootPage={rootPage} />
    </div>
  );
}
