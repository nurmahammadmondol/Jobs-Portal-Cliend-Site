import { useContext } from 'react';
import { AuthContext } from './AuthProvider';

const useAuth = () => {
  const ProvidJobs = useContext(AuthContext);
  return ProvidJobs;
};

export default useAuth;
