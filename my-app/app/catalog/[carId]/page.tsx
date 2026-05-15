import { fetchCarById } from '@/lib/api/cars';

interface Props {
  params: Promise<{
    carId: string;
  }>;
}

export default async function CarDetailsPage({
  params,
}: Props) {
  const { carId } = await params;

  const car = await fetchCarById(carId);

  return (
    <main>
      <img src={car.img} alt={car.model} />

      <h1>
        {car.brand} {car.model}
      </h1>

      <p>{car.description}</p>
    </main>
  );
}