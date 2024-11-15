// buttonManager/customer.js
// import { fetchGetDatafetchData } from '../../../apiUtils/apiHandler/customer/customer.js';
import { BUTTON } from '../../../../../config/constants.js';
import { viewInformationListById } from '../../tableRenderer/customer/customer.js';
import { viewInformationListAll } from '../../tableRenderer/customer/customer.js';
import { informationType } from '../../tableRenderer/customer/customer.js';

export const renderButtons = () => {
  initialButtons(BUTTON.TASK.CUSTOMER.HOME, customerTaskMapper);
};

const showProductListMenu = () => {
  const buttonContainer = document.getElementById("buttonContainer");
  while (buttonContainer.firstChild) buttonContainer.firstChild.remove();
  initialButtons(BUTTON.TASK.CUSTOMER.PRODUCT_LIST, productTaskMapper);
}

const managementContract = async () => {
  viewInformationListById(informationType.MANAGEMENT_CONTRACT);
}

const viewAccident = async () => {
  viewInformationListById(informationType.VIEW_ACCIDENT);
}

const viewComplaint = async () => {
  viewInformationListById(informationType.VIEW_COMPLAINT);
}

const customerTaskMapper = {
  PRODUCT_LIST: showProductListMenu,
  MANAGEMENT_CONTRACT: managementContract,
  VIEW_ACCIDENT: viewAccident,
  VIEW_COMPLAINT: viewComplaint
}

const insuranceList = async () => {
  viewInformationListAll(informationType.INSURANCE_LIST);
}

const loanList = async () => {
  viewInformationListAll(informationType.LOAN_LIST);
}

const productTaskMapper = {
  INSURANCE_LIST: insuranceList,
  LOAN_LIST: loanList
}

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
