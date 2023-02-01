/** @module PageHeader
 *  @since 2023.01.27, 16:20
 *  @changed 2023.01.27, 16:20
 */

import React from 'react';
import Link from 'next/link';
import classnames from 'classnames';

import { Panel, withRouterProps, TWithRouterProps } from '@/ui-elements';
import { HeaderSearchBox } from '@/ui-elements';

import styles from './PageHeader.module.scss';

interface TPageHeaderProps extends TWithRouterProps {
  className?: string;
}

function Logo({ isRoot }: { isRoot: boolean }): JSX.Element {
  const className = classnames(styles.box, styles.logoBox);
  if (!isRoot) {
    return <Link className={className} href="/" />;
  } else {
    return <span className={className} />;
  }
}

function PageHeader(props: TPageHeaderProps): JSX.Element {
  const { className, isRoot } = props;
  // console.log('YYY', isRoot);
  // debugger;
  return (
    <Panel
      className={classnames(className, styles.container, isRoot && styles.isRoot)}
      tag="header"
      flex
    >
      <Logo isRoot={!!isRoot} />
      <div className={classnames(styles.box, styles.searchBox)}>
        <HeaderSearchBox />
      </div>
    </Panel>
  );
}

export default withRouterProps(PageHeader);
