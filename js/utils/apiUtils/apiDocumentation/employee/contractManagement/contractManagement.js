import { fetchRequestTerminationFeeHandler } from '../../../apiHandler/employee/contractManagement/contractManagement.js';
import { fetchReviewEndorsementHandler } from '../../../apiHandler/employee/contractManagement/contractManagement.js';
import { fetchReviewRecontractHandler } from '../../../apiHandler/employee/contractManagement/contractManagement.js';
import { fetchReviewRevivalHandler } from '../../../apiHandler/employee/contractManagement/contractManagement.js';
import { fetchGetAllDefaultContractHandler } from '../../../apiHandler/employee/contractManagement/contractManagement.js';
import { fetchGetCustomerByIdHandler } from '../../../apiHandler/employee/contractManagement/contractManagement.js';
import { fetchGetContractByIdHandler } from '../../../apiHandler/employee/contractManagement/contractManagement.js';
import { fetchGetContractRowByIdHandler } from '../../../apiHandler/employee/contractManagement/contractManagement.js';
import { fetchGetTerminationByIdHandler } from '../../../apiHandler/employee/contractManagement/contractManagement.js';
import { fetchGetTerminationRowByIdHandler } from '../../../apiHandler/employee/contractManagement/contractManagement.js';
import { fetchGetAllTerminatingContractHandler } from '../../../apiHandler/employee/contractManagement/contractManagement.js';
import { fetchGetTerminatingContractByIdHandler } from '../../../apiHandler/employee/contractManagement/contractManagement.js';
import { fetchGetAllUnprocessedTerminatingContractHandler } from '../../../apiHandler/employee/contractManagement/contractManagement.js';
import { fetchGetAllProcessedTerminatingContractHandler } from '../../../apiHandler/employee/contractManagement/contractManagement.js';
import { fetchGetAllEndorsementContractHandler } from '../../../apiHandler/employee/contractManagement/contractManagement.js';
import { fetchGetAllUnprocessedEndorsementContractHandler } from '../../../apiHandler/employee/contractManagement/contractManagement.js';
import { fetchGetAllProcessedEndorsementContractHandler } from '../../../apiHandler/employee/contractManagement/contractManagement.js';
import { fetchGetEndorsementByIdHandler } from '../../../apiHandler/employee/contractManagement/contractManagement.js';
import { fetchGetEndorsementRowByIdHandler } from '../../../apiHandler/employee/contractManagement/contractManagement.js';
import { fetchGetAllReContractHandler } from '../../../apiHandler/employee/contractManagement/contractManagement.js';
import { fetchGetAllUnprocessedReContractHandler } from '../../../apiHandler/employee/contractManagement/contractManagement.js';
import { fetchGetAllProcessedReContractHandler } from '../../../apiHandler/employee/contractManagement/contractManagement.js';
import { fetchGetReContractByIdHandler } from '../../../apiHandler/employee/contractManagement/contractManagement.js';
import { fetchGetReContractRowByIdHandler } from '../../../apiHandler/employee/contractManagement/contractManagement.js';
import { fetchGetAllRevivalContractHandler } from '../../../apiHandler/employee/contractManagement/contractManagement.js';
import { fetchGetRevivalByIdHandler } from '../../../apiHandler/employee/contractManagement/contractManagement.js';
import { fetchGetRevivalRowByIdHandler } from '../../../apiHandler/employee/contractManagement/contractManagement.js';
import { fetchGetAllUnprocessedRevivalHandler } from '../../../apiHandler/employee/contractManagement/contractManagement.js';
import { fetchGetAllProcessedRevivalHandler } from '../../../apiHandler/employee/contractManagement/contractManagement.js';

// 검증 완
export const fetchRequestTerminationFee = async (tercontractId, customerId) => {
  return await fetchRequestTerminationFeeHandler(tercontractId, customerId);
}
// (async () => {
//   const data = await fetchRequestTerminationFee(1002, 2002);
//   console.log(data); // 받아온 데이터를 콘솔에 출력
// })();

export const fetchReviewEndorsement = async (endorsementId, index) => {
  return await fetchReviewEndorsementHandler(endorsementId, index);
}
// (async () => {
//   const data = await fetchReviewEndorsement(1002, 2);
//   console.log(data); // 받아온 데이터를 콘솔에 출력
// })();

export const fetchReviewRecontract = async (recontractId, index) => {
  return await fetchReviewRecontractHandler(recontractId, index);
}
// (async () => {
//   const data = await fetchReviewRecontract(1001, 1);
//   console.log(data); // 받아온 데이터를 콘솔에 출력
// })();

export const fetchReviewRevival = async (revivalId, index) => {
  return await fetchReviewRevivalHandler(revivalId, index);
}
// (async () => {
//   const data = await fetchReviewRevival(1001, 1);
//   console.log(data); // 받아온 데이터를 콘솔에 출력
// })();

export const fetchGetAllDefaultContract = async () => {
  return await fetchGetAllDefaultContractHandler();
}

export const fetchGetCustomerById = async (id) => {
  return await fetchGetCustomerByIdHandler(id);
}

export const fetchGetContractById = async (id) => {
  return await fetchGetContractByIdHandler(id);
}

export const fetchGetContractRowById = async (id) => {
  return await fetchGetContractRowByIdHandler(id);
}

export const fetchGetTerminationById = async (id) => {
  return await fetchGetTerminationByIdHandler(id);
}

export const fetchGetTerminationRowById = async (id) => {
  return await fetchGetTerminationRowByIdHandler(id);
}

export const fetchGetAllTerminatingContract = async () => {
  return await fetchGetAllTerminatingContractHandler();
}

export const fetchGetTerminatingContractById = async (id) => {
  return await fetchGetTerminatingContractByIdHandler(id);
}

export const fetchGetAllUnprocessedTerminatingContract = async () => {
  return await fetchGetAllUnprocessedTerminatingContractHandler();
}

export const fetchGetAllProcessedTerminatingContract = async () => {
  return await fetchGetAllProcessedTerminatingContractHandler();
}

export const fetchGetAllEndorsementContract = async () => {
  return await fetchGetAllEndorsementContractHandler();
}

export const fetchGetAllUnprocessedEndorsementContract = async () => {
  return await fetchGetAllUnprocessedEndorsementContractHandler();
}

export const fetchGetAllProcessedEndorsementContract = async () => {
  return await fetchGetAllProcessedEndorsementContractHandler();
}

export const fetchGetEndorsementById = async (id) => {
  return await fetchGetEndorsementByIdHandler(id);
}

export const fetchGetEndorsementRowById = async (id) => {
  return await fetchGetEndorsementRowByIdHandler(id);
}

export const fetchGetAllReContract = async () => {
  return await fetchGetAllReContractHandler();
}

export const fetchGetAllUnprocessedReContract = async () => {
  return await fetchGetAllUnprocessedReContractHandler();
}

export const fetchGetAllProcessedReContract = async () => {
  return await fetchGetAllProcessedReContractHandler();
}

export const fetchGetReContractById = async (id) => {
  return await fetchGetReContractByIdHandler(id);
}

export const fetchGetReContractRowById = async (id) => {
  return await fetchGetReContractRowByIdHandler(id);
}

export const fetchGetAllRevivalContract = async () => {
  return await fetchGetAllRevivalContractHandler();
}

export const fetchGetRevivalById = async (id) => {
  return await fetchGetRevivalByIdHandler(id);
}

export const fetchGetRevivalRowById = async (id) => {
  return await fetchGetRevivalRowByIdHandler(id);
}

export const fetchGetAllUnprocessedRevival = async () => {
  return await fetchGetAllUnprocessedRevivalHandler();
}

export const fetchGetAllProcessedRevival = async () => {
  return await fetchGetAllProcessedRevivalHandler();
}
