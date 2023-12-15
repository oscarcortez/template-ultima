import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';
import ListRoutes from './ListRoutes';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {ListRoutes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={route.element}
            />
          ))}
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};
