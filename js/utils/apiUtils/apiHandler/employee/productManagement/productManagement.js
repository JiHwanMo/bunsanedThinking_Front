import { fetchGetHandler, fetchPostHandler, fetchPatchWithBody, fetchPatchWithParams, fetchDeleteHandler } from '../../../common/fetchHandler.js';
import {hostUrl} from "../../common/common.js";

const defaultUrl = hostUrl+"/employee/productManagement";

export const fetchAddDiseaseInsuranceHandler = async (addDiseaseInsuranceResponse) => {
  return await fetchPostHandler(`${defaultUrl}/addDiseaseInsurance`,addDiseaseInsuranceResponse);
}

export const fetchGetInsuranceProductHandler = async (id) => {
  return await fetchGetHandler(`${defaultUrl}/getInsuranceProduct?id=${id}`);
}

export const fetchGetInsuranceProductDetailHandler = async (id) => {
  return await fetchGetHandler(`${defaultUrl}/getInsuranceProductDetail?id=${id}`);
}

export const fetchAddInjuryInsuranceHandler = async (addInjuryInsuranceResponse) => {
  return await fetchPostHandler(`${defaultUrl}/addInjuryInsurance`,addInjuryInsuranceResponse);
}

export const fetchAddAutomobileInsuranceHandler = async (addAutomobileInsuranceResponse) => {
  return await fetchPostHandler(`${defaultUrl}/addAutomobileInsurance`,addAutomobileInsuranceResponse);
}

export const fetchDeleteInsuranceProductHandler = async (id) => {
  return await fetchDeleteHandler(`${defaultUrl}/deleteInsuranceProduct?id=${id}`);
}

export const fetchUpdateDiseaseInsuranceHandler = async (updateDiseaseInsuranceRequest) => {
  return await fetchPatchWithBody(`${defaultUrl}/updateDiseaseInsurance`,updateDiseaseInsuranceRequest);
}

export const fetchUpdateInjuryInsuranceHandler = async (updateInjuryInsurance) => {
  return await fetchPatchWithBody(`${defaultUrl}/updateInjuryInsurance`, updateInjuryInsurance);
}

export const fetchUpdateAutomobileInsuranceHandler = async (updateAutomobileInsurance) => {
  return await fetchPatchWithBody(`${defaultUrl}/updateAutomobileInsurance`, updateAutomobileInsurance);
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
