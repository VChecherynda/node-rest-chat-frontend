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
  const { 
    loading,
    conversations,
    useOpenUsersModal,
    useGetConversation,
    useLogout
  } = useHooks();

  return (
    <div className={styles.Drawer}>
      <button onClick={useOpenUsersModal} type="button">Add user to conversation + </button>

      {loading ? 
        <p>Loading...</p>
        :
        <div>
          <h4>Converstions:</h4>
          <ul>
            {conversations.map((conversation: UserProps) => (
              <li key={conversation.id}>
                <button 
                  type="button"
                  value={conversation.id}
                  onClick={useGetConversation}
                >
                  {conversation.id}
                </button>
              </li>))
            }
          </ul>
        </div>
      }
       <button type="button" onClick={useLogout}>Logout</button>
    </div>
  );
}

export default Drawer;