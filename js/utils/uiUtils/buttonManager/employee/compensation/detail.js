import {initialButtons} from "../../../common/buttonUtils.js";
import {BUTTON} from "../../../../../../config/employee/compensation/compensation.js";
import {KEY, LOCATION} from "../../../../../../config/common.js";

const requestCompensation = () => {
  window.location.href = LOCATION.INPUT;
}

const requestInsuranceMoney = () => {
  window.location.href = LOCATION.INPUT;
}

const cancel = () => {
  window.history.back();
}

const compensationTaskMapper = {
  REQUEST_COMPENSATION: {
    REQUEST: requestCompensation,
    CANCEL: cancel
  },
  REQUEST_INSURANCE_MONEY: {
    REQUEST: requestInsuranceMoney,
    CANCEL: cancel
  }
}

export const renderButtons = () => {
  const type = sessionStorage.getItem(KEY.CURRENT_TYPE);
  initialButtons(BUTTON.TASK.COMPENSATION[type], compensationTaskMapper[type]);
}
