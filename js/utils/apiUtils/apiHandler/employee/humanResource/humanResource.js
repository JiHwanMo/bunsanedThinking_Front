import {
  fetchGetHandler,
  fetchPostHandler,
  fetchPatchWithParams,
  fetchDeleteHandler,
  fetchPatchWithBody
} from "../../../common/fetchHandler.js"

const defaultURL = "http://localhost:8080/employee/humanResource";

export const fetchGetAllDepartmentHandler = async () => {
  return await fetchGetHandler(`${defaultURL}/getAllDepartment`);
};

export const fetchGetAllEmployeeHandler = async () => {
  return await fetchGetHandler(`${defaultURL}/getAllEmployee`);
};

export const fetchGetDepartmentHandler = async (departmentId) => {
  return await fetchGetHandler(`${defaultURL}/getDepartment?departmentId=${departmentId}`);
};

export const fetchGetEmployeeHandler = async (employeeId) => {
  return await fetchGetHandler(`${defaultURL}/getEmployee?employeeId=${employeeId}`);
};

export const fetchGetEmployeeDetailHandler = async (employeeId) => {
  return await fetchGetHandler(`${defaultURL}/getEmployeeDetail?employeeId=${employeeId}`);
}

export const fetchAddEmployeeHandler = async (addEmployeeDTO) => {
  await fetchPostHandler(`${defaultURL}/addEmployee`, addEmployeeDTO);
};

export const fetchUpdateEmployeeHandler = async (updateEmployeeDto) => {
  await fetchPatchWithBody(`${defaultURL}/updateEmployee`, updateEmployeeDto);
};

export const fetchDeleteEmployeeHandler = async (employeeId) => {
  await fetchDeleteHandler(`${defaultURL}/deleteEmployee?employeeId=${employeeId}`);
};

