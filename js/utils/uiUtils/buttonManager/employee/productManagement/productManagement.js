import { BUTTON } from '../../../../../../config/employee/productManagement/productManagement.js';
import { viewInformationListAll,informationType } from '../../../tableRenderer/employee/productManagement/productManagement.js';

export const renderButtons = () => {
  initialButtons(BUTTON.TASK.EMPLOYEE.PRODUCT_MANAGEMENT.HOME, productManagementTaskMapper);
};

const manageInsuranceProduct = () => {
  viewInformationListAll(informationType.MANAGE_INSURANCE_PRODUCT);
}

const productManagementTaskMapper = {
  // key: value -> constants의 키 이름: 함수
  MANAGE_INSURANCE_PRODUCT: manageInsuranceProduct,
}

const initialButtons = (buttonMessages, buttonActionMapper) => {
  const buttonContainer = document.getElementById("buttonContainer");
  Object.entries(buttonMessages).forEach(([key, name]) => {
    const button = document.createElement("div");
    button.className = "button-item";
    button.textContent = name;

    button.addEventListener("click", buttonActionMapper[key]);

    buttonContainer.appendChild(button);
  });
}
