'use client';

import { useState } from 'react';
import { useCars } from '@/hooks/useCars';

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
  } = useCars(filters);

  const cars = data?.pages.flatMap(page => page.cars) || [];

  return (
    <main>
      <h1>Catalog</h1>

      {cars.map(car => (
        <div key={car.id}>{car.brand}</div>
      ))}

      {hasNextPage && (
        <button onClick={() => fetchNextPage()}>
          {isFetchingNextPage ? 'Loading...' : 'Load More'}
        </button>
      )}
    </main>
  );
}