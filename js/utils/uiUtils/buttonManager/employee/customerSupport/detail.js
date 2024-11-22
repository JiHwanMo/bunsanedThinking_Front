import {BUTTON} from "../../../../../../config/employee/customerSupport/customerSupport.js";

const context = {
  HANDLE_REPORT: {
    buttons: BUTTON.TASK.EMPLOYEE.CUSTOMER_SUPPORT.HANDLE_REPORT
  },
  HANDLE_COMPLAINT: {
    buttons: BUTTON.TASK.EMPLOYEE.CUSTOMER_SUPPORT.HANDLE_COMPLAINT
  }
}

export const renderButtons = () => {
  initialButtons(context[sessionStorage.getItem("currentType")].buttons, customerSupportTaskMapper);
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

const handleReport = () => {
  alert("신고 접수 - 고객지원");
}

const handleComplaint = () => {
  alert("민원 접수 - 고객지원");
}

const cancelReport = () => {
  alert("신고 취소 - 고객지원");
}

const cancelComplaint = () => {
  alert("민원 취소 - 고객지원");
}

const customerSupportTaskMapper = {
  HANDLE_REPORT: handleReport,
  HANDLE_COMPLAINT: handleComplaint,
  CANCEL_REPORT: cancelReport,
  CANCEL_COMPLAINT: cancelComplaint
}
