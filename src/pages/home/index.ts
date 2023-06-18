import { createElement } from '@/shared/lib';
import { sourcesList } from '@/widgets/sources-list';
import { newsList } from '@/widgets/news-list';
import { loadSources } from '@/features/source';

export const homePage = (): HTMLElement => {
  // Load sources
  void loadSources();

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
