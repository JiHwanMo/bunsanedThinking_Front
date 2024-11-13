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
import { fetchGetAllLoanHandler } from '../../apiHandler/customer/customer.js';
import { fetchGetAllCollateralLoanHandler } from '../../apiHandler/customer/customer.js';
import { fetchGetAllFixedDepositLoanHandler } from '../../apiHandler/customer/customer.js';
import { fetchGetAllInsuranceContractLoanHandler } from '../../apiHandler/customer/customer.js';
import { fetchGetLoanByProductIdHandler } from '../../apiHandler/customer/customer.js';
import { fetchGetAllApprovedByCustomerHandler } from '../../apiHandler/customer/customer.js';
import { fetchGetAllContractByCustomerIdHandler } from '../../apiHandler/customer/customer.js';
import { fetchGetAllAutomobileInsuranceContractHandler } from '../../apiHandler/customer/customer.js';
import { fetchGetAllInjuryInsuranceContractHandler } from '../../apiHandler/customer/customer.js';
import { fetchGetAllDiseaseInsuranceContractHandler } from '../../apiHandler/customer/customer.js';
import { fetchGetAllContractByProductIdHandler } from '../../apiHandler/customer/customer.js';
import { fetchGetContractByIdHandler } from '../../apiHandler/customer/customer.js';
import { fetchGetContractByOneAutomobileIdHandler } from '../../apiHandler/customer/customer.js';
import { fetchGetAllAccidentByCustomerIdHandler } from '../../apiHandler/customer/customer.js';
import { fetchGetAccidentByIdHandler } from '../../apiHandler/customer/customer.js';
import { fetchGetAllComplaintsByCustomerIdHandler } from '../../apiHandler/customer/customer.js';
import { fetchGetComplaintByIdHandler } from '../../apiHandler/customer/customer.js';
import { fetchSignUpHandler } from '../../apiHandler/customer/customer.js';
import { fetchAskInsuranceCounselHandler } from '../../apiHandler/customer/customer.js';
import { fetchBuyInsuranceHandler } from '../../apiHandler/customer/customer.js';
import { fetchComplainHandler } from '../../apiHandler/customer/customer.js';
import { fetchLoanHandler } from '../../apiHandler/customer/customer.js';
import { fetchReceiveInsuranceHandler } from '../../apiHandler/customer/customer.js';
import { fetchReportAccidentHandler } from '../../apiHandler/customer/customer.js';




(async () => {
  const data = await fetchApplyEndorsementHandler(1, 1002);
  console.log(data); // 받아온 데이터를 콘솔에 출력
})();
// 아래 검증 필요
export const fetchApplyEndorsement = async (index, id) => {
  return await fetchApplyEndorsementHandler(index, id);
};

export const fetchInsuranceRevivalById = async (id) => {
  return await fetchInsuranceRevivalByIdHandler(id);
};

export const fetchApplyInsuranceTermination = async (id) => {
  return await fetchApplyInsuranceTerminationHandler(id);
};

export const fetchApplyInsuranceRecontract = async (id) => {
  return await fetchApplyInsuranceRecontractHandler(id);
};

export const fetchPayInsurancefee = async (depositDTO) => {
  return await fetchPayInsurancefeeHandler(depositDTO);
};



// get 검증 완
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

export const fetchGetContractByOneAutomobileId = async (id) => {
  // 이거 파라미터 고객아이다랍니닼ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ productId 아님 주의
  return await fetchGetContractByOneAutomobileIdHandler(id);
}

export const fetchGetAllAccidentByCustomerId = async (id) => {
  return await fetchGetAllAccidentByCustomerIdHandler(id);
}

export const fetchGetAccidentById = async (id) => {
  return await fetchGetAccidentByIdHandler(id);
}

export const fetchGetAllComplaintsByCustomerId = async (id) => {
  return await fetchGetAllComplaintsByCustomerIdHandler(id);
}

export const fetchGetComplaintById = async (id) => {
  return await fetchGetComplaintByIdHandler(id);
}






// 아래 검증 필요
export const fetchSignUp = async (signUpDTO) => {
  return await fetchSignUpHandler(signUpDTO);
}

export const fetchAskInsuranceCounsel = async (askInsuranceCounselDTO) => {
  return await fetchAskInsuranceCounselHandler(askInsuranceCounselDTO)
}

export const fetchBuyInsurance = async (buyInsuranceDTO) => {
  return await fetchBuyInsuranceHandler(buyInsuranceDTO);
}

export const fetchComplain = async (complainDTO) => {
  return await fetchComplainHandler(complainDTO);
}

export const fetchLoan = async (loanDTO) => {
  return await fetchLoanHandler(loanDTO);
}

export const fetchReceiveInsurance = async (receiveInsuranceDTO) => {
  return await fetchReceiveInsuranceHandler(receiveInsuranceDTO);
}

export const fetchReportAccident = async (reportAccidentDTO) => {
  return await fetchReportAccidentHandler(reportAccidentDTO);
}
