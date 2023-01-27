/** @module PageFooter
 *  @desc Top page header with logo, menu, hot actions etc.
 *  @since 2023.01.27, 16:20
 *  @changed 2023.01.27, 16:20
 */

import React from 'react';
import classnames from 'classnames';

import Panel from '@/ui-elements/Panel';

import styles from './PageFooter.module.scss';

interface TPageFooterProps {
  className?: string;
  rootPage?: boolean;
}

export default function PageFooter(props: TPageFooterProps): JSX.Element {
  const { className, rootPage } = props;
  return (
    <Panel
      className={classnames(className, styles.container, rootPage && styles.rootPage)}
      tag="footer"
      flex
    />
  );
}
