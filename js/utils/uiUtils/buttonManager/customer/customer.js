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
  window.location.href = "../informationList.html";
  // 이거 js 파일 기준이 아니라 실행중인 html 파일 기준으로 링크 지정해야 합니다.....!!
  // 현재 js 파일 밖으로 벗어난다고 ../../../ 해서 들어가면 css가 지정이 안되요
}

const viewAccident = () => {
  window.location.href = "../informationList.html";
}

const viewComplaint = () => {
  window.location.href = "../informationList.html";
}

const customerTaskMapper = {
  PRODUCT_LIST: showProductListMenu,
  MANAGEMENT_CONTRACT: managementContract,
  VIEW_ACCIDENT: viewAccident,
  VIEW_COMPLAINT: viewComplaint
}

const insuranceList = () => {
  window.location.href = "../informationList.html";
}

const loanList = () => {
  window.location.href = "../informationList.html";
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

    button.addEventListener("click", buttonActionMapper[key]);
    buttonContainer.appendChild(button); // 버튼을 buttonContainer에 추가
  });
}
