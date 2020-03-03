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
  const { 
    loading,
    messages,
    value,
    useSetValue,
    useAddMessage,
    useDeleteMessage
  } = useHooks();

  return (
    <div className={styles.Messages}>
      <div className={styles.Output}>
        {loading ? 
          <p>Loading...</p>
          :
          messages.map((message: MessageProps) => {
            return (
              <div key={message.id}>
                <p>{message.text}</p>
                <p>{message.createdAt}</p>

                {/* <p>{format(new Date(message.createdAt), 'dd-MM-yyyy hh:mm')}</p> */}

                <button value={message.id} onClick={useDeleteMessage} type="button">Delete</button>
              </div>)
          })
        }
      </div>

      <div className={styles.Add}>
        <form onSubmit={useAddMessage}>
          <textarea 
            value={value}
            name="message-add"
            cols={30}
            rows={10}
            onChange={useSetValue}
          />
          <button type="submit">Add</button>
        </form>
      </div>
    </div>
  );
}

export default Messages;