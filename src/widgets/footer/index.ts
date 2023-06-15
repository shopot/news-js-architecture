import './styles.css';

import { createElement } from '@/shared/lib';

export const footer = (): HTMLElement => {
  const link = createElement(
    'a',
    {
      href: 'https://newsapi.org',
    },
    'NewsAPI'
  );

  const render = (): HTMLElement => {
    return createElement(
      'footer',
      {},
      createElement(
        'p',
        {
          className: 'copyright',
        },
        link
      )
    );
  };

  return render();
};
