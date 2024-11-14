// buttonManager/customer.js
// import { fetchGetDatafetchData } from '../../../apiUtils/apiHandler/customer/customer.js';
import { BUTTON } from '../../../../../config/constants.js';

export const renderButtons = () => {
  initialButtons(BUTTON.TASK.CUSTOMER, customerTaskMapper);
};

const showProductListMenu = () => {
  const buttonContainer = document.getElementById("buttonContainer");
  while (buttonContainer.firstChild) buttonContainer.firstChild.remove();
  initialButtons(BUTTON.TASK.PRODUCT_LIST, productTaskMapper);
}

const managementContract = () => {
  alert("기가입 보헙 목록스");
}

const viewAccident = () => {
  alert("사고 신고 목록스");
}

const viewComplaint = () => {
  alert("민원 목록스");
}

const customerTaskMapper = {
  PRODUCT_LIST: showProductListMenu,
  MANAGEMENT_CONTRACT: managementContract,
  VIEW_ACCIDENT: viewAccident,
  VIEW_COMPLAINT: viewComplaint
}

const insuranceList = () => {
  alert("보헙 상품 목록스")
}

const loanList = () => {
  alert("대출 상품 목록스")
}

const productTaskMapper = {
  INSURANCE_LIST: insuranceList,
  LOAN_LIST: loanList
}

export const initialButtons = (buttonMessages, buttonActionMapper) => {
  const buttonContainer = document.getElementById("buttonContainer");

  // 객체의 각 항목을 순회하여 버튼 생성
  Object.entries(buttonMessages).forEach(([key, name]) => {
    const button = document.createElement("div");
    button.className = "button-item";
    button.textContent = name; // 버튼에 표시할 텍스트 설정

    button.addEventListener("click", () => {
      // alert(`${name}`);
      buttonActionMapper[key]();
    });
    buttonContainer.appendChild(button); // 버튼을 buttonContainer에 추가
  });
}
