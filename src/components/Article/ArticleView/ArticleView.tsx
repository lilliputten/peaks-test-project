/** @module ArticleView
 *  @since 2023.01.29, 22:45
 *  @changed 2023.01.31, 23:06
 */

import React, { useEffect, useMemo } from 'react';
import classnames from 'classnames';

import { useAppDispatch } from '@/core/app/app-store';
import { TArticle, TArticleId } from '@/core/types';
import { useCurrentArticle } from '@/core/app/app-reducer';
import { setCurrentArticleId } from '@/features/article/reducer';
import { withArticleWrapper } from '../ArticleWrapper';

// import { DebugData } from '@/components/Common/DebugData/DebugData';
import { PlainHtmlBody } from '@/components/Common';

import styles from './ArticleView.module.scss';
import { formatIsoDateString } from '@/utils';

interface TArticleViewByIdProps extends JSX.IntrinsicAttributes {
  className?: string;
  id?: TArticleId;
}
interface TArticleViewWithDataProps extends JSX.IntrinsicAttributes {
  className?: string;
  article?: TArticle | string;
}

// TODO?
interface TArticleViewContentProps {
  article: TArticle;
}
function ArticleViewContent({ article }: TArticleViewContentProps): JSX.Element {
  const {
    // id,
    webPublicationDate,
    webTitle,
    headline,
    thumbnail,
    body,
  } = article;
  /* // DEBUG
   * console.log('[ArticleView:ArticleViewContent]', {
   *   id,
   *   webPublicationDate,
   *   webTitle,
   *   headline,
   *   thumbnail,
   *   article,
   * });
   */
  const hasThumbnail = !!thumbnail;
  const thumbnailStyle = hasThumbnail && { backgroundImage: 'url(' + thumbnail + ')' };
  return (
    <div className={classnames(styles.contentLayout)}>
      <div className={classnames(styles.column, styles.mediaColumn)}>
        {hasThumbnail && thumbnailStyle && (
          <div className={classnames(styles.row, styles.thumbnailRow)}>
            <div className={classnames(styles.thumbnail)} style={thumbnailStyle} />
          </div>
        )}
      </div>
      <div className={classnames(styles.column, styles.mainColumn)}>
        <div className={classnames(styles.row, styles.bookmarksRow)}>
          (Bookmarking controls: not implemented)
        </div>
        {webPublicationDate && (
          <div className={classnames(styles.row, styles.dateRow)}>
            {formatIsoDateString(webPublicationDate)}
          </div>
        )}
        {webTitle && <div className={classnames(styles.row, styles.titleRow)}>{webTitle}</div>}
        {headline && <div className={classnames(styles.row, styles.headlineRow)}>{headline}</div>}
        {body && <PlainHtmlBody className={classnames(styles.row, styles.bodyRow)} body={body} />}
      </div>
    </div>
  );
}

export function ArticleViewWithData(props: TArticleViewWithDataProps): JSX.Element {
  const { className, article } = props;
  const content = useMemo(() => {
    if (!article) {
      // TODO: Throw an error?
      return 'No article data found';
    } else if (typeof article === 'string') {
      return article;
    } else {
      // return <DebugData data={article} />; // DEBUG
      return <ArticleViewContent article={article} />;
    }
  }, [article]);
  /* // Sample article data:
   * id: sport/live/2023/jan/28/elena-rybakina-v-aryna-sabalenka-australian-open-womens-singles-final-live
   * type: liveblog
   * sectionId: sport
   * sectionName: Sport
   * webPublicationDate: 2023-01-28T11:39:31Z
   * webTitle: Aryna Sabalenka beats Elena Rybakina in Australian Open women’s singles final – as it happened
   * webUrl: https://www.theguardian.com/sport/live/2023/jan/28/elena-rybakina-v-aryna-sabalenka-australian-open-womens-singles-final-live
   * apiUrl: https://content.guardianapis.com/sport/live/2023/jan/28/elena-rybakina-v-aryna-sabalenka-australian-open-womens-singles-final-live
   * pillarId: pillar/sport
   * pillarName: Sport
   * trailText: The Belarusian won her first grand slam in three sets, having lost the first to the Kazakh Wimbledon champion
   * byline: John Brewin
   * body: <div id="block-63d509228f085c034debc9d8" class="block" data-block-contributo...
   * publication: theguardian.com
   * shortUrl: https://www.theguardian.com/p/n82eq
   * thumbnail: https://media.guim.co.uk/0823bb90f3fc656d08e162a32484d9cfd2d840e4/0_299_4487_2693/500.jpg
   */
  // prettier-ignore
  return (
    <div className={classnames(className, styles.container)}>
      {content}
    </div>
  );
}

export function ArticleViewById(props: TArticleViewByIdProps): JSX.Element {
  const { className, id = '' } = props;
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setCurrentArticleId(id));
  }, [id, dispatch]);
  const article = useCurrentArticle();
  return <ArticleViewWithData className={className} article={article} />;
}

// Export wrapped versions
export const WrappedArticleViewById = withArticleWrapper<TArticleViewByIdProps>(ArticleViewById);
export const WrappedArticleViewWithData =
  withArticleWrapper<TArticleViewWithDataProps>(ArticleViewWithData);
