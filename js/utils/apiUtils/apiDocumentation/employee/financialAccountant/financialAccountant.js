import {
  fetchGetContractHandler,
  fetchGetCustomerHandler,
  fetchGetAllDepositDetailHandler,
  fetchGetAllCompletedPaymentDetailHandler,
  fetchGetAllUnprocessedPaymentDetailHandler,
  fetchGetPaymentDetailHandler,
  fetchGetAllPaymentDetailHandler,
  fetchGetDepositDetailHandler,
  fetchHandlePaymentHandler,
  fetchGetEmployeeHandler
} from "../../../apiHandler/employee/financialAccountant/financialAccountant.js";

export const fetchGetContract = async (contractId) => {
  return await fetchGetContractHandler(contractId); // 1001
};

export const fetchGetCustomer = async (customerId) => {
  return await fetchGetCustomerHandler(customerId); // 2001
};

export const fetchGetEmployee = async (employeeId) => {
  return await fetchGetEmployeeHandler(employeeId);
}

export const fetchGetAllDepositDetail = async () => {
  return await fetchGetAllDepositDetailHandler();
};

export const fetchGetAllCompletedPaymentDetail = async () => {
  return await fetchGetAllCompletedPaymentDetailHandler();
};

export const fetchGetAllUnprocessedPaymentDetail = async () => {
  return await fetchGetAllUnprocessedPaymentDetailHandler();
};

export const fetchGetPaymentDetail = async (paymentDetailId) => {
  return await fetchGetPaymentDetailHandler(paymentDetailId); // 9002
};

export const fetchGetAllPaymentDetail = async () => {
  return await fetchGetAllPaymentDetailHandler();
};

export const fetchGetDepositDetail = async (depostDetailId) => {
  return await fetchGetDepositDetailHandler(depostDetailId); // 8101
};

export const fetchHandlePayment = async (paymentDetailId, employeeId) => {
  // 9004, 60021
  return await fetchHandlePaymentHandler(paymentDetailId, employeeId);
};
