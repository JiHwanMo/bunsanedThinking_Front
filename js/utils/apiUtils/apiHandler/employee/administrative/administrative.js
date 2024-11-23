import { fetchGetHandler, fetchPostHandler, fetchPatchWithBody, fetchDeleteHandler } from '../../../common/FetchHandler.js';

const defaultUrl = "http://localhost:8080/employee/administrative";

export const fetchAddOfficeSupplyHandler = async (addOfficeSupplyDTO) => {
  return await fetchPostHandler(`${defaultUrl}/addOfficeSupply`, addOfficeSupplyDTO);
};

export const fetchDeleteOfficeSupplyHandler = async (id) => {
  return await fetchDeleteHandler(`${defaultUrl}/deleteOfficeSupply?id=${id}`);
};

export const fetchGetOfficeSupplyHandler = async (id) => {
  return await fetchGetHandler(`${defaultUrl}/getOfficeSupply?id=${id}`);
};

export const fetchUpdateOfficeSupplyHandler = async (updateOfficeSupplyDTO) => {
  return await fetchPatchWithBody(`${defaultUrl}/updateOfficeSupply`, updateOfficeSupplyDTO);
};

export const fetchGetAllOfficeSuppliesHandler = async () => {
  return await fetchGetHandler(`${defaultUrl}/getAll`);
};

export const fetchGetTotalInventoryHandler = async () => {
  return await fetchGetHandler(`${defaultUrl}/getTotalInventory`);
};


