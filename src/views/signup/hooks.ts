import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";

import { signUp, clearErrors } from "store/modules/auth/actions";
import { getLoading, getError } from "store/modules/auth/selectors";

export default () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] =  useState('');

  const dispatch = useDispatch();

  const loading = useSelector(getLoading);

  const error = useSelector(getError);

  const useHandleName = (event: React.FormEvent<HTMLInputElement>) => {
    const { value } = (event.target as HTMLInputElement);
    setName(value);
  };

  const useHandleEmail = (event: React.FormEvent<HTMLInputElement>) => {
    const { value } = (event.target as HTMLInputElement);
    setEmail(value);
  };

  const useHandlePassword = (event: React.FormEvent<HTMLInputElement>) => {
    const { value } = (event.target as HTMLInputElement);
    setPassword(value);
  };

  const useSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(signUp({ name, email, password }))
  }

  useEffect(() => {
    return () => { dispatch(clearErrors()) }
  }, [])

  return {
    loading,
    error,
    name,
    email,
    password,
    useHandleName,
    useHandleEmail,
    useHandlePassword,
    useSubmit
  };
};
