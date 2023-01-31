/** @module helpers
 *  @since 2023.01.28, 19:17
 *  @changed 2023.01.28, 20:29
 */

import { TArticle, TRawArticle } from '@/core/types';

/** Inject optional fields into main data object */
export function combineArticleData(item: TRawArticle): TArticle {
  const { fields, ...basicData } = item;
  return { ...basicData, ...fields };
}
