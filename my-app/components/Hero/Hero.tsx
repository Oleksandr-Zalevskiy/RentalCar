import Link from 'next/link';
import css from './Hero.module.css';

export default function Hero() {
  return (
    <section className={css.hero}>
      <div className={css.overlay}>
        <div className={css.content}>
          <h1>Find your perfect rental car</h1>

          <p>
            Reliable and budget-friendly rentals for any journey
          </p>

          <Link href="/catalog" className={css.button}>
            View Catalog
          </Link>
        </div>
      </div>
    </section>
  );
}