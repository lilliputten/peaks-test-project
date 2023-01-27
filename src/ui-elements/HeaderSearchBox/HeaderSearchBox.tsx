/** @module HeaderSearchBox
 *  @desc Top page header with logo, menu, hot actions etc.
 *  @since 2023.01.27, 17:33
 *  @changed 2023.01.27, 17:44
 */

import React from 'react';
import classnames from 'classnames';

import styles from './HeaderSearchBox.module.scss';

interface THeaderSearchBoxProps {
  className?: string;
  // TODO: Apply search callback
}

export default function HeaderSearchBox(props: THeaderSearchBoxProps): JSX.Element {
  const { className } = props;
  // TODO: Make a link from logo if not root page.
  return (
    <div className={classnames(className, styles.container)}>
      <div className={classnames(styles.icon)} />
    </div>
  );
}
