/** @module NotFoundPage
 *  @since 2022.02.08, 22:28
 *  @changed 2022.02.08, 22:28
 */

// TODO 2022.02.09, 21:51 -- Use `_error` page? See `https://nextjs.org/docs/advanced-features/custom-error-page`.

import React from 'react';

import GenericPageLayout from '@/layout/GenericPageLayout';
import { subPageTitle } from '@/ui-support/pageUtils';
import NotFoundSection, { title as pageTitle } from '@/components/NotFound/Section';

export default function NotFoundPage(): JSX.Element {
  // const pageTitle = 'Page not found';
  const title = subPageTitle(pageTitle);
  return (
    <GenericPageLayout title={title} rootPage>
      <NotFoundSection />
    </GenericPageLayout>
  );
}
