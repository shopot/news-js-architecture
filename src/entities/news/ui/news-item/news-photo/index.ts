import { createElement } from '@/shared/lib';

export const newsPhoto = (news): HTMLElement => {
  const photo = createElement('div', {
    className: 'news__meta-photo',
  });

  photo.style.backgroundImage = `url(${news.urlToImage || 'img/news_placeholder.jpg'})`;

  return photo;
};
