import { fetchGetHandler, fetchPatchWithParams } from "../../../common/FetchHandler.js"

const defaultURL = "http://localhost:8080/employee/customerSupport";

export const fetchGetAllDamageAssessmentCompanyHandler = async () => {
  return await fetchGetHandler(`${defaultURL}/getAllDamageAssessmentCompany`);
};

export const fetchGetAllRoadAssistanceCompanyHandler = async () => {
  return await fetchGetHandler(`${defaultURL}/getAllRoadAssistanceCompany`);
};

export const fetchGetDamageAssessmentCompanyHandler = async (damageAssessmentCompanyId) => {
  return await fetchGetHandler(`${defaultURL}/getDamageAssessmentCompany?damageAssessmentCompanyId=${damageAssessmentCompanyId}`);
};

export const fetchGetRoadAssistanceCompanyHandler = async (roadAssistanceCompanyId) => {
  return await fetchGetHandler(`${defaultURL}/getRoadAssistanceCompany?roadAssistanceCompanyId=${roadAssistanceCompanyId}`);
};

export const fetchGetAllAccidentHandler = async () => {
  return await fetchGetHandler(`${defaultURL}/getAllAccident`);
};

export const fetchGetAccidentHandler = async (accidentId) => {
  return await fetchGetHandler(`${defaultURL}/getAccident?accidentId=${accidentId}`);
};

export const fetchGetAllCompletedAccidentHandler = async () => {
  return await fetchGetHandler(`${defaultURL}/getAllCompletedAccident`);
};

export const fetchGetAllUnprocessedAccidentHandler = async () => {
  return await fetchGetHandler(`${defaultURL}/getAllUnprocessedAccident`);
};

export const fetchGetAllComplaintHandler = async () => {
  return await fetchGetHandler(`${defaultURL}/getAllComplaint`);
};

export const fetchGetAllUnprocessedComplaintHandler = async () => {
  return await fetchGetHandler(`${defaultURL}/getAllUnprocessedComplaint`);
};

export const fetchGetAllProcessedComplaintHandler = async () => {
  return await fetchGetHandler(`${defaultURL}/getAllProcessedComplaint`);
};

export const fetchGetComplaintHandler = async (complaintId) => {
  return await fetchGetHandler(`${defaultURL}/getComplaint?complaintId=${complaintId}`);
};

export const fetchGetCustomerHandler = async (customerId) => {
  return await fetchGetHandler(`${defaultURL}/getCustomer?customerId=${customerId}`);
};

export const fetchHandleAccidentHandler = async (accidentId, damageAssessmentCompanyId, roadsideAssistanceCompanyId) => {
  return await fetchPatchWithParams(`${defaultURL}/handleAccident?accidentId=${accidentId}&damageAssessmentCompanyId=${damageAssessmentCompanyId}&roadsideAssistanceCompanyId=${roadsideAssistanceCompanyId}`);
};

export const fetchHandleComplaintHandler = async (complaintId, result, employeeName) => {
  return await fetchPatchWithParams(`${defaultURL}/handleComplaint?complaintId=${complaintId}&result=${result}&employeeName=${employeeName}`);
};

export const fetchGetEmployeeHandler = async (employeeId) => {
  return await fetchGetHandler(`${defaultURL}/getEmployee?employeeId=${employeeId}`);
}
