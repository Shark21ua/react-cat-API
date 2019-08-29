import { useState, useEffect } from 'react';

const useAuthChecker = (isLogged, checkAuthentication, authFetching) => {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    if (!isLogged) checkAuthentication();
    setIsChecked(true);
  }, [isLogged, checkAuthentication]);

  return (!isLogged && !authFetching && isChecked);
};

export default useAuthChecker;
