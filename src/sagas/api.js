import axios from "axios";
import "./interceptors";

const apiRequest = async options => {
  const { url = "" } = options;

  const response = await axios({
    method: "GET",
    ...options,
    url: `${process.env.REACT_APP_BACKEND_URL}${url}`
  });

  return response;
};

export const fetchRequest = ({ url, ...rest }) =>
  apiRequest({
    url,
    data: {
      ...rest.payload
    }
  });
