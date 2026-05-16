'use client';

import { useState } from 'react';

import { useCars } from '../../hooks/useCars';

import CarList from '../../components/CarList/CarList';
import Filters from '../../components/Filters/Filters';

export default function CatalogPage() {
  const [filters, setFilters] = useState({
    brand: '',
    rentalPrice: '',
    minMileage: '',
    maxMileage: '',
  });

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
  } = useCars(filters);

  const cars =
    data?.pages.flatMap((page) => page.cars) || [];

  return (
    <main>
      <Filters
        filters={filters}
        setFilters={setFilters}
      />

      <CarList cars={cars} />

      {hasNextPage && (
        <button onClick={() => fetchNextPage()}>
          {isFetchingNextPage
            ? 'Loading...'
            : 'Load More'}
        </button>
      )}

      {isLoading && <p>Loading...</p>}
    </main>
  );
}