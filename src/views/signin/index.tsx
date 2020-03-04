import React from 'react';

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
      {error && <p className={styles.SignInError}>{error}</p>}

      <form onSubmit={useSubmit}>
        <input type="text" value={email} onChange={useHandleName} />
        <input type="password" value={password} onChange={useHandlePassword} />
        <button type="submit">Sign-in</button>
      </form>
    </div>
  )
};

export default SignIn;