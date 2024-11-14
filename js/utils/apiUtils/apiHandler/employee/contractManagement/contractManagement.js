import { fetchGetHandler, fetchPostHandler, fetchPatchHandler, fetchDeleteHandler } from '../../FetchHandler.js';

const defaultUrl = "http://localhost:8080/employee/contractManagement";

export const fetchRequestTerminationFeeHandler = async (tercontractId, customerId) => {
  return fetchPatchHandler(`${defaultUrl}/requestTerminationFee?tercontractId=${tercontractId}&customerId=${customerId}`, {});
}

export const fetchReviewEndorsementHandler = async (endorsementId, index) => {
  return fetchPatchHandler(`${defaultUrl}/reviewEndorsement?endorsementId=${endorsementId}&index=${index}`, {});
}

export const fetchReviewRecontractHandler = async (recontractId, index) => {
  return fetchPatchHandler(`${defaultUrl}/reviewRecontract?recontractId=${recontractId}&index=${index}`, {});
}

export const fetchReviewRevivalHandler = async (revivalId, index) => {
  return fetchPatchHandler(`${defaultUrl}/reviewRevival?revivalId=${revivalId}&index=${index}`, {});
}

export const fetchGetAllDefaultContractHandler = async () => {
  return fetchGetHandler(`${defaultUrl}/getAllDefaultContract`);
}

export const fetchGetCustomerByIdHandler = async (id) => {
  return fetchGetHandler(`${defaultUrl}/getCustomerById?id=${id}`);
}

export const fetchGetContractByIdHandler = async (id) => {
  return fetchGetHandler(`${defaultUrl}/getContractById?id=${id}`);
}

export const fetchGetTerminationByIdHandler = async (id) => {
  return fetchGetHandler(`${defaultUrl}/getTerminationById?id=${id}`);
}

export const fetchGetAllTerminatingContractHandler = async () => {
  return fetchGetHandler(`${defaultUrl}/getAllTerminatingContract`);
}

export const fetchGetTerminatingContractByIdHandler = async (id) => {
  return fetchGetHandler(`${defaultUrl}/getTerminatingContractById?id=${id}`);
}

export const fetchGetAllUnprocessedTerminatingContractHandler = async () => {
  return fetchGetHandler(`${defaultUrl}/getAllUnprocessedTerminatingContract`);
}

export const fetchGetAllProcessedTerminatingContractHandler = async () => {
  return fetchGetHandler(`${defaultUrl}/getAllProcessedTerminatingContract`);
}

export const fetchGetAllEndorsementContractHandler = async () => {
  return fetchGetHandler(`${defaultUrl}/getAllEndorsementContract`);
}

export const fetchGetAllUnprocessedEndorsementContractHandler = async () => {
  return fetchGetHandler(`${defaultUrl}/getAllUnprocessedEndorsementContract`);
}

export const fetchGetAllProcessedEndorsementContractHandler = async () => {
  return fetchGetHandler(`${defaultUrl}/getAllProcessedEndorsementContract`);
}

export const fetchGetEndorsementByIdHandler = async (id) => {
  return fetchGetHandler(`${defaultUrl}/getEndorsementById?id=${id}`);
}

export const fetchGetAllReContractHandler = async () => {
  return fetchGetHandler(`${defaultUrl}/getAllReContract`);
}

export const fetchGetAllUnprocessedReContractHandler = async () => {
  return fetchGetHandler(`${defaultUrl}/getAllUnprocessedReContract`);
}

export const fetchGetAllProcessedReContractHandler = async () => {
  return fetchGetHandler(`${defaultUrl}/getAllProcessedReContract`);
}

export const fetchGetReContractByIdHandler = async (id) => {
  return fetchGetHandler(`${defaultUrl}/getReContractById?id=${id}`);
}

export const fetchGetAllRevivalContractHandler = async () => {
  return fetchGetHandler(`${defaultUrl}/getAllRevivalContract`);
}

export const fetchGetRevivalByIdHandler = async (id) => {
  return fetchGetHandler(`${defaultUrl}/getRevivalById?id=${id}`);
}

export const fetchGetAllUnprocessedRevivalHandler = async () => {
  return fetchGetHandler(`${defaultUrl}/getAllUnprocessedRevival`);
}

export const fetchGetAllProcessedRevivalHandler = async () => {
  return fetchGetHandler(`${defaultUrl}/getAllProcessedRevival`);
}
