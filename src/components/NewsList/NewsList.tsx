/** @module NewsList
 *  @since 2023.01.27, 19:57
 *  @changed 2023.01.28, 01:26
 */

import React, { useEffect, useMemo, useState } from 'react';
import classnames from 'classnames';

import config from '@/config';
import { safeStringify } from '@/utils/objects';
import LoaderSplash from '@/ui-elements/LoaderSplash';

import styles from './NewsList.module.scss';
import Requestor from '@/helpers/Requestor/Requestor';

interface TNewsListProps {
  className?: string;
}

export default function NewsList(props: TNewsListProps): JSX.Element {
  const { className } = props;
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<any[]>([]); // ???
  const requestor = useMemo(() => new Requestor({ id: 'NewsList' }), []);
  useEffect(() => {
    const url = config.api.apiUrlPrefix + '/search';
    const method = 'GET';
    const reqData = {
      'api-key': config.api.apiKey,
    };
    setLoading(true);
    requestor
      .fetch({ url, method, data: reqData })
      .then((result) => {
        /* console.log('@:NewsList: request done', {
         *   url,
         *   reqData,
         *   result,
         * });
         */
        setData(result);
        setLoading(false);
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.error('@:NewsList: request catch', {
          error,
          url,
        });
        // eslint-disable-next-line no-debugger
        debugger;
        throw error;
        // setLoading(false);
        // TODO: setError?
        // TODO: Show toast...
      });
  }, [requestor]);
  const loaded = !loading;
  const content = loaded && data && safeStringify(data);
  return (
    <div className={classnames(className, styles.container)}>
      {content && <div className={styles.contentContainer}>Loaded: {content}</div>}
      <LoaderSplash
        spinnerSize="large"
        bg="white"
        // bg="primary"
        // spinnerColor="white"
        mode="cover"
        show={loading}
        fullSize
      />
    </div>
  );
}
