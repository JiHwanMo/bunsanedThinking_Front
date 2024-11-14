import { fetchGetHandler, fetchPostHandler, fetchPatchWithBody, fetchPatchWithParams, fetchDeleteHandler } from '../../FetchHandler.js';

const defaultUrl = "http://localhost:8080/employee/sales";

export const fetchEvaluateSalesPerformanceHandler = async (evaluate, id) => {
  return await fetchPatchWithParams(`${defaultUrl}/evaluateSalesPerformance?evaluate=${evaluate}&id=${id}`);
}

export const fetchHandleInsuranceConsultationHandler = async (id) => {
  return await fetchPatchWithParams(`${defaultUrl}/handleInsuranceConsultation?id=${id}`);
}

export const fetchInduceInsuranceProductHandler = async (induceInsuranceProductDTO) => {
  return await fetchPostHandler(`${defaultUrl}/induceInsuranceProduct`,induceInsuranceProductDTO);
}

export const fetchInduceLoanProductHandler = async (induceInsuranceProductDTO) => {
  return await fetchPostHandler(`${defaultUrl}/induceLoanProduct` ,induceInsuranceProductDTO);
}

export const fetchGetAllEmployeeHandler = async () => {
  return await fetchGetHandler(`${defaultUrl}/getAllEmployee`);
}

export const fetchGetEmployeeHandler = async (id) => {
  return await fetchGetHandler(`${defaultUrl}/getEmployee?id=${id}`);
}

export const fetchGetSalesHandler = async (id) => {
  return await fetchGetHandler(`${defaultUrl}/getSales?id=${id}`);
}

export const fetchGetAllCounselHandler = async () => {
  return await fetchGetHandler(`${defaultUrl}/getAllCounsel`);
}

export const fetchGetCounselHandler = async (id) => {
  return await fetchGetHandler(`${defaultUrl}/getCounsel?id=${id}`);
}

export const fetchGetAllProductHandler = async () => {
  return await fetchGetHandler(`${defaultUrl}/getAllProduct`);
}

export const fetchAddDiseaseHistoryHandler = async (induceDiseaseHistoryDTO) => {
  return await fetchPostHandler(`${defaultUrl}/addDiseaseHistory`,induceDiseaseHistoryDTO);
}

export const fetchUpdateContractCountHandler = async (id, contractCount) => {
  return await fetchPatchWithParams(`${defaultUrl}/updateContractCount?id=${id}&contractCount=${contractCount}`);
}

export const fetchGetAllDiseaseInsuranceHandler = async () => {
  return await fetchGetHandler(`${defaultUrl}/getAllDiseaseInsurance`);
}

export const fetchGetAllInjuryInsuranceHandler = async () => {
  return await fetchGetHandler(`${defaultUrl}/getAllInjuryInsurance`);
}

export const fetchGetAllAutomobileInsuranceHandler = async () => {
  return await fetchGetHandler(`${defaultUrl}/getAllAutomobileInsurance`);
}

export const fetchGetAllCollateralLoanHandler = async () => {
  return await fetchGetHandler(`${defaultUrl}/getAllCollateralLoan`);
}

export const fetchGetAllFixedDepositLoanHandler = async () => {
  return await fetchGetHandler(`${defaultUrl}/getAllFixedDepositLoan`);
}

export const fetchGetAllInsuranceContractLoanHandler = async () => {
  return await fetchGetHandler(`${defaultUrl}/getAllInsuranceContractLoan`);
}

export const fetchGetSalesContractCountHandler = async (id) => {
  return await fetchGetHandler(`${defaultUrl}/getSalesContractCount?id=${id}`);
}

export const fetchSetContractCountHandler = async (contractCount, id) => {
  return await fetchPatchWithParams(`${defaultUrl}/setContractCount?contractCount=${contractCount}&id=${id}`);
}
