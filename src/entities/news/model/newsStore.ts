import { API } from '@/shared/api';
import Store from '@/shared/lib/store';
import { NewsDto, NewsState } from './types';
import fakeData from './fake-data.json';

class SourceStore extends Store<NewsState> {
  constructor(initialState: NewsState) {
    super(initialState);
  }
  async load(sourceId: string) {
    if (import.meta.env.PROD === false) {
      this.setState({
        totalResults: fakeData.totalResults,
        articles: fakeData.articles,
      });

      return;
    }

    const res = (await API.news.getNewsList(sourceId)) as NewsDto;

    if (res.status && res.status === 'ok') {
      this.setState({
        totalResults: res.totalResults,
        articles: res.articles,
      });
    }
  }
}

const initialState: NewsState = {
  totalResults: 0,
  articles: [],
};

export const newsStore = new SourceStore(initialState);
