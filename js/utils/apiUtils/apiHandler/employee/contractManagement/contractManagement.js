import { fetchGetHandler, fetchPostHandler, fetchPatchWithParams, fetchDeleteHandler } from '../../../common/FetchHandler.js';

const defaultUrl = "http://localhost:8080/employee/contractManagement";

export const fetchRequestTerminationFeeHandler = async (tercontractId, customerId) => {
  return await fetchPatchWithParams(`${defaultUrl}/requestTerminationFee?tercontractId=${tercontractId}&customerId=${customerId}`);
}

export const fetchReviewEndorsementHandler = async (endorsementId, index) => {
  return await fetchPatchWithParams(`${defaultUrl}/reviewEndorsement?endorsementId=${endorsementId}&index=${index}`);
}

export const fetchReviewRecontractHandler = async (recontractId, index) => {
  return await fetchPatchWithParams(`${defaultUrl}/reviewRecontract?recontractId=${recontractId}&index=${index}`);
}

export const fetchReviewRevivalHandler = async (revivalId, index) => {
  return await fetchPatchWithParams(`${defaultUrl}/reviewRevival?revivalId=${revivalId}&index=${index}`);
}

export const fetchGetAllDefaultContractHandler = async () => {
  return await fetchGetHandler(`${defaultUrl}/getAllDefaultContract`);
}

export const fetchGetCustomerByIdHandler = async (id) => {
  return await fetchGetHandler(`${defaultUrl}/getCustomerById?id=${id}`);
}

export const fetchGetContractByIdHandler = async (id) => {
  return await fetchGetHandler(`${defaultUrl}/getContractById?id=${id}`);
}

export const fetchGetContractRowByIdHandler = async (id) => {
  return await fetchGetHandler(`${defaultUrl}/getContractRowById?id=${id}`);
}

export const fetchGetTerminationByIdHandler = async (id) => {
  return await fetchGetHandler(`${defaultUrl}/getTerminationById?id=${id}`);
}

export const fetchGetTerminationRowByIdHandler = async (id) => {
  return await fetchGetHandler(`${defaultUrl}/getTerminationRowById?id=${id}`);
}

export const fetchGetAllTerminatingContractHandler = async () => {
  return await fetchGetHandler(`${defaultUrl}/getAllTerminatingContract`);
}

export const fetchGetTerminatingContractByIdHandler = async (id) => {
  return await fetchGetHandler(`${defaultUrl}/getTerminatingContractById?id=${id}`);
}

export const fetchGetAllUnprocessedTerminatingContractHandler = async () => {
  return await fetchGetHandler(`${defaultUrl}/getAllUnprocessedTerminatingContract`);
}

export const fetchGetAllProcessedTerminatingContractHandler = async () => {
  return await fetchGetHandler(`${defaultUrl}/getAllProcessedTerminatingContract`);
}

export const fetchGetAllEndorsementContractHandler = async () => {
  return await fetchGetHandler(`${defaultUrl}/getAllEndorsementContract`);
}

export const fetchGetAllUnprocessedEndorsementContractHandler = async () => {
  return await fetchGetHandler(`${defaultUrl}/getAllUnprocessedEndorsementContract`);
}

export const fetchGetAllProcessedEndorsementContractHandler = async () => {
  return await fetchGetHandler(`${defaultUrl}/getAllProcessedEndorsementContract`);
}

export const fetchGetEndorsementByIdHandler = async (id) => {
  return await fetchGetHandler(`${defaultUrl}/getEndorsementById?id=${id}`);
}

export const fetchGetEndorsementRowByIdHandler = async (id) => {
  return await fetchGetHandler(`${defaultUrl}/getEndorsementRowById?id=${id}`);
}

export const fetchGetAllReContractHandler = async () => {
  return await fetchGetHandler(`${defaultUrl}/getAllReContract`);
}

export const fetchGetAllUnprocessedReContractHandler = async () => {
  return await fetchGetHandler(`${defaultUrl}/getAllUnprocessedReContract`);
}

export const fetchGetAllProcessedReContractHandler = async () => {
  return await fetchGetHandler(`${defaultUrl}/getAllProcessedReContract`);
}

export const fetchGetReContractByIdHandler = async (id) => {
  return await fetchGetHandler(`${defaultUrl}/getReContractById?id=${id}`);
}

export const fetchGetReContractRowByIdHandler = async (id) => {
  return await fetchGetHandler(`${defaultUrl}/getReContractRowById?id=${id}`);
}

export const fetchGetAllRevivalContractHandler = async () => {
  return await fetchGetHandler(`${defaultUrl}/getAllRevivalContract`);
}

export const fetchGetRevivalByIdHandler = async (id) => {
  return await fetchGetHandler(`${defaultUrl}/getRevivalById?id=${id}`);
}

export const fetchGetRevivalRowByIdHandler = async (id) => {
  return await fetchGetHandler(`${defaultUrl}/getRevivalRowById?id=${id}`);
}

export const fetchGetAllUnprocessedRevivalHandler = async () => {
  return await fetchGetHandler(`${defaultUrl}/getAllUnprocessedRevival`);
}

export const fetchGetAllProcessedRevivalHandler = async () => {
  return await fetchGetHandler(`${defaultUrl}/getAllProcessedRevival`);
}
