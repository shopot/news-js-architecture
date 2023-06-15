import './styles/main.css';

import { baseLayout } from './layouts';
import { homePage } from '@/pages/home';
import { sourceStore } from '@/entities/source';

export const app = (): HTMLElement => {
  // Load sources
  void sourceStore.load();

  // TODO: Implement routing here, subscribe render function to change route and a page content
  const page = homePage;

  const render = (): HTMLElement => {
    return baseLayout(page());
  };

  return render();
};
