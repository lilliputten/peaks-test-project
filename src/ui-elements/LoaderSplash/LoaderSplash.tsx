/** @module LoaderSplash
 *  @since 2023.01.27, 21:26
 *  @changed 2023.01.27, 21:26
 */

import React from 'react';
import classnames from 'classnames';

import Spinner, { TSpinnerSize, TSpinnerColor } from '@/ui-elements/Spinner';

import styles from './LoaderSplash.module.scss';

type TBackground = true | 'white' | 'gray' | 'neutral' | 'primary';

interface TLoaderSplashProps {
  className?: string;
  spinnerSize?: TSpinnerSize;
  spinnerColor?: TSpinnerColor;
  fullSize?: boolean;
  bg?: TBackground;
  show?: boolean;
}

export default function LoaderSplash(props: TLoaderSplashProps): JSX.Element {
  const { className, spinnerSize, spinnerColor, fullSize, bg, show = true } = props;
  const bgId = bg && ['bg', bg].filter((x) => typeof x === 'string').join('_');
  const resultedClassName = classnames(
    className,
    styles.container,
    fullSize && styles.fullSize,
    bgId && styles[bgId],
    show || styles.hidden,
  );
  console.log('ZZZ', spinnerColor);
  return (
    <div className={resultedClassName}>
      <Spinner className={styles.spinner} size={spinnerSize} color={spinnerColor} />
    </div>
  );
}
