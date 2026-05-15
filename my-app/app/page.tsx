import Link from 'next/link';

export default function HomePage() {
  return (
    <main>
      <section>
        <h1>Find your perfect rental car</h1>

        <Link href="/catalog">
          View Catalog
        </Link>
      </section>
    </main>
  );
}