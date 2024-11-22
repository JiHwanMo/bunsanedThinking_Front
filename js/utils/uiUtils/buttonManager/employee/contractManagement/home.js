import { BUTTON } from '../../../../../../config/employee/contractManagement/contractManagement.js';
import { viewInformationList } from '../../../tableRenderer/employee/contractManagement/informationList.js';
import { informationType } from '../../../tableRenderer/employee/contractManagement/informationList.js';

const viewDefaultContract = () => {
  viewInformationList(informationType.DEFAULT_CONTRACT);
}

const viewRecontract = () => {
  viewInformationList(informationType.RECONTRACT);
}

const viewEndorsement = () => {
  viewInformationList(informationType.ENDORSEMENT);
}

const viewRevival = () => {
  viewInformationList(informationType.REVIVAL);
}

const viewTermination = () => {
  viewInformationList(informationType.TERMINATION);
}

const sendNotice = () => {
  alert("안내장 발송");
}
const reviewRecontract = () => {
  alert("재계약 승인");
}
const denyRecontract = () => {
  alert("재계약 거절");
}
const reviewEndorsement = () => {
  alert("배서 승인");
}
const denyEndorsement = () => {
  alert("배서 거절");
}
const reviewRevival = () => {
  alert("부활 승인");
}
const denyRevival = () => {
  alert("부활 거절");
}
const requestTerminationFee = () => {
  alert("해지 승인");
}
const cancel = () => {
  window.location.href = "informationList.html";
}

const contractManagementTaskMapper = {
  HOME: {
    DEFAULT_CONTRACT: viewDefaultContract,
    RECONTRACT: viewRecontract,
    ENDORSEMENT: viewEndorsement,
    REVIVAL: viewRevival,
    TERMINATION: viewTermination
  },
  DEFAULT_CONTRACT: {
    NOTICE: sendNotice,
    CANCEL: cancel
  },
  RECONTRACT: {
    APPLY: reviewRecontract,
    DENY: denyRecontract
  },
  ENDORSEMENT: {
    APPLY: reviewEndorsement,
    DENY: denyEndorsement
  },
  REVIVAL: {
    APPLY: reviewRevival,
    DENY: denyRevival
  },
  TERMINATION: {
    REQUEST: requestTerminationFee,
    CANCEL: cancel
  }
}

export const renderButtons = () => {
  initialButtons(BUTTON.TASK.CONTRACT_MANAGEMENT.HOME, contractManagementTaskMapper.HOME);
};

export const renderDetailButtons = () => {
  const type = sessionStorage.getItem("currentType");
  initialButtons(BUTTON.TASK.CONTRACT_MANAGEMENT[type], contractManagementTaskMapper[type]);
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
