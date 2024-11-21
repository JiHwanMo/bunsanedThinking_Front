import { fetchGetHandler, fetchPostHandler, fetchPatchWithBody, fetchDeleteHandler } from '../../../common/FetchHandler.js';

const defaultUrl = "http://localhost:8080/employee/managementPlanning";

export const fetchAddDepartmentHandler = async (addDepartmentDTO) => {
  return await fetchPostHandler(`${defaultUrl}/addDepartment`, addDepartmentDTO);
};

export const fetchDeleteDepartmentHandler = async (id) => {
  return await fetchDeleteHandler(`${defaultUrl}/deleteDepartment?id=${id}`);
};

export const fetchGetDepartmentHandler = async (id) => {
  return await fetchGetHandler(`${defaultUrl}/getDepartment?id=${id}`);
};

export const fetchUpdateDepartmentHandler = async (updateDepartmentDTO) => {
  return await fetchPatchWithBody(`${defaultUrl}/updateDepartment`, updateDepartmentDTO);
};
