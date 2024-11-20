import { BUTTON } from '../../../../../../config/employee/contractManagement/contractManagement.js';
import { viewInformationList } from '../../../tableRenderer/employee/contractManagement/informationList.js';
import { informationType } from '../../../tableRenderer/employee/contractManagement/informationList.js';

export const renderButtons = () => {
  initialButtons(BUTTON.TASK.CONTRACT_MANAGEMENT.HOME, contractManagementTaskMapper);
};

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

const contractManagementTaskMapper = {
  DEFAULT_CONTRACT: viewDefaultContract,
  RECONTRACT: viewRecontract,
  ENDORSEMENT: viewEndorsement,
  REVIVAL: viewRevival,
  TERMINATION: viewTermination
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
