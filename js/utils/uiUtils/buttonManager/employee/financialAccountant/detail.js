import {
  BUTTON,
  ELEMENT_ID,
  QUESTION
} from "../../../../../../config/employee/financialAccountant/financialAccountant.js";
import {initialButtons} from "../../../common/buttonUtils.js";
import {
  fetchHandlePayment
} from "../../../../apiUtils/apiDocumentation/employee/financialAccountant/financialAccountant.js";
import {KEY, LOCATION} from "../../../../../../config/common.js";

export const renderButtons = () => {
  const type = sessionStorage.getItem(KEY.CURRENT_TYPE);
  initialButtons(BUTTON.TASK.EMPLOYEE.FINANCIAL_ACCOUNTANT[type], financialAccountantTaskMapper[type]);
};

const handlePaymentDetail = async () => {
  const selectedDataId = sessionStorage.getItem(KEY.SELECTED_DATA_ID);
  const employeeId = sessionStorage.getItem(ELEMENT_ID.ID);

  const check = confirm(QUESTION.CONFIRM_HANDLE_PAYMENT_DETAIL);

  if (check) {
    await fetchHandlePayment(selectedDataId, employeeId);
    window.location.href = LOCATION.HOME;
  }
}

const cancel = () => {
  window.history.back();
}

const financialAccountantTaskMapper = {
  HANDLE_PAYMENT_DETAIL: {
    PAY: handlePaymentDetail,
    CANCEL: cancel
  }
}
