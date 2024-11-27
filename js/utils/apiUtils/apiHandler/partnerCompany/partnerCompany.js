import { fetchGetHandler, fetchPatchWithParams } from '../../common/fetchHandler.js';

const defaultUrl = "http://localhost:8080/partnerCompany";

export const fetchGetPartnerCompanyHandler = async (id) => {
  return await fetchGetHandler(`${defaultUrl}/getPartnerCompanyById?id=${id}`);
};

export const fetchGetAllReportByDamageAssessmentCompanyIDHandler = async (id) => {
  return await fetchGetHandler(`${defaultUrl}/getAllReportByDamageAssessmentCompanyID?id=${id}`);
};

export const fetchGetReportHandler = async (id) => {
  return await fetchGetHandler(`${defaultUrl}/getReport?id=${id}`);
};

export const fetchSetDamageAssessmentMoneyHandler = async (accidentId, damageAssessmentMoney) => {
  return await fetchPatchWithParams(`${defaultUrl}/setDamageAssessmentMoney?accidentId=${accidentId}&damageAssessmentMoney=${damageAssessmentMoney}`);
};
