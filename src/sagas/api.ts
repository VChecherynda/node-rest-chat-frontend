import axios from "axios";
import "./interceptors";

interface ApiProps {
  url: string
  data?: any
}

const apiRequest = async (options: ApiProps) => {
  const { url = "" } = options;

  const response = await axios({
    method: "GET",
    ...options,
    url: `${process.env.REACT_APP_BACKEND_URL}${url}`
  });

  return response;
};

export const fetchRequest = ({ url, data }: ApiProps) =>
  apiRequest({
    url,
    data
  });
