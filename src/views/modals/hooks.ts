import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getUserId } from "store/modules/auth/selectors";

import { fetchUsers, clearUsers } from "store/modules/users/actions";
import { getLoading, getUsers } from "store/modules/users/selectors";

import { createConversation } from "store/modules/conversations/actions";
import { getConversationsList } from "store/modules/conversations/selectors";

import { closeModal } from "store/modules/modals/actions";
import { getShowStatus } from "store/modules/modals/selectors";

interface UserProps {
  id: string
}

interface ConversationProps {
  userTwoId: string
}

export default () => {
  const dispatch = useDispatch();

  const loading = useSelector(getLoading);

  const status = useSelector(getShowStatus);

  const conversations = useSelector(getConversationsList);
  const conversationsId =  conversations.map((conversation: ConversationProps) => conversation.userTwoId);

  const userLoggedInId = useSelector(getUserId);
  const users = useSelector(getUsers);

  const filteredUsers = users.reduce((acc: Array<UserProps>, user: UserProps) => {
    if (userLoggedInId === user.id) {
      return acc;
    }

    if (!conversationsId.includes(user.id)) {
      acc.push(user);
    }

    return acc;
  }, [])
  
  const useCreateConversation = (event: React.FormEvent<HTMLButtonElement>) => {
    const { value } = (event.target as HTMLButtonElement);
    dispatch(createConversation({ userTwoId: value}));
    dispatch(closeModal());
  }

  // const useClearUsers = () => { dispatch(clearUsers())}

  useEffect(() => {
    if (status === 'createConversation') {
      dispatch(fetchUsers());
    }
  }, [dispatch, status]);

  return { 
    loading,
    status,
    filteredUsers,
    useCreateConversation
  };
};


