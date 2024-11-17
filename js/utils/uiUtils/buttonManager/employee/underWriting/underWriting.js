import { BUTTON } from '../../../../../../config/employee/underWriting/underWriting.js';
import { viewInformationListAll,informationType } from '../../../tableRenderer/employee/underWriting/underWriting.js';

export const renderButtons = () => {
  initialButtons(BUTTON.TASK.EMPLOYEE.UNDERWRITING.HOME, underWritingTaskMapper);
};

const viewRequestingContract = () => {
  viewInformationListAll(informationType.REVIEW_ACQUISITION);
}

const applyCoperation = () => {
  viewInformationListAll(informationType.APPLY_COPERATION);
}

const applyReinsurance = () => {
  viewInformationListAll(informationType.APPLY_REINSURANCE);
}

const underWritingTaskMapper = {
  // key: value -> constants의 키 이름: 함수
  REVIEW_ACQUISITION: viewRequestingContract,
  APPLY_COPERATION: applyCoperation,
  APPLY_REINSURANCE: applyReinsurance
}

const initialButtons = (buttonMessages, buttonActionMapper) => {
  const buttonContainer = document.getElementById("buttonContainer");
  // 객체의 각 항목을 순회하여 버튼 생성
  Object.entries(buttonMessages).forEach(([key, name]) => {
    const button = document.createElement("div");
    button.className = "button-item";
    button.textContent = name; // 버튼에 표시할 텍스트 설정

    button.addEventListener("click", buttonActionMapper[key]);

    // buttonActionMapper[PRODUCT_LIST] -> showProductListMenu
    // buttonActionMapper[MANAGEMENT_CONTRACT] -> managementContract
    // buttonActionMapper[VIEW_ACCIDENT] -> viewAccident
    // buttonActionMapper[VIEW_COMPLAINT] -> viewComplaint

    buttonContainer.appendChild(button);
  });
}
