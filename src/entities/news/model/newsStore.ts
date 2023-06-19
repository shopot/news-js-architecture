import Store from '@/shared/lib/store';
import { NewsState } from './types';

const initialState: NewsState = {
  totalResults: 0,
  articles: [],
};

export const newsStore = new Store<NewsState>(initialState);
