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
  return await fetchGetContractHandler();
};

export const fetchGetCustomer = async () => {
  return await fetchGetCustomerHandler();
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
  return await fetchGetPaymentDetailHandler();
};

export const fetchGetAllPaymentDetail = async () => {
  return await fetchGetAllPaymentDetailHandler();
};

export const fetchGetDepositDetail = async () => {
  return await fetchGetDepositDetailHandler();
};

export const fetchHandlePayment = async () => {
  return await fetchHandlePaymentHandler();
};
