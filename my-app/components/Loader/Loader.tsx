import css from './Loader.module.css';

export default function Loader() {
  return (
    <div className={css.overlay}>
      <div className={css.road}>
        <div className={css.car}>
          🚗
        </div>
      </div>

      <p className={css.text}>Loading cars...</p>
    </div>
  );
}