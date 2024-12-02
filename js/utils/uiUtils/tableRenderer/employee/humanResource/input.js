import {
  DETAIL_COLUMN_NAME, DTO_NAME,
  ELEMENT_ID, FAMILY_RESPONSE,
  LABEL,
  POSITION, POSITION_LABEL
} from "../../../../../../config/employee/humanResource/humanResource.js";
import {
  fetchGetAllDepartment,
  fetchGetEmployeeDetail
} from "../../../../apiUtils/apiDocumentation/employee/humanResource/humanResource.js";
import {
  INPUT_TYPE,
  KEY,
  ELEMENT_ID as COMMON_ELEMENT_ID,
  TAG,
  CLASS,
  MESSAGES, EVENT, PLUS, CLASS_SELECTOR, MINUS, QUERY_SELECTOR, ATTRIBUTE
} from "../../../../../../config/common.js";
import {TITLE} from "../../../../../../config/employee/humanResource/humanResource.js";

export const renderInput = () => {
  const selectedButtonType = sessionStorage.getItem(KEY.SELECTED_BUTTON_TYPE);
  context[selectedButtonType].renderingInput();
}

const getType = () => {
  return sessionStorage.getItem(KEY.CURRENT_TYPE);
}

const employeeForms = [
  {
    for: ELEMENT_ID.NAME,
    label: LABEL.NAME,
    type: INPUT_TYPE.TEXT,
    id: ELEMENT_ID.NAME,
    name: ELEMENT_ID.NAME,
    value: ELEMENT_ID.NAME,
    placeholder: LABEL.NAME
  },
  {
    for: ELEMENT_ID.ADDRESS,
    label: LABEL.ADDRESS,
    type: INPUT_TYPE.TEXT,
    id: ELEMENT_ID.ADDRESS,
    name: ELEMENT_ID.ADDRESS,
    value: ELEMENT_ID.ADDRESS,
    placeholder: LABEL.ADDRESS
  },
  {
    for: ELEMENT_ID.PHONE_NUMBER,
    label: LABEL.PHONE_NUMBER,
    type: INPUT_TYPE.TEXT,
    id: ELEMENT_ID.PHONE_NUMBER,
    name: ELEMENT_ID.PHONE_NUMBER,
    value: ELEMENT_ID.PHONE_NUMBER,
    placeholder: LABEL.PHONE_NUMBER
  },
  {
    for: ELEMENT_ID.BANK_NAME,
    label: LABEL.BANK_NAME,
    type: INPUT_TYPE.TEXT,
    id: ELEMENT_ID.BANK_NAME,
    name: ELEMENT_ID.BANK_NAME,
    value: ELEMENT_ID.BANK_NAME,
    placeholder: LABEL.BANK_NAME
  },
  {
    for: ELEMENT_ID.BANK_ACCOUNT,
    label: LABEL.BANK_ACCOUNT,
    type: INPUT_TYPE.TEXT,
    id: ELEMENT_ID.BANK_ACCOUNT,
    name: ELEMENT_ID.BANK_ACCOUNT,
    value: ELEMENT_ID.BANK_ACCOUNT,
    placeholder: LABEL.BANK_ACCOUNT
  },
  {
    for: ELEMENT_ID.RESIDENT_REGISTRATION_NUMBER,
    label: LABEL.RESIDENT_REGISTRATION_NUMBER,
    type: INPUT_TYPE.TEXT,
    id: ELEMENT_ID.RESIDENT_REGISTRATION_NUMBER,
    name: ELEMENT_ID.RESIDENT_REGISTRATION_NUMBER,
    value: ELEMENT_ID.RESIDENT_REGISTRATION_NUMBER,
    placeholder: LABEL.RESIDENT_REGISTRATION_NUMBER
  },
  {
    for: ELEMENT_ID.SALARY,
    label: LABEL.SALARY,
    type: INPUT_TYPE.NUMBER,
    id: ELEMENT_ID.SALARY,
    name: ELEMENT_ID.SALARY,
    value: ELEMENT_ID.SALARY,
    placeholder: LABEL.SALARY
  },
  {
    for: ELEMENT_ID.EMPLOYMENT_DATE,
    label: LABEL.EMPLOYMENT_DATE,
    type: INPUT_TYPE.DATE,
    id: ELEMENT_ID.EMPLOYMENT_DATE,
    name: ELEMENT_ID.EMPLOYMENT_DATE,
    value: ELEMENT_ID.EMPLOYMENT_DATE,
    placeholder: LABEL.EMPLOYMENT_DATE
  }
];

const renderAddEmployeeInputFields = async () => {
  const inputFieldsContainer = document.getElementById(COMMON_ELEMENT_ID.INPUT_FIELDS_CONTAINER);
  while (inputFieldsContainer.firstChild) inputFieldsContainer.removeChild(inputFieldsContainer.firstChild);
  const type = getType();
  await addDepartmentComboBox(inputFieldsContainer, type);
  addPositionComboBox(inputFieldsContainer, type);
  employeeForms.forEach(form => inputFieldsContainer.appendChild(createForm(form, type)));
  addDynamicSection(inputFieldsContainer, TITLE.FAMILY, ELEMENT_ID.FAMILY);
}

const renderUpdateEmployeeInputFields = async () => {
  const inputFieldsContainer = document.getElementById(COMMON_ELEMENT_ID.INPUT_FIELDS_CONTAINER);
  while (inputFieldsContainer.firstChild) inputFieldsContainer.removeChild(inputFieldsContainer.firstChild);
  const type = getType();
  const selectedDataId = JSON.parse(sessionStorage.getItem(KEY.SELECTED_DATA_ID));
  const employeeData = await fetchGetEmployeeDetail(selectedDataId);
  await addDepartmentComboBoxWithValue(inputFieldsContainer, type, employeeData);
  addPositionComboBoxWithValue(inputFieldsContainer, type, employeeData);
  addIdLabel(inputFieldsContainer, type, employeeData);
  employeeForms.forEach(form => inputFieldsContainer.appendChild(createFormWithValue(form, type, employeeData)));
  addDynamicSectionWithValue(inputFieldsContainer, TITLE.FAMILY, ELEMENT_ID.FAMILY, employeeData);
}

const context = {
  POST: {
    renderingInput: renderAddEmployeeInputFields
  },
  UPDATE: {
    renderingInput: renderUpdateEmployeeInputFields
  }
}

const createForm = (form, type) => {
  const formDiv = document.createElement(TAG.DIV);
  formDiv.className = CLASS.FORM_GROUP;
  const formLabel = document.createElement(TAG.LABEL);
  formLabel.for = form.for;
  formLabel.textContent = DETAIL_COLUMN_NAME[type][form.label];
  formDiv.appendChild(formLabel);
  let formInput = document.createElement(TAG.INPUT);
  formInput.type = form.type;
  formInput.id = form.id;
  formInput.name = form.name;
  formInput.placeholder = `${DETAIL_COLUMN_NAME[type][form.placeholder]}${MESSAGES.PLACE_HOLDER.INPUT}`;
  formDiv.appendChild(formInput);
  return formDiv;
}

const createFormWithValue = (form, type, employeeData) => {
  const formDiv = createForm(form, type);

  const input = Array.from(formDiv.children).filter(child => child.id === form.id)[0];
  if (input)
    input.value = employeeData[form.name];
  return formDiv;
}

const addIdLabel = (inputFieldsContainer, type, employeeData) => {
  const formDiv = document.createElement(TAG.DIV);
  formDiv.className = CLASS.FORM_GROUP;
  const formLabel = document.createElement(TAG.LABEL);
  formLabel.for = ELEMENT_ID.ID;
  formLabel.textContent = DETAIL_COLUMN_NAME[type].ID;
  formDiv.appendChild(formLabel);
  let formText = document.createElement(TAG.LABEL);
  formText.textContent = employeeData.id;
  formText.id = ELEMENT_ID.ID;
  formText.value = employeeData.id;
  formText.name = ELEMENT_ID.ID;
  formDiv.appendChild(formText);
  inputFieldsContainer.appendChild(formDiv);
}

const addDepartmentComboBox = async (inputFieldsContainer, type) => {
  const formDiv = document.createElement(TAG.DIV);
  formDiv.className = CLASS.FORM_GROUP;
  const formLabel = document.createElement(TAG.LABEL);
  formLabel.for = ELEMENT_ID.DEPARTMENT_ID;
  formLabel.textContent = DETAIL_COLUMN_NAME[type].DEPARTMENT;
  const formSelect = document.createElement(TAG.SELECT);
  formSelect.id = ELEMENT_ID.DEPARTMENT_ID;
  formSelect.name = ELEMENT_ID.DEPARTMENT_ID;

  const departmentList = await fetchGetAllDepartment();

  departmentList.map(department => {
    const option = document.createElement(TAG.OPTION);
    option.value = department.id;
    option.textContent = department.name;
    formSelect.appendChild(option);
  })

  formDiv.appendChild(formLabel);
  formDiv.appendChild(formSelect);

  inputFieldsContainer.appendChild(formDiv);
}

const positions = [
  {
    value: POSITION.INTERN,
    label: POSITION_LABEL.INTERN
  },
  {
    value: POSITION.STAFF,
    label: POSITION_LABEL.STAFF
  },
  {
    value: POSITION.SENIOR_STAFF,
    label: POSITION_LABEL.SENIOR_STAFF
  },
  {
    value: POSITION.MANAGER,
    label: POSITION_LABEL.MANAGER
  },
  {
    value: POSITION.DEPUTY_GENERAL_MANAGER,
    label: POSITION_LABEL.DEPUTY_GENERAL_MANAGER
  },
  {
    value: POSITION.GENERAL_MANAGER,
    label: POSITION_LABEL.GENERAL_MANAGER
  }
]

const addPositionComboBox = (inputFieldsContainer, type) => {
  const inputDiv = document.createElement(TAG.DIV);
  inputDiv.className = CLASS.FORM_GROUP;

  const formLabel = document.createElement(TAG.LABEL);
  formLabel.for = ELEMENT_ID.POSITION;
  formLabel.textContent = DETAIL_COLUMN_NAME[type].POSITION;

  const formSelect = document.createElement(TAG.SELECT);
  formSelect.id = ELEMENT_ID.POSITION;
  formSelect.name = ELEMENT_ID.POSITION;

  positions.forEach(position => {
    const option = document.createElement(TAG.OPTION);
    option.value = position.value;
    option.textContent = position.label;
    formSelect.appendChild(option);
  })

  inputDiv.appendChild(formLabel);
  inputDiv.appendChild(formSelect);

  inputFieldsContainer.appendChild(inputDiv);
}

const familyForm = [
  {
    id: ELEMENT_ID.FAMILY_DETAIL.BIRTH_DATE,
    type: INPUT_TYPE.DATE,
    name: ELEMENT_ID.FAMILY_DETAIL.BIRTH_DATE,
    data: DTO_NAME.FAMILY_BIRTH_DATE,
    label: LABEL.FAMILY_BIRTH_DATE,
    placeHolder: `${DETAIL_COLUMN_NAME.MANAGEMENT_EMPLOYEE.FAMILY_BIRTH_DATE}${MESSAGES.PLACE_HOLDER.INPUT}`
  },
  {
    id: ELEMENT_ID.FAMILY_DETAIL.NAME,
    type: INPUT_TYPE.TEXT,
    name: ELEMENT_ID.FAMILY_DETAIL.NAME,
    data: DTO_NAME.FAMILY_NAME,
    label: LABEL.FAMILY_NAME,
    placeHolder: `${DETAIL_COLUMN_NAME.MANAGEMENT_EMPLOYEE.FAMILY_NAME}${MESSAGES.PLACE_HOLDER.INPUT}`
  }
]

const addDynamicSection = (container, sectionTitle, sectionId) => {
  const sectionDiv = document.createElement(TAG.DIV);
  sectionDiv.id = `${sectionId}${ELEMENT_ID.CONTAINER}`;
  sectionDiv.className = CLASS.DYNAMIC_SECTION;

  const headerDiv = document.createElement(TAG.DIV);
  headerDiv.className = CLASS.SECTION_HEADER;

  const sectionLabel = document.createElement(TAG.LABEL);
  sectionLabel.textContent = sectionTitle;

  const addButton = document.createElement(TAG.BUTTON);
  addButton.textContent = PLUS;
  addButton.className = CLASS.ADD_BUTTON;

  addButton.addEventListener(EVENT.CLICK, () => addFamilyField(sectionDiv, sectionId));

  headerDiv.appendChild(sectionLabel);
  headerDiv.appendChild(addButton);
  sectionDiv.appendChild(headerDiv);

  container.appendChild(sectionDiv);
};

const addFamilyField = (sectionDiv, sectionId) => {
  const inputDiv = document.createElement(TAG.DIV);
  inputDiv.className = CLASS.FORM_GROUP;
  inputDiv.id = `${sectionId}${ELEMENT_ID.INPUT}`;

  const familyCount = document.querySelectorAll(CLASS_SELECTOR.RADIO_GROUP).length;

  const type = getType();
  familyForm.forEach((field) => {
    const formLabel = document.createElement(TAG.LABEL);
    formLabel.for = `${field.name}`;
    formLabel.textContent = DETAIL_COLUMN_NAME[type][field.label];
    inputDiv.appendChild(formLabel);

    const input = document.createElement(TAG.INPUT);
    input.id = `${field.id}-${familyCount}`;
    input.type = field.type;
    input.name = `${field.name}-${familyCount}`;
    input.placeholder = field.placeHolder;
    input.className = CLASS.INPUT_FIELD;
    inputDiv.appendChild(input);
  });

  createFamilyInputForm(familyCount).forEach(familyInputForm => inputDiv.appendChild(familyInputForm));

  // 삭제 버튼 추가
  const removeButton = document.createElement(TAG.BUTTON);
  removeButton.textContent = MINUS;
  removeButton.className = CLASS.REMOVE_BUTTON;
  removeButton.addEventListener(EVENT.CLICK, () => {
    sectionDiv.removeChild(inputDiv); // 이력 항목 삭제
  });

  inputDiv.appendChild(removeButton);

  sectionDiv.appendChild(inputDiv);
};

const familyRelationship = {
  Mother: FAMILY_RESPONSE.MOTHER,
  Father: FAMILY_RESPONSE.FATHER,
  Sister: FAMILY_RESPONSE.SISTER,
  Brother: FAMILY_RESPONSE.BROTHER,
  Son: FAMILY_RESPONSE.SON,
  Daughter: FAMILY_RESPONSE.DAUGHTER
}

const createRelationInputForm = (familyCount) => {
  let type = getType();
  const relationshipDiv = document.createElement(TAG.DIV);
  relationshipDiv.className = CLASS.FORM_GROUP;
  const relationshipLabel = document.createElement(TAG.LABEL);
  // relationshipLabel.for = `relationship-${familyCount}`;
  relationshipLabel.for = ELEMENT_ID.FAMILY_DETAIL.RELATIONSHIP + MINUS + familyCount;
  relationshipLabel.textContent = `${DETAIL_COLUMN_NAME[type].RELATIONSHIP}`;
  relationshipDiv.appendChild(relationshipLabel);
  const relationshipSelect = document.createElement(TAG.SELECT);
  relationshipSelect.id = ELEMENT_ID.FAMILY_DETAIL.RELATIONSHIP + MINUS + familyCount;
  relationshipSelect.name = ELEMENT_ID.FAMILY_DETAIL.RELATIONSHIP + MINUS + familyCount;
  Object.entries(familyRelationship).forEach(([key, value]) => {
    const option = document.createElement(TAG.OPTION);
    option.value = key;
    option.textContent = value;
    relationshipSelect.appendChild(option);
  })
  relationshipDiv.appendChild(relationshipSelect);

  return relationshipDiv;
}

const createSurvivalInputForm = (familyCount) => {
  const type = getType();
  const survivalDiv = document.createElement(TAG.DIV);
  survivalDiv.className = CLASS.FORM_GROUP;
  const survivalLabel = document.createElement(TAG.LABEL);
  survivalLabel.textContent = DETAIL_COLUMN_NAME[type].SURVIVAL;
  survivalDiv.appendChild(survivalLabel);

  const radioGroupDiv = document.createElement(TAG.DIV);
  radioGroupDiv.className = CLASS.RADIO_GROUP;

  const trueRadioItem = document.createElement(TAG.DIV);
  trueRadioItem.className = CLASS.RADIO_ITEM;
  const trueRadioLabel = document.createElement(TAG.LABEL);
  trueRadioLabel.for = true + MINUS + familyCount;
  trueRadioLabel.textContent = FAMILY_RESPONSE.SURVIVAL;
  trueRadioItem.appendChild(trueRadioLabel);
  const trueRadioInput = document.createElement(TAG.INPUT);
  trueRadioInput.id = true + MINUS + familyCount;
  trueRadioInput.type = INPUT_TYPE.RADIO;
  trueRadioInput.name = ELEMENT_ID.FAMILY_DETAIL.SURVIVAL + MINUS + familyCount;
  trueRadioInput.value = true.toString();
  trueRadioInput.checked = true;
  trueRadioItem.appendChild(trueRadioInput);

  const falseRadioItem = document.createElement(TAG.DIV);
  falseRadioItem.className = CLASS.RADIO_ITEM;
  const falseRadioLabel = document.createElement(TAG.LABEL);
  falseRadioLabel.for = false + MINUS + familyCount;
  falseRadioLabel.textContent = FAMILY_RESPONSE.SURVIVAL;
  falseRadioItem.appendChild(falseRadioLabel);
  const falseRadioInput = document.createElement(TAG.INPUT);
  falseRadioInput.id = false + MINUS + familyCount;
  falseRadioInput.type = INPUT_TYPE.RADIO;
  falseRadioInput.name = ELEMENT_ID.FAMILY_DETAIL.SURVIVAL + MINUS + familyCount;
  falseRadioInput.value = false.toString();
  falseRadioInput.checked = false;
  falseRadioItem.appendChild(falseRadioInput);

  radioGroupDiv.appendChild(trueRadioItem);
  radioGroupDiv.appendChild(falseRadioItem);

  survivalDiv.appendChild(radioGroupDiv);

  return survivalDiv;
}

const createFamilyInputForm = (familyCount) => {
  return [createRelationInputForm(familyCount), createSurvivalInputForm(familyCount)];
}

const addDepartmentComboBoxWithValue = async (inputFieldsContainer, type, employeeData) => {
  await addDepartmentComboBox(inputFieldsContainer, type);
  const option = document.querySelector(
    QUERY_SELECTOR.SELECTOR(TAG.OPTION, ATTRIBUTE.VALUE, employeeData.departmentId, false));
  if (option)
    option.selected = true;
}

const addPositionComboBoxWithValue = (inputFieldsContainer, type, employeeData) => {
  addPositionComboBox(inputFieldsContainer, type);
  const option = document.querySelector(
    QUERY_SELECTOR.SELECTOR(TAG.OPTION, ATTRIBUTE.VALUE, employeeData.position, false));
  if (option)
    option.selected = true;
}

const addDynamicSectionWithValue = (container, sectionTitle, sectionId, employeeData) => {
  addDynamicSection(container, sectionTitle, sectionId);
  const sectionDiv = document.getElementById(`${sectionId}${ELEMENT_ID.CONTAINER}`);

  employeeData.familyList.forEach(family => {
    addFamilyFieldWithValue(sectionDiv, family);
  })
}

const addFamilyFieldWithValue = (sectionDiv, familyData) => {
  const inputDiv = document.createElement(TAG.DIV);
  inputDiv.className = CLASS.FORM_GROUP;

  const type = getType();
  let familyCount = document.querySelectorAll(CLASS_SELECTOR.RADIO_GROUP).length;

  // 삭제 버튼 추가
  const removeButton = document.createElement(TAG.BUTTON);
  removeButton.textContent = MINUS;
  removeButton.className = CLASS.REMOVE_BUTTON;
  removeButton.addEventListener(EVENT.CLICK, () => {
    sectionDiv.removeChild(inputDiv); // 이력 항목 삭제
  });

  addFamilyIdLabel(inputDiv, familyData, familyCount);
  familyForm.forEach((field) => {
    const formLabel = document.createElement(TAG.LABEL);
    formLabel.for = `${field.name}`;
    formLabel.textContent = DETAIL_COLUMN_NAME[type][field.label];
    inputDiv.appendChild(formLabel);

    const input = document.createElement(TAG.INPUT);
    input.id = `${field.id}-${familyCount}`;
    input.type = field.type;
    input.name = `${field.name}-${familyCount}`;
    input.setAttribute(ATTRIBUTE.VALUE, familyData[field.data]);
    input.placeholder = field.placeHolder;
    input.className = CLASS.INPUT_FIELD;
    inputDiv.appendChild(input);
  });

  createFamilyInputFormWithValue(familyCount, familyData).forEach(form => {
    inputDiv.appendChild(form);
  });

  sectionDiv.appendChild(inputDiv);
};

const addFamilyIdLabel = (container, familyData, familyNumber) => {
  const type = getType();
  const formLabel = document.createElement(TAG.LABEL);
  formLabel.for = `${ELEMENT_ID.FAMILY_DETAIL.ID}-${familyNumber}`;
  formLabel.textContent = DETAIL_COLUMN_NAME[type].FAMILY_ID;
  container.appendChild(formLabel);
  let formText = document.createElement(TAG.LABEL);
  formText.textContent = familyData.id;
  formText.id = `${ELEMENT_ID.FAMILY_DETAIL.ID}-${familyNumber}`;
  formText.value = familyData.id;
  formText.name = `${ELEMENT_ID.FAMILY_DETAIL.ID}-${familyNumber}`;
  container.appendChild(formText);
}

const createFamilyInputFormWithValue = (familyCount, familyData) => {
  let type = getType();
  const relationshipDiv = document.createElement(TAG.DIV);
  relationshipDiv.className = CLASS.FORM_GROUP;

  const relationshipLabel = document.createElement(TAG.LABEL);
  relationshipLabel.for = ELEMENT_ID.FAMILY_DETAIL.RELATIONSHIP + MINUS + familyCount;
  relationshipLabel.textContent = DETAIL_COLUMN_NAME[type].RELATIONSHIP;
  relationshipDiv.appendChild(relationshipLabel);

  const relationshipSelect = document.createElement(TAG.SELECT);
  relationshipSelect.id = ELEMENT_ID.FAMILY_DETAIL.RELATIONSHIP + MINUS + familyCount;
  relationshipSelect.name = ELEMENT_ID.FAMILY_DETAIL.RELATIONSHIP + MINUS + familyCount;
  Object.entries(familyRelationship).forEach(([key, value]) => {
    const option = document.createElement(TAG.OPTION);
    option.value = key;
    option.textContent = value;
    if (familyData.relationship === value)
      option.selected = true;
    relationshipSelect.appendChild(option);
  });
  relationshipDiv.appendChild(relationshipSelect);

  const survivalDiv = document.createElement(TAG.DIV);
  survivalDiv.className = CLASS.FORM_GROUP;

  const survivalLabel = document.createElement(TAG.LABEL);
  survivalLabel.textContent = DETAIL_COLUMN_NAME[type].SURVIVAL;
  survivalDiv.appendChild(survivalLabel);

  const survivalRadioGroup = document.createElement(TAG.DIV);
  survivalRadioGroup.className = CLASS.RADIO_GROUP;

  const trueRadioItem = document.createElement(TAG.DIV);
  trueRadioItem.className = CLASS.RADIO_ITEM;

  const trueRadioLabel = document.createElement(TAG.LABEL);
  trueRadioLabel.for = true + MINUS + familyCount;
  trueRadioLabel.textContent = FAMILY_RESPONSE.SURVIVAL;
  trueRadioItem.appendChild(trueRadioLabel);

  const trueRadioInput = document.createElement(TAG.INPUT);
  trueRadioInput.id = true + MINUS + familyCount;
  trueRadioInput.type = INPUT_TYPE.RADIO;
  trueRadioInput.name = ELEMENT_ID.FAMILY_DETAIL.SURVIVAL + MINUS + familyCount;
  trueRadioInput.value = true;
  if (familyData.survival === FAMILY_RESPONSE.SURVIVAL)
    trueRadioInput.checked = true;
  trueRadioItem.appendChild(trueRadioInput);

  survivalRadioGroup.appendChild(trueRadioItem);

  const falseRadioItem = document.createElement(TAG.DIV);
  falseRadioItem.className = CLASS.RADIO_ITEM;

  const falseRadioLabel = document.createElement(TAG.LABEL);
  falseRadioLabel.for = false + MINUS + familyCount;
  falseRadioLabel.textContent = FAMILY_RESPONSE.DECEASE;
  falseRadioItem.appendChild(falseRadioLabel);

  const falseRadioInput = document.createElement(TAG.INPUT);
  falseRadioInput.id = false + MINUS + familyCount;
  falseRadioInput.type = INPUT_TYPE.RADIO;
  falseRadioInput.name = ELEMENT_ID.FAMILY_DETAIL.SURVIVAL + MINUS + familyCount;
  falseRadioInput.value = false;
  if (familyData.survival === FAMILY_RESPONSE.DECEASE)
    falseRadioInput.checked = true;
  falseRadioItem.appendChild(falseRadioInput);

  survivalRadioGroup.appendChild(falseRadioItem);

  survivalDiv.appendChild(survivalRadioGroup);

  return [relationshipDiv, survivalDiv];
}
