import React from 'react';
import { format } from 'date-fns'

import styles from './styles.module.scss'

import useHooks from "./hooks"

interface MessageProps {
  id: number
  userId: number
  text: string
  createdAt: string
}

const Messages = () => {
  const { 
    loading,
    isConversationSelect,
    userId,
    value,
    messages,
    useSetValue,
    useSendMessage,
    useEditMessage,
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
              <div className={String(userId) === String(message.userId) ? styles.Batman : styles.Robin} key={message.id}>
                <p className={styles.Text}>{message.text}</p>
                <p className={styles.Date}>{format(new Date(message.createdAt), 'dd-MM-yyyy hh:mm')}</p>

                {
                  String(userId) === String(message.userId) && 
                  <>
                    <button value={message.id} onClick={useEditMessage} type="button">Edit</button>
                    <button value={message.id} onClick={useDeleteMessage} type="button">Delete</button>
                  </>
                }
               
              </div>)
          })
        }
      </div>

      {isConversationSelect && (
        <div className={styles.Send}>
          <form className={styles.SendForm} onSubmit={useSendMessage}>
            <textarea 
              value={value}
              name="message-send"
              cols={100}
              rows={5}
              onChange={useSetValue}
            />
            <button className={styles.SendButton} type="submit">Send</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Messages;