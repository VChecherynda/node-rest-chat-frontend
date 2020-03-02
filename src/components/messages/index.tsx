import React from 'react';
import { format } from 'date-fns'

import styles from './styles.module.scss'

import useHooks from "./hooks"

interface MessageProps {
  id: number
  text: string
  createdAt: string
}

const Messages = () => {
  const { loading, messages } = useHooks();

  return (
    <div className={styles.Messages}>
      {loading ? 
        <p>Loading...</p>
        :
        messages.map((message: MessageProps) => {
          return (
            <div key={message.id}>
              <p>{message.text}</p>
              <p>{format(new Date(message.createdAt), 'dd-MM-yyyy')}</p>
            </div>)
        })
      }
    </div>
  );
}

export default Messages;