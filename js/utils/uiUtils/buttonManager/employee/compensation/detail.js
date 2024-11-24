import {initialButtons} from "../../../common/buttonUtils.js";
import {BUTTON} from "../../../../../../config/employee/compensation/compensation.js";

const requestCompensation = () => {
  window.location.href = "input.html";
}

const requestInsuranceMoney = () => {
  window.location.href = "input.html";
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
  const type = sessionStorage.getItem("currentType");
  initialButtons(BUTTON.TASK.COMPENSATION[type], compensationTaskMapper[type]);
}
