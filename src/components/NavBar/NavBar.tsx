/** @module NavBar
 *  @desc Top page header with logo, menu, hot actions etc.
 *  @since 2023.01.27, 16:20
 *  @changed 2023.01.27, 16:20
 */

import React from 'react';
import classnames from 'classnames';

import Panel from '@/components/Panel';
import SearchBox from '@/components/SearchBox';

import styles from './NavBar.module.scss';

interface TNavBarProps {
  className?: string;
  isRootPage?: boolean;
}

export default function NavBar(props: TNavBarProps): JSX.Element {
  const { className, isRootPage } = props;
  // TODO: Make a link from logo if not root page.
  return (
    <Panel className={classnames(className, styles.container, isRootPage && styles.rootPage)} flex>
      <div className={classnames(styles.box, styles.logoBox)} />
      <div className={classnames(styles.box, styles.searchBox)}>
        <SearchBox />
      </div>
    </Panel>
  );
}
