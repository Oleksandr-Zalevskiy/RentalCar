import axios from 'axios';

const api = axios.create({
  baseURL:
    'https://car-rental-api.goit.global',
});

interface FetchCarsParams {
  page: number;
  limit: number;

  brand?: string;
  rentalPrice?: string;

  minMileage?: string;
  maxMileage?: string;
}

export const fetchCars = async (
  params: FetchCarsParams
) => {
  const { data } = await api.get('/cars', {
    params,
  });

  return data;
};

export const fetchCarById = async (
  id: string
) => {
  const { data } = await api.get(
    `/cars/${id}`
  );

  return data;
};

export const fetchBrands = async () => {
  const { data } = await api.get('/brands');

  return data;
};