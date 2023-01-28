/** @module IndexPage
 *  @since 2023.01.26, 22:51
 *  @changed 2023.01.28, 22:10
 */

import * as siteConfig from '@/config/site';
import GenericPageLayout from '@/layout/GenericPageLayout';
import ArticlesList from '@/components/ArticlesList';

export default function IndexPage(): JSX.Element {
  const { title } = siteConfig;
  return (
    <GenericPageLayout title={title} rootPage>
      <ArticlesList />
    </GenericPageLayout>
  );
}
