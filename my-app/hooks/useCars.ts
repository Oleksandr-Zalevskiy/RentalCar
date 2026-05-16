'use client';

import { useInfiniteQuery } from '@tanstack/react-query';
import { fetchCars } from '../lib/api/cars';

interface Filters {
  brand: string;
  rentalPrice: string;
  minMileage: string;
  maxMileage: string;
}

export const useCars = (filters: Filters) => {
  return useInfiniteQuery({
    queryKey: ['cars', filters],

    queryFn: ({ pageParam = 1 }) =>
      fetchCars({
        pageParam,
        ...filters,
      }),

    initialPageParam: 1,

    getNextPageParam: (lastPage) => {
      return lastPage.page < lastPage.totalPages
        ? lastPage.page + 1
        : undefined;
    },
  });
};