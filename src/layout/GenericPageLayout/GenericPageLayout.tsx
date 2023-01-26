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
// import NavBar from '@/components/NavBar';
// import FooterWithContacts from '@/components/FooterWithContacts';
// import TopCarousel from '@/components/TopCarousel';

import styles from './GenericPageLayout.module.scss';

export interface TGenericPageLayoutProps extends THtmlHeaderProps {
  children?: TReactContent;
}

const GenericPageLayout = (props: TGenericPageLayoutProps): JSX.Element => {
  // NOTE: Get props from nextjs (as `pageProps`)
  const { children, ...restProps } = props;
  // prettier-ignore
  return (
    <div className={classnames(styles.root)}>
      <HtmlHeader {...restProps} />
      {/*
      <NavBar key="NavBar" showTopSplash={showTopSplash} />
      */}
      <div className={styles.MainContainer}>
        {children}
      </div>
      {/*
      <FooterWithContacts />
      */}
    </div>
  );
};

export default GenericPageLayout;
