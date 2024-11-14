import { fetchAddDiseaseInsuranceHandler } from '../../../apiHandler/employee/productManagement/productManagement.js';
import { fetchGetInsuranceProductHandler } from '../../../apiHandler/employee/productManagement/productManagement.js';
import { fetchAddInjuryInsuranceHandler } from '../../../apiHandler/employee/productManagement/productManagement.js';
import { fetchAddAutomobileInsuranceHandler } from '../../../apiHandler/employee/productManagement/productManagement.js';
import { fetchDeleteInsuranceProductHandler } from '../../../apiHandler/employee/productManagement/productManagement.js';
import { fetchUpdateDiseaseInsuranceHandler } from '../../../apiHandler/employee/productManagement/productManagement.js';
import { fetchUpdateInjuryInsuranceHandler } from '../../../apiHandler/employee/productManagement/productManagement.js';
import { fetchUpdateAutomobileInsuranceHandler } from '../../../apiHandler/employee/productManagement/productManagement.js';
import { fetchGetAllHandler } from '../../../apiHandler/employee/productManagement/productManagement.js';


export const fetchAddDiseaseInsurance = async (addDiseaseInsuranceDTO) => {
  return await fetchAddDiseaseInsuranceHandler(addDiseaseInsuranceDTO);
}

export const fetchGetInsuranceProduct = async (id) => {
  return await fetchGetInsuranceProductHandler(id);
}

export const fetchAddInjuryInsurance = async (addInjuryInsuranceDTO) => {
  return await fetchAddInjuryInsuranceHandler(addInjuryInsuranceDTO);
}

export const fetchAddAutomobileInsurance = async (addAutomobileInsuranceDTO) => {
  return await fetchAddAutomobileInsuranceHandler(addAutomobileInsuranceDTO);
}

export const fetchDeleteInsuranceProduct = async (id) => {
  return await fetchDeleteInsuranceProductHandler(id);
}

export const fetchUpdateDiseaseInsurance = async (index, input, id) => {
  return await fetchUpdateDiseaseInsuranceHandler(index, input, id);
}

export const fetchUpdateInjuryInsurance = async (index, input, id) => {
  return await fetchUpdateInjuryInsuranceHandler(index, input, id);
}

export const fetchUpdateAutomobileInsurance = async (index, input, id, serviceTypeList) => {
  return await fetchUpdateAutomobileInsuranceHandler(index, input, id, serviceTypeList);
}

export const fetchGetAll = async () => {
  return await fetchGetAllHandler();
}

