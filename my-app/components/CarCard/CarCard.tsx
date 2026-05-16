import Image from 'next/image';
import Link from 'next/link';

import { Car } from '../../types/car';

import css from './CarCard.module.css';

interface Props {
  car: Car;
}

export default function CarCard({
  car,
}: Props) {
  const city =
    car.address.split(',')[1]?.trim() || '';

  const country =
    car.address.split(',')[2]?.trim() || '';

  return (
    <div className={css.card}>
      <div className={css.imageWrapper}>
        <Image
          src={car.img}
          alt={car.model}
          width={276}
          height={268}
          className={css.image}
        />
      </div>

      <div className={css.info}>
        <h3 className={css.title}>
          {car.brand}{' '}
          <span>{car.model}</span>, {car.year}
        </h3>

        <p className={css.price}>
          ${car.rentalPrice}
        </p>
      </div>

      <div className={css.meta}>
        <span>{city}</span>
        <span>|</span>

        <span>{country}</span>
        <span>|</span>

        <span>{car.rentalCompany}</span>
        <span>|</span>

        <span>{car.type}</span>
        <span>|</span>

        <span>
          {car.mileage.toLocaleString()} km
        </span>
      </div>

      <Link
        href={`/catalog/${car.id}`}
        target="_blank"
        className={css.button}
      >
        Read more
      </Link>
    </div>
  );
}