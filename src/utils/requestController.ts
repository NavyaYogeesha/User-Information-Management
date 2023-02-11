import axios from "axios";
let configHeader;
let axiosInstance = axios.create({
  headers: {
    Accept: "application/json",
  },
});

axiosInstance.interceptors.request.use(
  function (config) {
    // Setup Access token if needed in future
    return config;
  },
  function (err) {
    return Promise.reject(err);
  }
);
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return handleError(error.response);
  }
);

export const sendGetRequest = (url: string, config?: any) => {
  configHeader = setHeader(config);
  return axiosInstance.get(url, configHeader).then((response) => {
    return response.data;
  });
};

const handleError = (error: any) => {
  return Promise.reject(error.data || error);
};

const setHeader = (config: any) => {
  if (config) {
    return config;
  } else {
    const config = {
      headers: {
        "content-type": "application/json",
      },
    };
    return config;
  }
};
