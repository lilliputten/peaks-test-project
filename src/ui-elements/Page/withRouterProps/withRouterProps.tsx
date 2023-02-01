/** @module withRouterProps
 *  @desc Wrapping any component with some router-originated properties.
 *  @since 2023.02.01, 19:22
 *  @changed 2023.02.01, 19:22
 */

import React, { useEffect, useState } from 'react';
import { NextRouter, useRouter } from 'next/router';

export interface TWithRouterProps {
  routerRoot: boolean | undefined;
  routerPath: string | undefined;
  router: NextRouter;
}
export function withRouterProps<P extends JSX.IntrinsicAttributes>(
  Component: React.ComponentType<P & TWithRouterProps>,
) {
  return function WithRouterProps(props: P) {
    const router = useRouter();
    const [routerRoot, setRouterRoot] = useState<TWithRouterProps['routerRoot']>();
    const [routerPath, setRouterPath] = useState<TWithRouterProps['routerPath']>();
    useEffect(() => {
      const { asPath } = router;
      const routerRoot = !asPath || asPath === '/';
      setRouterPath(asPath);
      setRouterRoot(routerRoot);
    }, [router]);
    return <Component {...props} routerRoot={routerRoot} routerPath={routerPath} router={router} />;
  };
}
