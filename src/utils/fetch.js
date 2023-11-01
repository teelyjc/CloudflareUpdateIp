import axios from "axios";

const fetch = axios.create({
  baseURL: "https://api.cloudflare.com/client/v4"
});

fetch.interceptors.request.use((config) => {
  config.headers["Authorization"] = "Bearer YDpT5KziPV7L8Zm8s3GQmC6KWZzclPyJ9_1IynpS";
  config.headers["Content-Type"] = "application/json";

  return config;
});

export { fetch };