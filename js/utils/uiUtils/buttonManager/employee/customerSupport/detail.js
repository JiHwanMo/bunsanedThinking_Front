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
  window.history.back();
}

const cancelComplaint = () => {
  window.history.back();
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
