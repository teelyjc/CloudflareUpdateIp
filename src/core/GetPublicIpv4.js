import axios from "axios";

export const GetPublicIpv4 = async () => {
  const { data } = await axios.get(`https://api.ipify.org?format=json`);
  return data.ip;
}