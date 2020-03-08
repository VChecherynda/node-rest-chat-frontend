import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { initSockets } from "store/modules/auth/actions";
import { fetchConversations } from "store/modules/conversations/actions";

export default () => {
  const dispatch = useDispatch();

  useEffect(() => {    
    dispatch(initSockets());
    dispatch(fetchConversations());
  }, [dispatch]);

  return {

  };
};
