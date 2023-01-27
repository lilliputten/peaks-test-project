/** @module PageHeader
 *  @desc Top page header with logo, menu, hot actions etc.
 *  @since 2023.01.27, 16:20
 *  @changed 2023.01.27, 16:20
 */

import React from 'react';
import classnames from 'classnames';

import Panel from '@/components/Panel';
import SearchBox from '@/components/SearchBox';

import styles from './PageHeader.module.scss';

interface TPageHeaderProps {
  className?: string;
  rootPage?: boolean;
}

export default function PageHeader(props: TPageHeaderProps): JSX.Element {
  const { className, rootPage } = props;
  // TODO: Make a link from logo if not rootPage page.
  return (
    <Panel
      className={classnames(className, styles.container, rootPage && styles.rootPage)}
      tag="header"
      flex
    >
      <div className={classnames(styles.box, styles.logoBox)} />
      <div className={classnames(styles.box, styles.searchBox)}>
        <SearchBox />
      </div>
    </Panel>
  );
}
