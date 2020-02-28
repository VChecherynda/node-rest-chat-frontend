import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchUsers } from "store/modules/users/actions";
import { getUsers } from "store/modules/users/selectors";

export default () => {
  const dispatch = useDispatch();

  const users = useSelector(getUsers);

  useEffect(() => {
    dispatch(fetchUsers({}));
  }, [dispatch]);

  return {
    users
  };
};
