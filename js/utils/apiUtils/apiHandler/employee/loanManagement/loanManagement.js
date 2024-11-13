import { fetchGetHandler, fetchPostHandler, fetchPatchHandler, fetchDeleteHandler } from "../../FetchHandler.js"

export const fetchGetAllHandler = async () => {
  return await fetchGetHandler("http://localhost:8080/employee/loanManagement/getAll"); // URL을 전달
};

export const fetchGetOutcomeHandler = async () => {
  return await fetchGetHandler("http://localhost:8080/employee/loanManagement/getOutcome?contractId=1001"); // URL을 전달
};

export const fetchAddCollateralProductHandler = async () => {
  return await fetchPostHandler("http://localhost:8080/employee/loanManagement/addCollateralProduct",
    {
      loanType: 0,
      name: "Standard Loan",
      interestRate: 5,
      maximumMoney: 100000,
      minimumAsset: 20000,
      collateralType: 1,
      minimumValue: 15000,
      monthlyIncome: 300
    }
  );
};

export const fetchAddLoanProductHandler = async () => {
  return await fetchPostHandler("http://localhost:8080/employee/loanManagement/addLoanProduct",
    {
      loanType: 1,
      name: "Standard Loan 2",
      interestRate: 5,
      maximumMoney: 100000,
      minimumAsset: 20000,
      parameter: 1,
      monthlyIncome: 300
    }
  );
};

export const fetchRequestLoanHandler = async () => {
  await fetchPostHandler("http://localhost:8080/employee/loanManagement/requestLoan?contractId=1004&money=1000&paymentType=1&result=true",)
};

export const fetchUpdateLoanProductHandler = async () => {
  await fetchPatchHandler("http://localhost:8080/employee/loanManagement/updateLoanProduct?index=1&input=Test Loan&loanId=7002004");
};

export const fetchDeleteLoanProductHandler = async () => {
  await fetchDeleteHandler("http://localhost:8080/employee/loanManagement/deleteLoanProduct?id=7002004");
};
