import './styles.css';

import { createElement } from '@/shared/lib';
import { News } from '../../model';
import { newsPhoto } from './news-photo';
import { newsDetails } from './news-detail';
import { newsDescription } from './news-description';

export const newsItem = (news: News) => {
  const meta = createElement(
    'div',
    {
      className: 'news__meta',
    },
    [newsPhoto(news), newsDetails(news)]
  );

  return createElement(
    'div',
    {
      className: 'news__item',
    },
    [meta, newsDescription(news)]
  );
};
