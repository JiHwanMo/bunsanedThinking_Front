import {
  fetchApplyCoperationHandler, fetchGetAllContractHandler, fetchGetContractDetailHandler
} from '../../../apiHandler/employee/underWriting/underWriting.js';
import { fetchApplyReinsuranceHandler } from '../../../apiHandler/employee/underWriting/underWriting.js';
import { fetchReviewAcquisitionHandler } from '../../../apiHandler/employee/underWriting/underWriting.js';
import { fetchGetCustomerHandler } from '../../../apiHandler/employee/underWriting/underWriting.js';
import { fetchGetContractHandler } from '../../../apiHandler/employee/underWriting/underWriting.js';
import { fetchGetAllNotRequestingInsuranceHandler } from '../../../apiHandler/employee/underWriting/underWriting.js';
import { fetchGetAllRequestingInsuranceHandler } from '../../../apiHandler/employee/underWriting/underWriting.js';

export const fetchApplyCoperation = async () => {
  return await fetchApplyCoperationHandler();
}

export const fetchApplyReinsurance = async () => {
  return await fetchApplyReinsuranceHandler();
}

export const fetchReviewAcquisition = async (contractId, result) => {
  return await fetchReviewAcquisitionHandler(contractId, result);
}

export const fetchGetCustomer = async (id) => {
  return await fetchGetCustomerHandler(id);
}

export const fetchGetContract = async (id) => {
  return await fetchGetContractHandler(id);
}

export const fetchGetContractDetail = async (id) => {
  return await fetchGetContractDetailHandler(id);
}

export const fetchGetAllContract = async () => {
  return await fetchGetAllContractHandler();
}

export const fetchGetAllNotRequestingInsurance = async () => {
  return await fetchGetAllNotRequestingInsuranceHandler();
}

export const fetchGetAllRequestingInsurance = async () => {
  return await fetchGetAllRequestingInsuranceHandler();
}
