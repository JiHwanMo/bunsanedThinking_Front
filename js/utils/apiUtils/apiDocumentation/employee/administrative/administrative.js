import { fetchAddOfficeSupplyHandler} from '../../../apiHandler/employee/administrative/administrative.js';
import { fetchDeleteOfficeSupplyHandler } from '../../../apiHandler/employee/administrative/administrative.js';
import { fetchGetOfficeSupplyHandler } from '../../../apiHandler/employee/administrative/administrative.js';
import { fetchUpdateOfficeSupplyHandler } from '../../../apiHandler/employee/administrative/administrative.js';
import { fetchGetAllOfficeSuppliesHandler } from '../../../apiHandler/employee/administrative/administrative.js';
import { fetchGetTotalInventoryHandler } from '../../../apiHandler/employee/administrative/administrative.js';

// 일단 테스트 했습니다.
export const fetchAddOfficeSupply = async (addOfficeSupplyDTO) => {
  return await fetchAddOfficeSupplyHandler(addOfficeSupplyDTO);
}
// (async () => {
//   const addOfficeSupplyDTO ={
//     "name": "제트스트림 볼펜",
//     "description": "문구",
//     "inventory": 500,
//     "total_inventory": 2000,
//     "department_id": 91010
//   }
//   const data = await fetchAddOfficeSupply(addOfficeSupplyDTO);
//   console.log(data); // 받아온 데이터를 콘솔에 출력한다
// })();

export const fetchDeleteOfficeSupply = async (id) => {
  return await fetchDeleteOfficeSupplyHandler(id);
}
// (async () => {
//   const data = await fetchDeleteOfficeSupply(9204);
//   console.log(data);
// })();

export const fetchGetOfficeSupply = async (id) => {
  return await fetchGetOfficeSupplyHandler(id);
}
// (async () => {
//   const data = await fetchGetOfficeSupply(9204);
//   console.log(data);
// })();

export const fetchUpdateOfficeSupply = async (updateOfficeSupplyDTO) => {
  return await fetchUpdateOfficeSupplyHandler(updateOfficeSupplyDTO);
}
// (async () => {
//   const updateOfficeSupplyDTO = {
//     "id": 9204,
//     "index": 1,
//     "input": "유성 매직"
//   }
//   const data = await fetchUpdateOfficeSupply(updateOfficeSupplyDTO);
//   console.log(data);
// })();

// (async () => {
//   const updateOfficeSupplyDTO = {
//     "id": 9204,
//     "index": 2,
//     "input": "고급 문구류"
//   }
//   const data = await fetchUpdateOfficeSupply(updateOfficeSupplyDTO);
//   console.log(data);
// })();

// (async () => {
//   const updateOfficeSupplyDTO = {
//     "id": 9204,
//     "index": 3,
//     "input": "600"
//   }
//   const data = await fetchUpdateOfficeSupply(updateOfficeSupplyDTO);
//   console.log(data);
// })();

export const fetchGetAllOfficeSupplies = async () => {
  return await fetchGetAllOfficeSuppliesHandler();
}
// (async () => {
//   const data = await fetchGetAllOfficeSupplies();
//   console.log(data);
// })();

export const fetchGetTotalInventory = async () => {
  return await fetchGetTotalInventoryHandler();
}
// (async () => {
//   const data = await fetchGetTotalInventory();
//   console.log(data);
// })();
