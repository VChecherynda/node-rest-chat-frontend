import React from 'react';

import Modal from 'components/modal';

import useHooks from './hooks'

interface UserProps {
  id: string,
  name: string
  email: string
}

export default () => {
  const { loading, status, filteredUsers, useCreateConversation} = useHooks();
  
  if (status === 'createConversation') {
    return (
      <Modal reject={() => {}} accept={() => {}}>
          {
            loading ? 
            <p>Loading...</p>
            :
            <ul>
              {filteredUsers.map((user: UserProps, index: number) =>
                <li key={`${index}-${user.name}`}>
                  <button 
                    value={user.id}
                    onClick={useCreateConversation}
                  >
                    {user.name}
                  </button>
                </li>
              )}
            </ul>
          }
      </Modal>
    );
  }

  return null;
}

