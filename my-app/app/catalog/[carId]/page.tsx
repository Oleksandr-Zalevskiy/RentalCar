import Image from 'next/image';

import { fetchCarById } from '../../../lib/api/cars';

import RentalForm from '../../../components/RentalForm/RentalForm';

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
    <main
      style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '40px 20px',

        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '72px',
      }}
    >
      <div>
        <Image
          src={car.img}
          alt={car.model}
          width={640}
          height={512}
          style={{
            width: '100%',
            borderRadius: '20px',
            objectFit: 'cover',
            marginBottom: '40px',
          }}
        />

        <RentalForm />
      </div>

      <div>
        <h1
          style={{
            fontSize: '32px',
            fontWeight: 700,
            marginBottom: '16px',
          }}
        >
          {car.brand} {car.model},{' '}
          {car.year}
        </h1>

        <p
          style={{
            color: '#3470FF',
            fontSize: '24px',
            fontWeight: 700,
            marginBottom: '24px',
          }}
        >
          ${car.rentalPrice}
        </p>

        <p
          style={{
            marginBottom: '40px',
            lineHeight: 1.5,
            color: '#121417',
          }}
        >
          {car.description}
        </p>

        <div
          style={{
            marginBottom: '40px',
          }}
        >
          <h2
            style={{
              fontSize: '20px',
              marginBottom: '20px',
            }}
          >
            Rental Conditions:
          </h2>

          <ul
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
            }}
          >
            {car.rentalConditions.map(
              (
                condition: string,
                index: number
              ) => (
                <li key={index}>
                  • {condition}
                </li>
              )
            )}
          </ul>
        </div>

        <div
          style={{
            marginBottom: '40px',
          }}
        >
          <h2
            style={{
              fontSize: '20px',
              marginBottom: '20px',
            }}
          >
            Car Specifications:
          </h2>

          <ul
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
            }}
          >
            <li>
              Year: {car.year}
            </li>

            <li>
              Type: {car.type}
            </li>

            <li>
              Fuel Consumption:{' '}
              {car.fuelConsumption}
            </li>

            <li>
              Engine Size:{' '}
              {car.engineSize}
            </li>

            <li>
              Mileage: {car.mileage} km
            </li>
          </ul>
        </div>

        <div>
          <h2
            style={{
              fontSize: '20px',
              marginBottom: '20px',
            }}
          >
            Accessories and functionalities:
          </h2>

          <ul
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
            }}
          >
            {[
              ...car.accessories,
              ...car.functionalities,
            ].map(
              (
                item: string,
                index: number
              ) => (
                <li key={index}>
                  • {item}
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </main>
  );
}