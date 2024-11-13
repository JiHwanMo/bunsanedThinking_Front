import {
  fetchGetAllEmployeeHandler,
  fetchGetAllDepartmentHandler,
  fetchGetDepartmentHandler,
  fetchGetEmployeeHandler,
  fetchAddEmployeeHandler,
  fetchUpdateEmployeeHandler,
  fetchDeleteEmployeeHandler
} from "../../../apiHandler/employee/humanResource/humanResource.js";

export const fetchGetAllEmployee = async () => {
  return await fetchGetAllEmployeeHandler();
};

export const fetchGetAllDepartment = async () => {
  return await fetchGetAllDepartmentHandler();
};

export const fetchGetDepartment = async () => {
  return await fetchGetDepartmentHandler();
};

export const fetchGetEmployee = async () => {
  return await fetchGetEmployeeHandler();
};

export const fetchAddEmployee = async () => {
  await fetchAddEmployeeHandler();
};

export const fetchUpdateEmployee = async () => {
  await fetchUpdateEmployeeHandler();
};

export const fetchDeleteEmployee = async () => {
  await fetchDeleteEmployeeHandler();
};
