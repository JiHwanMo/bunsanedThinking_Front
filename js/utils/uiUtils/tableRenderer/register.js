import {
  CLASS_REGISTER,
  CLASS_SELECTOR_REGISTER,
  CONTAINER_KEY,
  DYNAMIC_SECTION_FORM,
  FIELD_NAME_KEY,
  INPUT_FORM,
  PLACE_HOLDER,
  TITLE
} from "../../../../config/register.js";
import {renderButton} from "../buttonManager/register.js";
import {CLASS, ELEMENT_ID, EVENT, INPUT_TYPE, MINUS, PLUS, TAG} from "../../../../config/common.js";

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

  if (form.type === CLASS.BUTTON_GROUP) {
    const buttonGroup = document.createElement(TAG.DIV);
    buttonGroup.className = CLASS.BUTTON_GROUP;
    form.options.forEach((option) => {
      const button = document.createElement(TAG.BUTTON);
      button.textContent = option.text;
      button.className = CLASS_REGISTER.GENDER_BUTTON;
      button.addEventListener(EVENT.CLICK, () => {
        document.querySelectorAll(CLASS_SELECTOR_REGISTER.GENDER_BUTTON).forEach((btn) =>
          btn.classList.remove(CLASS.SELECTED));
        button.classList.add(CLASS.SELECTED);
        buttonGroup.dataset.selectedValue = option.value;
      });
      buttonGroup.appendChild(button);
    });
    formDiv.appendChild(buttonGroup);
  } else {
    const formInput = form.isTextArea
      ? document.createElement(TAG.TEXT_AREA)
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
  sectionDiv.id = `${sectionId}${CONTAINER_KEY}`;
  sectionDiv.className = CLASS.DYNAMIC_SECTION;

  const headerDiv = document.createElement(TAG.DIV);
  headerDiv.className = CLASS.SECTION_HEADER;

  const sectionLabel = document.createElement(TAG.LABEL);
  sectionLabel.textContent = sectionTitle;

  const addButton = document.createElement(TAG.BUTTON);
  addButton.textContent = PLUS;
  addButton.className = CLASS.ADD_BUTTON;
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
  removeButton.textContent = MINUS;
  removeButton.className = CLASS.REMOVE_BUTTON;
  removeButton.addEventListener(EVENT.CLICK, () => {
    sectionDiv.removeChild(inputDiv);
  });

  Object.entries(fieldNames).forEach(([key, name]) => {
    const input = document.createElement(TAG.INPUT);
    input.type = key === FIELD_NAME_KEY.DATE || key === FIELD_NAME_KEY.DATE_OF_DIAGNOSIS ?
      INPUT_TYPE.DATE : INPUT_TYPE.TEXT;
    input.name = `${sectionId}${key}`;
    input.placeholder = key === FIELD_NAME_KEY.DATE || key === FIELD_NAME_KEY.DATE_OF_DIAGNOSIS ?
      `${PLACE_HOLDER.DATE} ${PLACE_HOLDER.DEFAULT}` : `${name} ${PLACE_HOLDER.DEFAULT}`;
    input.className = CLASS.INPUT_FIELD;
    inputDiv.appendChild(input);
  });

  inputDiv.appendChild(removeButton);
  sectionDiv.appendChild(inputDiv);
};
