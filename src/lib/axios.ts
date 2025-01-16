import axios, { AxiosResponse } from "axios";

const axiosClient = axios.create({
  baseURL: "http://147.93.98.121:3001/api",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

type Response = {
  isSuccess: boolean;
  data: any;
  error: string | null;
};

axiosClient.interceptors.response.use(
  (response) => {
    return response.data as AxiosResponse<Response>;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export { axiosClient };
