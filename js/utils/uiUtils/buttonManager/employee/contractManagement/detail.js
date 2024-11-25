import {initialButtons} from "../../../common/buttonUtils.js";
import {BUTTON} from "../../../../../../config/employee/contractManagement/contractManagement.js";
import {
  fetchRequestTerminationFee,
  fetchReviewEndorsement,
  fetchReviewRecontract, fetchReviewRevival
} from "../../../../apiUtils/apiDocumentation/employee/contractManagement/contractManagement.js";
import {KEY} from "../../../../../../config/common.js";

const sendNotice = () => {
  // const selectedDataId = sessionStorage.getItem("selectedDataId");
  alert("안내장 발송이 완료되었습니다.");
  window.history.back();
  window.history.back();
}
const reviewRecontract = async () => {
  const selectedDataId = sessionStorage.getItem(KEY.SELECTED_DATA_ID);
  await fetchReviewRecontract(selectedDataId, 1);
  alert("승인이 완료되었습니다");
  window.history.back();
  window.history.back();
}
const denyRecontract = async () => {
  const selectedDataId = sessionStorage.getItem(KEY.SELECTED_DATA_ID);
  await fetchReviewRecontract(selectedDataId, 2);
  alert("거절이 완료되었습니다");
  window.history.back();
  window.history.back();
}
const reviewEndorsement = async () => {
  const selectedDataId = sessionStorage.getItem(KEY.SELECTED_DATA_ID);
  await fetchReviewEndorsement(selectedDataId, 1);
  alert("승인이 완료되었습니다");
  window.history.back();
  window.history.back();
}
const denyEndorsement = async () => {
  const selectedDataId = sessionStorage.getItem(KEY.SELECTED_DATA_ID);
  await fetchReviewEndorsement(selectedDataId, 2);
  alert("거절이 완료되었습니다");
  window.history.back();
  window.history.back();
}
const reviewRevival = async () => {
  const selectedDataId = sessionStorage.getItem(KEY.SELECTED_DATA_ID);
  await fetchReviewRevival(selectedDataId, 1);
  alert("승인이 완료되었습니다");
  window.history.back();
  window.history.back();
}
const denyRevival = async () => {
  const selectedDataId = sessionStorage.getItem(KEY.SELECTED_DATA_ID);
  await fetchReviewRevival(selectedDataId, 2);
  alert("거절이 완료되었습니다");
  window.history.back();
  window.history.back();
}
const requestTerminationFee = async () => {
  const selectedDataId = sessionStorage.getItem(KEY.SELECTED_DATA_ID);
  await fetchRequestTerminationFee(selectedDataId);
  alert("승인이 완료되었습니다");
  window.history.back();
  window.history.back();
}
const cancel = () => {
  window.history.back();
}

const contractManagementTaskMapper = {
  DEFAULT_CONTRACT: {
    NOTICE: sendNotice,
    CANCEL: cancel
  },
  RECONTRACT: {
    APPLY: reviewRecontract,
    DENY: denyRecontract
  },
  ENDORSEMENT: {
    APPLY: reviewEndorsement,
    DENY: denyEndorsement
  },
  REVIVAL: {
    APPLY: reviewRevival,
    DENY: denyRevival
  },
  TERMINATION: {
    REQUEST: requestTerminationFee,
    CANCEL: cancel
  }
}

export const renderButtons = () => {
  const type = sessionStorage.getItem(KEY.CURRENT_TYPE);
  initialButtons(BUTTON.TASK.CONTRACT_MANAGEMENT[type], contractManagementTaskMapper[type]);
}
