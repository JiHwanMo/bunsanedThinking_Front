import { fetchGetHandler, fetchPatchWithParams } from "../../../common/fetchHandler.js"
import {hostUrl} from "../../common/common.js";

const defaultURL = hostUrl+"/employee/financialAccountant";

export const fetchGetContractHandler = async (contractId) => {
  return await fetchGetHandler(`${defaultURL}/getContract?contractId=${contractId}`);
};

export const fetchGetCustomerHandler = async (customerId) => {
  return await fetchGetHandler(`${defaultURL}/getCustomer?customerId=${customerId}`);
};

export const fetchGetEmployeeHandler = async (employeeId) => {
  return await fetchGetHandler(`${defaultURL}/getEmployee?employeeId=${employeeId}`);
}

export const fetchGetAllDepositDetailHandler = async () => {
  return await fetchGetHandler(`${defaultURL}/getAllDepositDetail`);
};

export const fetchGetAllCompletedPaymentDetailHandler = async () => {
  return await fetchGetHandler(`${defaultURL}/getAllCompletedPaymentDetail`);
};

export const fetchGetAllUnprocessedPaymentDetailHandler = async () => {
  return await fetchGetHandler(`${defaultURL}/getAllUnprocessedPaymentDetail`);
};

export const fetchGetPaymentDetailHandler = async (paymentDetailId) => {
  return await fetchGetHandler(`${defaultURL}/getPaymentDetail?paymentDetailId=${paymentDetailId}`);
};

export const fetchGetAllPaymentDetailHandler = async () => {
  return await fetchGetHandler(`${defaultURL}/getAllPaymentDetail`);
};

export const fetchGetDepositDetailHandler = async (depositDetailId) => {
  return await fetchGetHandler(`${defaultURL}/getDepositDetail?depositDetailId=${depositDetailId}`);
};

export const fetchHandlePaymentHandler = async (paymentDetailId, employeeId) => {
  return await fetchPatchWithParams(`${defaultURL}/handlePayment?paymentDetailId=${paymentDetailId}&employeeId=${employeeId}`);
};
