import { Route, Routes } from 'react-router-dom';
import { DashboardRoute } from './private/DashboardRoute';
import { PrivateRoute } from './private/PrivateRoute';
import { PublicRoute } from './public/PublicRoute';

// import Login from '../pages/Login-uif';
import { Acceso } from '../pages/Acceso';

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route
          path="login/*"
          element={
            <PublicRoute>
              <Routes>
                <Route
                  path="login"
                  element={<Acceso />}
                />
              </Routes>
            </PublicRoute>
          }
        />

        <Route
          path="/*"
          element={
            <PrivateRoute>
              <DashboardRoute />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
};
