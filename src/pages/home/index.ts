import { createElement } from '@/shared/lib';
import { sourcesList } from '@/widgets/sources-list';
import { newsList } from '@/widgets/news-list';

export const homePage = (): HTMLElement => {
  const sources = sourcesList();
  const news = newsList();

  return createElement(
    'main',
    {
      className: 'main',
    },
    [sources, news]
  );
};
