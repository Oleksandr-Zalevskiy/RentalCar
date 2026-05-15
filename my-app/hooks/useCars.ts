'use client';

import { useInfiniteQuery } from '@tanstack/react-query';
import { fetchCars } from '@/lib/api/cars';

interface Filters {
  brand: string;
  rentalPrice: string;
  minMileage: string;
  maxMileage: string;
}

export const useCars = (filters: Filters) => {
  return useInfiniteQuery({
    queryKey: ['cars', filters],

    queryFn: ({ pageParam }) =>
      fetchCars({
        pageParam,
        ...filters,
      }),

    initialPageParam: 1,

    getNextPageParam: (lastPage, allPages) => {
      const totalPages = Math.ceil(lastPage.totalCars / 12);

      return allPages.length < totalPages
        ? allPages.length + 1
        : undefined;
    },
  });
};