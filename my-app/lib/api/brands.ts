import { api } from './axios';

export const fetchBrands = async (): Promise<string[]> => {
  const { data } = await api.get('/brands');

  return data;
};