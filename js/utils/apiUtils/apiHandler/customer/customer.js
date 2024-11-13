import { fetchGetHandler, fetchPostHandler, fetchPatchHandler, fetchDeleteHandler } from '../FetchHandler.js';

const defaultUrl = "http://localhost:8080/customer";

export const fetchApplyEndorsementHandler = async (index, id) => {
  return fetchPatchHandler(`${defaultUrl}/applyEndorsement?index=${index}&contractId=${id}`);
};

export const fetchInsuranceRevivalByIdHandler = async (id) => {
  return fetchPatchHandler(`${defaultUrl}/applyInsuranceRevival?contractId=${id}`);
};

export const fetchApplyInsuranceTerminationHandler = async (id) => {
  return fetchPatchHandler(`${defaultUrl}/applyInsuranceTermination?contractId=${id}`);
};

export const fetchApplyInsuranceRecontractHandler = async (id) => {
  return fetchPatchHandler(`${defaultUrl}/applyInsuranceRecontract?contractId=${id}`);
};

export const fetchPayInsurancefeeHandler = async (depositDTO) => {
  return fetchPostHandler(`${defaultUrl}/payInsurancefee`, depositDTO);
};

export const fetchGetCustomerByIdHandler = async (id) => {
  return fetchGetHandler(`${defaultUrl}/getCustomerById?id=${id}`);
};

export const fetchGetAllInsuranceHandler = async () => {
  return fetchGetHandler(`${defaultUrl}/getAllInsurance`);
}

export const fetchGetAllDiseaseInsuranceHandler = async () => {
  return fetchGetHandler(`${defaultUrl}/getAllDiseaseInsurance`);
}

export const fetchGetAllInjuryInsuranceHandler = async () => {
  return fetchGetHandler(`${defaultUrl}/getAllInjuryInsurance`);
}

export const fetchGetAllAutomobileInsuranceHandler = async () => {
  return fetchGetHandler(`${defaultUrl}/getAllAutomobileInsurance`);
}

export const fetchGetInsuranceByProductIdHandler = async (id) => {
  return fetchGetHandler(`${defaultUrl}/getInsuranceByProductId?id=${id}`);
}

export const fetchGetAllLoanHandler = async () => {
  return fetchGetHandler(`${defaultUrl}/getAllLoan`);
}

export const fetchGetAllCollateralLoanHandler = async () => {
  return fetchGetHandler(`${defaultUrl}/getAllCollateralLoan`);
}

export const fetchGetAllFixedDepositLoanHandler = async () => {
  return fetchGetHandler(`${defaultUrl}/getAllFixedDepositLoan`);
}

export const fetchGetAllInsuranceContractLoanHandler = async () => {
  return fetchGetHandler(`${defaultUrl}/getAllInsuranceContractLoan`);
}

export const fetchGetLoanByProductIdHandler = async (id) => {
  return fetchGetHandler(`${defaultUrl}/getLoanByProductId?id=${id}`);
}

export const fetchGetAllApprovedByCustomerHandler = async () => {
  return fetchGetHandler(`${defaultUrl}/getAllApprovedByCustomer`);
}

export const fetchGetAllContractByCustomerIdHandler = async (id) => {
  return fetchGetHandler(`${defaultUrl}/getAllContractByCustomerId?id=${id}`);
}

export const fetchGetAllAutomobileInsuranceContractHandler = async () => {
  return fetchGetHandler(`${defaultUrl}/getAllAutomobileInsuranceContract`);
}

export const fetchGetAllInjuryInsuranceContractHandler = async () => {
  return fetchGetHandler(`${defaultUrl}/getAllInjuryInsuranceContract`);
}

export const fetchGetAllDiseaseInsuranceContractHandler = async () => {
  return fetchGetHandler(`${defaultUrl}/getAllDiseaseInsuranceContract`);
}

export const fetchGetAllContractByProductIdHandler = async (id) => {
  return fetchGetHandler(`${defaultUrl}/getAllContractByProductId?id=${id}`);
}

export const fetchGetContractByIdHandler = async (id) => {
  return fetchGetHandler(`${defaultUrl}/getContractById?id=${id}`);
}

export const fetchGetContractByOneAutomobileIdHandler = async (id) => {
  return fetchGetHandler(`${defaultUrl}/getContractByOneAutomobileId?id=${id}`);
}

export const fetchGetAllAccidentByCustomerIdHandler = async (id) => {
  return fetchGetHandler(`${defaultUrl}/getAllAccidentByCustomerId?id=${id}`);
}

export const fetchGetAccidentByIdHandler = async (id) => {
  return fetchGetHandler(`${defaultUrl}/getAccidentById?id=${id}`);
}

export const fetchGetAllComplaintsByCustomerIdHandler = async (id) => {
  return fetchGetHandler(`${defaultUrl}/getAllComplaintsByCustomerId?id=${id}`);
}

export const fetchGetComplaintByIdHandler = async (id) => {
  return fetchGetHandler(`${defaultUrl}/getComplaintById?id=${id}`);
}

export const fetchSignUpHandler = async (signUpDTO) => {
  return fetchPostHandler(`${defaultUrl}/signUp`, signUpDTO);
}

export const fetchAskInsuranceCounselHandler = async (askInsuranceCounselDTO) => {
  return fetchPostHandler(`${defaultUrl}/askInsuranceCounsel`, askInsuranceCounselDTO);
}

export const fetchBuyInsuranceHandler = async (buyInsuranceDTO) => {
  return fetchPostHandler(`${defaultUrl}/buyInsurance`, buyInsuranceDTO);
}

export const fetchComplainHandler = async (complainDTO) => {
  return fetchPostHandler(`${defaultUrl}/complain`, complainDTO);
}

export const fetchLoanHandler = async (loanDTO) => {
  return fetchPostHandler(`${defaultUrl}/loan`, loanDTO);
}

export const fetchReceiveInsuranceHandler = async (receiveInsuranceDTO) => {
  return fetchPostHandler(`${defaultUrl}/receiveInsurance`, receiveInsuranceDTO);
}

export const fetchReportAccidentHandler = async (reportAccidentDTO) => {
  return fetchPostHandler(`${defaultUrl}/reportAccident`, reportAccidentDTO);
}

// API를 통해 버튼 데이터를 가져오는 함수 (샘플 데이터)
export const fetchGetData = async () => {
  return [
    { id: 1, name: "상품 리스트" },
    { id: 2, name: "가입 보험 관리" },
    { id: 3, name: "사고 신고" },
    { id: 4, name: "민원 신청" }
  ];
};
