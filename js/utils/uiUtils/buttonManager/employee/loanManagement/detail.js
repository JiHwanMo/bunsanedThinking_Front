import {BUTTON} from "../../../../../../config/employee/loanManagement/loanManagement.js";

const context = {
  MANAGEMENT_LOAN_PRODUCT: {
    buttons: BUTTON.TASK.EMPLOYEE.LOAN_MANAGEMENT.MANAGEMENT_LOAN_PRODUCT
  },
  LOAN_REQUEST: {
    buttons: BUTTON.TASK.EMPLOYEE.LOAN_MANAGEMENT.LOAN_REQUEST
  }
}

export const renderButtons = () => {
  initialButtons(context[sessionStorage.getItem("currentType")].buttons, loanManagementTaskMapper);
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

const updateLoan = () => {
  alert("수정 - 융자운용");
}

const deleteLoan = () => {
  alert("삭제 - 융자운용");
}

const requestLoan = () => {
  alert("요청 - 융자운용");
}

const deniedLoanRequest = () => {
  alert("거절 - 융자운용");
}

const cancel = () => {
  alert("취소 - 융자운용");
}

const loanManagementTaskMapper = {
  UPDATE: updateLoan,
  DELETE: deleteLoan,
  REQUEST: requestLoan,
  DENIED: deniedLoanRequest,
  CANCEL: cancel
}
