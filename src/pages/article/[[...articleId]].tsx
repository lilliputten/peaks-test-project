/** @module ViewArticlePage
 *  @since 2023.01.31, 17:18
 *  @changed 2023.01.31, 17:18
 */

import { useRouter } from 'next/router';

import { useCurrentArticleTitle } from '@/core/app/app-reducer';
import GenericPageLayout from '@/layout/GenericPageLayout';
import { ArticleViewById } from '@/components';
import { subPageTitle } from '@/ui-support/pageUtils';

export default function ViewArticlePage(): JSX.Element {
  const router = useRouter();
  const articleId = router.query.articleId;
  const id = Array.isArray(articleId) ? articleId.join('/') : articleId || '';
  const pageTitle = useCurrentArticleTitle();
  const title = subPageTitle(pageTitle);
  return (
    <GenericPageLayout title={title} rootPage>
      <ArticleViewById id={id} />
    </GenericPageLayout>
  );
}
