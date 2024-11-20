import { fetchGetHandler } from './FetchHandler.js';

const defaultUrl = "http://localhost:8080/authentication";

export const fetchloginCustomerHandler = async (id) => {
  return await fetchGetHandler(`${defaultUrl}/loginCustomer?id=${id}`);
}

export const fetchloginEmployeeHandler = async (id) => {
  return await fetchGetHandler(`${defaultUrl}/loginEmployee?id=${id}`);
}

export const fetchloginPartnerCompanyHandler = async (id) => {
  return await fetchGetHandler(`${defaultUrl}/loginPartnerCompany?id=${id}`);
}
