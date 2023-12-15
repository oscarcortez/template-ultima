import Login from '../pages/Login-uif';
import Error from '../pages/Error';
import NotFound from '../pages/NotFound';
import Access from '../pages/Access';
import Landing from '../pages/Landing';
import App from '../App';

const ListRoutes = [
  {
    path: '*',
    element: <App />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/error',
    element: <Error />
  },
  {
    path: '/not-found',
    element: <NotFound />
  },
  {
    path: '/access',
    element: <Access />
  },
  {
    path: '/landing',
    element: <Landing />
  }
];

export default ListRoutes;
