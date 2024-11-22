import { BUTTON } from '../../../../../../config/employee/compensation/compensation.js';
import { viewInformationList } from '../../../tableRenderer/employee/compensation/informationList.js';
import { informationType } from '../../../tableRenderer/employee/compensation/informationList.js';

const viewRequestCompensation = () => {
  viewInformationList(informationType.REQUEST_COMPENSATION);
}

const viewRequestInsuranceMoney = () => {
  viewInformationList(informationType.REQUEST_INSURANCE_MONEY);
}

const requestCompensation = () => {
  alert("보상처리");
}

const requestInsuranceMoney = () => {
  alert("보험금 지급");
}

const cancel = () => {
  window.location.href = "informationList.html";
}

const compensationTaskMapper = {
  HOME: {
    REQUEST_COMPENSATION: viewRequestCompensation,
    REQUEST_INSURANCE_MONEY: viewRequestInsuranceMoney
  },
  REQUEST_COMPENSATION: {
    REQUEST: requestCompensation,
    CANCEL: cancel
  },
  REQUEST_INSURANCE_MONEY: {
    REQUEST: requestInsuranceMoney,
    CANCEL: cancel
  }
}

export const renderButtons = () => {
  initialButtons(BUTTON.TASK.COMPENSATION.HOME, compensationTaskMapper.HOME);
}

export const renderDetailButtons = () => {
  const type = sessionStorage.getItem("currentType");
  initialButtons(BUTTON.TASK.COMPENSATION[type], compensationTaskMapper[type]);
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
