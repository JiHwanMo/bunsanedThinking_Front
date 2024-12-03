import {
  fetchGetAllEmployeeHandler,
  fetchGetAllDepartmentHandler,
  fetchGetDepartmentHandler,
  fetchGetEmployeeHandler,
  fetchAddEmployeeHandler,
  fetchUpdateEmployeeHandler,
  fetchDeleteEmployeeHandler,
  fetchGetEmployeeDetailHandler
} from "../../../apiHandler/employee/humanResource/humanResource.js";

export const fetchGetAllEmployee = async () => {
  return await fetchGetAllEmployeeHandler();
};

export const fetchGetAllDepartment = async () => {
  return await fetchGetAllDepartmentHandler();
};

export const fetchGetDepartment = async (departmentId) => {
  return await fetchGetDepartmentHandler(departmentId); // 9101
};

export const fetchGetEmployee = async (employeeId) => {
  return await fetchGetEmployeeHandler(employeeId); // 6001
};

export const fetchGetEmployeeDetail = async (employeeId) => {
  return await fetchGetEmployeeDetailHandler(employeeId);
}

export const fetchAddEmployee = async (addEmployeeDTO) => {
  return await fetchAddEmployeeHandler(addEmployeeDTO);
};

export const fetchUpdateEmployee = async (updateEmployeeDto) => {
  // 6001, 1, "Test"
  return await fetchUpdateEmployeeHandler(updateEmployeeDto);
};

export const fetchDeleteEmployee = async (employeeId) => {
  return await fetchDeleteEmployeeHandler(employeeId); // 6001
};
