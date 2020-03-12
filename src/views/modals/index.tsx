import React, { useContext } from 'react';

import Modal, { Context } from 'components/modal';

import useHooks from './hooks'

interface UserProps {
  id: string,
  name: string
  email: string
}

export default () => {
  const { handleClose } = useContext(Context);

  const { loading, status, filteredUsers, useCreateConversation} = useHooks();
  
  if (status === 'createConversation') {
    return (
      <Modal>
        <button type="button" onClick={handleClose}>Close</button>
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

