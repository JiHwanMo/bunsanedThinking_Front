import {
  fetchGetAllDamageAssessmentCompanyHandler,
  fetchGetAllRoadAssistanceCompanyHandler,
  fetchGetDamageAssessmentCompanyHandler,
  fetchGetRoadAssistanceCompanyHandler,
  fetchGetAllAccidentHandler,
  fetchGetAccidentHandler,
  fetchGetAllCompletedAccidentHandler,
  fetchGetAllUnprocessedAccidentHandler,
  fetchGetAllComplaintHandler,
  fetchGetAllUnprocessedComplaintHandler,
  fetchGetAllProcessedComplaintHandler,
  fetchGetComplaintHandler,
  fetchGetCustomerHandler,
  fetchHandleAccidentHandler,
  fetchHandleComplaintHandler
} from "../../../apiHandler/employee/customerSupport/customerSupport.js";

export const fetchGetAllDamageAssessmentCompany = async () => {
  return await fetchGetAllDamageAssessmentCompanyHandler();
};

export const fetchGetAllRoadAssistanceCompany = async () => {
  return await fetchGetAllRoadAssistanceCompanyHandler();
};

export const fetchGetDamageAssessmentCompany = async () => {
  return await fetchGetDamageAssessmentCompanyHandler();
};

export const fetchGetRoadAssistanceCompany = async () => {
  return await fetchGetRoadAssistanceCompanyHandler();
};

export const fetchGetAllAccident = async () => {
  return await fetchGetAllAccidentHandler();
};

export const fetchGetAccident = async () => {
  return await fetchGetAccidentHandler();
};

export const fetchGetAllCompletedAccident = async () => {
  return await fetchGetAllCompletedAccidentHandler();
};

export const fetchGetAllUnprocessedAccident = async () => {
  return await fetchGetAllUnprocessedAccidentHandler();
};

export const fetchGetAllComplaint = async () => {
  return await fetchGetAllComplaintHandler();
};

export const fetchGetAllUnprocessedComplaint = async () => {
  return await fetchGetAllUnprocessedComplaintHandler();
};

export const fetchGetAllProcessedComplaint = async () => {
  return await fetchGetAllProcessedComplaintHandler();
};

export const fetchGetComplaint = async () => {
  return await fetchGetComplaintHandler();
};

export const fetchGetCustomer = async () => {
  return await fetchGetCustomerHandler();
};

export const fetchHandleAccident = async () => {
  return await fetchHandleAccidentHandler();
};

export const fetchHandleComplaint = async () => {
  return await fetchHandleComplaintHandler();
};
