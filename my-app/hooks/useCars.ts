'use client';

import { useInfiniteQuery } from '@tanstack/react-query';

import { fetchCars } from '../lib/api/cars';

interface Filters {
  brand: string;
  rentalPrice: string;
  minMileage: string;
  maxMileage: string;
}

export const useCars = (
  filters: Filters
) => {
  return useInfiniteQuery({
    queryKey: ['cars', filters],

    queryFn: ({ pageParam = 1 }) =>
      fetchCars({
        page: pageParam,
        limit: 8,

        brand: filters.brand || undefined,

        rentalPrice:
          filters.rentalPrice || undefined,

        minMileage:
          filters.minMileage || undefined,

        maxMileage:
          filters.maxMileage || undefined,
      }),

    initialPageParam: 1,

    getNextPageParam: (
      lastPage,
      allPages
    ) => {
      const nextPage = allPages.length + 1;

      return nextPage <= lastPage.totalPages
        ? nextPage
        : undefined;
    },
  });
};