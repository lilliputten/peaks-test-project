/** @module app-store
 *  @since 2023.01.28, 21:01
 *  @changed 2023.01.28, 22:06
 */

import { useEffect } from 'react';
import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import { TReactContent } from '@/utils/react-types';
import { fetchArticlesThunk } from '@/features/articles/reducer';
import { RootState } from './app-reducer';

interface AppWrapperProps {
  children?: TReactContent;
}

export default function AppWrapper(props: AppWrapperProps): JSX.Element {
  const { children } = props;

  const dispatch: ThunkDispatch<RootState, void, AnyAction> = useDispatch();

  // Fetch inhitial data...
  useEffect(() => {
    dispatch(fetchArticlesThunk());
  }, [dispatch]);

  // prettier-ignore
  return (
    <>
      {children}
    </>
  );
}
