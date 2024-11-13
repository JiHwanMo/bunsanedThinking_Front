import { fetchGetHandler, fetchPostHandler, fetchPatchHandler, fetchDeleteHandler } from '../FetchHandler.js';

const defaultUrl = "http://localhost:8080/customer";

export const fetchGetCustomerByIdHandler = async (id) => {
  return fetchGetHandler(`${defaultUrl}/getCustomerById?id=2003`);
};

export const fetchGetAllInsuranceHandler = async () => {
  return fetchGetHandler(`${defaultUrl}/getAllInsurance`);
}

export const fetchGetAllDiseaseInsuranceHandler = async () => {
  return fetchGetHandler(`${defaultUrl}/getAllDiseaseInsurance`);
}

export const fetchGetAllInsuranceHandler = async () => {
  return fetchGetHandler(`${defaultUrl}/getAllInjuryInsurance`);
}

export const fetchGetAllInsuranceHandler = async () => {
  return fetchGetHandler(`${defaultUrl}/getAllAutomobileInsurance`);
}

export const fetchGetAllInsuranceHandler = async () => {
  return fetchGetHandler(`${defaultUrl}/getAllLoan`);
}

export const fetchGetAllInsuranceHandler = async () => {
  return fetchGetHandler(`${defaultUrl}/getAllCollateralLoan`);
}

export const fetchGetAllInsuranceHandler = async () => {
  return fetchGetHandler(`${defaultUrl}/getAllFixedDepositLoan`);
}

export const fetchGetAllInsuranceHandler = async () => {
  return fetchGetHandler(`${defaultUrl}/getAllInsuranceContractLoan`);
}

export const fetchGetAllInsuranceHandler = async () => {
  return fetchGetHandler(`${defaultUrl}/getLoanByProductId`);
}

export const fetchGetAllInsuranceHandler = async () => {
  return fetchGetHandler(`${defaultUrl}/getAllApprovedByCustomer`);
}

export const fetchGetAllInsuranceHandler = async () => {
  return fetchGetHandler(`${defaultUrl}/getAllContractByCustomerId`);
}

export const fetchGetAllInsuranceHandler = async () => {
  return fetchGetHandler(`${defaultUrl}/getAllContractByCustomerId`);
}

export const fetchGetAllInsuranceHandler = async () => {
  return fetchGetHandler(`${defaultUrl}/getAllAutomobileInsuranceContract`);
}

export const fetchGetAllInsuranceHandler = async () => {
  return fetchGetHandler(`${defaultUrl}/getAllInjuryInsuranceContract`);
}

export const fetchGetAllInsuranceHandler = async () => {
  return fetchGetHandler(`${defaultUrl}/getAllDiseaseInsuranceContract`);
}

export const fetchGetAllInsuranceHandler = async (id) => {
  return fetchGetHandler(`${defaultUrl}/getAllContractByProductId?id=${id}`);
}

export const fetchGetAllInsuranceHandler = async (id) => {
  return fetchGetHandler(`${defaultUrl}/getContractById?id=${id}`);
}

export const fetchGetAllInsuranceHandler = async (id) => {
  return fetchGetHandler(`${defaultUrl}/getContractByOneAutomobileId?id=${id}`);
}

export const fetchGetAllInsuranceHandler = async (id) => {
  return fetchGetHandler(`${defaultUrl}/getAllAccidentByCustomerId?id=${id}`);
}

export const fetchGetAllInsuranceHandler = async (id) => {
  return fetchGetHandler(`${defaultUrl}/getAccidentById?id=${id}`);
}

export const fetchGetAllInsuranceHandler = async (id) => {
  return fetchGetHandler(`${defaultUrl}/getAllComplaintsByCustomerId?id=${id}`);
}

export const fetchGetAllInsuranceHandler = async (id) => {
  return fetchGetHandler(`${defaultUrl}/getComplaintById?id=${id}`);
}

export const fetchGetAllInsuranceHandler = async (signUpDTO) => {
  fetchPostHandler(`${defaultUrl}/signUp`, signUpDTO);
}

export const fetchGetAllInsuranceHandler = async (askInsuranceCounselDTO) => {
  return fetchPostHandler(`${defaultUrl}/askInsuranceCounsel`, askInsuranceCounselDTO);
}

export const fetchGetAllInsuranceHandler = async (buyInsuranceDTO) => {
  return fetchPostHandler(`${defaultUrl}/buyInsurance`, buyInsuranceDTO);
}

export const fetchGetAllInsuranceHandler = async (complainDTO) => {
  return fetchPostHandler(`${defaultUrl}/complain`, complainDTO);
}

export const fetchGetAllInsuranceHandler = async (loanDTO) => {
  return fetchPostHandler(`${defaultUrl}/loan`, loanDTO);
}

export const fetchGetAllInsuranceHandler = async (receiveInsuranceDTO) => {
  return fetchPostHandler(`${defaultUrl}/receiveInsurance`, receiveInsuranceDTO);
}

export const fetchGetAllInsuranceHandler = async (reportAccidentDTO) => {
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
