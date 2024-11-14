import { fetchGetHandler, fetchPostHandler, fetchPatchWithBody, fetchPatchWithParams, fetchDeleteHandler } from '../../FetchHandler.js';

const defaultUrl = "http://localhost:8080/employee/compensationPlanning";

export const fetchAddPartnerCompanyHandler = async (partnerCompanyDTO) => {
  return await fetchPostHandler(`${defaultUrl}/addPartnerCompany`, partnerCompanyDTO);
}

export const fetchEvaluatePartnerCompanyHandler = async (evaluate, partnerCompanyId) => {
  return await fetchPatchWithParams(`${defaultUrl}/evaluatePartnerCompany?evaluate=${evaluate}&partnerCompanyId=${partnerCompanyId}`);
}

export const fetchGetPartnerCompanyHandler = async (id) => {
  return await fetchGetHandler(`${defaultUrl}/getPartnerCompany?id=${id}`);
}

export const fetchUpdatePartnerCompanyHandler = async (partnerCompanyDTO) => {
  return await fetchPatchWithBody(`${defaultUrl}/updatePartnerCompany`, partnerCompanyDTO);
}

export const fetchDeletePartnerCompanyHandler = async (id) => {
  return await fetchDeleteHandler(`${defaultUrl}/deletePartnerCompany?id=${id}`);
}

export const fetchGetAllHandler = async () => {
  return await fetchGetHandler(`${defaultUrl}/getAll`);
}
