import { useDispatch, useSelector } from "react-redux";

import { getLoading, getConversations } from "store/modules/conversations/selectors";

import { setModalStatus } from "store/modules/modals/actions";

export default () => {
  const dispatch = useDispatch();

  const loading = useSelector(getLoading);

  const conversations = useSelector(getConversations);

  const useOpenUsersModal = () => {
    dispatch(setModalStatus("createConversation"));
  };

  return {
    loading,
    conversations,
    useOpenUsersModal
  };
};
