import { Loader } from 'components/Loader/Loader';
import { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';
import css from './Layout.module.css'


export const Layout = () => {
  return (
    <>
      <div className={css.Container}>
      <div className={css.Header}>
      <nav>
        <Link className={css.Link} to="/" end>
          Home
        </Link>
        <Link className={css.Link} to="/movies">Movies</Link>
      </nav>
      </div>

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      </div>
    </>
  );
};
