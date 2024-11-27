import { fetchGetHandler, fetchPostHandler, fetchPatchWithBody, fetchDeleteHandler } from '../../../common/fetchHandler.js';

const defaultUrl = "http://localhost:8080/employee/compensation";

export const fetchRequestCompensationHandler = async (requestCompensationDTO) => {
  return await fetchPatchWithBody(`${defaultUrl}/requestCompensation`, requestCompensationDTO);
}

export const fetchRequestInsuranceMoneyHandler = async (requestInsuranceMoneyDTO) => {
  return await fetchPatchWithBody(`${defaultUrl}/requestInsuranceMoney`, requestInsuranceMoneyDTO);
}

export const fetchGetAllInsuranceMoneyHandler = async () => {
  return await fetchGetHandler(`${defaultUrl}/getAllInsuranceMoney`);
}

export const fetchGetAllUnprocessedInsuranceMoneyHandler = async () => {
  return await fetchGetHandler(`${defaultUrl}/getAllUnprocessedInsuranceMoney`);
}

export const fetchGetAllProcessedInsuranceMoneyHandler = async () => {
  return await fetchGetHandler(`${defaultUrl}/getAllProcessedInsuranceMoney`);
}

export const fetchGetInsuranceMoneyByIdHandler = async (id) => {
  return await fetchGetHandler(`${defaultUrl}/getInsuranceMoneyById?id=${id}`);
}

export const fetchGetInsuranceMoneyRowByIdHandler = async (id) => {
  return await fetchGetHandler(`${defaultUrl}/getInsuranceMoneyRowById?id=${id}`);
}

export const fetchGetContractByIdHandler = async (id) => {
  return await fetchGetHandler(`${defaultUrl}/getContractById?id=${id}`);
}

export const fetchGetCustomerByIdHandler = async (id) => {
  return await fetchGetHandler(`${defaultUrl}/getCustomerById?id=${id}`);
}

export const fetchGetAllReportHandler = async () => {
  return await fetchGetHandler(`${defaultUrl}/getAllReport`);
}

export const fetchGetReportByIdHandler = async (id) => {
  return await fetchGetHandler(`${defaultUrl}/getReportById?id=${id}`);
}

export const fetchGetReportRowByIdHandler = async (id) => {
  return await fetchGetHandler(`${defaultUrl}/getReportRowById?id=${id}`);
}

export const fetchGetAllUnprocessedReportHandler = async () => {
  return await fetchGetHandler(`${defaultUrl}/getAllUnprocessedReport`);
}

export const fetchGetAllCompletedReportHandler = async () => {
  return await fetchGetHandler(`${defaultUrl}/getAllCompletedReport`);
}

export const fetchGetAutomobileByCustomerIdHandler = async (id) => {
  return await fetchGetHandler(`${defaultUrl}/getAutomobileByCustomerId?id=${id}`);
}
