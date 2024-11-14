import { fetchAddPartnerCompanyHandler } from '../../../apiHandler/employee/compensationPlanning/compensationPlanning.js';
import { fetchEvaluatePartnerCompanyHandler } from '../../../apiHandler/employee/compensationPlanning/compensationPlanning.js';
import { fetchGetPartnerCompanyHandler } from '../../../apiHandler/employee/compensationPlanning/compensationPlanning.js';
import { fetchUpdatePartnerCompanyHandler } from '../../../apiHandler/employee/compensationPlanning/compensationPlanning.js';
import { fetchDeletePartnerCompanyHandler } from '../../../apiHandler/employee/compensationPlanning/compensationPlanning.js';
import { fetchGetAllHandler } from '../../../apiHandler/employee/compensationPlanning/compensationPlanning.js';

// 검증 완
export const fetchAddPartnerCompany = async (partnerCompanyDTO) => {
  return await fetchAddPartnerCompanyHandler(partnerCompanyDTO);
}
// (async () => {
//   const partnerCompanyDTO = {
//     "name": "삼성전자",
//     "phoneNumber": "010-3737-2855",
//     "partnerCompanyType": 1,
//     "headName": "김대현",
//     "headPhoneNumber": "010-1111-2222"
//   }
//   const data = await fetchAddPartnerCompany(partnerCompanyDTO);
//   console.log(data); // 받아온 데이터를 콘솔에 출력
// })();

export const fetchEvaluatePartnerCompany = async (evaluate, partnerCompanyId) => {
  return await fetchEvaluatePartnerCompanyHandler(evaluate, partnerCompanyId);
}
// (async () => {
//   const data = await fetchEvaluatePartnerCompany(10, 3003);
//   console.log(data); // 받아온 데이터를 콘솔에 출력
// })();

export const fetchGetPartnerCompany = async (id) => {
  return await fetchGetPartnerCompanyHandler(id);
}
// (async () => {
//   const data = await fetchGetPartnerCompany(3003);
//   console.log(data); // 받아온 데이터를 콘솔에 출력
// })();

export const fetchUpdatePartnerCompany = async (partnerCompanyDTO) => {
  return await fetchUpdatePartnerCompanyHandler(partnerCompanyDTO);
}
// (async () => {
//   const partnerCompanyDTO = {
//     "index": 2,
//     "input": "010-5678-3456",
//     "partnerCompanyId": 3003
//   }
//   const data = await fetchUpdatePartnerCompany(partnerCompanyDTO);
//   console.log(data); // 받아온 데이터를 콘솔에 출력
// })();

export const fetchDeletePartnerCompany = async (id) => {
  return await fetchDeletePartnerCompanyHandler(id);
}
// (async () => {
//   const data = await fetchDeletePartnerCompany(3003);
//   console.log(data); // 받아온 데이터를 콘솔에 출력
// })();

export const fetchGetAll = async () => {
  return await fetchGetAllHandler();
}
// (async () => {
//   const data = await fetchGetAll();
//   console.log(data); // 받아온 데이터를 콘솔에 출력
// })();
