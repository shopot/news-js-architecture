export const API_URL = import.meta.env.PROD
  ? import.meta.env.VITE_API_PROXY_URL
  : 'https://newsapi.org/v2';

export const API_KEY_OPTIONS = `apiKey=${import.meta.env.VITE_API_KEY}`;
