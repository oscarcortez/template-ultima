import { AppRouter } from './router/AppRouter';
import { AuthProvider } from './contexts/AuthProvider';
const OpenSourceApp = () => {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  );
};

export default OpenSourceApp;
