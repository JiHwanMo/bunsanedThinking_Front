import {initialButtons} from "../../../common/buttonUtils.js";
import {BUTTON, INPUT_FORM} from "../../../../../../config/employee/compensation/compensation.js";
import {
  fetchRequestCompensation,
  fetchRequestInsuranceMoney
} from "../../../../apiUtils/apiDocumentation/employee/compensation/compensation.js";

const getCompensationDTO = (money, index) => {
  return {
    money: money,
    paymentType: index-1,
    reportId: sessionStorage.getItem("selectedDataId")
  }
}

const getInsuranceMoneyDTO = (money, index) => {
  return {
    money: money,
    paymentType: index-1,
    insuranceMoneyId: sessionStorage.getItem("selectedDataId")
  }
}

const requestCompensation = async () => {
  const money = document.getElementById(INPUT_FORM.MONEY.id).value;
  const index = document.getElementById(INPUT_FORM.PAYMENTTYPE.id).selectedIndex;
  if (money.length === 0 || money <= 0) alert("금액을 다시 입력해 주세요");
  else if (index === 0) alert("현금 혹은 계좌이체 중에서 선택해주세요");
  else {
    await fetchRequestCompensation(getCompensationDTO(money, index));
    alert("요청이 완료되었습니다");
    window.history.back();
    window.history.back();
    window.history.back();
  }
}

const requestInsuranceMoney = async () => {
  const money = document.getElementById(INPUT_FORM.MONEY.id).value;
  const index = document.getElementById(INPUT_FORM.PAYMENTTYPE.id).selectedIndex;
  if (money.length === 0 || money <= 0) alert("금액을 다시 입력해 주세요");
  else if (index === 0) alert("현금 혹은 계좌이체 중에서 선택해주세요");
  else {
    await fetchRequestInsuranceMoney(getInsuranceMoneyDTO(money, index));
    alert("요청이 완료되었습니다");
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
  const type = sessionStorage.getItem("currentType");
  initialButtons(BUTTON.TASK.COMPENSATION.INPUT[type], compensationTaskMapper[type]);
}
