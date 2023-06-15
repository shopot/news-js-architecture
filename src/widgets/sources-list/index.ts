import './styles.css';

import { sourcesItem, sourceStore } from '@/entities/source';
import { createElement } from '@/shared/lib';
import { loadNews } from '@/features/load-news';

export const sourcesList = () => {
  const rootElement = createElement('div', {
    className: 'sources buttons',
  });

  const render = (): HTMLElement => {
    const { sources } = sourceStore.getState();

    const fragment = document.createDocumentFragment();

    sources.forEach((item) => {
      const sourceElement = sourcesItem({
        id: item.id,
        name: item.name,
      });

      sourceElement.addEventListener('click', () => loadNews(item.id));

      fragment.appendChild(sourceElement);
    });

    // Reset element for next render
    rootElement.innerHTML = '';

    rootElement.append(fragment);

    return rootElement;
  };

  // Subscribe to store sourceStore
  sourceStore.subscribe('features-sourcesList', {
    update: () => render(),
  });

  return render();
};
