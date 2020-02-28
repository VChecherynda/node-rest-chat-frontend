import React from 'react';

import styles from './styles.module.scss';

import useHooks from './hooks';

interface DrawerProps {
}

interface UserProps {
  id: number
  name: string
  email: string
}

const Drawer = (props: DrawerProps) => {
  const { users } = useHooks();

  return (
    <div className={styles.Drawer}>
      <ul>{users.map((user: UserProps) => <li key={user.id}>{user.name}</li>)}</ul>
    </div>
  );
}

export default Drawer;