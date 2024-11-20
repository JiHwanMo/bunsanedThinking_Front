import { fetchGetPartnerCompanyHandler } from '../../apiHandler/partnerCompany/partnerCompany.js';
import { fetchGetAllReportByDamageAssessmentCompanyIDHandler } from '../../apiHandler/partnerCompany/partnerCompany.js';
import { fetchGetReportHandler } from '../../apiHandler/partnerCompany/partnerCompany.js';
import { fetchSetDamageAssessmentMoneyHandler } from '../../apiHandler/partnerCompany/partnerCompany.js';

// 일단 테스트 했습니다.
export const fetchGetPartnerCompany = async (id) => {
  return await fetchGetPartnerCompanyHandler(id);
}

// (async () => {
//   const data = await fetchGetPartnerCompany(3001);
//   console.log(data); // 받아온 데이터를 콘솔에 출력한다
// })();

// (async () => {
//   const data = await fetchGetPartnerCompany(3002);
//   console.log(data); // 받아온 데이터를 콘솔에 출력한다
// })();

export const fetchGetAllReportByDamageAssessmentCompanyID = async (id) => {
  return await fetchGetAllReportByDamageAssessmentCompanyIDHandler(id);
}
(async () => {
  const data = await fetchGetAllReportByDamageAssessmentCompanyID(3001);
  console.log(data);
})();

export const fetchGetReport = async (id) => {
  return await fetchGetReportHandler(id);
}
// (async () => {
//   const data = await fetchGetReport(4002);
//   console.log(data);
// })();

// (async () => {
//   const data = await fetchGetReport(4002);
//   console.log(data);
// })();

// (async () => {
//   const data = await fetchGetReport(4003);
//   console.log(data);
// })();

export const fetchSetDamageAssessmentMoney = async (accidentId, damageAssessmentMoney) => {
  return await fetchSetDamageAssessmentMoneyHandler(accidentId, damageAssessmentMoney);
}
// (async () => {
//   const data = await fetchSetDamageAssessmentMoney(4001, 155);
//   console.log(data);
// })();
