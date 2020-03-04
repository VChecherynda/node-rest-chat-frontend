import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getToken } from "store/modules/auth/selectors";

export default () => {
  const [isAuthorized, setIsAuthorized] = useState(false);

  const token = useSelector(getToken);

  useEffect(() => {
    setIsAuthorized(token);
  }, [token]);

  return {
    isAuthorized
  };
};
