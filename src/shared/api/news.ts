import { API_KEY_OPTIONS, API_URL } from '../config';

const BASE_URL = '/everything';

const getNewsList = async (sourceId: string): Promise<JSONValue> => {
  const res = await fetch(`${API_URL}${BASE_URL}?${API_KEY_OPTIONS}&sources=${sourceId}`, {});

  return await res.json();
};

export const news = {
  getNewsList,
};
