import {BUTTON} from "../../../../../../config/employee/customerSupport/customerSupport.js";
import {initialButtons} from "../../../common/buttonUtils.js";
import {KEY, LOCATION} from "../../../../../../config/common.js";

export const renderButtons = () => {
  const type = getType();
  initialButtons(BUTTON.TASK.EMPLOYEE.CUSTOMER_SUPPORT[type], customerSupportTaskMapper[type]);
};

const getType = () => {
  return sessionStorage.getItem(KEY.CURRENT_TYPE);
}

const handleReport = () => {
  sessionStorage.setItem(KEY.SELECTED_BUTTON_TYPE, getType());
  window.location.href = LOCATION.INPUT;
}

const handleComplaint = () => {
  sessionStorage.setItem(KEY.SELECTED_BUTTON_TYPE, getType());
  window.location.href = LOCATION.INPUT;
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
