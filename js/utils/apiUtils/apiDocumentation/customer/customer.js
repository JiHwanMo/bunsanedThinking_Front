import { fetchApplyEndorsementHandler } from '../../apiHandler/customer/customer.js';
import { fetchInsuranceRevivalByIdHandler } from '../../apiHandler/customer/customer.js';
import { fetchApplyInsuranceTerminationHandler } from '../../apiHandler/customer/customer.js';
import { fetchApplyInsuranceRecontractHandler } from '../../apiHandler/customer/customer.js';
import { fetchPayInsurancefeeHandler } from '../../apiHandler/customer/customer.js';
import { fetchGetCustomerByIdHandler } from '../../apiHandler/customer/customer.js';
import { fetchGetAllInsuranceHandler } from '../../apiHandler/customer/customer.js';
import { fetchGetAllDiseaseInsuranceHandler } from '../../apiHandler/customer/customer.js';
import { fetchGetAllInjuryInsuranceHandler } from '../../apiHandler/customer/customer.js';
import { fetchGetAllAutomobileInsuranceHandler } from '../../apiHandler/customer/customer.js';
import { fetchGetInsuranceByProductIdHandler } from '../../apiHandler/customer/customer.js';
import { fetchGetInsuranceRowByProductIdHandler } from '../../apiHandler/customer/customer.js';
import { fetchGetAllLoanHandler } from '../../apiHandler/customer/customer.js';
import { fetchGetAllCollateralLoanHandler } from '../../apiHandler/customer/customer.js';
import { fetchGetAllFixedDepositLoanHandler } from '../../apiHandler/customer/customer.js';
import { fetchGetAllInsuranceContractLoanHandler } from '../../apiHandler/customer/customer.js';
import { fetchGetLoanByProductIdHandler } from '../../apiHandler/customer/customer.js';
import { fetchGetLoanRowByProductIdHandler } from '../../apiHandler/customer/customer.js';
import { fetchGetAllApprovedByCustomerHandler } from '../../apiHandler/customer/customer.js';
import { fetchGetAllContractByCustomerIdHandler } from '../../apiHandler/customer/customer.js';
import { fetchGetAllAutomobileInsuranceContractHandler } from '../../apiHandler/customer/customer.js';
import { fetchGetAllInjuryInsuranceContractHandler } from '../../apiHandler/customer/customer.js';
import { fetchGetAllDiseaseInsuranceContractHandler } from '../../apiHandler/customer/customer.js';
import { fetchGetAllContractByProductIdHandler } from '../../apiHandler/customer/customer.js';
import { fetchGetContractByIdHandler } from '../../apiHandler/customer/customer.js';
import { fetchGetContractRowByIdHandler } from '../../apiHandler/customer/customer.js';
import { fetchGetContractByOneAutomobileIdHandler } from '../../apiHandler/customer/customer.js';
import { fetchGetAllAccidentByCustomerIdHandler } from '../../apiHandler/customer/customer.js';
import { fetchGetAccidentByIdHandler } from '../../apiHandler/customer/customer.js';
import { fetchGetAccidentRowByIdHandler } from '../../apiHandler/customer/customer.js';
import { fetchGetAllComplaintsByCustomerIdHandler } from '../../apiHandler/customer/customer.js';
import { fetchGetComplaintByIdHandler } from '../../apiHandler/customer/customer.js';
import { fetchGetComplaintRowByIdHandler } from '../../apiHandler/customer/customer.js';
import { fetchSignUpHandler } from '../../apiHandler/customer/customer.js';
import { fetchAskInsuranceCounselHandler } from '../../apiHandler/customer/customer.js';
import { fetchBuyInsuranceHandler } from '../../apiHandler/customer/customer.js';
import { fetchComplainHandler } from '../../apiHandler/customer/customer.js';
import { fetchLoanHandler } from '../../apiHandler/customer/customer.js';
import { fetchReceiveInsuranceHandler } from '../../apiHandler/customer/customer.js';
import { fetchReportAccidentHandler } from '../../apiHandler/customer/customer.js';



// fetchReceiveInsurance 이외 검증 완
export const fetchApplyEndorsement = async (index, id) => {
  return await fetchApplyEndorsementHandler(index, id);
};
// (async () => {
//   const data = await fetchApplyEndorsement(24, 1002);
//   console.log(data); // 받아온 데이터를 콘솔에 출력
// })();

export const fetchInsuranceRevivalById = async (id) => {
  return await fetchInsuranceRevivalByIdHandler(id);
};
// (async () => {
//   const data = await fetchInsuranceRevivalById(1004);
//   console.log(data); // 받아온 데이터를 콘솔에 출력
// })();

export const fetchApplyInsuranceTermination = async (id) => {
  return await fetchApplyInsuranceTerminationHandler(id);
};
// (async () => {
//   const data = await fetchApplyInsuranceTermination(1002);
//   console.log(data); // 받아온 데이터를 콘솔에 출력
// })();

export const fetchApplyInsuranceRecontract = async (id) => {
  return await fetchApplyInsuranceRecontractHandler(id);
};
// (async () => {
//   const data = await fetchApplyInsuranceRecontract(1004);
//   console.log(data); // 받아온 데이터를 콘솔에 출력
// })();

export const fetchPayInsurancefee = async (depositDTO) => {
  return await fetchPayInsurancefeeHandler(depositDTO);
};
// (async () => {
//   const depositDTO = {
//     "depositorName": "유민재",
//     "contractId": 1001,
//     "money": 150000,
//     "depositPath": 0
//   }
//   const data = await fetchPayInsurancefee(depositDTO);
//   console.log(data); // 받아온 데이터를 콘솔에 출력
// })();

export const fetchGetCustomerById = async (id) => {
  return await fetchGetCustomerByIdHandler(id);
};

export const fetchGetAllInsurance = async () => {
  return await fetchGetAllInsuranceHandler();
}

export const fetchGetAllDiseaseInsurance = async () => {
  return await fetchGetAllDiseaseInsuranceHandler();
}

export const fetchGetAllInjuryInsurance = async () => {
  return await fetchGetAllInjuryInsuranceHandler();
}

export const fetchGetAllAutomobileInsurance = async () => {
  return await fetchGetAllAutomobileInsuranceHandler();
}

export const fetchGetInsuranceByProductId = async (id) => {
  return await fetchGetInsuranceByProductIdHandler(id);
}

export const fetchGetInsuranceRowByProductId = async (id) => {
  return await fetchGetInsuranceRowByProductIdHandler(id);
}

export const fetchGetAllLoan = async () => {
  return await fetchGetAllLoanHandler();
}

export const fetchGetAllCollateralLoan = async () => {
  return await fetchGetAllCollateralLoanHandler();
}

export const fetchGetAllFixedDepositLoan = async () => {
  return await fetchGetAllFixedDepositLoanHandler();
}

export const fetchGetAllInsuranceContractLoan = async () => {
  return await fetchGetAllInsuranceContractLoanHandler();
}

export const fetchGetLoanByProductId = async (id) => {
  return await fetchGetLoanByProductIdHandler(id);
}

export const fetchGetLoanRowByProductId = async (id) => {
  return await fetchGetLoanRowByProductIdHandler(id);
}

export const fetchGetAllApprovedByCustomer = async () => {
  return await fetchGetAllApprovedByCustomerHandler();
}

export const fetchGetAllContractByCustomerId = async (id) => {
  return await fetchGetAllContractByCustomerIdHandler(id);
}

export const fetchGetAllAutomobileInsuranceContract = async () => {
  return await fetchGetAllAutomobileInsuranceContractHandler();
}

export const fetchGetAllInjuryInsuranceContract = async () => {
  return await fetchGetAllInjuryInsuranceContractHandler();
}

export const fetchGetAllDiseaseInsuranceContract = async () => {
  return await fetchGetAllDiseaseInsuranceContractHandler();
}

export const fetchGetAllContractByProductId = async (id) => {
  return await fetchGetAllContractByProductIdHandler(id);
}

export const fetchGetContractById = async (id) => {
  return await fetchGetContractByIdHandler(id);
}

export const fetchGetContractRowById = async (id) => {
  return await fetchGetContractRowByIdHandler(id);
}

export const fetchGetContractByOneAutomobileId = async (id) => {
  // 이거 파라미터 고객아이디랍니닼ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ productId 아님 주의
  return await fetchGetContractByOneAutomobileIdHandler(id);
}

export const fetchGetAllAccidentByCustomerId = async (id) => {
  return await fetchGetAllAccidentByCustomerIdHandler(id);
}

export const fetchGetAccidentById = async (id) => {
  return await fetchGetAccidentByIdHandler(id);
}

export const fetchGetAccidentRowById = async (id) => {
  return await fetchGetAccidentRowByIdHandler(id);
}

export const fetchGetAllComplaintsByCustomerId = async (id) => {
  return await fetchGetAllComplaintsByCustomerIdHandler(id);
}

export const fetchGetComplaintById = async (id) => {
  return await fetchGetComplaintByIdHandler(id);
}

export const fetchGetComplaintRowById = async (id) => {
  return await fetchGetComplaintRowByIdHandler(id);
}

export const fetchSignUp = async (signUpDTO) => {
  return await fetchSignUpHandler(signUpDTO);
}
// (async () => {
//   const signUpDTO = {
//     "name": "김대현",
//     "phoneNumber": "010-6350-2855",
//     "job": "교수",
//     "age": 42,
//     "gender": 0,
//     "residentRegistrationNumber": "001122-1234567",
//     "address": "고양시 덕양구",
//     "property": 255,
//     "bankName": "카카오뱅크",
//     "bankAccount": "976-032031-01-016",
//     "tempAccidentHistoryList": null,
//     "tempSurgeryHistoryList": null,
//     "tempDiseaseHistoryList": null
//   }
//   const data = await fetchSignUp(signUpDTO);
//   console.log(data); // 받아온 데이터를 콘솔에 출력
// })();

export const fetchAskInsuranceCounsel = async (askInsuranceCounselDTO) => {
  return await fetchAskInsuranceCounselHandler(askInsuranceCounselDTO)
}
// (async () => {
//   const askInsuranceCounselDTO = {
//     "customerId": 2003,
//     "insuranceId": 7001001,
//     "counselDate": "2024-11-12"
//   }
//   const data = await fetchAskInsuranceCounsel(askInsuranceCounselDTO);
//   console.log(data); // 받아온 데이터를 콘솔에 출력
// })();

export const fetchBuyInsurance = async (buyInsuranceDTO) => {
  return await fetchBuyInsuranceHandler(buyInsuranceDTO);
}
// (async () => {
//   const buyInsuranceDTO = {
//     "insuranceId": 7001001,
//     "customerId": 2003,
//     "employeeId": null
//   }
//   const data = await fetchBuyInsurance(buyInsuranceDTO);
//   console.log(data); // 받아온 데이터를 콘솔에 출력
// })();

export const fetchComplain = async (complainDTO) => {
  return await fetchComplainHandler(complainDTO);
}
// (async () => {
//   const complainDTO = {
//     "complainType": 0,
//     "title": "직원이 너무 불친절해유",
//     "content": "쟤 짜를까유",
//     "customerId": 2002
//   }
//   const data = await fetchComplain(complainDTO);
//   console.log(data); // 받아온 데이터를 콘솔에 출력
// })();

export const fetchLoan = async (loanDTO) => {
  return await fetchLoanHandler(loanDTO);
}
// (async () => {
//   const loanDTO = {
//     "loanId": 7002003,
//     "customerId": 2001,
//     "employeeId": null
//   }
//   const data = await fetchLoan(loanDTO);
//   console.log(data); // 받아온 데이터를 콘솔에 출력
// })();

export const fetchReceiveInsurance = async (receiveInsuranceDTO) => {
  // 테스트 미실시
  return await fetchReceiveInsuranceHandler(receiveInsuranceDTO);
}
// (async () => {
//   const receiveInsuranceDTO = {
//     "contractId": 1002,
//     "customerId": 2002,
//     "medicalCertificateImage": "이미지인데 어캐 지정하죠",
//     "receiptImage": "이미지인데 어캐 지정하죠",
//     "residentRegistrationCardImage": "이미지인데 어캐 지정하죠"
//   }
//   const data = await fetchReceiveInsurance(receiveInsuranceDTO);
//   console.log(data); // 받아온 데이터를 콘솔에 출력
// })();

export const fetchReportAccident = async (reportAccidentDTO) => {
  return await fetchReportAccidentHandler(reportAccidentDTO);
}
// (async () => {
//   const reportAccidentDTO = {
//     "accidentDate": "2024-12-25",
//     "location": "명지대 본관 1350호",
//     "serviceType": 1,
//     "customerId": 2001
//   }
//   const data = await fetchReportAccident(reportAccidentDTO);
//   console.log(data); // 받아온 데이터를 콘솔에 출력
// })();
