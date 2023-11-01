import { fetch } from "../utils/fetch.js";

export const GetAvaliableDomains = async () => {
  const { data } = await fetch.get("/zones");
  return data.result;
}