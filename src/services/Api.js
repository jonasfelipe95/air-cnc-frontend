import Axios from "axios";

const Api = Axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

Api.interceptors.request.use(
  (config) => {
    const userId = localStorage.getItem("userId");

    if (!!userId) {
      config.headers.userid = userId;
    }

    return config;
  },
  (error) => console.error(error)
);

export default Api;
