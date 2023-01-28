/** @module app-store
 *  @since 2023.01.28, 21:01
 *  @changed 2023.01.28, 23:31
 */

import { useEffect } from 'react';
import { useStore } from 'react-redux';

import { TReactContent } from '@/utils/react-types';
import { fetchArticlesAction } from '@/features/articles/thunks';
import { RootState } from './app-reducer';

interface AppWrapperProps {
  children?: TReactContent;
}

export default function AppWrapper(props: AppWrapperProps): JSX.Element {
  const { children } = props;

  const appStateStore = useStore<RootState>();

  // Fetch initial data...
  useEffect(() => {
    fetchArticlesAction(appStateStore);
  }, [appStateStore]);

  // prettier-ignore
  return (
    <>
      {children}
    </>
  );
}
