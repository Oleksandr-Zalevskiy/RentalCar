'use client';

import { useState } from 'react';

import { useCars } from '../../hooks/useCars';

import CarList from '../../components/CarList/CarList';
import Filters from '../../components/Filters/Filters';
import Loader from '../../components/Loader/Loader';

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
    isError,
  } = useCars(filters);

  const cars =
    data?.pages.flatMap((page) => page.cars) || [];

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return (
      <p
        style={{
          textAlign: 'center',
          marginTop: '40px',
          color: 'red',
          fontSize: '20px',
          fontWeight: 600,
        }}
      >
        Failed to load cars
      </p>
    );
  }

  return (
    <main
      style={{
        paddingTop: '40px',
        paddingBottom: '80px',
      }}
    >
      <Filters
        filters={filters}
        setFilters={setFilters}
      />

      <CarList cars={cars} />

      {hasNextPage && (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '80px',
          }}
        >
          <button
            onClick={() => fetchNextPage()}
            style={{
              width: '156px',
              height: '44px',
              borderRadius: '12px',
              border: 'none',
              backgroundColor: '#3470FF',
              color: '#FFFFFF',
              fontSize: '16px',
              fontWeight: 600,
              cursor: 'pointer',
            }}
          >
            {isFetchingNextPage
              ? 'Loading...'
              : 'Load More'}
          </button>
        </div>
      )}
    </main>
  );
}