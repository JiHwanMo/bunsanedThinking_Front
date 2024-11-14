import { fetchGetHandler, fetchPostHandler, fetchPatchWithParams, fetchDeleteHandler } from "../../FetchHandler.js"

const defaultURL = "http://localhost:8080/employee/loanManagement"

export const fetchGetAllHandler = async () => {
  return await fetchGetHandler(`${defaultURL}/getAll`);
};

export const fetchGetOutcomeHandler = async (contractId) => {
  return await fetchGetHandler(`${defaultURL}/getOutcome?contractId=${contractId}`);
};

export const fetchAddCollateralProductHandler = async (loanType, name, interestRate, maximumMoney, minimumAsset, collateralType, minimumValue, monthlyIncome) => {
  return await fetchPostHandler(`${defaultURL}/addCollateralProduct`,
    {
      loanType: loanType,
      name: name,
      interestRate: interestRate,
      maximumMoney: maximumMoney,
      minimumAsset: minimumAsset,
      collateralType: collateralType,
      minimumValue: minimumValue,
      monthlyIncome: monthlyIncome
    }
  );
};

export const fetchAddLoanProductHandler = async (loanType, name, interestRate, maximumMoney, minimumAsset, parameter, monthlyIncome) => {
  return await fetchPostHandler(`${defaultURL}/addLoanProduct`,
    {
      loanType: loanType,
      name: name,
      interestRate: interestRate,
      maximumMoney: maximumMoney,
      minimumAsset: minimumAsset,
      parameter: parameter,
      monthlyIncome: monthlyIncome
    }
  );
};

export const fetchRequestLoanHandler = async (contractId, money, paymentType, result) => {
  await fetchPostHandler(`${defaultURL}/requestLoan?contractId=${contractId}&money=${money}&paymentType=${paymentType}&result=${result}`,)
};

export const fetchUpdateLoanProductHandler = async (index, input, loanId) => {
  await fetchPatchWithParams(`${defaultURL}/updateLoanProduct?index=${index}&input=${input}&loanId=${loanId}`);
};

export const fetchDeleteLoanProductHandler = async (productId) => {
  await fetchDeleteHandler(`${defaultURL}/deleteLoanProduct?id=${productId}`);
};
