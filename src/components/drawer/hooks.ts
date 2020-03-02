import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchConversations } from "store/modules/conversations/actions";
import { getUsers } from "store/modules/users/selectors";

import { setModalStatus } from "store/modules/modals/actions";

export default () => {
  const dispatch = useDispatch();

  const users = useSelector(getUsers);

  const useOpenUsersModal = () => {
    dispatch(setModalStatus("createConversation"));
  };

  useEffect(() => {
    dispatch(fetchConversations());
  }, [dispatch]);

  return {
    users,
    useOpenUsersModal
  };
};
