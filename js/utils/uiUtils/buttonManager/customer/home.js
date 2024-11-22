import { BUTTON } from '../../../../../config/customer/customer.js';
import { viewInformationListById } from '../../tableRenderer/customer/informationList.js';
import { viewInformationListAll } from '../../tableRenderer/customer/informationList.js';
import { informationType } from '../../tableRenderer/customer/informationList.js';

const showProductListMenu = () => {
  const buttonContainer = document.getElementById("buttonContainer");
  while (buttonContainer.firstChild) buttonContainer.firstChild.remove();
  initialButtons(BUTTON.TASK.CUSTOMER.PRODUCT_LIST, customerTaskMapper.PRODUCT_LIST);
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

const insuranceList = () => {
  viewInformationListAll(informationType.INSURANCE_LIST);
}

const loanList = () => {
  viewInformationListAll(informationType.LOAN_LIST);
}

const applyRecontract = () => {
  alert("재가입 신청");
}

const applyRevival = () => {
  alert("부활 신청");
}

const applyTermination = () => {
  alert("해지 신청");
}

const applyEndorsement = () => {
  alert("배서 신청");
}

const payInsuranceFee = () => {
  alert("보험금 납입");
}

const receiveInsurance = () => {
  alert("보험금 신청");
}

const askInsuranceCounsel = () => {
  alert("상담 신청");
}

const buyInsurance = () => {
  alert("보험 구매");
}

const loan = () => {
  alert("대출 신청");
}

const cancel = () => {
  window.location.href = "informationList.html";
}

const customerTaskMapper = {
  HOME: {
    PRODUCT_LIST: showProductListMenu,
    MANAGEMENT_CONTRACT: managementContract,
    VIEW_ACCIDENT: viewAccident,
    VIEW_COMPLAINT: viewComplaint
  },
  PRODUCT_LIST: {
    INSURANCE_LIST: insuranceList,
    LOAN_LIST: loanList
  },
  MANAGEMENT_CONTRACT: {
    RECONTRACT: applyRecontract,
    REVIVAL: applyRevival,
    TERMINATION: applyTermination,
    ENDORSEMENT: applyEndorsement,
    PAY_INSURANCE_FEE: payInsuranceFee,
    RECEIVE_INSURANCE: receiveInsurance
  },
  INSURANCE_LIST: {
    COUNSEL: askInsuranceCounsel,
    BUY_INSURANCE: buyInsurance
  },
  LOAN_LIST: {
    APPLY: loan,
    CANCEL: cancel
  }
}

export const renderButtons = () => {
  initialButtons(BUTTON.TASK.CUSTOMER.HOME, customerTaskMapper.HOME);
}

export const renderDetailButtons = () => {
  const type = sessionStorage.getItem("currentType");
  initialButtons(BUTTON.TASK.CUSTOMER[type], customerTaskMapper[type]);
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
