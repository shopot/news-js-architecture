import './styles.css';

import { createElement } from '@/shared/lib';

export const header = (): HTMLElement => {
  const content = createElement(
    'h1',
    {
      className: 'h1',
    },
    'News Portal'
  );

  const render = (): HTMLElement => {
    return createElement('header', {}, content);
  };

  return render();
};
