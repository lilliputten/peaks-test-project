/** @module RootPage
 *  @since 2023.01.26, 22:51
 *  @changed 2023.01.27, 18:40
 */

import NewsList from '@/components/NewsList/NewsList';
import * as siteConfig from '@/config/site';
import GenericPageLayout from '@/layout/GenericPageLayout';

export default function RootPage(): JSX.Element {
  const { title } = siteConfig;
  // TODO: Pass search from PageHeader to NewsList (using context or store?)
  return (
    <GenericPageLayout title={title} rootPage>
      <NewsList />
    </GenericPageLayout>
  );
}
