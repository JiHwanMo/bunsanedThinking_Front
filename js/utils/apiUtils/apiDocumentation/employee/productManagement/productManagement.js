import {
  fetchAddDiseaseInsuranceHandler,
  fetchGetInsuranceProductDetailHandler
} from '../../../apiHandler/employee/productManagement/productManagement.js';
import { fetchGetInsuranceProductHandler } from '../../../apiHandler/employee/productManagement/productManagement.js';
import { fetchAddInjuryInsuranceHandler } from '../../../apiHandler/employee/productManagement/productManagement.js';
import { fetchAddAutomobileInsuranceHandler } from '../../../apiHandler/employee/productManagement/productManagement.js';
import { fetchDeleteInsuranceProductHandler } from '../../../apiHandler/employee/productManagement/productManagement.js';
import { fetchUpdateDiseaseInsuranceHandler } from '../../../apiHandler/employee/productManagement/productManagement.js';
import { fetchUpdateInjuryInsuranceHandler } from '../../../apiHandler/employee/productManagement/productManagement.js';
import { fetchUpdateAutomobileInsuranceHandler } from '../../../apiHandler/employee/productManagement/productManagement.js';
import { fetchGetAllInsuranceHandler, fetchGetAllAutomobileInsuranceHandler,fetchGetAllDiseaseInsuranceHandler, fetchGetAllInJuryHandler } from '../../../apiHandler/employee/productManagement/productManagement.js';



export const fetchGetInsuranceProduct = async (id) => {
  return await fetchGetInsuranceProductHandler(id);
}

export const fetchGetInsuranceProductDetail = async (id) => {
  return await fetchGetInsuranceProductDetailHandler(id);
}

export const fetchAddDiseaseInsurance = async (addDiseaseInsuranceRequest) => {
  return await fetchAddDiseaseInsuranceHandler(addDiseaseInsuranceRequest);
}

export const fetchAddInjuryInsurance = async (addInjuryInsuranceRequest) => {
  return await fetchAddInjuryInsuranceHandler(addInjuryInsuranceRequest);
}

export const fetchAddAutomobileInsurance = async (addAutomobileInsuranceRequest) => {
  return await fetchAddAutomobileInsuranceHandler(addAutomobileInsuranceRequest);
}

export const fetchDeleteInsuranceProduct = async (id) => {
  return await fetchDeleteInsuranceProductHandler(id);
}

export const fetchUpdateDiseaseInsurance = async (updateDiseaseInsuranceRequest) => {
  return await fetchUpdateDiseaseInsuranceHandler(updateDiseaseInsuranceRequest);
}

export const fetchUpdateInjuryInsurance = async (updateInjuryInsurance) => {
  return await fetchUpdateInjuryInsuranceHandler(updateInjuryInsurance);
}

export const fetchUpdateAutomobileInsurance = async (updateAutomobileInsurance) => {
  return await fetchUpdateAutomobileInsuranceHandler(updateAutomobileInsurance);
}

export const fetchGetAllInsurance = async () => {
  return await fetchGetAllInsuranceHandler();
}

export const fetchGetAllInJury = async () => {
  return await fetchGetAllInJuryHandler();
}

export const fetchGetAllAutomobileInsurance = async () => {
  return await fetchGetAllAutomobileInsuranceHandler();
}

export const fetchGetAllDiseaseInsurance = async () => {
  return await fetchGetAllDiseaseInsuranceHandler();
}

