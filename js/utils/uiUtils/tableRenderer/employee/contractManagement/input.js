import {BUTTON, COMBOBOX, INPUT_LABEL} from "../../../../../../config/employee/compensation/compensation.js";
import {renderButton} from "../../../buttonManager/employee/compensation/input.js";

export const renderInput = async () => {
  const title = document.getElementById("title");
  title.textContent = BUTTON.TASK.COMPENSATION.HOME[sessionStorage.getItem("currentType")];
  renderInputFields();
  renderButton();
}

const renderInputFields = () => {
  const inputFieldsContainer = document.getElementById("inputFieldsContainer");
  while(inputFieldsContainer.firstChild) inputFieldsContainer.removeChild(inputFieldsContainer.firstChild);
  forms.forEach(form => inputFieldsContainer.appendChild(createForm(form)));
};

const forms = [
  {
    isCombo: false,
    for: "money",
    label: "MONEY",
    type: "number",
    id: "money",
    name: "money",
    placeholder: "MONEY"
  },
  {
    isCombo: true,
    for: "paymentType",
    label: "PAYMENTTYPE",
    id: "paymentType"
  }
];

const createForm = (form) => {
  const type = sessionStorage.getItem("currentType");
  const formDiv = document.createElement("div");
  formDiv.className = "form-group";
  const formLabel = document.createElement("label");
  formLabel.for = form.for;
  formLabel.textContent = INPUT_LABEL[type][form.label];
  formDiv.appendChild(formLabel);
  let formInput;
  if (form.isCombo) {
    formInput = document.createElement("select");
    const optionTypes = COMBOBOX[sessionStorage.getItem("currentType")].input;
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
