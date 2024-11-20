import { fetchloginCustomerHandler } from '../apiHandler/authentication.js';
import { fetchloginEmployeeHandler } from '../apiHandler/authentication.js';
import { fetchloginPartnerCompanyHandler } from '../apiHandler/authentication.js';

export const fetchloginCustomer = async (id) => {
  return await fetchloginCustomerHandler(id);
}

export const fetchloginEmployee = async (id) => {
  return await fetchloginEmployeeHandler(id);
}

export const fetchloginPartnerCompany = async (id) => {
  return await fetchloginPartnerCompanyHandler(id);
}
