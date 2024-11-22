import {BUTTON} from "../../../../../../config/employee/financialAccountant/financialAccountant.js";
import {initialButtons} from "../../../common/buttonUtils.js";

export const renderButtons = () => {
  const type = sessionStorage.getItem("currentType");
  initialButtons(BUTTON.TASK.EMPLOYEE.FINANCIAL_ACCOUNTANT[type], financialAccountantTaskMapper[type]);
};

const handlePaymentDetail = () => {
  alert("지급 - 재무회계");
}

const cancel = () => {
  alert("취소 - 재무회계");
}

const financialAccountantTaskMapper = {
  HANDLE_PAYMENT_DETAIL: {
    PAY: handlePaymentDetail,
    CANCEL: cancel
  }
}
