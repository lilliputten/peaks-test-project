/** @module types
 *  @since 2023.01.28, 19:17
 *  @changed 2023.01.28, 23:47
 */

export interface ArticlesState {
  query: string;
  sortMode: TSortMode;
  pageNo: number;
  pageSize: number;
  articles: TArticle[];
  isLoading: boolean;
  error?: Error;
}

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

// Optional fields definition (depends on `show-field` parameter, see below), available in `fields` object in the raw data (`TRawArticle`).
export interface TRawArticleFields {
  allowUgc?: string; // May have associated User Generated Content. This typically means the content has an associated Guardian Witness assignment which can be accessed by querying show-references=witness-assignment -- String (Boolean)
  body?: string; // String (HTML), eg: '<div id=\"block-63d4f7f78f0828070504e298\' class=...'
  byline?: string; // String (HTML), eg: 'Joe Middleton (now) and Adam Fulton (earlier)'
  commentCloseDate?: string; // The date the comments have been closed -- Datetime
  commentable?: string; // String (Boolean)
  hasStoryPackage?: string; // Has related content selected by editors -- String (boolean)
  headline?: string; // String (HTML), eg: 'Russia-Ukraine war live: Russian death toll from Makiivka attack ‘far higher than Moscow admitted’'
  internalPageCode?: string; // String
  isPremoderated?: string; // Comments will be checked by a moderator prior to publication if true -- String (Boolean), eg: 'false'
  lastModified?: string; // Datetime, eg: '2023-01-28T10:27:05Z'
  liveBloggingNow?: string; // Content is currently live blogged if true -- String (Boolean), eg: 'true'
  productionOffice?: string; // String, eg: 'AUS'
  publication?: string; // String, eg: 'theguardian.com'
  score?: string; // A relevance score based on the search query used -- String (float)
  shortUrl?: string; // String, eg: 'https://www.theguardian.com/p/n85pq'
  shouldHideAdverts?: string; // Adverts will not be displayed if true -- String (Boolean), eg: 'true'
  showInRelatedContent?: string; // Whether this content can appear in automatically generated Related Content -- String (boolean), eg: 'true'
  standfirst?: string; // String (HTML), eg: '<p>UK intelligence says more than 300 Russians killed in attack, while Moscow reported 89 deaths</p><ul><li><a href=\"https://www.theguardian.com/world/2023/jan/28/russia-ukraine-war-at-a-glance-what-we-know-on-day-339-of-the-invasion\">What we know on day 339 of the invasion</a></li></ul>'
  starRating?: string; // String (Integer)
  thumbnail?: string; // String, eg: 'https://media.guim.co.uk/3976a9db8fc4d3c5e2fbd8d657c1d35c383f0622/0_242_3957_2374/500.jpg'
  trailText?: string; // String (HTML), eg: 'UK intelligence says more than 300 Russians killed in attack, while Moscow reported 89 deaths'
  wordcount?: string; // String (Integer), eg: '1404'
}

// Available options for `show-fields` (string constants):
export type TShowFieldsOption =
  | 'all' // Includes all the fields
  | 'allowUgc' // May have associated User Generated Content. This typically means the content has an associated Guardian Witness assignment which can be accessed by querying show-references=witness-assignment -- String (Boolean)
  | 'body' // String (HTML)
  | 'byline' // String (HTML)
  | 'commentCloseDate' // The date the comments have been closed -- Datetime
  | 'commentable' // String (Boolean)
  | 'hasStoryPackage' // Has related content selected by editors -- String (boolean)
  | 'headline' // String (HTML)
  | 'internalPageCode' // String
  | 'isPremoderated' // Comments will be checked by a moderator prior to publication if true -- String (Boolean)
  | 'lastModified' // Datetime
  | 'liveBloggingNow' // Content is currently live blogged if true -- String (Boolean)
  | 'productionOffice' // String
  | 'publication' // String
  | 'score' // A relevance score based on the search query used -- String (float)
  | 'shortUrl' // String
  | 'shouldHideAdverts' // Adverts will not be displayed if true -- String (Boolean)
  | 'showInRelatedContent' // Whether this content can appear in automatically generated Related Content -- String (boolean)
  | 'standfirst' // String (HTML)
  | 'starRating' // String (Integer)
  | 'thumbnail' // String
  | 'trailText' // String (HTML)
  | 'wordcount'; // String (Integer)
// `show-fields` options list:
export type TShowFieldsList = TShowFieldsOption[];

export type TArticleId = string;

export interface TRawArticle {
  id: TArticleId; // 'world/2022/oct/21/russia-ukraine-war-latest-what-we-know-on-day-240-of-the-invasion',
  type: string; // 'article',
  sectionId: string; // 'world',
  sectionName: string; // 'World news',
  webPublicationDate: string; // ISO date string, eg: '2022-10-21T14:06:14Z',
  webTitle: string; // 'Russia-Ukraine war latest: string; // what we know on day 240 of the invasion',
  webUrl: string; // 'https://www.theguardian.com/world/2022/oct/21/russia-ukraine-war-latest-what-we-know-on-day-240-of-the-invasion',
  apiUrl: string; // 'https://content.guardianapis.com/world/2022/oct/21/russia-ukraine-war-latest-what-we-know-on-day-240-of-the-invasion',
  isHosted: boolean; // false,
  pillarId: string; // 'pillar/news',
  pillarName: string; // 'News'

  // Optional (depends on `show-field` parameter, see above):
  fields?: TRawArticleFields;
}

// Extra fields data integrated into resulted article object
export type TArticle = TRawArticle & TRawArticleFields;

// NOTE: Export sort modes ids (`sortModeIds`) to use in sort control.
export const sortModeIds = [
  'newest',
  'oldest',
  // 'relevance', // UNUSED!
] as const;
// Sort mode type (from ids list)
export type TSortMode = (typeof sortModeIds)[number];

export interface TArticleSearchInfo {
  // NOTE: Indices start with 1, not 0!
  status: string; // 'ok',
  userTier: string; // 'developer',
  total: number; // 1,
  startIndex: number; // 1,
  pageSize: number; // 10,
  currentPage: number; // 1,
  pages: number; // 1,
  sortMode: TSortMode; // 'newest',
}

interface TArticleSearchQueryResponse extends TArticleSearchInfo {
  results: TRawArticle[];
}

export interface TArticleSearchQueryResult {
  response: TArticleSearchQueryResponse;
}

export interface TArticleSearchResult {
  info: TArticleSearchInfo;
  articles: TArticle[];
}

export interface TSearchQueryParams {
  q?: string; // Request content containing this free text. Supports AND, OR and NOT operators, and exact phrase queries using double quotes.
  page?: number; // Return only the result set from a particular page Integer e.g. 5
  'page-size'?: number; // Modify the number of items displayed per page  Integer 1 to 50
  'order-by'?: TSortMode; // Returns results in the specified order  String  See list below. newest - Default in all other cases. oldest. relevance - Default where q parameter is specified.
  'show-fields'?: string; // Add fields associated with the content
  'api-key': string; // The API key used for the query
}

// Application-level parameters (will be translated to `TSearchQueryParams`):
export interface TArticleSearchParams {
  query?: string;
  sortMode?: TSortMode;
  pageNo?: number;
  pageSize?: number;
  showFields?: TShowFieldsList;
}
