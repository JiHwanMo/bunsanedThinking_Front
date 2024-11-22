import {BUTTON} from "../../../../../../config/employee/financialAccountant/financialAccountant.js";

const context = {
  HANDLE_PAYMENT_DETAIL: {
    buttons: BUTTON.TASK.EMPLOYEE.FINANCIAL_ACCOUNTANT.HANDLE_PAYMENT_DETAIL
  }
}

export const renderButtons = () => {
  initialButtons(context[sessionStorage.getItem("currentType")].buttons, financialAccountantTaskMapper);
};

const initialButtons = (buttonMessages, buttonActionMapper) => {
  const buttonContainer = document.getElementById("buttonContainer");
  // 객체의 각 항목을 순회하여 버튼 생성
  Object.entries(buttonMessages).forEach(([key, name]) => {
    const button = document.createElement("div");
    button.className = "button-item";
    button.textContent = name; // 버튼에 표시할 텍스트 설정

    button.addEventListener("click", buttonActionMapper[key]);

    buttonContainer.appendChild(button); // 버튼을 buttonContainer에 추가
  });
}

const handlePaymentDetail = () => {
  alert("지급 - 재무회계");
}

const cancel = () => {
  alert("취소 - 재무회계");
}

const financialAccountantTaskMapper = {
  PAY: handlePaymentDetail,
  CANCEL: cancel
}
