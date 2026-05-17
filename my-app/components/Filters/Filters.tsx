'use client';

import css from './Filters.module.css';

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

const brands = [
  'Aston Martin',
  'Audi',
  'BMW',
  'Bentley',
  'Buick',
  'Chevrolet',
  'Chrysler',
  'GMC',
  'HUMMER',
  'Hyundai',
  'Kia',
  'Lamborghini',
  'Land Rover',
  'Lincoln',
  'MINI',
  'Mercedes-Benz',
  'Mitsubishi',
  'Nissan',
  'Pontiac',
  'Subaru',
  'Volvo',
];
const prices = [
  '30',
  '40',
  '50',
  '60',
  '70',
  '80',
];

export default function Filters({
  filters,
  setFilters,
}: Props) {
  return (
    <div className={css.wrapper}>
      <div className={css.field}>
        <label className={css.label}>
          Car brand
        </label>

        <select
          className={css.select}
          value={filters.brand}
          onChange={(e) =>
            setFilters((prev) => ({
              ...prev,
              brand: e.target.value,
            }))
          }
        >
          <option value="">
            Choose a brand
          </option>

          {brands.map((brand) => (
            <option
              key={brand}
              value={brand}
            >
              {brand}
            </option>
          ))}
        </select>
      </div>

      <div className={css.field}>
        <label className={css.label}>
          Price / 1 hour
        </label>

        <select
          className={css.select}
          value={filters.rentalPrice}
          onChange={(e) =>
            setFilters((prev) => ({
              ...prev,
              rentalPrice: e.target.value,
            }))
          }
        >
          <option value="">
            Choose a price
          </option>

          {prices.map((price) => (
            <option
              key={price}
              value={price}
            >
              {price}
            </option>
          ))}
        </select>
      </div>

      <div className={css.field}>
        <label className={css.label}>
          Car mileage / km
        </label>

        <div className={css.mileageBox}>
          <input
            type="number"
            placeholder="From"
            className={`${css.mileageInput} ${css.left}`}
            value={filters.minMileage}
            onChange={(e) =>
              setFilters((prev) => ({
                ...prev,
                minMileage: e.target.value,
              }))
            }
          />

          <input
            type="number"
            placeholder="To"
            className={`${css.mileageInput} ${css.right}`}
            value={filters.maxMileage}
            onChange={(e) =>
              setFilters((prev) => ({
                ...prev,
                maxMileage: e.target.value,
              }))
            }
          />
        </div>
      </div>

      <button className={css.button}>
        Search
      </button>
    </div>
  );
}