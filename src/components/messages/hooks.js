import { useSelector } from "react-redux";

import { getLoading, getMessagesList } from "store/modules/messages/selectors";

export default () => {
  const loading = useSelector(getLoading);

  const messages = useSelector(getMessagesList);

  return {
    loading,
    messages
  };
};
