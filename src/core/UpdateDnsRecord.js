import { GetPublicIpv4 } from "./GetPublicIpv4.js";
import { fetch } from "../utils/fetch.js"

export const UpdateDnsRecord = async (zoneId, id) => {
  const publicIp = await GetPublicIpv4();
  const { data } = await fetch.put(`/zones/${zoneId}/dns_records/${id}`, {
    type: "A",
    content: publicIp,
  });

  return !!data;
}

export const UpdateDnsRecordWithPrefix = async (zoneId, id, prefix) => {
  const publicIp = await GetPublicIpv4();
  const { data } = await fetch.put(`/zones/${zoneId}/dns_records/${id}`, {
    type: "A",
    name: prefix,
    content: publicIp,
  });

  return !!data;
}