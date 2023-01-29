/** @module app-store
 *  @since 2023.01.28, 21:01
 *  @changed 2023.01.29, 21:31
 */

import { TReactContent } from '@/utils/react-types';
import { ArticlesControlNode } from '@/features/articles';

interface AppWrapperProps {
  children?: TReactContent;
}

export default function AppWrapper(props: AppWrapperProps): JSX.Element {
  const { children } = props;
  return (
    <>
      <ArticlesControlNode />
      {children}
    </>
  );
}
