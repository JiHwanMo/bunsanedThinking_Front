import { fetchGetHandler, fetchPostHandler, fetchPatchHandler, fetchDeleteHandler } from "../../FetchHandler.js"

export const fetchGetAllEmployeeHandler = async () => {
  return await fetchGetHandler("http://localhost:8080/employee/humanResource/getAllEmployee");
};

export const fetchGetAllDepartmentHandler = async () => {
  return await fetchGetHandler("http://localhost:8080/employee/humanResource/getAllDepartment");
};

export const fetchGetDepartmentHandler = async () => {
  return await fetchGetHandler("http://localhost:8080/employee/humanResource/getDepartment?departmentId=9101");
};

export const fetchGetEmployeeHandler = async () => {
  return await fetchGetHandler("http://localhost:8080/employee/humanResource/getEmployee?employeeId=6001101");
};

export const fetchAddEmployeeHandler = async () => {
  await fetchPostHandler("http://localhost:8080/employee/humanResource/addEmployee",
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
  );
};

export const fetchUpdateEmployeeHandler = async () => {
  await fetchPatchHandler("http://localhost:8080/employee/humanResource/updateEmployee?employeeId=60018022&index=1&input=Test");
};

export const fetchDeleteEmployeeHandler = async () => {
  await fetchDeleteHandler("http://localhost:8080/employee/humanResource/deleteEmployee?employeeId=60018022");
};
