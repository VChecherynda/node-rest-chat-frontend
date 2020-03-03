import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";

import { addMessage, deleteMessage } from "store/modules/messages/actions";
import { getLoading, getMessagesList } from "store/modules/messages/selectors";

export default () => {
  const [value, setValue] = useState('');

  const dispatch = useDispatch();

  const loading = useSelector(getLoading);

  const messages = useSelector(getMessagesList);

  const useAddMessage = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(addMessage({ text: value }));
    setValue('');
  }

  const useDeleteMessage = (event: React.MouseEvent<HTMLButtonElement>) => {
    const { value } = (event.target as HTMLButtonElement)
    dispatch(deleteMessage({ messageId: value }));
  };

  const useSetValue = (event: React.FormEvent<HTMLTextAreaElement>) => {
    const { value } = (event.target as HTMLTextAreaElement)
    setValue(value);
  }

  return {
    loading,
    messages,
    value,
    useAddMessage,
    useDeleteMessage,
    useSetValue
  };
};
