import { BUTTON } from '../../../../../../config/employee/compensationPlanning/compensationPlanning.js';
import { viewInformationList } from '../../../tableRenderer/employee/compensationPlanning/informationList.js';
import { informationType } from '../../../tableRenderer/employee/compensationPlanning/informationList.js';

const viewEvaluatePartnerCompany = () => {
  viewInformationList(informationType.EVALUATE_PARTNERCOMPANY);
}

const viewManagementPartnerCompany = () => {
  viewInformationList(informationType.MANAGEMENT_PARTNERCOMPANY);
}

const evaluate = () => {
  alert("평가-보상기획");
}

const cancel = () => {
  window.location.href = "informationList.html";
}

const compensationPlanningTaskMapper = {
  HOME: {
    EVALUATE_PARTNERCOMPANY: viewEvaluatePartnerCompany,
    MANAGEMENT_PARTNERCOMPANY: viewManagementPartnerCompany
  },
  EVALUATE_PARTNERCOMPANY: {
    EVALUATE: evaluate,
    CANCEL: cancel
  }
}

export const renderButtons = () => {
  initialButtons(BUTTON.TASK.COMPENSATIONPLANNING.HOME, compensationPlanningTaskMapper.HOME);
}

export const renderDetailButtons = () => {
  const type = sessionStorage.getItem("currentType");
  initialButtons(BUTTON.TASK.COMPENSATIONPLANNING[type], compensationPlanningTaskMapper[type]);
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
