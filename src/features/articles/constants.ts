/** @module constants
 *  @since 2023.01.28, 19:17
 *  @changed 2023.01.28, 20:29
 */

import * as buildConfig from '@/config/build';
import { sortModeIds, TShowFieldsList } from './types';

/* // Info:
 * @see https://open-platform.theguardian.com/documentation/search
 * example: https://content.guardianapis.com/search?q=12%20years%20a%20slave&format=json&tag=film/film,tone/reviews&from-date=2010-01-01&show-tags=contributor&show-fields=starRating,headline,thumbnail,short-url&show-refinements=all&order-by=relevance
 * example details:
 * - q=12 years a slave
 * - format=json
 * - tag=film/film,tone/reviews
 * - from-date=2010-01-01
 * - show-tags=contributor
 * - show-fields=starRating,headline,thumbnail,short-url
 * - show-refinements=all
 * - order-by=relevance
 */

// Default options list for `show-fields` parameter (unused items are commented out):
const defaultFieldsList: TShowFieldsList = [
  // 'all', // Includes all the fields
  // 'allowUgc', // May have associated User Generated Content. This typically means the content has an associated Guardian Witness assignment which can be accessed by querying show-references=witness-assignment -- String (Boolean)
  'body', // String (HTML)
  'byline', // String (HTML)
  // 'commentCloseDate', // The date the comments have been closed -- Datetime
  // 'commentable', // String (Boolean)
  // 'hasStoryPackage', // Has related content selected by editors -- String (boolean)
  'headline', // String (HTML)
  // 'internalPageCode', // String
  // 'isPremoderated', // Comments will be checked by a moderator prior to publication if true -- String (Boolean)
  // 'lastModified', // Datetime
  // 'liveBloggingNow', // Content is currently live blogged if true -- String (Boolean)
  // 'productionOffice', // String
  'publication', // String
  'score', // A relevance score based on the search query used -- String (float)
  'shortUrl', // String
  // 'shouldHideAdverts', // Adverts will not be displayed if true -- String (Boolean)
  // 'showInRelatedContent', // Whether this content can appear in automatically generated Related Content -- String (boolean)
  'standfirst', // String (HTML)
  // 'starRating', // String (Integer)
  'thumbnail', // String
  'trailText', // String (HTML)
  // 'wordcount', // String (Integer)
];

// Plain options list string
export const defaultFieldsString = defaultFieldsList.join(',');

// Sort modes
export const defaultSortMode = sortModeIds[0];

// Pages
export const defaultPageSize = buildConfig.DEBUG ? 5 : 20;
