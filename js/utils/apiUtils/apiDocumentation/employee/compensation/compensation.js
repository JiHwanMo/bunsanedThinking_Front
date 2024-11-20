import { fetchRequestCompensationHandler } from '../../../apiHandler/employee/compensation/compensation.js';
import { fetchRequestInsuranceMoneyHandler } from '../../../apiHandler/employee/compensation/compensation.js';
import { fetchGetAllInsuranceMoneyHandler } from '../../../apiHandler/employee/compensation/compensation.js';
import { fetchGetAllUnprocessedInsuranceMoneyHandler } from '../../../apiHandler/employee/compensation/compensation.js';
import { fetchGetAllProcessedInsuranceMoneyHandler } from '../../../apiHandler/employee/compensation/compensation.js';
import { fetchGetInsuranceMoneyByIdHandler } from '../../../apiHandler/employee/compensation/compensation.js';
import { fetchGetInsuranceMoneyRowByIdHandler } from '../../../apiHandler/employee/compensation/compensation.js';
import { fetchGetContractByIdHandler } from '../../../apiHandler/employee/compensation/compensation.js';
import { fetchGetCustomerByIdHandler } from '../../../apiHandler/employee/compensation/compensation.js';
import { fetchGetAllReportHandler } from '../../../apiHandler/employee/compensation/compensation.js';
import { fetchGetReportByIdHandler } from '../../../apiHandler/employee/compensation/compensation.js';
import { fetchGetReportRowByIdHandler } from '../../../apiHandler/employee/compensation/compensation.js';
import { fetchGetAllUnprocessedReportHandler } from '../../../apiHandler/employee/compensation/compensation.js';
import { fetchGetAllCompletedReportHandler } from '../../../apiHandler/employee/compensation/compensation.js';
import { fetchGetAutomobileByCustomerIdHandler } from '../../../apiHandler/employee/compensation/compensation.js';

// 검증 완
export const fetchRequestCompensation = async (requestCompensationDTO) => {
  return await fetchRequestCompensationHandler(requestCompensationDTO);
}
// (async () => {
//   const requestCompensationDTO = {
//     "accountHolder": "김찬",
//     "bank": "모지환은행",
//     "bankAccount": "김찬어카운트",
//     "money": 3000000,
//     "contractId": 1001,
//     "reportId": 4002,
//     "paymentType": 0
//   }
//   const data = await fetchRequestCompensation(requestCompensationDTO);
//   console.log(data); // 받아온 데이터를 콘솔에 출력
// })();

export const fetchRequestInsuranceMoney = async (requestInsuranceMoneyDTO) => {
  return await fetchRequestInsuranceMoneyHandler(requestInsuranceMoneyDTO);
}
// (async () => {
//   const requestInsuranceMoneyDTO = {
//     "customerId": 2001,
//     "money": 185000,
//     "insuranceMoneyId": 9302,
//     "paymentType": 0,
//     "contractId": 1001
//   }
//   const data = await fetchRequestInsuranceMoney(requestInsuranceMoneyDTO);
//   console.log(data); // 받아온 데이터를 콘솔에 출력
// })();

export const fetchGetAllInsuranceMoney = async () => {
  return await fetchGetAllInsuranceMoneyHandler();
}

export const fetchGetAllUnprocessedInsuranceMoney = async () => {
  return await fetchGetAllUnprocessedInsuranceMoneyHandler();
}

export const fetchGetAllProcessedInsuranceMoney = async () => {
  return await fetchGetAllProcessedInsuranceMoneyHandler();
}

export const fetchGetInsuranceMoneyById = async (id) => {
  return await fetchGetInsuranceMoneyByIdHandler(id);
}

export const fetchGetInsuranceMoneyRowById = async (id) => {
  return await fetchGetInsuranceMoneyRowByIdHandler(id);
}

export const fetchGetContractById = async (id) => {
  return await fetchGetContractByIdHandler(id);
}

export const fetchGetCustomerById = async (id) => {
  return await fetchGetCustomerByIdHandler(id);
}

export const fetchGetAllReport = async () => {
  return await fetchGetAllReportHandler();
}

export const fetchGetReportById = async (id) => {
  return await fetchGetReportByIdHandler(id);
}

export const fetchGetReportRowById = async (id) => {
  return await fetchGetReportRowByIdHandler(id);
}

export const fetchGetAllUnprocessedReport = async () => {
  return await fetchGetAllUnprocessedReportHandler();
}

export const fetchGetAllCompletedReport = async () => {
  return await fetchGetAllCompletedReportHandler();
}

export const fetchGetAutomobileByCustomerId = async (id) => {
  return await fetchGetAutomobileByCustomerIdHandler(id);
}
