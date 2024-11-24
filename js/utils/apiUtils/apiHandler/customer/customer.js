import { fetchGetHandler, fetchPostHandler, fetchPatchWithParams, fetchDeleteHandler } from '../../common/FetchHandler.js';

const defaultUrl = "http://localhost:8080/customer";

export const fetchApplyEndorsementHandler = async (index, id) => {
  return await fetchPatchWithParams(`${defaultUrl}/applyEndorsement?index=${index}&contractId=${id}`);
};

export const fetchApplyInsuranceRevivalByIdHandler = async (id) => {
  return await fetchPatchWithParams(`${defaultUrl}/applyInsuranceRevival?contractId=${id}`);
};

export const fetchApplyInsuranceTerminationHandler = async (id) => {
  return await fetchPatchWithParams(`${defaultUrl}/applyInsuranceTermination?contractId=${id}`);
};

export const fetchApplyInsuranceRecontractHandler = async (id) => {
  return await fetchPatchWithParams(`${defaultUrl}/applyInsuranceRecontract?contractId=${id}`);
};

export const fetchPayInsurancefeeHandler = async (depositDTO) => {
  return await fetchPostHandler(`${defaultUrl}/payInsurancefee`, depositDTO);
};

export const fetchGetCustomerByIdHandler = async (id) => {
  return await fetchGetHandler(`${defaultUrl}/getCustomerById?id=${id}`);
};

export const fetchGetAllInsuranceHandler = async () => {
  return await fetchGetHandler(`${defaultUrl}/getAllInsurance`);
}

export const fetchGetAllDiseaseInsuranceHandler = async () => {
  return await fetchGetHandler(`${defaultUrl}/getAllDiseaseInsurance`);
}

export const fetchGetAllInjuryInsuranceHandler = async () => {
  return await fetchGetHandler(`${defaultUrl}/getAllInjuryInsurance`);
}

export const fetchGetAllAutomobileInsuranceHandler = async () => {
  return await fetchGetHandler(`${defaultUrl}/getAllAutomobileInsurance`);
}

export const fetchGetInsuranceByProductIdHandler = async (id) => {
  return await fetchGetHandler(`${defaultUrl}/getInsuranceByProductId?id=${id}`);
}

export const fetchGetInsuranceRowByProductIdHandler = async (id) => {
  return await fetchGetHandler(`${defaultUrl}/getInsuranceRowByProductId?id=${id}`);
}

export const fetchGetAllLoanHandler = async () => {
  return await fetchGetHandler(`${defaultUrl}/getAllLoan`);
}

export const fetchGetAllCollateralLoanHandler = async () => {
  return await fetchGetHandler(`${defaultUrl}/getAllCollateralLoan`);
}

export const fetchGetAllFixedDepositLoanHandler = async () => {
  return await fetchGetHandler(`${defaultUrl}/getAllFixedDepositLoan`);
}

export const fetchGetAllInsuranceContractLoanHandler = async () => {
  return await fetchGetHandler(`${defaultUrl}/getAllInsuranceContractLoan`);
}

export const fetchGetLoanByProductIdHandler = async (id) => {
  return await fetchGetHandler(`${defaultUrl}/getLoanByProductId?id=${id}`);
}

export const fetchGetLoanRowByProductIdHandler = async (id) => {
  return await fetchGetHandler(`${defaultUrl}/getLoanRowByProductId?id=${id}`);
}

export const fetchGetAllApprovedByCustomerHandler = async () => {
  return await fetchGetHandler(`${defaultUrl}/getAllApprovedByCustomer`);
}

export const fetchGetAllContractByCustomerIdHandler = async (customerId) => {
  return await fetchGetHandler(`${defaultUrl}/getAllContractByCustomerId?customerId=${customerId}`);
}

export const fetchGetAllAutomobileContractByCustomerIdHandler = async (customerId) => {
  return await fetchGetHandler(`${defaultUrl}/getAllAutomobileContractByCustomerId?customerId=${customerId}`);
}

export const fetchGetAllInjuryContractByCustomerIdHandler = async (customerId) => {
  return await fetchGetHandler(`${defaultUrl}/getAllInjuryContractByCustomerId?customerId=${customerId}`);
}

export const fetchGetAllDiseaseContractByCustomerIdHandler = async (customerId) => {
  return await fetchGetHandler(`${defaultUrl}/getAllDiseaseContractByCustomerId?customerId=${customerId}`);
}

export const fetchGetAllContractByProductIdHandler = async (id) => {
  return await fetchGetHandler(`${defaultUrl}/getAllContractByProductId?id=${id}`);
}

export const fetchGetContractByIdHandler = async (id, customerId) => {
  return await fetchGetHandler(`${defaultUrl}/getContractById?id=${id}&customerId=${customerId}`);
}

export const fetchGetContractRowByIdHandler = async (id, customerId) => {
  return await fetchGetHandler(`${defaultUrl}/getContractRowById?id=${id}&customerId=${customerId}`);
}

export const fetchGetContractByOneAutomobileIdHandler = async (id) => {
  return await fetchGetHandler(`${defaultUrl}/getContractByOneAutomobileId?id=${id}`);
}

export const fetchGetAllAccidentByCustomerIdHandler = async (id) => {
  return await fetchGetHandler(`${defaultUrl}/getAllAccidentByCustomerId?id=${id}`);
}

export const fetchGetAccidentByIdHandler = async (id, customerId) => {
  return await fetchGetHandler(`${defaultUrl}/getAccidentById?id=${id}&customerId=${customerId}`);
}

export const fetchGetAccidentRowByIdHandler = async (id, customerId) => {
  return await fetchGetHandler(`${defaultUrl}/getAccidentRowById?id=${id}&customerId=${customerId}`);
}

export const fetchGetAllComplaintsByCustomerIdHandler = async (id) => {
  return await fetchGetHandler(`${defaultUrl}/getAllComplaintsByCustomerId?id=${id}`);
}

export const fetchGetComplaintByIdHandler = async (id, customerId) => {
  return await fetchGetHandler(`${defaultUrl}/getComplaintById?id=${id}&customerId=${customerId}`);
}

export const fetchGetComplaintRowByIdHandler = async (id, customerId) => {
  return await fetchGetHandler(`${defaultUrl}/getComplaintRowById?id=${id}&customerId=${customerId}`);
}

export const fetchSignUpHandler = async (signUpDTO) => {
  return await fetchPostHandler(`${defaultUrl}/signUp`, signUpDTO);
}

export const fetchAskInsuranceCounselHandler = async (askInsuranceCounselDTO) => {
  return await fetchPostHandler(`${defaultUrl}/askInsuranceCounsel`, askInsuranceCounselDTO);
}

export const fetchBuyInsuranceHandler = async (buyInsuranceDTO) => {
  return await fetchPostHandler(`${defaultUrl}/buyInsurance`, buyInsuranceDTO);
}

export const fetchComplainHandler = async (complainDTO) => {
  return await fetchPostHandler(`${defaultUrl}/complain`, complainDTO);
}

export const fetchLoanHandler = async (loanDTO) => {
  return await fetchPostHandler(`${defaultUrl}/loan`, loanDTO);
}

export const fetchReceiveInsuranceHandler = async (receiveInsuranceDTO) => {
  return await fetchPostHandler(`${defaultUrl}/receiveInsurance`, receiveInsuranceDTO);
}

export const fetchReportAccidentHandler = async (reportAccidentDTO) => {
  return await fetchPostHandler(`${defaultUrl}/reportAccident`, reportAccidentDTO);
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
