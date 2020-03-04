import React from 'react';
import { Link } from "react-router-dom";

import useHooks from './hooks';

import styles from './styles.module.scss';

const SignIn = () => {
  const {
    loading,
    error,
    email,
    password,
    useHandleName,
    useHandlePassword,
    useSubmit
  } = useHooks();

  return (
    <div className={styles.SignIn}>
      {error && <p className={styles.SignInError}>{error.message}</p>}

      <form onSubmit={useSubmit}>
        <input type="text" value={email} onChange={useHandleName} />
        <input type="password" value={password} onChange={useHandlePassword} />
        <button type="submit">Sign-in</button>
      </form>

      <Link to="/sign-up">Sign Up</Link>
    </div>
  )
};

export default SignIn;