// buttonManager/informationList.js
// import { fetchGetDatafetchData } from '../../../apiUtils/apiHandler/customer/informationList.js';
import { BUTTON } from '../../../../../config/customer/customer.js';
import { viewInformationListById } from '../../tableRenderer/customer/informationList.js';
import { viewInformationListAll } from '../../tableRenderer/customer/informationList.js';
import { informationType } from '../../tableRenderer/customer/informationList.js';

export const renderButtons = () => {
  initialButtons(BUTTON.TASK.CUSTOMER.HOME, customerTaskMapper);
};

const showProductListMenu = () => {
  const buttonContainer = document.getElementById("buttonContainer");
  while (buttonContainer.firstChild) buttonContainer.firstChild.remove();
  initialButtons(BUTTON.TASK.CUSTOMER.PRODUCT_LIST, productTaskMapper);
}

const managementContract = () => {
  viewInformationListById(informationType.MANAGEMENT_CONTRACT);
}

const viewAccident = () => {
  viewInformationListById(informationType.VIEW_ACCIDENT);
}

const viewComplaint = () => {
  viewInformationListById(informationType.VIEW_COMPLAINT);
}

const customerTaskMapper = {
  // key: value -> constants의 키 이름: 함수
  PRODUCT_LIST: showProductListMenu,
  MANAGEMENT_CONTRACT: managementContract,
  VIEW_ACCIDENT: viewAccident,
  VIEW_COMPLAINT: viewComplaint
}

const insuranceList = () => {
  viewInformationListAll(informationType.INSURANCE_LIST);
}

const loanList = () => {
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
