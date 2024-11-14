import { fetchGetHandler, fetchPostHandler, fetchPatchWithBody, fetchPatchWithParams, fetchDeleteHandler } from '../../FetchHandler.js';

const defaultUrl = "http://localhost:8080/employee/underWriting";

export const fetchApplyCoperationHandler = async () => {
  return await fetchPostHandler(`${defaultUrl}/applyCoperation`);
}

export const fetchApplyReinsuranceHandler = async () => {
  return await fetchPostHandler(`${defaultUrl}/applyReinsurance`);
}

export const fetchReviewAcquisitionHandler = async (contractId, result) => {
  return await fetchPatchWithParams(`${defaultUrl}/reviewAcquisition?contractId=${contractId}&result=${result}`);
}

export const fetchGetCustomerHandler = async (id) => {
  return await fetchGetHandler(`${defaultUrl}/getCustomer?id=${id}`);
}

export const fetchGetContractHandler = async (id) => {
  return await fetchGetHandler(`${defaultUrl}/getContract?id=${id}`);
}

export const fetchGetAllNotRequestingInsuranceHandler = async () => {
  return await fetchGetHandler(`${defaultUrl}/getAllNotRequestingInsurance`);
}

export const fetchGetAllRequestingInsuranceHandler = async () => {
  return await fetchGetHandler(`${defaultUrl}/getAllRequestingInsurance`);
}
