import { useState } from 'react';
import { useSelector } from "react-redux";

import { getLoading, getMessagesList } from "store/modules/messages/selectors";

export default () => {
  const [value, setValue] = useState('');

  const loading = useSelector(getLoading);

  const messages = useSelector(getMessagesList);

  const useAddMessage = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('[submit]', value);
    setValue('');
  }

  const useSetValue = (event: React.FormEvent<HTMLTextAreaElement>) => {
    const { value } = (event.target as HTMLTextAreaElement)
    setValue(value);
  }

  return {
    loading,
    messages,
    value,
    useAddMessage,
    useSetValue
  };
};
