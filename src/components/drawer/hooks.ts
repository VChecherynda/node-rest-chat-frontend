import { useDispatch, useSelector } from "react-redux";

import { fetchMessages } from "store/modules/messages/actions";

import { updateConversation } from "store/modules/conversations/actions";

import { getLoading, getConversationsList } from "store/modules/conversations/selectors";

import { setModalStatus } from "store/modules/modals/actions";

export default () => {
  const dispatch = useDispatch();

  const loading = useSelector(getLoading);

  const conversations = useSelector(getConversationsList);

  const useOpenUsersModal = () => {
    dispatch(setModalStatus("createConversation"));
  };

  const useGetConversation = (event: React.MouseEvent<HTMLButtonElement>) => {
    const { value } = (event.target as HTMLButtonElement)
    const currentConvesation = conversations.find(
      (item: { id: string }) => String(item.id) === String(value)
    );
    
    dispatch(updateConversation(currentConvesation));
    dispatch(fetchMessages(value));
  };

  return {
    loading,
    conversations,
    useOpenUsersModal,
    useGetConversation
  };
};
