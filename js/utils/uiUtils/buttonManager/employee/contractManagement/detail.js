import {initialButtons} from "../../../common/buttonUtils.js";
import {ALERT, BUTTON} from "../../../../../../config/employee/contractManagement/contractManagement.js";
import {
  fetchRequestTerminationFee,
  fetchReviewEndorsement,
  fetchReviewRecontract, fetchReviewRevival
} from "../../../../apiUtils/apiDocumentation/employee/contractManagement/contractManagement.js";
import {KEY} from "../../../../../../config/common.js";

const sendNotice = () => {
  if (!confirm(ALERT.CONFIRM.SEND_NOTICE)) return;
  alert(ALERT.OK.SEND_NOTICE);
  window.history.back();
  window.history.back();
}
const reviewRecontract = async () => {
  if (!confirm(ALERT.CONFIRM.REVIEW_RECONTRACT)) return;
  const selectedDataId = sessionStorage.getItem(KEY.SELECTED_DATA_ID);
  const result = await fetchReviewRecontract(selectedDataId, 1);
  if (result == null) return;
  alert(ALERT.OK.REVIEW_RECONTRACT);
  window.history.back();
  window.history.back();
}
const denyRecontract = async () => {
  if (!confirm(ALERT.CONFIRM_DENY.REVIEW_RECONTRACT)) return;
  const selectedDataId = sessionStorage.getItem(KEY.SELECTED_DATA_ID);
  const result = await fetchReviewRecontract(selectedDataId, 2);
  if (result == null) return;
  alert(ALERT.DENY.REVIEW_RECONTRACT);
  window.history.back();
  window.history.back();
}
const reviewEndorsement = async () => {
  if (!confirm(ALERT.CONFIRM.REVIEW_ENDORSEMENT)) return;
  const selectedDataId = sessionStorage.getItem(KEY.SELECTED_DATA_ID);
  const result = await fetchReviewEndorsement(selectedDataId, 1);
  if (result == null) return;
  alert(ALERT.OK.REVIEW_ENDORSEMENT);
  window.history.back();
  window.history.back();
}
const denyEndorsement = async () => {
  if (!confirm(ALERT.CONFIRM_DENY.REVIEW_ENDORSEMENT)) return;
  const selectedDataId = sessionStorage.getItem(KEY.SELECTED_DATA_ID);
  const result = await fetchReviewEndorsement(selectedDataId, 2);
  if (result == null) return;
  alert(ALERT.DENY.REVIEW_ENDORSEMENT);
  window.history.back();
  window.history.back();
}
const reviewRevival = async () => {
  if (!confirm(ALERT.CONFIRM.REVIEW_REVIVAL)) return;
  const selectedDataId = sessionStorage.getItem(KEY.SELECTED_DATA_ID);
  const result = await fetchReviewRevival(selectedDataId, 1);
  if (result == null) return;
  alert(ALERT.OK.REVIEW_REVIVAL);
  window.history.back();
  window.history.back();
}
const denyRevival = async () => {
  if (!confirm(ALERT.CONFIRM_DENY.REVIEW_REVIVAL)) return;
  const selectedDataId = sessionStorage.getItem(KEY.SELECTED_DATA_ID);
  const result = await fetchReviewRevival(selectedDataId, 2);
  if (result == null) return;
  alert(ALERT.DENY.REVIEW_REVIVAL);
  window.history.back();
  window.history.back();
}
const requestTerminationFee = async () => {
  if (!confirm(ALERT.CONFIRM.REQUEST_TERMINATION_FEE)) return;
  const selectedDataId = sessionStorage.getItem(KEY.SELECTED_DATA_ID);
  const result = await fetchRequestTerminationFee(selectedDataId);
  if (result == null) return;
  alert(ALERT.OK.REQUEST_TERMINATION_FEE);
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
