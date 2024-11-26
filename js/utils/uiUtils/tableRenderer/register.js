import {TITLE, INPUT_FORM, DYNAMIC_SECTION_FORM} from "../../../../config/register.js";
import {renderButton} from "../buttonManager/register.js";
import {CLASS, ELEMENT_ID, EVENT, INPUT_TYPE, TAG} from "../../../../config/common.js";

export const renderInput = () => {
  const title = document.getElementById(ELEMENT_ID.TITLE);
  title.textContent = TITLE;
  renderInputFields();
  renderButton();
}

const renderInputFields = () => {
  const inputFieldsContainer = document.getElementById(ELEMENT_ID.INPUT_FIELDS_CONTAINER);
  while(inputFieldsContainer.firstChild) inputFieldsContainer.removeChild(inputFieldsContainer.firstChild);
  Object.entries(INPUT_FORM).forEach(([key, form]) => inputFieldsContainer.appendChild(createForm(form)));
  Object.entries(DYNAMIC_SECTION_FORM).forEach(([key, form]) => addDynamicSection(form));
}

const createForm = (form) => {
  const formDiv = document.createElement(TAG.DIV);
  formDiv.className = CLASS.FORM_GROUP;

  const formLabel = document.createElement(TAG.LABEL);
  formLabel.for = form.for;
  formLabel.textContent = form.placeholder;
  formDiv.appendChild(formLabel);

  if (form.type === "button-group") {
    const buttonGroup = document.createElement(TAG.DIV);
    buttonGroup.className = "button-group";
    form.options.forEach((option) => {
      const button = document.createElement(TAG.BUTTON);
      button.textContent = option.text; // 버튼에 표시할 텍스트
      button.className = "gender-button";
      button.addEventListener(EVENT.CLICK, () => {
        document.querySelectorAll(".gender-button").forEach((btn) =>
          btn.classList.remove(CLASS.SELECTED));
        button.classList.add(CLASS.SELECTED);
        buttonGroup.dataset.selectedValue = option.value; // 선택된 값으로 설정
      });
      buttonGroup.appendChild(button);
    });
    formDiv.appendChild(buttonGroup);
  } else {
    const formInput = form.isTextArea
      ? document.createElement("textarea")
      : document.createElement(TAG.INPUT);
    formInput.type = form.type;
    formInput.id = form.id;
    formInput.name = form.name;
    formInput.placeholder = form.placeholder;
    formDiv.appendChild(formInput);
  }

  return formDiv;
};

const addDynamicSection = (form) => {
  const sectionTitle = form.sectionTitle;
  const sectionId = form.sectionId;
  const fieldNames = form.fieldNames;
  const container = document.getElementById(ELEMENT_ID.INPUT_FIELDS_CONTAINER);
  const sectionDiv = document.createElement(TAG.DIV);
  sectionDiv.id = `${sectionId}Container`;
  sectionDiv.className = "dynamic-section";

  const headerDiv = document.createElement(TAG.DIV);
  headerDiv.className = "section-header";

  const sectionLabel = document.createElement(TAG.LABEL);
  sectionLabel.textContent = sectionTitle;

  const addButton = document.createElement(TAG.BUTTON);
  addButton.textContent = "+";
  addButton.className = "add-button";
  addButton.addEventListener(EVENT.CLICK, () => addInputField(sectionDiv, sectionId, fieldNames));

  headerDiv.appendChild(sectionLabel);
  headerDiv.appendChild(addButton);
  sectionDiv.appendChild(headerDiv);

  container.appendChild(sectionDiv);
};

const addInputField = (sectionDiv, sectionId, fieldNames) => {
  const inputDiv = document.createElement(TAG.DIV);
  inputDiv.className = CLASS.FORM_GROUP;
  const removeButton = document.createElement(TAG.BUTTON);
  removeButton.textContent = "-";
  removeButton.className = "remove-button";
  removeButton.addEventListener(EVENT.CLICK, () => {
    sectionDiv.removeChild(inputDiv); // 이력 항목 삭제
  });

  Object.entries(fieldNames).forEach(([key, name]) => {
    const input = document.createElement(TAG.INPUT);
    input.type = key === "date" || key === "dateOfDiagnosis" ? INPUT_TYPE.DATE : INPUT_TYPE.TEXT;
    input.name = `${sectionId}${key}`;
    input.placeholder = key === "date" || key === "dateOfDiagnosis" ? "날짜 입력" : `${name} 입력`;
    input.className = "input-field";
    inputDiv.appendChild(input);
  });

  inputDiv.appendChild(removeButton); // 삭제 버튼 추가
  sectionDiv.appendChild(inputDiv);
};
