import {addStarButtons, renderBottomButtons} from "../../../buttonManager/employee/sales/input.js";
import {CUSTOMER_FORM, DATE, ID, INPUT, NAME_MAPPER} from "../../../../../../config/employee/sales/sales.js";
import {
  CLASS,
  CLASS_SELECTOR,
  ELEMENT_ID,
  EVENT,
  INPUT_TYPE,
  KEY,
  MINUS,
  PLUS, STRING_EMPTY,
  TAG
} from "../../../../../../config/common.js";

export function renderInput() {
  const type = sessionStorage.getItem(KEY.CURRENT_TYPE);
  if (type === NAME_MAPPER.EVALUATE_SALES_PERFORMANCE) {
    addStarButtons();
  } else if (type === NAME_MAPPER.INDUCE_INSURANCE_PRODUCT || type === NAME_MAPPER.INDUCE_LOAN_PRODUCT) {
    renderCustomerInputFields();
  }
}

const customerForms = [
  {
    isTextArea: CUSTOMER_FORM.NAME.IS_TEXT_AREA,
    for: CUSTOMER_FORM.NAME.FOR,
    label: CUSTOMER_FORM.NAME.LABEL,
    type: CUSTOMER_FORM.NAME.TYPE,
    id: CUSTOMER_FORM.NAME.ID,
    name: CUSTOMER_FORM.NAME.NAME,
    placeholder: CUSTOMER_FORM.NAME.PLACE_HOLDER
  },
  {
    isTextArea: CUSTOMER_FORM.AGE.IS_TEXT_AREA,
    for: CUSTOMER_FORM.AGE.FOR,
    label: CUSTOMER_FORM.AGE.LABEL,
    type: CUSTOMER_FORM.AGE.TYPE,
    id: CUSTOMER_FORM.AGE.ID,
    name: CUSTOMER_FORM.AGE.NAME,
    placeholder: CUSTOMER_FORM.AGE.PLACE_HOLDER
  },
  {
    isTextArea: CUSTOMER_FORM.GENDER.IS_TEXT_AREA,
    for: CUSTOMER_FORM.GENDER.FOR,
    label: CUSTOMER_FORM.GENDER.LABEL,
    type: CUSTOMER_FORM.GENDER.TYPE,
    id: CUSTOMER_FORM.GENDER.ID,
    name: CUSTOMER_FORM.GENDER.NAME,
    options: [
      {value: CUSTOMER_FORM.GENDER.OPTION.MALE.VALUE, text: CUSTOMER_FORM.GENDER.OPTION.MALE.TEXT},
      {value: CUSTOMER_FORM.GENDER.OPTION.FEMALE.VALUE, text: CUSTOMER_FORM.GENDER.OPTION.FEMALE.TEXT}
    ]
  },
  {
    isTextArea: CUSTOMER_FORM.ADDRESS.IS_TEXT_AREA,
    for: CUSTOMER_FORM.ADDRESS.FOR,
    label: CUSTOMER_FORM.ADDRESS.LABEL,
    type: CUSTOMER_FORM.ADDRESS.TYPE,
    id: CUSTOMER_FORM.ADDRESS.ID,
    name: CUSTOMER_FORM.ADDRESS.NAME,
    placeholder: CUSTOMER_FORM.ADDRESS.PLACE_HOLDER
  },
  {
    isTextArea: CUSTOMER_FORM.PHONE_NUMBER.IS_TEXT_AREA,
    for: CUSTOMER_FORM.PHONE_NUMBER.FOR,
    label: CUSTOMER_FORM.PHONE_NUMBER.LABEL,
    type: CUSTOMER_FORM.PHONE_NUMBER.TYPE,
    id: CUSTOMER_FORM.PHONE_NUMBER.ID,
    name: CUSTOMER_FORM.PHONE_NUMBER.NAME,
    placeholder: CUSTOMER_FORM.PHONE_NUMBER.PLACE_HOLDER
  },
  {
    isTextArea: CUSTOMER_FORM.RESIDENT_REGISTRATION_NUMBER.IS_TEXT_AREA,
    for: CUSTOMER_FORM.RESIDENT_REGISTRATION_NUMBER.FOR,
    label: CUSTOMER_FORM.RESIDENT_REGISTRATION_NUMBER.LABEL,
    type: CUSTOMER_FORM.RESIDENT_REGISTRATION_NUMBER.TYPE,
    id: CUSTOMER_FORM.RESIDENT_REGISTRATION_NUMBER.ID,
    name: CUSTOMER_FORM.RESIDENT_REGISTRATION_NUMBER.NAME,
    placeholder: CUSTOMER_FORM.RESIDENT_REGISTRATION_NUMBER.PLACE_HOLDER
  },
  {
    isTextArea: CUSTOMER_FORM.JOB.IS_TEXT_AREA,
    for: CUSTOMER_FORM.JOB.FOR,
    label: CUSTOMER_FORM.JOB.LABEL,
    type: CUSTOMER_FORM.JOB.TYPE,
    id: CUSTOMER_FORM.JOB.ID,
    name: CUSTOMER_FORM.JOB.NAME,
    placeholder: CUSTOMER_FORM.JOB.PLACE_HOLDER
  },
  {
    isTextArea: CUSTOMER_FORM.BANK_ACCOUNT.IS_TEXT_AREA,
    for: CUSTOMER_FORM.BANK_ACCOUNT.FOR,
    label: CUSTOMER_FORM.BANK_ACCOUNT.LABEL,
    type: CUSTOMER_FORM.BANK_ACCOUNT.TYPE,
    id: CUSTOMER_FORM.BANK_ACCOUNT.ID,
    name: CUSTOMER_FORM.BANK_ACCOUNT.NAME,
    placeholder: CUSTOMER_FORM.BANK_ACCOUNT.PLACE_HOLDER
  },
  {
    isTextArea: CUSTOMER_FORM.BANK_NAME.IS_TEXT_AREA,
    for: CUSTOMER_FORM.BANK_NAME.FOR,
    label: CUSTOMER_FORM.BANK_NAME.LABEL,
    type: CUSTOMER_FORM.BANK_NAME.TYPE,
    id: CUSTOMER_FORM.BANK_NAME.ID,
    name: CUSTOMER_FORM.BANK_NAME.NAME,
    placeholder: CUSTOMER_FORM.BANK_NAME.PLACE_HOLDER
  },
  {
    isTextArea: CUSTOMER_FORM.PROPERTY.IS_TEXT_AREA,
    for: CUSTOMER_FORM.PROPERTY.FOR,
    label: CUSTOMER_FORM.PROPERTY.LABEL,
    type: CUSTOMER_FORM.PROPERTY.TYPE,
    id: CUSTOMER_FORM.PROPERTY.ID,
    name: CUSTOMER_FORM.PROPERTY.NAME,
    placeholder: CUSTOMER_FORM.PROPERTY.PLACE_HOLDER
  }
];

const createCustomerForm = (form) => {
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
      button.textContent = option.text; // 버튼에 표시할 텍스트
      button.className = CLASS.GENDER_BUTTON;
      button.addEventListener(EVENT.CLICK, () => {
        document.querySelectorAll(CLASS_SELECTOR.GENDER_BUTTON).forEach((btn) => btn.classList.remove(CLASS.SELECTED));
        button.classList.add(CLASS.SELECTED);
        buttonGroup.dataset.selectedValue = option.value; // 선택된 값으로 설정
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

const renderCustomerInputFields = () => {
  const container = document.getElementById(ELEMENT_ID.INPUT_FIELDS_CONTAINER);
  while (container.firstChild) container.removeChild(container.firstChild); // 기존 내용 제거

  customerForms.forEach((form) => {
    container.appendChild(createCustomerForm(form));
  });

  addDynamicSection(container, CUSTOMER_FORM.ACCIDENT_HISTORY.TITLE, CUSTOMER_FORM.ACCIDENT_HISTORY.ID, [CUSTOMER_FORM.ACCIDENT_HISTORY.FIELD_NAME.ACCIDENT_DATE, CUSTOMER_FORM.ACCIDENT_HISTORY.FIELD_NAME.ACCIDENT_DETAIL_ID]);
  addDynamicSection(container, CUSTOMER_FORM.SURGERY_HISTORY.TITLE, CUSTOMER_FORM.SURGERY_HISTORY.ID, [CUSTOMER_FORM.SURGERY_HISTORY.FIELD_NAME.DATE, CUSTOMER_FORM.SURGERY_HISTORY.FIELD_NAME.HOSPITAL_NAME_ID, CUSTOMER_FORM.SURGERY_HISTORY.FIELD_NAME.NAME_ID]);
  addDynamicSection(container, CUSTOMER_FORM.DISEASE_HISTORY.TITLE, CUSTOMER_FORM.DISEASE_HISTORY.ID, [CUSTOMER_FORM.DISEASE_HISTORY.FIELD_NAME.DATE_OF_DIAGNOSIS.DATE, CUSTOMER_FORM.DISEASE_HISTORY.FIELD_NAME.NAME_ID]);

  renderBottomButtons(container);
};

const addDynamicSection = (container, sectionTitle, sectionId, fieldNames) => {
  const sectionDiv = document.createElement(TAG.DIV);
  sectionDiv.id = `${sectionId}${ID.CONTAINER}`;
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

  // 삭제 버튼 추가
  const removeButton = document.createElement(TAG.BUTTON);
  removeButton.textContent = MINUS;
  removeButton.className = CLASS.REMOVE_BUTTON;
  removeButton.addEventListener(EVENT.CLICK, () => {
    sectionDiv.removeChild(inputDiv); // 이력 항목 삭제
  });

  fieldNames.forEach((field) => {
    const input = document.createElement(TAG.INPUT);
    input.type =
      field === INPUT_TYPE.DATE || field === CUSTOMER_FORM.DISEASE_HISTORY.FIELD_NAME.DATE_OF_DIAGNOSIS.ID
        ? INPUT_TYPE.DATE
        : INPUT_TYPE.TEXT;

    // name은 ID 값을 설정
    input.name = `${sectionId}${field}`;

    // placeholder는 한글로 설정
    input.placeholder =
      field === CUSTOMER_FORM.DISEASE_HISTORY.FIELD_NAME.NAME_ID
        ? CUSTOMER_FORM.DISEASE_HISTORY.FIELD_NAME.NAME
          : field === CUSTOMER_FORM.ACCIDENT_HISTORY.FIELD_NAME.ACCIDENT_DETAIL_ID
            ?  CUSTOMER_FORM.ACCIDENT_HISTORY.FIELD_NAME.ACCIDENT_DETAIL
            : field === CUSTOMER_FORM.SURGERY_HISTORY.FIELD_NAME.HOSPITAL_NAME_ID
              ? CUSTOMER_FORM.SURGERY_HISTORY.FIELD_NAME.HOSPITAL_NAME
              : field === CUSTOMER_FORM.SURGERY_HISTORY.FIELD_NAME.NAME_ID
                ? CUSTOMER_FORM.SURGERY_HISTORY.FIELD_NAME.NAME
                : STRING_EMPTY;

    input.className = CLASS.INPUT_FIELD;
    inputDiv.appendChild(input);
  });

  inputDiv.appendChild(removeButton); // 삭제 버튼 추가
  sectionDiv.appendChild(inputDiv);
};


