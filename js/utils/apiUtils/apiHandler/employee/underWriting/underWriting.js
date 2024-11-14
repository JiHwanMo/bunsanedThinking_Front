import { fetchGetHandler, fetchPostHandler, fetchPatchHandler, fetchDeleteHandler } from '../../FetchHandler.js';

const defaultUrl = "http://localhost:8080/underWriting";

export const fetchApplyCoperationHandler = async () => {
  return await fetchPostHandler(`${defaultUrl}/applyCoperation`);
}

export const fetchApplyReinsuranceHandler = async () => {
  return await fetchPostHandler(`${defaultUrl}/applyReinsurance`);
}

export const fetchReviewAcquisitionHandler = async (id, result) => {
}

export const fetchGetAllRequestingInsuranceHandler = async (id) => {
  return await fetchGetHandler(`${defaultUrl}/allRequestingInsurance?id=${id}`);
}

export const fetchGetContractHandler = async (id) => {
  return await fetchGetHandler(`${defaultUrl}/getContract?id=${id}`);
}

export const fetchGetAllNotRequestingInsuranceHandler = async () => {
  return await fetchGetHandler(`${defaultUrl}/allNotRequestingInsurance`);
}

export const fetchGetAllRequestingInsuranceHandler = async () => {
  return await fetchGetHandler(`${defaultUrl}/allRequestingInsurance`);
}
