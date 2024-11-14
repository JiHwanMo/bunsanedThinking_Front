import {
  fetchAddCollateralProductHandler,
  fetchAddLoanProductHandler,
  fetchRequestLoanHandler,
  fetchDeleteLoanProductHandler,
  fetchGetAllHandler,
  fetchGetOutcomeHandler,
  fetchUpdateLoanProductHandler
} from '../../../apiHandler/employee/loanManagement/loanManagement.js';

export const fetchGetAll = async () => {
  return await fetchGetAllHandler();
};

export const fetchGetOutcome = async () => {
  return await fetchGetOutcomeHandler(1001);
};

export const fetchAddCollateralProduct = async () => {
  return await fetchAddCollateralProductHandler(0, "Standard Loan", 5, 100000, 20000, 1, 15000, 300);
};

export const fetchAddLoanProduct = async () => {
  return await fetchAddLoanProductHandler(1, "Standard Loan 2", 5, 100000, 20000, 1, 300);
};


export const fetchRequestLoan = async () => {
  return await fetchRequestLoanHandler(1004, 1000, 1, true);
};

export const fetchUpdateLoanProduct = async () => {
  return await fetchUpdateLoanProductHandler(1, "Test Loan", 7002004);
};

export const fetchDeleteLoanProduct = async () => {
  return await fetchDeleteLoanProductHandler(7002004);
};
