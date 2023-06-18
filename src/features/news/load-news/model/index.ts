import { NewsDto, newsStore } from '@/entities/news';
import { API } from '@/shared/api';

export const loadNews = async (sourceId: string) => {
  const res = (await API.news.getNewsList(sourceId)) as NewsDto;

  if (res.status && res.status === 'ok') {
    newsStore.setState({
      totalResults: res.totalResults,
      articles: res.articles,
    });
  }
};
