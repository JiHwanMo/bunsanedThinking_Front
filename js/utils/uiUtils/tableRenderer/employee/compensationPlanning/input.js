import {
  COMBOBOX,
  INPUT_FORM,
  INPUT_LABEL, INPUT_TYPE, UPDATE_OPTION_PLACEHOLDER
} from "../../../../../../config/employee/compensationPlanning/compensationPlanning.js";
import {
  fetchGetPartnerCompanyDetailById
} from "../../../../apiUtils/apiDocumentation/employee/compensationPlanning/compensationPlanning.js";
import {renderButton} from "../../../buttonManager/employee/compensationPlanning/input.js";
import {CLASS, ELEMENT_ID, KEY, MESSAGES, STRING_EMPTY, TAG} from "../../../../../../config/common.js";

export const renderInput = async () => {
  const selectedButtonType = sessionStorage.getItem(KEY.SELECTED_BUTTON_TYPE);
  if (selectedButtonType === INPUT_TYPE.POST) {
    renderInputFields();
  } else if (selectedButtonType === INPUT_TYPE.UPDATE) {
    const dataId = sessionStorage.getItem(KEY.SELECTED_DATA_ID);
    const data = await fetchGetPartnerCompanyDetailById(dataId);
    if (data == null) return;
    renderInputFieldsWithValues(data);
  } else if (selectedButtonType === INPUT_TYPE.EVALUATE) {}
  renderButton();
}

const createForm = (form) => {
  const type = sessionStorage.getItem(KEY.CURRENT_TYPE);
  const selectedButtonType = sessionStorage.getItem(KEY.SELECTED_BUTTON_TYPE);
  const formDiv = document.createElement(TAG.DIV);
  formDiv.className = CLASS.FORM_GROUP;
  const formLabel = document.createElement(TAG.LABEL);
  formLabel.for = form.for;
  formLabel.textContent = INPUT_LABEL[type][selectedButtonType][form.label];
  formDiv.appendChild(formLabel);
  let formInput;
  if (form.isCombo) {
    formInput = document.createElement(TAG.SELECT);
    const optionTypes = COMBOBOX[sessionStorage.getItem(KEY.CURRENT_TYPE)].INPUT[selectedButtonType];
    formInput.id = form.id;
    optionTypes.forEach(optionType => {
      const option = document.createElement(TAG.OPTION);
      option.value = optionType.value;
      option.textContent = optionType.label;
      formInput.appendChild(option);
    });
  } else {
    formInput = document.createElement(TAG.INPUT);
    formInput.type = form.type;
    formInput.id = form.id;
    formInput.name = form.name;
    formInput.placeholder = `${INPUT_LABEL[type][selectedButtonType][form.placeholder]} ${MESSAGES.PLACE_HOLDER.INPUT}`;
  }
  formDiv.appendChild(formInput);
  return formDiv;
}

const renderInputFields = () => {
  const selectedButtonType = sessionStorage.getItem(KEY.SELECTED_BUTTON_TYPE);
  const inputFieldsContainer = document.getElementById(ELEMENT_ID.INPUT_FIELDS_CONTAINER);
  while(inputFieldsContainer.firstChild) inputFieldsContainer.removeChild(inputFieldsContainer.firstChild);
  Object.entries(INPUT_FORM[selectedButtonType]).forEach(([key, form]) => inputFieldsContainer.appendChild(createForm(form)));
};
const renderInputFieldsWithValues = (data) => {
  const selectedButtonType = sessionStorage.getItem(KEY.SELECTED_BUTTON_TYPE);
  const inputFieldsContainer = document.getElementById(ELEMENT_ID.INPUT_FIELDS_CONTAINER);
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
  input.placeholder = UPDATE_OPTION_PLACEHOLDER+MESSAGES.PLACE_HOLDER.INPUT;
  switch (index) {
    case 0:
      input.value = STRING_EMPTY;
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
