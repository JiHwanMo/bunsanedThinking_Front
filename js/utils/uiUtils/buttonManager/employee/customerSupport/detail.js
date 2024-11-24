import {BUTTON} from "../../../../../../config/employee/customerSupport/customerSupport.js";
import {initialButtons} from "../../../common/buttonUtils.js";

export const renderButtons = () => {
  const type = sessionStorage.getItem("currentType");
  initialButtons(BUTTON.TASK.EMPLOYEE.CUSTOMER_SUPPORT[type], customerSupportTaskMapper[type]);
};

const handleReport = () => {
  sessionStorage.setItem("selectedButtonType", "HANDLE_REPORT");
  window.location.href = "input.html";
}

const handleComplaint = () => {
  sessionStorage.setItem("selectedButtonType", "HANDLE_COMPLAINT");
  window.location.href = "input.html";
}

const cancelReport = () => {
  alert("신고 취소 - 고객지원");
}

const cancelComplaint = () => {
  alert("민원 취소 - 고객지원");
}

const customerSupportTaskMapper = {
  HANDLE_REPORT: {
    HANDLE_REPORT: handleReport,
    CANCEL_REPORT: cancelReport
  },
  HANDLE_COMPLAINT: {
    HANDLE_COMPLAINT: handleComplaint,
    CANCEL_COMPLAINT: cancelComplaint
  }
}
