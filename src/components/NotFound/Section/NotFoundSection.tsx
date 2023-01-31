/** @module NotFoundSection
 *  @since 2022.02.08, 22:44
 *  @changed 2023.01.31, 17:28
 */

import React from 'react';
import classnames from 'classnames';
// import PageSection from '@/ui-elements/PageSection';
// import { TReactContent } from '@/utils/react-types';
// import Wrapper from '@/components/Wrapper';
// import PageSectionHeader from '@/ui-elements/PageSectionHeader/PageSectionHeader';
import NotFoundContent, { title } from '../Content/NotFoundContent';

import styles from './NotFoundSection.module.scss';

export { title };

interface TNotFoundSectionProps {
  className?: string;
}

export default function NotFoundSection(props: TNotFoundSectionProps): JSX.Element {
  const { className } = props;
  return (
    <div className={classnames(className, styles.root)}>
      <NotFoundContent />
    </div>
  );
  /* // XXX: Original content (TODO?)
  return (
    <PageSection
      className={classnames(className, styles.root)}
      // id={LocationHashEnum.LocationNotFound}
    >
      <Wrapper flexDirection="column" alignItems="center">
        <PageSectionHeader
          title={title}
          // description={introText}
        />
        <NotFoundContent />
      </Wrapper>
    </PageSection>
  );
  */
}
