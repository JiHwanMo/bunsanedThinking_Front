import {BUTTON, INPUT_FORM} from "../../../../../../config/employee/compensationPlanning/compensationPlanning.js";
import {
  fetchAddPartnerCompany, fetchEvaluatePartnerCompany, fetchUpdatePartnerCompany
} from "../../../../apiUtils/apiDocumentation/employee/compensationPlanning/compensationPlanning.js";
import {initialButtons} from "../../../common/buttonUtils.js";
import {CLASS, ELEMENT_ID, EVENT, KEY, STRING_EMPTY, TAG, ZERO} from "../../../../../../config/common.js";

const getPartnerCompanyAddDTO = (name, phoneNumber, type, headName, headPhoneNumber) => {
  return {
    name: name,
    phoneNumber: phoneNumber,
    partnerCompanyType: type,
    headName: headName,
    headPhoneNumber: headPhoneNumber
  }
}

const addPartnerCompany = async () => {
  const inputForm = INPUT_FORM.POST;
  const name = document.getElementById(inputForm.NAME.id).value;
  const phoneNumber = document.getElementById(inputForm.PHONE_NUMBER.id).value;
  const type = document.getElementById(inputForm.TYPE.id).selectedIndex;
  const headName = document.getElementById(inputForm.HEAD_NAME.id).value;
  const headPhoneNumber = document.getElementById(inputForm.HEAD_PHONE_NUMBER.id).value;
  if (name === STRING_EMPTY) alert(inputForm.NAME.exception);
  else if (phoneNumber === STRING_EMPTY) alert(inputForm.PHONE_NUMBER.exception);
  else if (type === ZERO) alert(inputForm.TYPE.exception);
  else if (headName === STRING_EMPTY) alert(inputForm.HEAD_NAME.exception);
  else if (headPhoneNumber === STRING_EMPTY) alert(inputForm.HEAD_PHONE_NUMBER.exception);
  else {
    const dto = getPartnerCompanyAddDTO(name, phoneNumber, type, headName, headPhoneNumber);
    await fetchAddPartnerCompany(dto);
    alert("등록되었습니다.");
    window.history.back();
    window.history.back();
  }
}

const getPartnerCompanyUpdateDTO = (dataId, input, index) => {
  return {
    index: index,
    input: input,
    partnerCompanyId: dataId
  }
}

const updatePartnerCompany = async () => {
  const dataId = sessionStorage.getItem(KEY.SELECTED_DATA_ID);
  const selectedButtonType = sessionStorage.getItem(KEY.SELECTED_BUTTON_TYPE);
  const select = document.getElementById(INPUT_FORM[selectedButtonType].TYPE.id);
  const input = document.getElementById(INPUT_FORM[selectedButtonType].INPUT.id).value;
  const index = select.selectedIndex;
  if (index === ZERO) alert(INPUT_FORM[selectedButtonType].TYPE.exception);
  else {
    const updateDTO = getPartnerCompanyUpdateDTO(dataId, input, index);
    await fetchUpdatePartnerCompany(updateDTO);
    alert("수정되었습니다.");
    window.history.back();
    window.history.back();
    window.history.back();
  }
}

const cancel = () => {
  window.history.back();
}

const evaluatePartnerCompany = async (evaluate) => {
  const dataId = sessionStorage.getItem(KEY.SELECTED_DATA_ID);
  await fetchEvaluatePartnerCompany(evaluate, dataId);
  alert("평가되었습니다.");
  window.history.back();
  window.history.back();
  window.history.back();
}

const compensationPlanningTaskMapper = {
  POST: {
    OK: addPartnerCompany,
    CANCEL: cancel
  },
  UPDATE: {
    UPDATE: updatePartnerCompany,
    CANCEL: cancel
  },
  EVALUATE: {
    ONE: () => evaluatePartnerCompany(1),
    TWO: () => evaluatePartnerCompany(2),
    THREE: () => evaluatePartnerCompany(3),
    FOUR: () => evaluatePartnerCompany(4),
    FIVE: () => evaluatePartnerCompany(5)
  }
}

export const renderButton = () => {
  const selectedButtonType = sessionStorage.getItem(KEY.SELECTED_BUTTON_TYPE);
  if (selectedButtonType === "EVALUATE")
    initialButtonsEvaluate(BUTTON.TASK.COMPENSATIONPLANNING.INPUT[selectedButtonType],
      compensationPlanningTaskMapper[selectedButtonType]);
  else initialButtons(BUTTON.TASK.COMPENSATIONPLANNING.INPUT[selectedButtonType],
    compensationPlanningTaskMapper[selectedButtonType]);
}

const initialButtonsEvaluate = (buttonMessages, buttonActionMapper) => {
  const buttonContainer = document.getElementById(ELEMENT_ID.BUTTON_CONTAINER);
  buttonContainer.className = CLASS.STAR_BUTTONS_CONTAINER;
  Object.entries(buttonMessages).forEach(([key, name]) => {
    const button = document.createElement(TAG.DIV);
    button.className = CLASS.STAR_BUTTON;
    button.textContent = name; // 버튼에 표시할 텍스트 설정

    button.addEventListener(EVENT.CLICK, buttonActionMapper[key]);
    buttonContainer.appendChild(button); // 버튼을 buttonContainer에 추가
  });
}
