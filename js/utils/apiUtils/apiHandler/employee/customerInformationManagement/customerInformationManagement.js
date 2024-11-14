import { fetchGetHandler, fetchPostHandler, fetchPatchHandler, fetchDeleteHandler } from '../../FetchHandler.js';

const defaultUrl = "http://localhost:8080/employee/customerInformationManagement";

export const fetchAddCustomerInformationHandler = async (addCustomerInformationDTO) => {
  return await fetchPostHandler(`${defaultUrl}/addCustomerInformation`, addCustomerInformationDTO);
};

export const fetchDeleteCustomerInformationHandler = async (id) => {
  return await fetchDeleteHandler(`${defaultUrl}/deleteCustomerInformation?id=${id}`);
};

export const fetchGetCustomerInformationHandler = async (id) => {
  return await fetchGetHandler(`${defaultUrl}/getCustomerInformation?id=${id}`);
};

export const fetchUpdateCustomerInformationHandler = async (updateCustomerInformationDTO) => {
  return await fetchPatchHandler(`${defaultUrl}/updateCustomerInformation`, updateCustomerInformationDTO);
};

export const fetchGetAllCustomerInformationHandler = async () => {
  return await fetchGetHandler(`${defaultUrl}/getAll`);
};
