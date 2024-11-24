import { fetchAddDepartmentHandler} from '../../../apiHandler/employee/managementPlanning/managementPlanning.js';
import { fetchDeleteDepartmentHandler } from '../../../apiHandler/employee/managementPlanning/managementPlanning.js';
import { fetchGetDepartmentHandler } from '../../../apiHandler/employee/managementPlanning/managementPlanning.js';
import { fetchUpdateDepartmentHandler } from '../../../apiHandler/employee/managementPlanning/managementPlanning.js';

// 일단 테스트 했습니다.
export const fetchAddDepartment = async(addDepartmentDTO)  => {
  return await fetchAddDepartmentHandler(addDepartmentDTO);
}
// (async () => {
//   const addDepartmentDTO = {
//     "name": "총괄경비팀",
//     "task": "기업 전체 경비 및 보안 유지",
//     "purpose": "기업 총괄 경비",
//     "head_name": "이순신"
//   }
//   const data = await fetchAddDepartment(addDepartmentDTO);
//   console.log(data); // 받아온 데이터를 콘솔에 출력한다
// })();

export const fetchDeleteDepartment = async(id)  => {
  return await fetchDeleteDepartmentHandler(id);
}
// (async () => {
//   const data = await fetchDeleteDepartment(91014);
//   console.log(data);
// })();

export const fetchGetDepartment = async(id)  => {
  return await fetchGetDepartmentHandler(id);
}
// (async () => {
//   const data = await fetchGetDepartment(91010);
//   console.log(data);
// })();

export const fetchUpdateDepartment = async(updateDepartmentDTO)  => {
  return await fetchUpdateDepartmentHandler(updateDepartmentDTO);
}
// (async () => {
//   const updateDepartmentDTO = {
//     "id": 91014,
//     "index": 1,
//     "input": "기획팀"
//   }
//   const data = await fetchUpdateDepartment(updateDepartmentDTO);
//   console.log(data);
// })();
//
// (async () => {
//   const updateDepartmentDTO = {
//     "id": 91014,
//     "index": 2,
//     "input": "전사적 기획 관리"
//   }
//   const data = await fetchUpdateDepartment(updateDepartmentDTO);
//   console.log(data);
// })();
//
// (async () => {
//   const updateDepartmentDTO = {
//     "id": 91014,
//     "index": 3,
//     "input": "신규 사업 개발 및 전략 수립"
//   }
//   const data = await fetchUpdateDepartment(updateDepartmentDTO);
//   console.log(data);
// })();
//
// (async () => {
//   const updateDepartmentDTO = {
//     "id": 91014,
//     "index": 4,
//     "input": "킹세종"
//   }
//   const data = await fetchUpdateDepartment(updateDepartmentDTO);
//   console.log(data);
// })();
