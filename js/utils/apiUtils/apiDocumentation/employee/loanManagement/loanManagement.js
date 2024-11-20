import {
  fetchAddCollateralProductHandler,
  fetchAddLoanProductHandler,
  fetchRequestLoanHandler,
  fetchDeleteLoanProductHandler,
  fetchGetAllHandler,
  fetchGetLoanProductHandler,
  fetchGetOutcomeHandler,
  fetchGetEmployeeHandler,
  fetchGetAllLoanRequestHandler,
  fetchUpdateLoanProductHandler,
  fetchGetLoanRequestHandler,
  fetchGetAllCompletedLoanRequestHandler,
  fetchGetAllUnprocessedLoanRequestHandler
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

export const fetchGetEmployee = async (employeeId) => {
  return await fetchGetEmployeeHandler(employeeId);
}

export const fetchGetLoanRequest = async (contractId) => {
  return await fetchGetLoanRequestHandler(contractId);
}

export const fetchGetOutcome = async (contractId) => {
  return await fetchGetOutcomeHandler(contractId); //1001
};

export const fetchAddCollateralProduct = async (loanType, name, interestRate, maximumMoney, minimumAsset, collateralType, minimumValue, monthlyIncome) => {
  // 0, "Standard Loan", 5, 100000, 20000, 1, 15000, 300
  return await fetchAddCollateralProductHandler(loanType, name, interestRate, maximumMoney, minimumAsset, collateralType, minimumValue, monthlyIncome);
};

export const fetchAddLoanProduct = async (loanType, name, interestRate, maximumMoney, minimumAsset, parameter, monthlyIncome) => {
  // 1, "Standard Loan 2", 5, 100000, 20000, 1, 300
  return await fetchAddLoanProductHandler(loanType, name, interestRate, maximumMoney, minimumAsset, parameter, monthlyIncome);
};


export const fetchRequestLoan = async (contractId, money, paymentType, result) => {
  // 1004, 1000, 1, true
  return await fetchRequestLoanHandler(contractId, money, paymentType, result);
};

export const fetchUpdateLoanProduct = async (index, input, loanId) => {
  // 1, "Test Loan", 7002004
  return await fetchUpdateLoanProductHandler(index, input, loanId);
};

export const fetchDeleteLoanProduct = async (productId) => {
  return await fetchDeleteLoanProductHandler(productId); // 7002004
};

export const fetchGetAllCompletedLoanRequest = async () => {
  return await fetchGetAllCompletedLoanRequestHandler();
}

export const fetchGetAllUnprocessedLoanRequest = async () => {
  return await fetchGetAllUnprocessedLoanRequestHandler();
}
