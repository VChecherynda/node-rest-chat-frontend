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
      <button
        type="button"
        className={styles.AddUserBtn}
        onClick={useOpenUsersModal}
      >
        Add user to conversation + 
      </button>

      {loading ? 
        <p>Loading...</p>
        :
        <div className={styles.Conversations}>
          <h4>Converstions:</h4>
          <ul>
            {conversations.map((conversation: UserProps) => (
              <li key={conversation.id}>
                <button 
                  type="button"
                  value={conversation.id}
                  className={styles.ConversationBtn}
                  onClick={useGetConversation}
                >
                  Conversation id {conversation.id}
                </button>
              </li>))
            }
          </ul>
        </div>
      }
       <button
        type="button"
        className={styles.LogoutBtn} 
        onClick={useLogout}
      >
        Logout
      </button>
    </div>
  );
}

export default Drawer;