import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";

import { signIn } from "store/modules/auth/actions";
import { getLoading, getError } from "store/modules/auth/selectors";

export default () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] =  useState('');

  const dispatch = useDispatch();

  const loading = useSelector(getLoading);

  const error = useSelector(getError);

  const useHandleName = (event: React.FormEvent<HTMLInputElement>) => {
    const { value } = (event.target as HTMLInputElement);
    setEmail(value);
  };

  const useHandlePassword = (event: React.FormEvent<HTMLInputElement>) => {
    const { value } = (event.target as HTMLInputElement);
    setPassword(value);
  };

  const useSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    dispatch(signIn({ email, password }))
  }

  return {
    loading,
    error,
    email,
    password,
    useHandleName,
    useHandlePassword,
    useSubmit
  };
};
