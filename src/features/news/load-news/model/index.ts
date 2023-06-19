import { NewsDto, newsStore } from '@/entities/news';
import { API } from '@/shared/api';
import { USE_FAKE_DATA } from '@/shared/config';

import fakeData from './fake-data.json';

export const loadNews = async (sourceId: string) => {
  // Example with a fake data
  if (USE_FAKE_DATA === true) {
    newsStore.setState({
      totalResults: fakeData.totalResults,
      articles: fakeData.articles,
    });

    return;
  }

  const res = (await API.news.getNewsList(sourceId)) as NewsDto;

  if (res.status && res.status === 'ok') {
    newsStore.setState({
      totalResults: res.totalResults,
      articles: res.articles,
    });
  }
};
