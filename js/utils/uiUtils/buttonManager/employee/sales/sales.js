import { BUTTON } from '../../../../../../config/employee/sales/sales.js';
import { viewInformationListAll,informationType } from '../../../tableRenderer/employee/sales/sales.js';

export const renderButtons = () => {
  initialButtons(BUTTON.TASK.EMPLOYEE.SALES.HOME, salesTaskMapper);
};

const evaluateSalesPerformance = () => {
  viewInformationListAll(informationType.EVALUATE_SALES_PERFORMANCE);
}

const handleInsuranceConsultation = () => {
  viewInformationListAll(informationType.HANDLE_INSURANCE_CONSULTATION);
}

const induceInsuranceProduct = () => {
  viewInformationListAll(informationType.INDUCE_INSURANCE_PRODUCT);
}

const induceLoanProduct = () => {
  viewInformationListAll(informationType.INDUCE_LOAN_PRODUCT);
}

const salesTaskMapper = {
  // key: value -> constants의 키 이름: 함수
  EVALUATE_SALES_PERFORMANCE: evaluateSalesPerformance,
  HANDLE_INSURANCE_CONSULTATION: handleInsuranceConsultation,
  INDUCE_INSURANCE_PRODUCT: induceInsuranceProduct,
  INDUCE_LOAN_PRODUCT: induceLoanProduct
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
