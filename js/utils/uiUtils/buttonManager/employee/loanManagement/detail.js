import {BUTTON, RESULT_MESSAGE} from "../../../../../../config/employee/loanManagement/loanManagement.js";
import {initialButtons} from "../../../common/buttonUtils.js";
import {
  fetchDeleteLoanProduct,
  fetchDeniedLoanRequest
} from "../../../../apiUtils/apiDocumentation/employee/loanManagement/loanManagement.js";
import {KEY, LOCATION} from "../../../../../../config/common.js";
import {QUESTION, SELECTED_BUTTON_TYPE} from "../../../../../../config/employee/loanManagement/loanManagement.js";

export const renderButtons = () => {
  const type = sessionStorage.getItem(KEY.CURRENT_TYPE);
  initialButtons(BUTTON.TASK.EMPLOYEE.LOAN_MANAGEMENT[type], loanManagementTaskMapper[type]);
};

const updateLoan = () => {
  sessionStorage.setItem(KEY.SELECTED_BUTTON_TYPE, SELECTED_BUTTON_TYPE.UPDATE);
  window.location.href = LOCATION.INPUT;
}

const deleteLoan = async () => {
  const selectedDataId = sessionStorage.getItem(KEY.SELECTED_DATA_ID);

  const check = confirm(QUESTION.CONFIRM_DELETE);

  if (!check)
    return;
  const response = await fetchDeleteLoanProduct(selectedDataId);
  if (response == null)
    return;
  alert(RESULT_MESSAGE.COMPLETE_DELETE_LOAN);
  window.location.href = LOCATION.HOME;
}

const requestLoan = () => {
  sessionStorage.setItem(KEY.SELECTED_BUTTON_TYPE, SELECTED_BUTTON_TYPE.LOAN_REQUEST);
  window.location.href = LOCATION.INPUT;
}

const deniedLoanRequest = async () => {
  const selectedDataId = sessionStorage.getItem(KEY.SELECTED_DATA_ID);

  const check = confirm(QUESTION.CONFIRM_DENIED_LOAN_REQUEST);

  if (!check)
    return;
  const response = await fetchDeniedLoanRequest(selectedDataId, false);
  if (response == null)
    return;
  alert(RESULT_MESSAGE.COMPLETE_DENY_LOAN_REQUEST);
  window.location.href = LOCATION.HOME;
}

const cancel = () => {
  window.history.back();
}

const loanManagementTaskMapper = {
  MANAGEMENT_LOAN_PRODUCT: {
    UPDATE: updateLoan,
    DELETE: deleteLoan
  },
  LOAN_REQUEST: {
    REQUEST: requestLoan,
    DENIED: deniedLoanRequest,
    CANCEL: cancel
  }
}
