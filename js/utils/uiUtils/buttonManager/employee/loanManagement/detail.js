import {BUTTON} from "../../../../../../config/employee/loanManagement/loanManagement.js";
import {initialButtons} from "../../../common/buttonUtils.js";

export const renderButtons = () => {
  const type = sessionStorage.getItem("currentType");
  initialButtons(BUTTON.TASK.EMPLOYEE.LOAN_MANAGEMENT[type], loanManagementTaskMapper[type]);
};

const updateLoan = () => {
  alert("수정 - 융자운용");
}

const deleteLoan = () => {
  alert("삭제 - 융자운용");
}

const requestLoan = () => {
  alert("요청 - 융자운용");
}

const deniedLoanRequest = () => {
  alert("거절 - 융자운용");
}

const cancel = () => {
  alert("취소 - 융자운용");
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
