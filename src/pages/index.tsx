/** @module RootPage
 *  @since 2023.01.26, 22:51
 *  @changed 2023.01.27, 18:40
 */

import * as siteConfig from '@/config/site';
import GenericPageLayout from '@/layout/GenericPageLayout';

export default function RootPage(): JSX.Element {
  const { title } = siteConfig;
  return (
    <GenericPageLayout title={title} rootPage>
      Page content
    </GenericPageLayout>
  );
}
