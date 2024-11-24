import {
  COMBOBOX,
  INPUT_FORM,
  INPUT_LABEL
} from "../../../../../../config/employee/compensationPlanning/compensationPlanning.js";
import {
  fetchGetPartnerCompanyDetailById
} from "../../../../apiUtils/apiDocumentation/employee/compensationPlanning/compensationPlanning.js";
import {renderButton} from "../../../buttonManager/employee/compensationPlanning/input.js";

export const inputType = {
  POST: "POST",
  EVALUATE: "EVALUATE",
  UPDATE: "UPDATE"
}

export const renderInput = async () => {
  const selectedButtonType = sessionStorage.getItem("selectedButtonType");
  if (selectedButtonType === "POST") {
    renderInputFields();
  } else if (selectedButtonType === "UPDATE") {
    const dataId = sessionStorage.getItem("selectedDataId");
    const data = await fetchGetPartnerCompanyDetailById(dataId);
    renderInputFieldsWithValues(data);
  } else if (selectedButtonType === "EVALUATE") {}
  renderButton();
}

const createForm = (form) => {
  const type = sessionStorage.getItem("currentType");
  const selectedButtonType = sessionStorage.getItem("selectedButtonType");
  const formDiv = document.createElement("div");
  formDiv.className = "form-group";
  const formLabel = document.createElement("label");
  formLabel.for = form.for;
  formLabel.textContent = INPUT_LABEL[type][selectedButtonType][form.label];
  formDiv.appendChild(formLabel);
  let formInput;
  if (form.isCombo) {
    formInput = document.createElement("select");
    const optionTypes = COMBOBOX[sessionStorage.getItem("currentType")].INPUT[selectedButtonType];
    formInput.id = form.id;
    optionTypes.forEach(optionType => {
      const option = document.createElement("option");
      option.value = optionType.value;
      option.textContent = optionType.label;
      formInput.appendChild(option);
    });
  } else {
    formInput = document.createElement("input");
    formInput.type = form.type;
    formInput.id = form.id;
    formInput.name = form.name;
    formInput.placeholder = `${INPUT_LABEL[type][selectedButtonType][form.placeholder]} 을(를) 입력하세요`;
  }
  formDiv.appendChild(formInput);
  return formDiv;
}

const renderInputFields = () => {
  const selectedButtonType = sessionStorage.getItem("selectedButtonType");
  const inputFieldsContainer = document.getElementById("inputFieldsContainer");
  while(inputFieldsContainer.firstChild) inputFieldsContainer.removeChild(inputFieldsContainer.firstChild);
  Object.entries(INPUT_FORM[selectedButtonType]).forEach(([key, form]) => inputFieldsContainer.appendChild(createForm(form)));
};
const renderInputFieldsWithValues = (data) => {
  const selectedButtonType = sessionStorage.getItem("selectedButtonType");
  const inputFieldsContainer = document.getElementById("inputFieldsContainer");
  while(inputFieldsContainer.firstChild) inputFieldsContainer.removeChild(inputFieldsContainer.firstChild);
  Object.entries(INPUT_FORM[selectedButtonType]).forEach(([key, form]) => {
    inputFieldsContainer.appendChild(createForm(form));
  });
  const select = document.getElementById(INPUT_FORM[selectedButtonType].TYPE.id);
  select.onchange = () => changeUpdateOption(select, data, selectedButtonType);
}
const changeUpdateOption = (select, data, selectedButtonType) => {
  const index = select.selectedIndex;
  const input = document.getElementById(INPUT_FORM[selectedButtonType].INPUT.id);
  input.placeholder = "수정 정보 을(를) 입력하세요";
  // 인덱스에 맞춰서 input 라벨 및 입력창 변경
  switch (index) {
    case 0:
      input.value = "";
      break;
    case 1:
      input.value = data.name;
      break;
    case 2:
      input.value = data.phoneNumber;
      break;
    case 3:
      input.value = data.headName;
      break;
    case 4:
      input.value = data.headPhoneNumber;
      break;
  }
}
