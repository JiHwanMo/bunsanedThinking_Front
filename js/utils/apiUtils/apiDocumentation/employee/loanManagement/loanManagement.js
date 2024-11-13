import {
  fetchAddCollateralProductHandler, fetchAddLoanProductHandler, fetchDeleteLoanProductHandler,
  fetchGetAllHandler,
  fetchGetOutcomeHandler, fetchUpdateLoanProductHandler
} from '../../../apiHandler/employee/loanManagement/loanManagement.js';

export const fetchGetAll = async () => {
  return await fetchGetAllHandler();
};

export const fetchGetOutcome = async () => {
  return await fetchGetOutcomeHandler();
};

export const fetchAddCollateralProduct = async () => {
  return await fetchAddCollateralProductHandler();
};

export const fetchAddLoanProduct = async () => {
  return await fetchAddLoanProductHandler();
};

export const fetchRequestLoan = async () => {
  return await fetchRequestLoanHandler();
};

export const fetchUpdateLoanProduct = async () => {
  return await fetchUpdateLoanProductHandler();
};

export const fetchDeleteLoanProduct = async () => {
  return await fetchDeleteLoanProductHandler();
};
