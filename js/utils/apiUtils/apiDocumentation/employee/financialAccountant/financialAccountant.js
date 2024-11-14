import {
  fetchGetContractHandler,
  fetchGetCustomerHandler,
  fetchGetAllDepositDetailHandler,
  fetchGetAllCompletedPaymentDetailHandler,
  fetchGetAllUnprocessedPaymentDetailHandler,
  fetchGetPaymentDetailHandler,
  fetchGetAllPaymentDetailHandler,
  fetchGetDepositDetailHandler,
  fetchHandlePaymentHandler
} from "../../../apiHandler/employee/financialAccountant/financialAccountant.js";

export const fetchGetContract = async () => {
  return await fetchGetContractHandler(1001);
};

export const fetchGetCustomer = async () => {
  return await fetchGetCustomerHandler(2001);
};

export const fetchGetAllDepositDetail = async () => {
  return await fetchGetAllDepositDetailHandler();
};

export const fetchGetAllCompletedPaymentDetail = async () => {
  return await fetchGetAllCompletedPaymentDetailHandler();
};

export const fetchGetAllUnprocessedPaymentDetail = async () => {
  return await fetchGetAllUnprocessedPaymentDetailHandler();
};

export const fetchGetPaymentDetail = async () => {
  return await fetchGetPaymentDetailHandler(9002);
};

export const fetchGetAllPaymentDetail = async () => {
  return await fetchGetAllPaymentDetailHandler();
};

export const fetchGetDepositDetail = async () => {
  return await fetchGetDepositDetailHandler(8101);
};

export const fetchHandlePayment = async () => {
  return await fetchHandlePaymentHandler(9004, 60021);
};
