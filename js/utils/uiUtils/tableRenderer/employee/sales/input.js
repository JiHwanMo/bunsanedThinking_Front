import {addStarButtons, renderBottomButtons} from "../../../buttonManager/employee/sales/input.js";
import { NAME_MAPPER } from "../../../../../../config/employee/sales/sales.js";
import {CLASS, ELEMENT_ID, EVENT, KEY, TAG} from "../../../../../../config/common.js";

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
    isTextArea: false,
    for: "name",
    label: "NAME",
    type: "text",
    id: "name",
    name: "name",
    placeholder: "고객 이름"
  },
  {
    isTextArea: false,
    for: "age",
    label: "AGE",
    type: "number",
    id: "age",
    name: "age",
    placeholder: "고객 나이"
  },
  {
    isTextArea: false,
    for: "gender",
    label: "GENDER",
    type: "button-group", // 버튼 그룹으로 표시
    id: "gender",
    name: "gender",
    options: [
      { value: "Male", text: "남자" },
      { value: "Female", text: "여자" }
    ]
  },
  {
    isTextArea: false,
    for: "address",
    label: "ADDRESS",
    type: "text",
    id: "address",
    name: "address",
    placeholder: "주소"
  },
  {
    isTextArea: false,
    for: "phoneNumber",
    label: "PHONE_NUMBER",
    type: "text",
    id: "phoneNumber",
    name: "phoneNumber",
    placeholder: "전화번호"
  },
  {
    isTextArea: false,
    for: "residentRegistrationNumber",
    label: "RESIDENT_REGISTRATION_NUMBER",
    type: "text",
    id: "residentRegistrationNumber",
    name: "residentRegistrationNumber",
    placeholder: "주민등록번호"
  },
  {
    isTextArea: false,
    for: "job",
    label: "JOB",
    type: "text",
    id: "job",
    name: "job",
    placeholder: "직업"
  },
  {
    isTextArea: false,
    for: "bankAccount",
    label: "BANK_ACCOUNT",
    type: "text",
    id: "bankAccount",
    name: "bankAccount",
    placeholder: "은행 계좌"
  },
  {
    isTextArea: false,
    for: "bankName",
    label: "BANK_NAME",
    type: "text",
    id: "bankName",
    name: "bankName",
    placeholder: "은행 이름"
  },
  {
    isTextArea: false,
    for: "property",
    label: "PROPERTY",
    type: "number",
    id: "property",
    name: "property",
    placeholder: "자산"
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
      button.className = "gender-button";
      button.addEventListener(EVENT.CLICK, () => {
        document.querySelectorAll(".gender-button").forEach((btn) => btn.classList.remove(CLASS.SELECTED));
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

const renderCustomerInputFields = () => {
  const container = document.getElementById(ELEMENT_ID.INPUT_FIELDS_CONTAINER);
  while (container.firstChild) container.removeChild(container.firstChild); // 기존 내용 제거

  customerForms.forEach((form) => {
    container.appendChild(createCustomerForm(form));
  });

  addDynamicSection(container, "사고 이력", "accidentHistory", ["date", "사고 내역"]);
  addDynamicSection(container, "수술 이력", "surgeryHistory", ["date", "병원 이름", "수술 이름"]);
  addDynamicSection(container, "질병 이력", "diseaseHistory", ["date", "질병 이름"]);

  renderBottomButtons(container);
};

const addDynamicSection = (container, sectionTitle, sectionId, fieldNames) => {
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

  // 삭제 버튼 추가
  const removeButton = document.createElement(TAG.BUTTON);
  removeButton.textContent = "-";
  removeButton.className = "remove-button";
  removeButton.addEventListener(EVENT.CLICK, () => {
    sectionDiv.removeChild(inputDiv); // 이력 항목 삭제
  });

  fieldNames.forEach((field) => {
    const input = document.createElement(TAG.INPUT);
    input.type = field === "date" || field === "dateOfDiagnosis" ? "date" : "text";
    input.name = `${sectionId}${field}`;
    input.placeholder = field === "date" || field === "dateOfDiagnosis" ? "날짜 입력" : `${field} 입력`;
    input.className = "input-field";
    inputDiv.appendChild(input);
  });

  inputDiv.appendChild(removeButton); // 삭제 버튼 추가
  sectionDiv.appendChild(inputDiv);
};

