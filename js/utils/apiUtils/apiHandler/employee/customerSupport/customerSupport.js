import { fetchGetHandler, fetchPatchHandler } from "../../FetchHandler.js"

export const fetchGetAllDamageAssessmentCompanyHandler = async () => {
  return await fetchGetHandler("http://localhost:8080/employee/customerSupport/getAllDamageAssessmentCompany");
};

export const fetchGetAllRoadAssistanceCompanyHandler = async () => {
  return await fetchGetHandler("http://localhost:8080/employee/customerSupport/getAllRoadAssistanceCompany");
};

export const fetchGetDamageAssessmentCompanyHandler = async () => {
  return await fetchGetHandler("http://localhost:8080/employee/customerSupport/getDamageAssessmentCompany?damageAssessmentCompanyId=3001");
};

export const fetchGetRoadAssistanceCompanyHandler = async () => {
  return await fetchGetHandler("http://localhost:8080/employee/customerSupport/getRoadAssistanceCompany?roadAssistanceCompanyId=3002");
};

export const fetchGetAllAccidentHandler = async () => {
  return await fetchGetHandler("http://localhost:8080/employee/customerSupport/getAllAccident");
};

export const fetchGetAccidentHandler = async () => {
  return await fetchGetHandler("http://localhost:8080/employee/customerSupport/getAccident?accidentId=4001");
};

export const fetchGetAllCompletedAccidentHandler = async () => {
  return await fetchGetHandler("http://localhost:8080/employee/customerSupport/getAllCompletedAccident");
};

export const fetchGetAllUnprocessedAccidentHandler = async () => {
  return await fetchGetHandler("http://localhost:8080/employee/customerSupport/getAllUnprocessedAccident");
};

export const fetchGetAllComplaintHandler = async () => {
  return await fetchGetHandler("http://localhost:8080/employee/customerSupport/getAllComplaint");
};

export const fetchGetAllUnprocessedComplaintHandler = async () => {
  return await fetchGetHandler("http://localhost:8080/employee/customerSupport/getAllUnprocessedComplaint");
};

export const fetchGetAllProcessedComplaintHandler = async () => {
  return await fetchGetHandler("http://localhost:8080/employee/customerSupport/getAllProcessedComplaint");
};

export const fetchGetComplaintHandler = async () => {
  return await fetchGetHandler("http://localhost:8080/employee/customerSupport/getComplaint?complaintId=5101");
};

export const fetchGetCustomerHandler = async () => {
  return await fetchGetHandler("http://localhost:8080/employee/customerSupport/getCustomer?customerId=2001");
};

export const fetchHandleAccidentHandler = async () => {
  return await fetchPatchHandler("http://localhost:8080/employee/customerSupport/handleAccident?accidentId=4002&damageAssessmentCompanyId=3001&roadsideAssistanceCompanyId=3002");
};

export const fetchHandleComplaintHandler = async () => {
  return await fetchPatchHandler("http://localhost:8080/employee/customerSupport/handleComplaint?complaintId=5103&result=ㄹㅇ ㅋㅋ&employeeName=김대현");
};
