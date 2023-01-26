/** @module MainPage
 *  @since 2023.01.26, 22:51
 *  @changed 2023.01.27, 00:00
 */

import * as siteConfig from '@/config/site';
import GenericPageLayout from '@/layout/GenericPageLayout';

export default function Home(): JSX.Element {
  const { title } = siteConfig;
  // prettier-ignore
  return (
    <GenericPageLayout title={title}>
      Page
    </GenericPageLayout>
  );
}
