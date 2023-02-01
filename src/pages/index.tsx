/** @module IndexPage
 *  @since 2023.01.26, 22:51
 *  @changed 2023.02.01, 18:33
 */

// import * as siteConfig from '@/config/site';
import GenericPageLayout from '@/layout/GenericPageLayout';
import { WrappedArticleList } from '@/components';
import { PageSectionWrapper, ArticlesListPageSectionHeader } from '@/ui-elements';
import { subPageTitle } from '@/ui-support/pageUtils';

// TODO 2023.01.30, 19:17 -- Use specific frontpage articles list component
// (task?). Left ArticleList for ordinary search results and bookmarked
// articles displaying.

export default function IndexPage(): JSX.Element {
  // const { title } = siteConfig;
  const pageTitle = 'Top stories';
  const title = subPageTitle(pageTitle);
  const description = 'Main page has not implemented yet. Displaying articles list page instead.';
  const extraBlock = 'TTT';
  return (
    <GenericPageLayout title={title}>
      <PageSectionWrapper flex flexVertical fullSizeFlexChild>
        <ArticlesListPageSectionHeader
          title={pageTitle}
          description={description}
          extraBlock={extraBlock}
          padded
        />
        <WrappedArticleList />
      </PageSectionWrapper>
    </GenericPageLayout>
  );
}
