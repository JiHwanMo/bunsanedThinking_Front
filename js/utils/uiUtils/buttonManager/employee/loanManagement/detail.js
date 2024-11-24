import {BUTTON} from "../../../../../../config/employee/loanManagement/loanManagement.js";
import {initialButtons} from "../../../common/buttonUtils.js";
import {
  fetchDeleteLoanProduct,
  fetchDeniedLoanRequest
} from "../../../../apiUtils/apiDocumentation/employee/loanManagement/loanManagement.js";

export const renderButtons = () => {
  const type = sessionStorage.getItem("currentType");
  initialButtons(BUTTON.TASK.EMPLOYEE.LOAN_MANAGEMENT[type], loanManagementTaskMapper[type]);
};

const updateLoan = () => {
  sessionStorage.setItem("selectedButtonType", "UPDATE");
  window.location.href = "input.html";
}

const deleteLoan = async () => {
  const selectedDataId = sessionStorage.getItem("selectedDataId");

  alert("정말 삭제하시겠습니까?");
  await fetchDeleteLoanProduct(selectedDataId);

  window.location.href = "home.html";
}

const requestLoan = () => {
  sessionStorage.setItem("selectedButtonType", "LOAN_REQUEST");
  window.location.href = "input.html";
}

const deniedLoanRequest = async () => {
  const selectedDataId = sessionStorage.getItem("selectedDataId");

  alert("정말 거절하시겠습니까?");
  await fetchDeniedLoanRequest(selectedDataId, false);

  window.location.href = "home.html";
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
