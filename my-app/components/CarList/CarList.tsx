import { Car } from '../../types/car';

import CarCard from '../CarCard/CarCard';

interface Props {
  cars: Car[];
}

export default function CarList({
  cars,
}: Props) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns:
          'repeat(4, 1fr)',
        gap: '24px',
        maxWidth: '1200px',
        margin: '0 auto',
      }}
    >
      {cars.map((car) => (
        <CarCard key={car.id} car={car} />
      ))}
    </div>
  );
}