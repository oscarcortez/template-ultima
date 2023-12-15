import { Route, Routes } from 'react-router-dom';
// import navbar here
import Help from '../../pages/Help';
import NotFound from '../../pages/NotFound';

export const DashboardRoute = () => {
  return (
    <>
      <Routes>
        <Route
          path="not-found"
          element={<NotFound />}
        />
        <Route
          path="help"
          element={<Help />}
        />
        {/* aqui entra un comodin que ira para el dashboard Navigate*/}
      </Routes>
    </>
  );
};
