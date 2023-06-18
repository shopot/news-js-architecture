import Store from '@/shared/lib/store';
import { NewsState } from './types';

class SourceStore extends Store<NewsState> {
  constructor(initialState: NewsState) {
    super(initialState);
  }
}

const initialState: NewsState = {
  totalResults: 0,
  articles: [],
};

export const newsStore = new SourceStore(initialState);
