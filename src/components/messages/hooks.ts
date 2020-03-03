import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";

import { 
  addMessage,
  editMessage,
  updateMessage,
  deleteMessage
} from "store/modules/messages/actions";

import { 
  getLoading,
  getMessagesList,
  getMessagesEntities
} from "store/modules/messages/selectors";

export default () => {
  // const [value, setValue] = useState('');

  const dispatch = useDispatch();

  const loading = useSelector(getLoading);

  const messages = useSelector(getMessagesList);

  const editableMessage = useSelector(getMessagesEntities);

  const value = editableMessage.text || '';

  const useAddMessage = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (editableMessage.id) {
      return dispatch(updateMessage({ messageId: editableMessage.id, text: editableMessage.text }));
    }

    dispatch(addMessage({ text: editableMessage.text }));
  }

  const useEditMessage = (event: React.FormEvent<HTMLButtonElement>) => {
    const { value } = (event.target as HTMLButtonElement)
    const editableMessage = messages.find((item: { id: string } ) => String(item.id) === String(value));

    dispatch(editMessage(editableMessage));
  }

  const useDeleteMessage = (event: React.MouseEvent<HTMLButtonElement>) => {
    const { value } = (event.target as HTMLButtonElement)
    dispatch(deleteMessage({ messageId: value }));
  };

  const useSetValue = (event: React.FormEvent<HTMLTextAreaElement>) => {
    const { value } = (event.target as HTMLTextAreaElement)

    const shalowCopy = { ...editableMessage };
    shalowCopy.text = value;
    dispatch(editMessage(shalowCopy));
  }

  return {
    loading,
    value,
    messages,
    useAddMessage,
    useEditMessage,
    useDeleteMessage,
    useSetValue
  };
};
