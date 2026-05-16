'use client';

interface Props {
  filters: {
    brand: string;
    rentalPrice: string;
    minMileage: string;
    maxMileage: string;
  };

  setFilters: React.Dispatch<
    React.SetStateAction<{
      brand: string;
      rentalPrice: string;
      minMileage: string;
      maxMileage: string;
    }>
  >;
}

export default function Filters({
  filters,
  setFilters,
}: Props) {
  return (
    <div
      style={{
        display: 'flex',
        gap: '16px',
        marginBottom: '40px',
        justifyContent: 'center',
      }}
    >
      <input
        placeholder="Brand"
        value={filters.brand}
        onChange={(e) =>
          setFilters((prev) => ({
            ...prev,
            brand: e.target.value,
          }))
        }
      />

      <input
        placeholder="Price"
        value={filters.rentalPrice}
        onChange={(e) =>
          setFilters((prev) => ({
            ...prev,
            rentalPrice: e.target.value,
          }))
        }
      />

      <input
        placeholder="From mileage"
        value={filters.minMileage}
        onChange={(e) =>
          setFilters((prev) => ({
            ...prev,
            minMileage: e.target.value,
          }))
        }
      />

      <input
        placeholder="To mileage"
        value={filters.maxMileage}
        onChange={(e) =>
          setFilters((prev) => ({
            ...prev,
            maxMileage: e.target.value,
          }))
        }
      />
    </div>
  );
}