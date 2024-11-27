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
  fetchHandleComplaintHandler,
  fetchGetEmployeeHandler,
  fetchGetAllProcessingAccidentHandler,
  fetchGetComplaintDetailHandler
} from "../../../apiHandler/employee/customerSupport/customerSupport.js";

export const fetchGetAllDamageAssessmentCompany = async () => {
  return await fetchGetAllDamageAssessmentCompanyHandler();
};

export const fetchGetAllRoadAssistanceCompany = async () => {
  return await fetchGetAllRoadAssistanceCompanyHandler();
};

export const fetchGetDamageAssessmentCompany = async (damageAssessmentCompanyId) => {
  return await fetchGetDamageAssessmentCompanyHandler(damageAssessmentCompanyId); // 3001
};

export const fetchGetRoadAssistanceCompany = async (roadAssistanceCompanyId) => {
  return await fetchGetRoadAssistanceCompanyHandler(roadAssistanceCompanyId); // 3002
};

export const fetchGetAllAccident = async () => {
  return await fetchGetAllAccidentHandler();
};

export const fetchGetAccident = async (accidentId) => {
  return await fetchGetAccidentHandler(accidentId); // 4001
};

export const fetchGetAllCompletedAccident = async () => {
  return await fetchGetAllCompletedAccidentHandler();
};

export const fetchGetAllUnprocessedAccident = async () => {
  return await fetchGetAllUnprocessedAccidentHandler();
};

export const fetchGetAllProcessingAccident = async () => {
  return await fetchGetAllProcessingAccidentHandler();
}

export const fetchGetAllComplaint = async () => {
  return await fetchGetAllComplaintHandler();
};

export const fetchGetAllUnprocessedComplaint = async () => {
  return await fetchGetAllUnprocessedComplaintHandler();
};

export const fetchGetAllProcessedComplaint = async () => {
  return await fetchGetAllProcessedComplaintHandler();
};

export const fetchGetComplaint = async (complaintId) => {
  return await fetchGetComplaintHandler(complaintId); // 5101
};

export const fetchGetComplaintDetail = async (complaintId) => {
  return await fetchGetComplaintDetailHandler(complaintId);
}

export const fetchGetCustomer = async (customerId) => {
  return await fetchGetCustomerHandler(customerId); // 2001
};

export const fetchGetEmployee = async (employeeId) => {
  return await fetchGetEmployeeHandler(employeeId);
}

export const fetchHandleAccident = async (accidentId, damageAssessmentCompanyId, roadsideAssistanceId) => {
  // 4002, 3001, 3002
  return await fetchHandleAccidentHandler(accidentId, damageAssessmentCompanyId, roadsideAssistanceId);
};

export const fetchHandleComplaint = async (complaintId, result, employeeName) => {
  // 5103, "ㄹㅇ ㅋㅋ", "김대현"
  return await fetchHandleComplaintHandler(complaintId, result, employeeName);
};
