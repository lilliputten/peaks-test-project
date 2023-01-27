/** @module Panel
 *  @desc Top page header with logo, menu, hot actions etc.
 *  @since 2023.01.27, 16:47
 *  @changed 2023.01.27, 16:47
 */

import React from 'react';
import classnames from 'classnames';

import { TReactContent } from '@/utils/react-types';

import styles from './Panel.module.scss';

interface TPanelProps {
  className?: string;
  wrapperClassName?: string;
  children?: TReactContent;
  flex?: boolean;
  flexVertical?: boolean;
  padded?: boolean;
}

export default function Panel(props: TPanelProps): JSX.Element {
  const { className, wrapperClassName, children, flex, flexVertical, padded } = props;
  // prettier-ignore
  return (
    <div className={classnames(className, styles.container, padded && styles.padded)}>
      <div
        className={classnames(
          wrapperClassName,
          styles.wrapper,
          flex && styles.flex,
          flexVertical && styles.flexVertical,
        )}
      >
        {children}
      </div>
    </div>
  );
}
