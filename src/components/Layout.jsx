import { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Loader } from './Loader';

export const Layout = () => {
  return (
    <>
      <nav>
        <Link to="/" end>
          Home
        </Link>
        <Link to="/movies">Movies</Link>
      </nav>

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};
