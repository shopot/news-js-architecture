import './styles/main.css';

import { baseLayout } from './layouts';
import { homePage } from '@/pages/home';

export const app = (): HTMLElement => {
  // TODO: Implement routing here, subscribe render function to change route and a page content
  const page = homePage;

  const render = (): HTMLElement => {
    return baseLayout(page());
  };

  return render();
};
