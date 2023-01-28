/** @module helpers
 *  @since 2023.01.28, 19:17
 *  @changed 2023.01.28, 20:29
 */

import { TArticle, TRawArticle } from './types';

export function combineArticleData(item: TRawArticle): TArticle {
  const { fields, ...basicData } = item;
  return { ...basicData, ...fields };
}
