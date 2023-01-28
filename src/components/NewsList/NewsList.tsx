/** @module NewsList
 *  @since 2023.01.27, 19:57
 *  @changed 2023.01.28, 15:54
 */

import React, { useEffect, useState } from 'react';
import classnames from 'classnames';
import axios from 'axios';

import config from '@/config';
import { safeStringify } from '@/utils/objects';
import LoaderSplash from '@/ui-elements/LoaderSplash';

import styles from './NewsList.module.scss';

interface TNewsListProps {
  className?: string;
}

export default function NewsList(props: TNewsListProps): JSX.Element {
  const { className } = props;
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<any[]>([]); // ???
  useEffect(() => {
    const url = config.api.apiUrlPrefix + '/search';
    const params = {
      'api-key': config.api.apiKey,
    };
    setLoading(true);
    axios
      .get(url, { params })
      .then((res) => {
        const { data } = res;
        const { response } = data;
        const { results, ...info } = response;
        console.log('@:NewsList: request done', {
          results,
          info,
          data,
          url,
          params,
          res,
        });
        debugger;
        // setData(res);
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
  }, []);
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
