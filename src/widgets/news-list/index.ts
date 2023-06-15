import './styles.css';

import { createElement } from '@/shared/lib';
import { newsItem, newsStore } from '@/entities/news';

export const newsList = () => {
  const rootElement = createElement('div', {
    className: 'news',
  });

  const render = (): HTMLElement => {
    const { articles } = newsStore.getState();

    const fragment = document.createDocumentFragment();

    articles.forEach((item) => {
      const sourceElement = newsItem(item);

      fragment.appendChild(sourceElement);
    });

    // Reset element for next render
    rootElement.innerHTML = '';

    rootElement.append(fragment);

    return rootElement;
  };

  // Subscribe to store sourceStore
  newsStore.subscribe('features-newsList', {
    update: () => render(),
  });

  return render();
};
