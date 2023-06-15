import { API_KEY_OPTIONS, API_URL } from '@/shared/config';

const BASE_URL = '/top-headlines/sources';

const getSourcesList = async (): Promise<JSONValue> => {
  const res = await fetch(`${API_URL}${BASE_URL}?${API_KEY_OPTIONS}`, {});

  return await res.json();
};

export const sources = {
  getSourcesList,
};
