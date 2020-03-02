import React from 'react';

import Modal from 'components/modal';

import useHooks from './hooks'

interface UserProps {
  name: string
  email: string
}

export default () => {
  const { loading, status, users, useClearUsers} = useHooks();

  if (status === 'createConversation') {
    return (
      <Modal reject={useClearUsers} accept={() => {}}>
          {
            loading ? 
            <p>Loading...</p>
            :
            <ul>
              {users.map((user: UserProps, index: number) =>
                <li key={`${index}-${user.name}`}>{user.name}</li>
              )}
            </ul>
          }
      </Modal>
    );
  }

  return null;
}

