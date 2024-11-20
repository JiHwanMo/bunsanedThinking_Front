import { fetchGetHandler, fetchPostHandler, fetchPatchWithParams, fetchDeleteHandler } from "../../../common/FetchHandler.js"

const defaultURL = "http://localhost:8080/employee/humanResource";

export const fetchGetAllEmployeeHandler = async () => {
  return await fetchGetHandler(`${defaultURL}/getAllEmployee`);
};

export const fetchGetAllDepartmentHandler = async () => {
  return await fetchGetHandler(`${defaultURL}/getAllDepartment`);
};

export const fetchGetDepartmentHandler = async (departmentId) => {
  return await fetchGetHandler(`${defaultURL}/getDepartment?departmentId=${departmentId}`);
};

export const fetchGetEmployeeHandler = async (employeeId) => {
  return await fetchGetHandler(`${defaultURL}/getEmployee?employeeId=${employeeId}`);
};

export const fetchAddEmployeeHandler = async (addEmployeeDTO) => {
  await fetchPostHandler(`${defaultURL}/addEmployee`, addEmployeeDTO);
};

export const fetchUpdateEmployeeHandler = async (employeeId, index, input) => {
  await fetchPatchWithParams(`${defaultURL}/updateEmployee?employeeId=${employeeId}&index=${index}&input=${input}`);
};

export const fetchDeleteEmployeeHandler = async (employeeId) => {
  await fetchDeleteHandler(`${defaultURL}/deleteEmployee?employeeId=${employeeId}`);
};
