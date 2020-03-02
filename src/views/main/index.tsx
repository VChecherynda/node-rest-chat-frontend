import React from 'react';

import Drawer from 'components/drawer';
import Messages from 'components/messages';

import styles from './styles.module.scss';

import useHooks from './hooks';

const Main = () => {
  const {} = useHooks();

  return (
    <div className={styles.Container}>
      <Drawer />
      <Messages  />
    </div>
  );
}

export default Main;