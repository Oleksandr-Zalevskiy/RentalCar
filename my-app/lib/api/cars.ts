import { api } from './axios';
import { CarsResponse, Car } from '@/types/car';

interface FetchCarsParams {
  pageParam?: number;
  brand?: string;
  rentalPrice?: string;
  minMileage?: string;
  maxMileage?: string;
}

export const fetchCars = async ({
  pageParam = 1,
  brand,
  rentalPrice,
  minMileage,
  maxMileage,
}: FetchCarsParams): Promise<CarsResponse> => {
  const { data } = await api.get('/cars', {
    params: {
      page: pageParam,
      limit: 12,
      brand,
      rentalPrice,
      minMileage,
      maxMileage,
    },
  });

  return data;
};

export const fetchCarById = async (
  id: string
): Promise<Car> => {
  const { data } = await api.get(`/cars/${id}`);

  return data;
};