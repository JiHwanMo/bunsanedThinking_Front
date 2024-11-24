import {initialButtons} from "../../../common/buttonUtils.js";
import {BUTTON, INPUT_FORM} from "../../../../../../config/employee/compensationPlanning/compensationPlanning.js";
import {
  fetchAddPartnerCompany, fetchEvaluatePartnerCompany, fetchUpdatePartnerCompany
} from "../../../../apiUtils/apiDocumentation/employee/compensationPlanning/compensationPlanning.js";

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
  if (name === "") alert("업체 이름을 입력해주세요");
  else if (phoneNumber === "") alert("업체 핸드폰 번호를 입력해주세요");
  else if (type === 0) alert("업체 유형은 둘 중에서 선택해주세요");
  else if (headName === "") alert("업체 대표 이름을 입력해주세요");
  else if (headPhoneNumber === "") alert("업체 대표 핸드폰 번호를 입력해주세요");
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
  const dataId = sessionStorage.getItem("selectedDataId");
  const selectedButtonType = sessionStorage.getItem("selectedButtonType");
  const select = document.getElementById(INPUT_FORM[selectedButtonType].TYPE.id);
  const input = document.getElementById(INPUT_FORM[selectedButtonType].INPUT.id).value;
  const index = select.selectedIndex;
  if (index === 0) alert("수정 옵션을 선택해주세요");
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
  const dataId = sessionStorage.getItem("selectedDataId");
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
  const selectedButtonType = sessionStorage.getItem("selectedButtonType");
  initialButtons(BUTTON.TASK.COMPENSATIONPLANNING.INPUT[selectedButtonType],
    compensationPlanningTaskMapper[selectedButtonType]);
}
