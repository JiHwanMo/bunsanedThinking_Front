import { fetchGetHandler, fetchPostHandler, fetchPatchWithBody, fetchPatchWithParams, fetchDeleteHandler } from '../../../common/FetchHandler.js';

const defaultUrl = "http://localhost:8080/employee/productManagement";

export const fetchAddDiseaseInsuranceHandler = async (addDiseaseInsuranceDTO) => {
  return await fetchPostHandler(`${defaultUrl}/addDiseaseInsurance`,addDiseaseInsuranceDTO);
}

export const fetchGetInsuranceProductHandler = async (id) => {
  return await fetchGetHandler(`${defaultUrl}/getInsuranceProduct?id=${id}`);
}

export const fetchAddInjuryInsuranceHandler = async (addInjuryInsuranceDTO) => {
  return await fetchPostHandler(`${defaultUrl}/addInjuryInsurance`,addInjuryInsuranceDTO);
}

export const fetchAddAutomobileInsuranceHandler = async (addAutomobileInsuranceDTO) => {
  return await fetchPostHandler(`${defaultUrl}/addAutomobileInsurance`,addAutomobileInsuranceDTO);
}

export const fetchDeleteInsuranceProductHandler = async (id) => {
  return await fetchDeleteHandler(`${defaultUrl}/deleteInsuranceProduct?id=${id}`);
}

export const fetchUpdateDiseaseInsuranceHandler = async (index, input, id) => {
  return await fetchPatchWithParams(`${defaultUrl}/updateDiseaseInsurance?index=${index}&input=${input}&id=${id}`);
}

export const fetchUpdateInjuryInsuranceHandler = async (index, input, id) => {
  return await fetchPatchWithParams(`${defaultUrl}/updateInjuryInsurance?index=${index}&input=${input}&id=${id}`);
}

export const fetchUpdateAutomobileInsuranceHandler = async (index, input, id, serviceTypeList) => {
  return await fetchPatchWithBody(`${defaultUrl}/updateAutomobileInsurance?index=${index}&input=${input}&id=${id}`, serviceTypeList);
}

export const fetchGetAllInsuranceHandler = async () => {
  return await fetchGetHandler(`${defaultUrl}/getAllInsurance`);
}

export const fetchGetAllInJuryHandler = async () => {
  return await fetchGetHandler(`${defaultUrl}/getAllinJuryInsurance`);
}

export const fetchGetAllAutomobileInsuranceHandler = async () => {
  return await fetchGetHandler(`${defaultUrl}/getAllAutomobileInsurance`);
}

export const fetchGetAllDiseaseInsuranceHandler = async () => {
  return await fetchGetHandler(`${defaultUrl}/getAllDiseaseInsurance`);
}
