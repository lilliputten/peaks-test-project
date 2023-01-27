/** @module PageContent
 *  @desc Top page header with logo, menu, hot actions etc.
 *  @since 2023.01.27, 16:20
 *  @changed 2023.01.27, 19:13
 */

import React from 'react';
import classnames from 'classnames';

import { TReactContent } from '@/utils/react-types';
import Panel from '@/ui-elements/Panel';

import styles from './PageContent.module.scss';

interface TPageContentProps {
  className?: string;
  rootPage?: boolean;
  children?: TReactContent;
}

export default function PageContent(props: TPageContentProps): JSX.Element {
  const { children, className, rootPage } = props;
  return (
    <Panel className={classnames(className, styles.container, rootPage && styles.rootPage)} flex>
      {children}
    </Panel>
  );
}
