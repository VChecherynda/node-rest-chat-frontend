import React from 'react';

import styles from './styles.module.scss'

import useHooks from "./hooks"

interface MessageProps {
  id: number
  text: string
}

const Messages = () => {
  const { loading, messages } = useHooks();

  return (
    <div className={styles.Messages}>
      {loading ? 
        <p>Loading...</p>
        :
        messages.map((message: MessageProps) => {
          return <div key={message.id}>{message.text}</div>
        })
      }
    </div>
  );
}

export default Messages;