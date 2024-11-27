import {
  fetchAddCollateralProductHandler,
  fetchAddLoanProductHandler,
  fetchRequestLoanHandler,
  fetchDeleteLoanProductHandler,
  fetchGetAllHandler,
  fetchGetLoanProductHandler,
  fetchGetOutcomeHandler,
  fetchGetAllLoanRequestHandler,
  fetchUpdateLoanProductHandler,
  fetchGetLoanRequestHandler,
  fetchGetAllCompletedLoanRequestHandler,
  fetchGetAllUnprocessedLoanRequestHandler,
  fetchGetLoanProductDetailHandler,
  fetchUpdateCollateralProductHandler,
  fetchUpdateFixedDepositProductHandler,
  fetchUpdateInsuranceContractHandler,
  fetchDeniedLoanRequestHandler,
  fetchGetLoanRequestDetailHandler
} from '../../../apiHandler/employee/loanManagement/loanManagement.js';

export const fetchGetAll = async () => {
  return await fetchGetAllHandler();
};

export const fetchGetLoanProduct = async (loanId) => {
  return await fetchGetLoanProductHandler(loanId);
}

export const fetchGetAllLoanRequest = async () => {
  return await fetchGetAllLoanRequestHandler();
}

export const fetchGetLoanProductDetail = async (employeeId) => {
  return await fetchGetLoanProductDetailHandler(employeeId);
}

export const fetchGetLoanRequest = async (contractId) => {
  return await fetchGetLoanRequestHandler(contractId);
}

export const fetchGetLoanRequestDetail = async (contractId) => {
  return await fetchGetLoanRequestDetailHandler(contractId);
}

export const fetchGetOutcome = async (contractId) => {
  return await fetchGetOutcomeHandler(contractId); //1001
};

export const fetchAddCollateralProduct = async (addCollateralDto) => {
  // 0, "Standard Loan", 5, 100000, 20000, 1, 15000, 300
  return await fetchAddCollateralProductHandler(addCollateralDto);
};

export const fetchAddLoanProduct = async (addLoanDto) => {
  // 1, "Standard Loan 2", 5, 100000, 20000, 1, 300
  return await fetchAddLoanProductHandler(addLoanDto);
};


export const fetchRequestLoan = async (contractId, money, paymentType, result) => {
  // 1004, 1000, 1, true
  return await fetchRequestLoanHandler(contractId, money, paymentType, result);
};

export const fetchDeniedLoanRequest = async (contractId, result) => {
  return await fetchDeniedLoanRequestHandler(contractId, result);
}

export const fetchUpdateLoanProduct = async (index, input, loanId) => {
  // 1, "Test Loan", 7002004
  return await fetchUpdateLoanProductHandler(index, input, loanId);
};

export const fetchUpdateCollateralProduct = async (updateCollateralDto) => {
  return await fetchUpdateCollateralProductHandler(updateCollateralDto);
}

export const fetchUpdateFixedDepositProduct = async (updateFixedDepositDto) => {
  return await fetchUpdateFixedDepositProductHandler(updateFixedDepositDto);
}

export const fetchUpdateInsuranceContractProduct = async (updateInsuranceContractDto) => {
  return await fetchUpdateInsuranceContractHandler(updateInsuranceContractDto);
}

export const fetchDeleteLoanProduct = async (productId) => {
  return await fetchDeleteLoanProductHandler(productId); // 7002004
};

export const fetchGetAllCompletedLoanRequest = async () => {
  return await fetchGetAllCompletedLoanRequestHandler();
}

export const fetchGetAllUnprocessedLoanRequest = async () => {
  return await fetchGetAllUnprocessedLoanRequestHandler();
}
