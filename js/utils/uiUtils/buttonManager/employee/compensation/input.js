import {initialButtons} from "../../../common/buttonUtils.js";
import {ALERT, BUTTON, INPUT_FORM} from "../../../../../../config/employee/compensation/compensation.js";
import {
  fetchRequestCompensation,
  fetchRequestInsuranceMoney
} from "../../../../apiUtils/apiDocumentation/employee/compensation/compensation.js";
import {KEY, ZERO} from "../../../../../../config/common.js";

const getCompensationDTO = (money, index) => {
  return {
    money: money,
    paymentType: index-1,
    reportId: sessionStorage.getItem(KEY.SELECTED_DATA_ID)
  }
}

const getInsuranceMoneyDTO = (money, index) => {
  return {
    money: money,
    paymentType: index-1,
    insuranceMoneyId: sessionStorage.getItem(KEY.SELECTED_DATA_ID)
  }
}

const requestCompensation = async () => {
  if (!confirm(ALERT.CONFIRM.REQUEST_COMPENSATION)) return;
  const money = document.getElementById(INPUT_FORM.MONEY.id).value;
  const index = document.getElementById(INPUT_FORM.PAYMENTTYPE.id).selectedIndex;
  if (money.length === ZERO || money <= ZERO) alert(INPUT_FORM.MONEY.exception);
  else if (index === ZERO) alert(INPUT_FORM.PAYMENTTYPE.exception);
  else {
    const result = await fetchRequestCompensation(getCompensationDTO(money, index));
    if (result == null) return;
    alert(ALERT.OK.REQUEST_COMPENSATION);
    window.history.back();
    window.history.back();
    window.history.back();
  }
}

const requestInsuranceMoney = async () => {
  if (!confirm(ALERT.CONFIRM.REQUEST_INSURANCE_MONEY)) return;
  const money = document.getElementById(INPUT_FORM.MONEY.id).value;
  const index = document.getElementById(INPUT_FORM.PAYMENTTYPE.id).selectedIndex;
  if (money.length === ZERO || money <= ZERO) alert(INPUT_FORM.MONEY.exception);
  else if (index === ZERO) alert(INPUT_FORM.PAYMENTTYPE.exception);
  else {
    const result = await fetchRequestInsuranceMoney(getInsuranceMoneyDTO(money, index));
    if (result == null) return;
    alert(ALERT.OK.REQUEST_INSURANCE_MONEY);
    window.history.back();
    window.history.back();
    window.history.back();
  }
}

const cancel = () => {
  window.history.back();
}

const compensationTaskMapper = {
  REQUEST_COMPENSATION: {
    OK: requestCompensation,
    CANCEL: cancel
  },
  REQUEST_INSURANCE_MONEY: {
    OK: requestInsuranceMoney,
    CANCEL: cancel
  }
}

export const renderButton = () => {
  const type = sessionStorage.getItem(KEY.CURRENT_TYPE);
  initialButtons(BUTTON.TASK.COMPENSATION.INPUT[type], compensationTaskMapper[type]);
}
