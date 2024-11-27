import {BUTTON, COMBOBOX, INPUT_LABEL} from "../../../../../../config/employee/compensation/compensation.js";
import {renderButton} from "../../../buttonManager/employee/compensation/input.js";
import {INPUT_FORM} from "../../../../../../config/employee/compensation/compensation.js";
import {CLASS, ELEMENT_ID, KEY, MESSAGES, TAG} from "../../../../../../config/common.js";

export const renderInput = () => {
  const title = document.getElementById(ELEMENT_ID.TITLE);
  title.textContent = BUTTON.TASK.COMPENSATION.HOME[sessionStorage.getItem(KEY.CURRENT_TYPE)];
  renderInputFields();
  renderButton();
}

const renderInputFields = () => {
  const inputFieldsContainer = document.getElementById(ELEMENT_ID.INPUT_FIELDS_CONTAINER);
  while(inputFieldsContainer.firstChild) inputFieldsContainer.removeChild(inputFieldsContainer.firstChild);
  Object.entries(INPUT_FORM).forEach(([key, form]) => inputFieldsContainer.appendChild(createForm(form)));
};

const createForm = (form) => {
  const type = sessionStorage.getItem(KEY.CURRENT_TYPE);
  const formDiv = document.createElement(TAG.DIV);
  formDiv.className = CLASS.FORM_GROUP;
  const formLabel = document.createElement(TAG.LABEL);
  formLabel.for = form.for;
  formLabel.textContent = INPUT_LABEL[type][form.label];
  formDiv.appendChild(formLabel);
  let formInput;
  if (form.isCombo) {
    formInput = document.createElement(TAG.SELECT);
    const optionTypes = COMBOBOX[sessionStorage.getItem(KEY.CURRENT_TYPE)].input;
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
    formInput.placeholder = `${INPUT_LABEL[type][form.placeholder]} ${MESSAGES.PLACE_HOLDER.INPUT}`;
  }
  formDiv.appendChild(formInput);
  return formDiv;
}
