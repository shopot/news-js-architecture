import './styles.css';

import { createElement } from '@/shared/lib';

export const sourcesItem = ({ id, name }: sourcesItemProps): HTMLElement => {
  return createElement(
    'div',
    {
      id: id,
      className: 'source__item',
    },
    createElement(
      'span',
      {
        className: 'source__item-name',
      },
      name
    )
  );
};

interface sourcesItemProps {
  id: string;
  name: string;
}
