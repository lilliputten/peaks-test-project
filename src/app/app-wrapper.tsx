/** @module app-store
 *  @since 2023.01.28, 21:01
 *  @changed 2023.01.29, 02:15
 */

// import { useEffect } from 'react';
// import { useStore } from 'react-redux';

import { TReactContent } from '@/utils/react-types';
// import { fetchArticlesAction } from '@/features/articles/thunks';
// import { RootState } from './app-reducer';

interface AppWrapperProps {
  children?: TReactContent;
}

export default function AppWrapper(props: AppWrapperProps): JSX.Element {
  const { children } = props;

  /* // Fetch initial data...
   * XXX: TODO: Moved to `src/components/ArticlesList/ArticlesList.tsx`
   * const appStateStore = useStore<RootState>();
   * useEffect(() => {
   *   fetchArticlesAction(appStateStore);
   * }, [appStateStore]);
   */

  // prettier-ignore
  return (
    <>
      {children}
    </>
  );
}
