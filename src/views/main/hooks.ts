import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchConversations } from "store/modules/conversations/actions";


export default () => {
  const dispatch = useDispatch();

  useEffect(() => {    
    dispatch(fetchConversations());
  }, [dispatch]);

  return {

  };
};
