import {BUTTON, INPUT_FORM} from "../../../../../config/customer/customer.js";
import {COMBOBOX, INPUT_LABEL} from "../../../../../config/customer/customer.js";
import {renderButton} from "../../buttonManager/customer/input.js";
import {ELEMENT_ID, KEY, MESSAGES, TAG} from "../../../../../config/common.js";

export const renderInput = () => {
  const title = document.getElementById(ELEMENT_ID.TITLE);
  const type = sessionStorage.getItem(KEY.CURRENT_TYPE);
  let titleContent = BUTTON.TASK.CUSTOMER.HOME[type];
  if (titleContent === undefined) titleContent = BUTTON.TASK.CUSTOMER.PRODUCT_LIST[type];
  title.textContent = titleContent;
  renderInputFields();
  renderButton();
}

const renderInputFields = () => {
  const inputFieldsContainer = document.getElementById(ELEMENT_ID.INPUT_FIELDS_CONTAINER);
  while(inputFieldsContainer.firstChild) inputFieldsContainer.removeChild(inputFieldsContainer.firstChild);
  const selectedButtonType = sessionStorage.getItem(KEY.SELECTED_BUTTON_TYPE);
  Object.entries(INPUT_FORM[selectedButtonType]).forEach(([key, form]) =>
    inputFieldsContainer.appendChild(createForm(form, selectedButtonType)));
}

const createForm = (form, type) => {
  const formDiv = document.createElement(TAG.DIV);
  formDiv.className = "form-group";
  const formLabel = document.createElement(TAG.LABEL);
  formLabel.for = form.for;
  formLabel.textContent = INPUT_LABEL[type][form.label];
  formDiv.appendChild(formLabel);
  let formInput;
  if (form.isCombo) {
    formInput = document.createElement(TAG.SELECT);
    const optionTypes = COMBOBOX.INPUT[type][form.label];
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
