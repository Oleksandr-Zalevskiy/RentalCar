import Image from 'next/image';

import RentalForm from '../../../components/RentalForm/RentalForm';

import {
  fetchCarById,
} from '../../../lib/api/cars';

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
        padding: '60px 20px',
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns:
            '1fr 1fr',
          gap: '72px',
          alignItems: 'start',
        }}
      >
        <div>
          <Image
            src={car.img}
            alt={car.brand}
            width={640}
            height={512}
            style={{
              width: '100%',
              borderRadius: '20px',
              marginBottom: '40px',
              objectFit: 'cover',
            }}
          />

          <RentalForm />
        </div>

        <div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '8px',
              flexWrap: 'wrap',
            }}
          >
            <h1
              style={{
                fontSize: '32px',
                fontWeight: 700,
                color: '#101828',
                margin: 0,
              }}
            >
              {car.brand} {car.model},{' '}
              {car.year}
            </h1>

            <span
              style={{
                color: '#8D929A',
                fontSize: '16px',
                fontWeight: 500,
              }}
            >
              Id: {car.id}
            </span>
          </div>

          <p
            style={{
              color: '#101828',
              fontSize: '16px',
              marginBottom: '16px',
            }}
          >
            📍 {car.address} |
            Mileage:{' '}
            {car.mileage.toLocaleString(
              'uk-UA'
            )}{' '}
            km
          </p>

          <p
            style={{
              color: '#3470FF',
              fontSize: '28px',
              fontWeight: 700,
              marginBottom: '32px',
            }}
          >
            ${car.rentalPrice}
          </p>

          <p
            style={{
              fontSize: '16px',
              lineHeight: 1.6,
              color: '#101828',
              marginBottom: '68px',
            }}
          >
            {car.description}
          </p>

          <div
            style={{
              marginBottom: '68px',
            }}
          >
            <h2
              style={{
                fontSize: '24px',
                fontWeight: 600,
                marginBottom: '20px',
              }}
            >
              Rental Conditions:
            </h2>

            <ul
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                padding: 0,
                listStyle: 'none',
              }}
            >
              {car.rentalConditions.map(
                (
                  condition: string
                ) => (
                  <li key={condition}>
                    ✔ {condition}
                  </li>
                )
              )}
            </ul>
          </div>

          <div
            style={{
              marginBottom: '68px',
            }}
          >
            <h2
              style={{
                fontSize: '24px',
                fontWeight: 600,
                marginBottom: '20px',
              }}
            >
              Car Specifications:
            </h2>

            <ul
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                padding: 0,
                listStyle: 'none',
              }}
            >
              <li>
                📅 Year: {car.year}
              </li>

              <li>
                🚘 Type: {car.type}
              </li>

              <li>
                ⛽ Fuel Consumption:{' '}
                {car.fuelConsumption}
              </li>

              <li>
                ⚙ Engine Size:{' '}
                {car.engineSize}
              </li>
            </ul>
          </div>

          <div>
            <h2
              style={{
                fontSize: '24px',
                fontWeight: 600,
                marginBottom: '20px',
              }}
            >
              Accessories and
              functionalities:
            </h2>

            <ul
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                padding: 0,
                listStyle: 'none',
              }}
            >
              {[
                ...car.accessories,
                ...car.functionalities,
              ].map(
                (item: string) => (
                  <li key={item}>
                    ✔ {item}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}