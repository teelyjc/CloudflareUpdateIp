import { GetAvaliableDomains } from "./core/GetAvaliableDomains.js";
import { GetDnsRecords } from "./core/GetDnsRecords.js";
import { UpdateDnsRecord, UpdateDnsRecordWithPrefix } from "./core/UpdateDnsRecord.js";

import "dotenv/config";

const { DOMAIN, PREFIX } = process.env;

if (!DOMAIN) {
  throw new Error(`You must have to enter an Domain`);
}

const main = async () => {
  const domains = await GetAvaliableDomains();

  const matchedDomainName = domains.filter((domain) => {
    return domain.name.includes(DOMAIN);
  })[0];

  if (!matchedDomainName) {
    throw new Error(`Domain is not valid, Maybe you forget to add a domain to cloudflare.`);
  }

  const dnsRecords = await GetDnsRecords(matchedDomainName.id);
  const dnsRecord = dnsRecords.filter((dnsRecord) => {
    return PREFIX
      ? dnsRecord.name.startsWith(PREFIX)
      : dnsRecord
  });

  PREFIX
    ? UpdateDnsRecordWithPrefix(matchedDomainName.id, dnsRecord[0].id, PREFIX)
        .then(() => {
          console.info(`Update Successfully Updated ${dnsRecord[0].name} IpAddress CurrentIp.`);
        })
    : UpdateDnsRecord(matchedDomainName.id, dnsRecord[0].id)
        .then(() => {
          console.info(`Update Successfully Updated ${dnsRecord[0].name} IpAddress CurrentIp.`);
        })
}

main();
setInterval(() => {
  main();
}, 5 * 60 * 1000);
