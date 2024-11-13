import { fetchGetCustomerByIdHandler } from '../../apiHandler/customer/customer.js';

export const fetchGetCustomerById = async () => {
  return await fetchGetCustomerByIdHandler();
};
