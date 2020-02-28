import React from 'react';

import Drawer from 'components/drawer';
import Messages from 'components/messages';

import styles from './styles.module.scss';

const Main = () => {
  return (
    <div className={styles.Container}>
      <Drawer />
      <Messages  />
    </div>
  );
}

export default Main;