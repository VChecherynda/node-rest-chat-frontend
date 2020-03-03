import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchUsers, clearUsers } from "store/modules/users/actions";
import { getLoading, getUsers } from "store/modules/users/selectors";

import { createConversation } from "store/modules/conversations/actions";

import { getShowStatus } from "store/modules/modals/selectors";

export default () => {
  const dispatch = useDispatch();

  const loading = useSelector(getLoading);

  const status = useSelector(getShowStatus);

  const users = useSelector(getUsers);
  
  const useCreateConversation = (event: React.FormEvent<HTMLButtonElement>) => {
    const { value } = (event.target as HTMLButtonElement)
    dispatch(createConversation({ userTwoId: value}))
  }

  const useClearUsers = () => { dispatch(clearUsers())}

  useEffect(() => {
    if (status === 'createConversation') {
      dispatch(fetchUsers());
    }
  }, [dispatch, status]);

  return { loading, status, users, useCreateConversation, useClearUsers };
};


