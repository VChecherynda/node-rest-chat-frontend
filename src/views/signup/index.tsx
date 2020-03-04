import React from "react";
import { Link } from "react-router-dom";

import useHooks from './hooks';

import styles from './styles.module.scss';

const SignUp = () => {
  const {
    loading,
    error,
    name,
    email,
    password,
    useHandleName,
    useHandleEmail,
    useHandlePassword,
    useSubmit
  } = useHooks();


  return (
    <div className={styles.SignUp}>
      {error && <p className={styles.SignUpError}>{error}</p>}

      <form onSubmit={useSubmit}>
        <input type="text" value={name} onChange={useHandleName} />
        <input type="text" value={email} onChange={useHandleEmail} />
        <input type="password" value={password} onChange={useHandlePassword} />
        <button type="submit">Sign-up</button>
      </form>

      <Link to="/sign-in">Sign In</Link>
    </div>
  )
};

export default SignUp;
