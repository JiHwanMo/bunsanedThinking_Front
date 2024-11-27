import { fetchGetHandler } from './fetchHandler.js';

const defaultUrl = "http://localhost:8080/authentication";

export const fetchLoginCustomerHandler = async (id) => {
  return await fetchGetHandler(`${defaultUrl}/loginCustomer?id=${id}`);
}

export const fetchLoginEmployeeHandler = async (id) => {
  return await fetchGetHandler(`${defaultUrl}/loginEmployee?id=${id}`);
}

export const fetchLoginPartnerCompanyHandler = async (id) => {
  return await fetchGetHandler(`${defaultUrl}/loginPartnerCompany?id=${id}`);
}
