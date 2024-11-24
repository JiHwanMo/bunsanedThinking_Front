import {BUTTON} from "../../../../../../config/employee/financialAccountant/financialAccountant.js";
import {initialButtons} from "../../../common/buttonUtils.js";
import {
  fetchHandlePayment
} from "../../../../apiUtils/apiDocumentation/employee/financialAccountant/financialAccountant.js";

export const renderButtons = () => {
  const type = sessionStorage.getItem("currentType");
  initialButtons(BUTTON.TASK.EMPLOYEE.FINANCIAL_ACCOUNTANT[type], financialAccountantTaskMapper[type]);
};

const handlePaymentDetail = async () => {
  const selectedDataId = sessionStorage.getItem("selectedDataId");
  const employeeId = sessionStorage.getItem("id");

  alert("지급 처리 하시겠습니까?");

  await fetchHandlePayment(selectedDataId, employeeId);

  window.location.href = "home.html";
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
