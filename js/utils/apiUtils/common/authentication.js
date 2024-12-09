import { fetchGetHandler } from './fetchHandler.js';

import {hostUrl} from "../apiHandler/common/common.js";

const defaultUrl = hostUrl+"/authentication";

export const fetchLoginCustomerHandler = async (id) => {
  return await fetchGetHandler(`${defaultUrl}/loginCustomer?id=${id}`);
}

export const fetchLoginEmployeeHandler = async (id) => {
  return await fetchGetHandler(`${defaultUrl}/loginEmployee?id=${id}`);
}

export const fetchLoginPartnerCompanyHandler = async (id) => {
  return await fetchGetHandler(`${defaultUrl}/loginPartnerCompany?id=${id}`);
}
