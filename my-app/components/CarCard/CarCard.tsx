import Link from 'next/link';
import { Car } from '@/types/car';

interface Props {
  car: Car;
}

export default function CarCard({ car }: Props) {
  return (
    <article>
      <img src={car.img} alt={car.model} />

      <h2>
        {car.brand} {car.model}
      </h2>

      <p>{car.rentalPrice}</p>

      <Link
        href={`/catalog/${car.id}`}
        target="_blank"
      >
        Read more
      </Link>
    </article>
  );
}