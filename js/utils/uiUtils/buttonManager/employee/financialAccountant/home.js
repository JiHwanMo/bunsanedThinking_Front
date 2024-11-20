import { BUTTON } from '../../../../../../config/employee/financialAccountant/financialAccountant.js';
import { viewInformationListAll } from '../../../tableRenderer/employee/financialAccountant/informationList.js';
import { informationType } from '../../../tableRenderer/employee/financialAccountant/informationList.js';

export const renderButtons = () => {
  initialButtons(BUTTON.TASK.EMPLOYEE.FINANCIAL_ACCOUNTANT.HOME, financialAccountantTaskMapper);
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
  viewInformationListAll(informationType.HANDLE_PAYMENT_DETAIL);
}

const viewDepositDetail = () => {
  viewInformationListAll(informationType.VIEW_DEPOSIT_DETAIL);
}

const financialAccountantTaskMapper = {
  HANDLE_PAYMENT_DETAIL: handlePaymentDetail,
  VIEW_DEPOSIT_DETAIL: viewDepositDetail
}
