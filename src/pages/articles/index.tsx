/** @module IndexPage
 *  @since 2023.01.26, 22:51
 *  @changed 2023.02.01, 18:32
 */

// import * as siteConfig from '@/config/site';
import GenericPageLayout from '@/layout/GenericPageLayout';
import { WrappedArticleList } from '@/components';
import { PageSectionWrapper, PageSectionHeader } from '@/ui-elements';
import { subPageTitle } from '@/ui-support/pageUtils';

export default function IndexPage(): JSX.Element {
  // const { title } = siteConfig;
  const pageTitle = 'Search';
  const title = subPageTitle(pageTitle);
  const description = 'Page search component.';
  return (
    <GenericPageLayout title={title}>
      <PageSectionWrapper flex flexVertical fullSizeFlexChild>
        <PageSectionHeader title={pageTitle} description={description} padded />
        <WrappedArticleList />
      </PageSectionWrapper>
    </GenericPageLayout>
  );
}
