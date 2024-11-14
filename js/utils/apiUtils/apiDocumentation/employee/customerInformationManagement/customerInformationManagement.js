import { fetchAddCustomerInformationHandler } from '../../../apiHandler/employee/customerInformationManagement/customerInformationManagement.js';
import { fetchDeleteCustomerInformationHandler } from '../../../apiHandler/employee/customerInformationManagement/customerInformationManagement.js';
import { fetchGetCustomerInformationHandler } from '../../../apiHandler/employee/customerInformationManagement/customerInformationManagement.js';
import { fetchUpdateCustomerInformationHandler } from '../../../apiHandler/employee/customerInformationManagement/customerInformationManagement.js';
import { fetchGetAllCustomerInformationHandler } from '../../../apiHandler/employee/customerInformationManagement/customerInformationManagement.js';

// 일단 테스트 했습니다. 다만, 날자 형식에 문제가 있어요. 어떤거는 잘 나오고, 어떤거는 이상하게 나오고
export const fetchAddCustomerInformation = async (addCustomerInformationDTO) => {
  return await fetchAddCustomerInformationHandler(addCustomerInformationDTO);
}
// (async () => {
//   const addCustomerInformationDTO = {
//     "name": "홍길동",
//     "phoneNumber": "010-1234-5678",
//     "job": "개발자",
//     "age": 35,
//     "gender": 1,
//     "residentRegistrationNumber": "900101-1234567",
//     "address": "서울특별시 강남구",
//     "property": 100000000,
//     "accidentHistoryList": [
//       {
//         "date": "2023-04-15",
//         "accidentDetail": "자동차 사고"
//       },
//       {
//         "date": "2022-12-10",
//         "accidentDetail": "산업재해"
//       }
//     ],
//     "surgeryHistoryList": [
//       {
//         "date": "2021-03-01",
//         "hospitalName": "서울대병원",
//         "name": "심장 수술"
//       }
//     ],
//     "diseaseHistoryList": [
//       {
//         "dateOfDiagnosis": "2019-05-20",
//         "name": "고혈압"
//       },
//       {
//         "dateOfDiagnosis": "2020-11-15",
//         "name": "당뇨병"
//       }
//     ],
//     "bankName": "국민은행",
//     "bankAccount": "123-456-7890"
//   }
//   const data = await fetchAddCustomerInformationHandler(addCustomerInformationDTO);
//   console.log(data); // 받아온 데이터를 콘솔에 출력한다
// })();

export const fetchDeleteCustomerInformation = async (id) => {
  return await fetchDeleteCustomerInformationHandler(id);
}
// (async () => {
//   const data = await fetchDeleteCustomerInformation(2004);
//   console.log(data);
// })();

export const fetchGetCustomerInformation = async (id) => {
  return await fetchGetCustomerInformationHandler(id);
}
// (async () => {
//   const data = await fetchGetCustomerInformation(2004);
//   console.log(data);
//   // console.log(JSON.stringify(data, null, 2)); // console.log(data); 를 했을 때 생략된걸 보고 싶을 때 사용
// })();

export const fetchUpdateCustomerInformation = async (updateCustomerInformationDTO) => {
  return await fetchUpdateCustomerInformationHandler(updateCustomerInformationDTO);
}
// (async () => {
//   const updateCustomerInformationDTO = {
//     "id": 2004,
//     "index": 1,
//     "input": "나근육"
//   }
//   const data = await fetchUpdateCustomerInformation(updateCustomerInformationDTO);
//   console.log(data);
// })();

// (async () => {
//   const updateCustomerInformationDTO = {
//     "id": 2004,
//     "index": 2,
//     "input": "010-9876-5432"
//   }
//   const data = await fetchUpdateCustomerInformation(updateCustomerInformationDTO);
//   console.log(data);
// })();

// (async () => {
//   const updateCustomerInformationDTO = {
//     "id": 2004,
//     "index": 3,
//     "input": "디자이너"
//   }
//   const data = await fetchUpdateCustomerInformation(updateCustomerInformationDTO);
//   console.log(data);
// })();

// (async () => {
//   const updateCustomerInformationDTO = {
//     "id": 2004,
//     "index": 4,
//     "input": "40"
//   }
//   const data = await fetchUpdateCustomerInformation(updateCustomerInformationDTO);
//   console.log(data);
// })();

// (async () => {
//   const updateCustomerInformationDTO = {
//     "id": 2004,
//     "index": 5,
//     "input": "0"
//   }
//   const data = await fetchUpdateCustomerInformation(updateCustomerInformationDTO);
//   console.log(data);
// })();

// (async () => {
//   const updateCustomerInformationDTO = {
//     "id": 2004,
//     "index": 6,
//     "input": "부산광역시 해운대구"
//   }
//   const data = await fetchUpdateCustomerInformation(updateCustomerInformationDTO);
//   console.log(data);
// })();

// (async () => {
//   const updateCustomerInformationDTO = {
//     "id": 2004,
//     "index": 7,
//     "input": "500000"
//   }
//   const data = await fetchUpdateCustomerInformation(updateCustomerInformationDTO);
//   console.log(data);
// })();

// (async () => {
//   const updateCustomerInformationDTO = {
//     "id": 2004,
//     "index": 8,
//     "input": "우리은행"
//   }
//   const data = await fetchUpdateCustomerInformation(updateCustomerInformationDTO);
//   console.log(data);
// })();

// (async () => {
//   const updateCustomerInformationDTO = {
//     "id": 2004,
//     "index": 9,
//     "input": "3333-444-555555"
//   }
//   const data = await fetchUpdateCustomerInformation(updateCustomerInformationDTO);
//   console.log(data);
// })();

export const fetchGetAllCustomerInformation = async () => {
  return await fetchGetAllCustomerInformationHandler();
}
// (async () => {
//   const data = await fetchGetAllCustomerInformation();
//   // console.log(data);
//   console.log(JSON.stringify(data, null, 2)); // console.log(data); 를 했을 때 생략된걸 보고 싶을 때 사용
// })();
