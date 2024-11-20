import { BUTTON } from '../../../../../../config/employee/customerSupport/customerSupport.js';
import { viewInformationListAll } from '../../../tableRenderer/employee/customerSupport/informationList.js';
import { informationType } from '../../../tableRenderer/employee/customerSupport/informationList.js';

export const renderButtons = () => {
  initialButtons(BUTTON.TASK.EMPLOYEE.CUSTOMER_SUPPORT.HOME, customerSupportTaskMapper);
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
  viewInformationListAll(informationType.HANDLE_REPORT);
}

const handleComplaint = () => {
  viewInformationListAll(informationType.HANDLE_COMPLAINT);
}

const customerSupportTaskMapper = {
  HANDLE_REPORT: handleReport,
  HANDLE_COMPLAINT: handleComplaint
}
