import { fetch } from "../utils/fetch.js";

export const GetDnsRecords = async (id) => {
  const { data } = await fetch.get(`/zones/${id}/dns_records`);
  return data.result;
}