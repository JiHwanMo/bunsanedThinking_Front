import {BUTTON, INPUT_FORM} from "../../../../../config/customer/customer.js";
import {COMBOBOX, INPUT_LABEL} from "../../../../../config/customer/customer.js";
import {renderButton} from "../../buttonManager/customer/input.js";

export const buttonType = {
  APPLY_ENDORSEMENT: "APPLY_ENDORSEMENT",
  PAY_INSURANCE_FEE: "PAY_INSURANCE_FEE",
  RECEIVE_INSURANCE: "RECEIVE_INSURANCE",
  ASK_INSURANCE_COUNSEL: "ASK_INSURANCE_COUNSEL",
  ADD_ACCIDENT: "ADD_ACCIDENT",
  ADD_COMPLAINT: "ADD_COMPLAINT"
}

export const renderInput = async () => {
  const title = document.getElementById("title");
  const type = sessionStorage.getItem("currentType");
  let titleContent = BUTTON.TASK.CUSTOMER.HOME[type];
  if (titleContent === undefined) titleContent = BUTTON.TASK.CUSTOMER.PRODUCT_LIST[type];
  title.textContent = titleContent;
  renderInputFields();
  renderButton();
}

const renderInputFields = () => {
  const inputFieldsContainer = document.getElementById("inputFieldsContainer");
  while(inputFieldsContainer.firstChild) inputFieldsContainer.removeChild(inputFieldsContainer.firstChild);
  const selectedButtonType = sessionStorage.getItem("selectedButtonType");
  Object.entries(INPUT_FORM[selectedButtonType]).forEach(([key, form]) =>
    inputFieldsContainer.appendChild(createForm(form, selectedButtonType)));
}

const createForm = (form, type) => {
  const formDiv = document.createElement("div");
  formDiv.className = "form-group";
  const formLabel = document.createElement("label");
  formLabel.for = form.for;
  formLabel.textContent = INPUT_LABEL[type][form.label];
  formDiv.appendChild(formLabel);
  let formInput;
  if (form.isCombo) {
    formInput = document.createElement("select");
    const optionTypes = COMBOBOX.INPUT[type][form.label];
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
    formInput.placeholder = `${INPUT_LABEL[type][form.placeholder]} 을(를) 입력하세요`;
  }
  formDiv.appendChild(formInput);
  return formDiv;
}
