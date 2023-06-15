export const API_URL = import.meta.env.PROD
  ? 'https://newsapi.org/v2'
  : 'https://rss-news-api.onrender.com/';

export const API_KEY_OPTIONS = `apiKey=${import.meta.env.VITE_API_KEY}`;
