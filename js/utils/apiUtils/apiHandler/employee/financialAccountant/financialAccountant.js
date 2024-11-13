import { fetchGetHandler, fetchPatchHandler } from "../../FetchHandler.js"

export const fetchGetContractHandler = async () => {
  return await fetchGetHandler("http://localhost:8080/employee/financialAccountant/getContract?contractId=1001");
};

export const fetchGetCustomerHandler = async () => {
  return await fetchGetHandler("http://localhost:8080/employee/financialAccountant/getCustomer?customerId=2001");
};

export const fetchGetAllDepositDetailHandler = async () => {
  return await fetchGetHandler("http://localhost:8080/employee/financialAccountant/getAllDepositDetail");
};

export const fetchGetAllCompletedPaymentDetailHandler = async () => {
  return await fetchGetHandler("http://localhost:8080/employee/financialAccountant/getAllCompletedPaymentDetail");
};

export const fetchGetAllUnprocessedPaymentDetailHandler = async () => {
  return await fetchGetHandler("http://localhost:8080/employee/financialAccountant/getAllUnprocessedPaymentDetail");
};

export const fetchGetPaymentDetailHandler = async () => {
  return await fetchGetHandler("http://localhost:8080/employee/financialAccountant/getPaymentDetail?paymentDetailId=9002");
};

export const fetchGetAllPaymentDetailHandler = async () => {
  return await fetchGetHandler("http://localhost:8080/employee/financialAccountant/getAllPaymentDetail");
};

export const fetchGetDepositDetailHandler = async () => {
  return await fetchGetHandler("http://localhost:8080/employee/financialAccountant/getDepositDetail?depositDetailId=8101");
};

export const fetchHandlePaymentHandler = async () => {
  await fetchPatchHandler("http://localhost:8080/employee/financialAccountant/handlePayment?paymentDetailId=9004&employeeId=60018021");
};
