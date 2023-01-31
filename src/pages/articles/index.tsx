/** @module IndexPage
 *  @since 2023.01.26, 22:51
 *  @changed 2023.01.30, 19:19
 */

import * as siteConfig from '@/config/site';
import GenericPageLayout from '@/layout/GenericPageLayout';
import { WrappedArticleList } from '@/components';

// TODO 2023.01.30, 19:17 -- Use specific frontpage articles list component
// (task?). Left ArticleList for ordinary search results and bookmarked
// articles displaying.

export default function IndexPage(): JSX.Element {
  const { title } = siteConfig;
  return (
    <GenericPageLayout title={title} rootPage>
      <WrappedArticleList />
    </GenericPageLayout>
  );
}
