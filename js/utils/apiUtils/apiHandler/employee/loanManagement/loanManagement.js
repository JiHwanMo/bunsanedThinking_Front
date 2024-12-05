import {
  fetchGetHandler,
  fetchPostHandler,
  fetchPatchWithParams,
  fetchDeleteHandler,
  fetchPatchWithBody
} from "../../../common/fetchHandler.js"
import {hostUrl} from "../../common/common.js";

const defaultURL = hostUrl+"/employee/loanManagement"

export const fetchGetAllHandler = async () => {
  return await fetchGetHandler(`${defaultURL}/getAll`);
};

export const fetchGetLoanProductHandler = async (loanId) => {
  return await fetchGetHandler(`${defaultURL}/getLoanProduct?id=${loanId}`);
}

export const fetchGetLoanProductDetailHandler = async (loanId) => {
  return await fetchGetHandler(`${defaultURL}/getLoanProductDetail?id=${loanId}`);
}

export const fetchGetOutcomeHandler = async (contractId) => {
  return await fetchGetHandler(`${defaultURL}/getOutcome?contractId=${contractId}`);
};

export const fetchGetAllLoanRequestHandler = async () => {
  return await fetchGetHandler(`${defaultURL}/getAllLoanRequest`);
}

export const fetchGetLoanRequestHandler = async (contractId) => {
  return await fetchGetHandler(`${defaultURL}/getLoanRequest?id=${contractId}`);
}

export const fetchGetLoanRequestDetailHandler = async (contractId) => {
  return await fetchGetHandler(`${defaultURL}/getLoanRequestDetail?id=${contractId}`)
}

export const fetchAddCollateralProductHandler = async (addCollateralDto) => {
  return await fetchPostHandler(`${defaultURL}/addCollateralProduct`, addCollateralDto);
};

export const fetchAddLoanProductHandler = async (addLoanDto) => {
  return await fetchPostHandler(`${defaultURL}/addLoanProduct`, addLoanDto);
};

export const fetchUpdateCollateralProductHandler = async (updateCollateralDto) => {
  await fetchPatchWithBody(`${defaultURL}/updateCollateralProduct`, updateCollateralDto);
}

export const fetchUpdateFixedDepositProductHandler = async (updateFixedDepositDto) => {
  await fetchPatchWithBody(`${defaultURL}/updateFixedDepositProduct`, updateFixedDepositDto);
}

export const fetchUpdateInsuranceContractHandler = async (updateInsuranceContractDto) => {
  await fetchPatchWithBody(`${defaultURL}/updateInsuranceContractProduct`, updateInsuranceContractDto);
}

export const fetchRequestLoanHandler = async (contractId, money, paymentType, result) => {
  await fetchPostHandler(`${defaultURL}/requestLoan?contractId=${contractId}&money=${money}&paymentType=${paymentType}&result=${result}`,)
};

export const fetchDeniedLoanRequestHandler = async (contractId, result) => {
  await fetchPostHandler(`${defaultURL}/requestLoan?contractId=${contractId}&result=${result}`,)
}

export const fetchUpdateLoanProductHandler = async (index, input, loanId) => {
  await fetchPatchWithParams(`${defaultURL}/updateLoanProduct?index=${index}&input=${input}&loanId=${loanId}`);
};

export const fetchDeleteLoanProductHandler = async (productId) => {
  await fetchDeleteHandler(`${defaultURL}/deleteLoanProduct?id=${productId}`);
};

export const fetchGetAllCompletedLoanRequestHandler = async () => {
  return await fetchGetHandler(`${defaultURL}/getAllCompletedLoanRequest`);
};

export const fetchGetAllUnprocessedLoanRequestHandler = async () => {
  return await fetchGetHandler(`${defaultURL}/getAllUnprocessedLoanRequest`);
};
