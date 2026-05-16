import Link from 'next/link';
import css from './Header.module.css';

export default function Header() {
  return (
    <header className={css.header}>
      <div className={css.container}>
        <Link href="/" className={css.logo}>
          Rental<span>Car</span>
        </Link>

        <nav className={css.nav}>
          <Link href="/" className={css.active}>
            Home
          </Link>

          <Link href="/catalog">
            Catalog
          </Link>
        </nav>
      </div>
    </header>
  );
}