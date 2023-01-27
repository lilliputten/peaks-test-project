/** @module NewsList
 *  @since 2023.01.27, 19:57
 *  @changed 2023.01.27, 19:57
 */

import React, { useEffect, useState } from 'react';
import classnames from 'classnames';

import LoaderSplash from '@/ui-elements/LoaderSplash';

import styles from './NewsList.module.scss';

interface TNewsListProps {
  className?: string;
}

export default function NewsList(props: TNewsListProps): JSX.Element {
  const { className } = props;
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);
  const loaded = !loading;
  return (
    <div className={classnames(className, styles.container)}>
      {loaded && <div>Loaded</div>}
      <LoaderSplash spinnerSize="large" bg="white" show={loading} fullSize />
    </div>
  );
}
