import { newsStore } from '@/entities/news';

export const loadNews = (sourceId: string) => {
  void newsStore.load(sourceId);
};
