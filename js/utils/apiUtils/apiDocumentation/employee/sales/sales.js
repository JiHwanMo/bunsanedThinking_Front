import {
  fetchEvaluateSalesPerformanceHandler,
  fetchGetAllCompletedCounselHandler,
  fetchGetAllUnprocessedCounselHandler,
  fetchGetCounselDetailHandler,
  fetchGetInsuranceProductDetailHandler,
  fetchGetInsuranceProductHandler,
  fetchGetLoanProductDetailHandler,
  fetchGetLoanProductHandler,
  fetchGetSalesDetailHandler,
} from '../../../apiHandler/employee/sales/sales.js';
import { fetchHandleInsuranceConsultationHandler } from '../../../apiHandler/employee/sales/sales.js';
import { fetchInduceInsuranceProductHandler } from '../../../apiHandler/employee/sales/sales.js';
import { fetchInduceLoanProductHandler } from '../../../apiHandler/employee/sales/sales.js';
import { fetchGetAllSalesHandler } from '../../../apiHandler/employee/sales/sales.js';
import { fetchGetSalesHandler } from '../../../apiHandler/employee/sales/sales.js';
import { fetchGetAllCounselHandler } from '../../../apiHandler/employee/sales/sales.js';
import { fetchGetCounselHandler } from '../../../apiHandler/employee/sales/sales.js';
import { fetchGetAllInsuranceProductHandler } from '../../../apiHandler/employee/sales/sales.js';
import { fetchAddDiseaseHistoryHandler } from '../../../apiHandler/employee/sales/sales.js';
import { fetchUpdateContractCountHandler } from '../../../apiHandler/employee/sales/sales.js';
import { fetchGetAllDiseaseInsuranceHandler } from '../../../apiHandler/employee/sales/sales.js';
import { fetchGetAllInjuryInsuranceHandler } from '../../../apiHandler/employee/sales/sales.js';
import { fetchGetAllAutomobileInsuranceHandler } from '../../../apiHandler/employee/sales/sales.js';
import { fetchGetAllCollateralLoanHandler } from '../../../apiHandler/employee/sales/sales.js';
import { fetchGetAllFixedDepositLoanHandler } from '../../../apiHandler/employee/sales/sales.js';
import { fetchGetAllInsuranceContractLoanHandler } from '../../../apiHandler/employee/sales/sales.js';
import { fetchGetSalesContractCountHandler } from '../../../apiHandler/employee/sales/sales.js';
import { fetchSetContractCountHandler } from '../../../apiHandler/employee/sales/sales.js';
import { fetchGetAllLoanProductHandler } from '../../../apiHandler/employee/sales/sales.js';

export const fetchEvaluateSalesPerformance = async (evaluate, id) => {
  return await fetchEvaluateSalesPerformanceHandler(evaluate, id);
}

export const fetchHandleInsuranceConsultation = async (id) => {
  return await fetchHandleInsuranceConsultationHandler(id);
}

export const fetchInduceInsuranceProduct = async (induceInsuranceProductDTO) => {
  return await fetchInduceInsuranceProductHandler(induceInsuranceProductDTO);
}

export const fetchInduceLoanProduct = async (induceInsuranceProductDTO) => {
  return await fetchInduceLoanProductHandler(induceInsuranceProductDTO);
}

export const fetchGetAllSales = async (id) => {
  return await fetchGetAllSalesHandler(id);
}

export const fetchGetSales = async (id) => {
  return await fetchGetSalesHandler(id);
}

export const fetchGetSalesDetail = async (id) => {
  return await fetchGetSalesDetailHandler(id);
}

export const fetchGetAllCounsel = async () => {
  return await fetchGetAllCounselHandler();
}

export const fetchGetAllCompletedCounsel = async () => {
  return await fetchGetAllCompletedCounselHandler();
}

export const fetchGetAllUnprocessedCounsel = async () => {
  return await fetchGetAllUnprocessedCounselHandler();
}

export const fetchGetCounsel = async (id) => {
  return await fetchGetCounselHandler(id);
}

export const fetchGetCounselDetail = async (id) => {
  return await fetchGetCounselDetailHandler(id);
}

export const fetchGetAllInsuranceProduct = async () => {
  return await fetchGetAllInsuranceProductHandler();
}

export const fetchGetInsuranceProduct = async (id) => {
  return await fetchGetInsuranceProductHandler(id);
}

export const fetchGetInsuranceProductDetail = async (id) => {
  return await fetchGetInsuranceProductDetailHandler(id);
}

export const fetchGetAllLoanProduct = async () => {
  return await fetchGetAllLoanProductHandler();
}

export const fetchGetLoanProductDetail = async (id) => {
  return await fetchGetLoanProductDetailHandler(id);
}

export const fetchGetLoanProduct = async (id) => {
  return await fetchGetLoanProductHandler(id);
}

export const fetchAddDiseaseHistory = async (induceDiseaseHistoryDTO) => {
  return await fetchAddDiseaseHistoryHandler(induceDiseaseHistoryDTO);
}

export const fetchUpdateContractCount = async (id, contractCount) => {
  return await fetchUpdateContractCountHandler(id, contractCount);
}

export const fetchGetAllDiseaseInsurance = async () => {
  return await fetchGetAllDiseaseInsuranceHandler();
}

export const fetchGetAllInjuryInsurance = async () => {
  return await fetchGetAllInjuryInsuranceHandler();
}

export const fetchGetAllAutomobileInsurance = async () => {
  return await fetchGetAllAutomobileInsuranceHandler();
}

export const fetchGetAllCollateralLoan = async () => {
  return await fetchGetAllCollateralLoanHandler();
}

export const fetchGetAllFixedDepositLoan = async () => {
  return await fetchGetAllFixedDepositLoanHandler();
}

export const fetchGetAllInsuranceContractLoan = async () => {
  return await fetchGetAllInsuranceContractLoanHandler();
}

export const fetchGetSalesContractCount = async (id) => {
  return await fetchGetSalesContractCountHandler(id);
}

export const fetchSetContractCount = async (contractCount, id) => {
  return await fetchSetContractCountHandler(contractCount, id);
}
