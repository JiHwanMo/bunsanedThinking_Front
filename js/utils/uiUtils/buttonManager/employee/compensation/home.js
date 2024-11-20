import { BUTTON } from '../../../../../../config/employee/compensation/compensation.js';
import { viewInformationList } from '../../../tableRenderer/employee/compensation/informationList.js';
import { informationType } from '../../../tableRenderer/employee/compensation/informationList.js';

export const renderButtons = () => {
  initialButtons(BUTTON.TASK.COMPENSATION.HOME, compensationTaskMapper);
}

const viewRequestCompensation = () => {
  viewInformationList(informationType.REQUEST_COMPENSATION);
}

const viewRequestInsuranceMoney = () => {
  viewInformationList(informationType.REQUEST_INSURANCE_MONEY);
}

const compensationTaskMapper = {
  REQUEST_COMPENSATION: viewRequestCompensation,
  REQUEST_INSURANCE_MONEY: viewRequestInsuranceMoney
}

const initialButtons = (buttonMessages, buttonActionMapper) => {
  const buttonContainer = document.getElementById("buttonContainer");
  Object.entries(buttonMessages).forEach(([key, name]) => {
    const button = document.createElement("div");
    button.className = "button-item";
    button.textContent = name; // 버튼에 표시할 텍스트 설정

    button.addEventListener("click", buttonActionMapper[key]);
    buttonContainer.appendChild(button); // 버튼을 buttonContainer에 추가
  });
}
