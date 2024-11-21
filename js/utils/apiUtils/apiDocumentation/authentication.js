import { fetchLoginCustomerHandler } from '../common/authentication.js';
import { fetchLoginEmployeeHandler } from '../common/authentication.js';
import { fetchLoginPartnerCompanyHandler } from '../common/authentication.js';

export const fetchloginCustomer = async (id) => {
  return await fetchLoginCustomerHandler(id);
}

export const fetchloginEmployee = async (id) => {
  return await fetchLoginEmployeeHandler(id);
}

export const fetchloginPartnerCompany = async (id) => {
  return await fetchLoginPartnerCompanyHandler(id);
}
