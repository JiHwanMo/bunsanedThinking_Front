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
// (async () => {
//   const data = await fetchGetAllDepartment();
//   console.log(data);
// })();

export const fetchGetDepartment = async (departmentId) => {
  return await fetchGetDepartmentHandler(departmentId); // 9101
};

export const fetchGetEmployee = async (employeeId) => {
  return await fetchGetEmployeeHandler(employeeId); // 6001
};

export const fetchAddEmployee = async (addEmployeeDTO) => {
  await fetchAddEmployeeHandler(addEmployeeDTO);
  /*
    {
      name: "John Doe",
        employeePosition: 2,
      address: "123 Main St",
      phoneNumber: "123-456-7890",
      bankName: "국민은행",
      bankAccount: "123456789012",
      residentRegistrationNumber: "123456-7890123",
      departmentId: 9101,
      salary: 50000,
      employmentDate: "2023-01-15",
      tempFamilyList: [
      {
        birthDate: "1980-05-15",
        name: "Jane Doe",
        relationship: 1,
        survival: true
      },
      {
        birthDate: "2010-09-22",
        name: "Jake Doe",
        relationship: 2,
        survival: true
      }
    ]
    }
  */
};

export const fetchUpdateEmployee = async (employeeId, index, input) => {
  // 6001, 1, "Test"
  await fetchUpdateEmployeeHandler(employeeId, index, input);
};

export const fetchDeleteEmployee = async (employeeId) => {
  await fetchDeleteEmployeeHandler(employeeId); // 6001
};
