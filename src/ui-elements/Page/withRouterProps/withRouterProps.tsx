/** @module withRouterProps
 *  @desc Wrapping any component with some router-originated properties.
 *  @since 2023.02.01, 19:22
 *  @changed 2023.02.01, 19:22
 */

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export interface TWithRouterProps {
  isRoot: boolean | undefined;
}
export function withRouterProps<P extends JSX.IntrinsicAttributes>(
  Component: React.ComponentType<P & TWithRouterProps>,
) {
  return function WithRouterProps(props: P) {
    const router = useRouter();
    const [isRoot, setIsRoot] = useState<TWithRouterProps['isRoot']>();
    useEffect(() => {
      const url = router.asPath;
      const isRoot = !url || url === '/';
      setIsRoot(isRoot);
    }, [router]);
    return <Component {...props} isRoot={isRoot} />;
  };
}
