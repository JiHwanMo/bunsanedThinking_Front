import { BUTTON } from '../../../../../../config/employee/loanManagement/loanManagement.js';
import { viewInformationListAll } from '../../../tableRenderer/employee/loanManagement/informationList.js';
import { informationType } from '../../../tableRenderer/employee/loanManagement/informationList.js';

export const renderButtons = () => {
  initialButtons(BUTTON.TASK.EMPLOYEE.LOAN_MANAGEMENT.HOME, loanManagementTaskMapper);
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

const managementLoanProduct = () => {
  viewInformationListAll(informationType.MANAGEMENT_LOAN_PRODUCT);
}

const loanRequest = () => {
  viewInformationListAll(informationType.LOAN_REQUEST);
}

const loanManagementTaskMapper = {

  MANAGEMENT_LOAN_PRODUCT: managementLoanProduct,
  LOAN_REQUEST: loanRequest
}
