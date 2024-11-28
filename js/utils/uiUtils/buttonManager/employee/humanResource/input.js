import {
  ATTRIBUTE,
  BUTTON as COMMON_BUTTON, CLASS, CLASS_SELECTOR,
  ELEMENT_ID as COMMON_ELEMENT_ID,
  EVENT,
  KEY,
  LOCATION,
  QUERY_SELECTOR,
  TAG
} from "../../../../../../config/common.js";
import {
  fetchAddEmployee,
  fetchUpdateEmployee
} from "../../../../apiUtils/apiDocumentation/employee/humanResource/humanResource.js";
import {ELEMENT_ID, QUESTION} from "../../../../../../config/employee/humanResource/humanResource.js";

export const renderButtons = () => {
  const selectedButtonType = sessionStorage.getItem(KEY.SELECTED_BUTTON_TYPE);
  context[selectedButtonType].createButtons();
};

const createPostButton = () => {
  const buttonContainer = document.getElementById(COMMON_ELEMENT_ID.BUTTON_CONTAINER);

  const oKButton = createButton(COMMON_BUTTON.COMMON.OK);
  oKButton.addEventListener(EVENT.CLICK, async () => {
    const formData = collectEmployeeFormDataForPost();
    const check = confirm(QUESTION.CONFIRM_POST_EMPLOYEE);

    if (check) {
      await fetchAddEmployee(formData);
      window.location.href = LOCATION.HOME;
    }
  });

  buttonContainer.appendChild(oKButton);
  createCancelButton();
}

const createUpdateButton = () => {
  const buttonContainer = document.getElementById(COMMON_ELEMENT_ID.BUTTON_CONTAINER);

  const updateButton = createButton(COMMON_BUTTON.COMMON.UPDATE);
  updateButton.addEventListener(EVENT.CLICK, async () => {
    const formData = collectEmployeeFormDataForUpdate();
    const check = confirm(QUESTION.CONFIRM_UPDATE_EMPLOYEE);

    if (check) {
      await fetchUpdateEmployee(formData);
      window.location.href = LOCATION.HOME;
    }
  });

  buttonContainer.appendChild(updateButton);
  createCancelButton();
}

const context = {
  POST: {
    createButtons: createPostButton
  },
  UPDATE: {
    createButtons: createUpdateButton
  }
}

const createButton = (textContent) => {
  const okButton = document.createElement(TAG.BUTTON);
  okButton.className = CLASS.BUTTON_ITEM;
  okButton.textContent = textContent;
  return okButton;
}

const createCancelButton = () => {
  const buttonContainer = document.getElementById(COMMON_ELEMENT_ID.BUTTON_CONTAINER);

  const cancelButton = document.createElement(TAG.BUTTON);
  cancelButton.className = CLASS.BUTTON_ITEM;
  cancelButton.textContent = COMMON_BUTTON.COMMON.CANCEL;

  cancelButton.addEventListener(EVENT.CLICK, () => window.history.back());

  buttonContainer.appendChild(cancelButton);
}

const getValueById = (id) => {
  const element = document.getElementById(id);
  return element ? element.value : null; // 요소가 존재하면 value 반환, 아니면 null 반환
};

const getCheckedValue = (name) => {
  return document.querySelector(QUERY_SELECTOR.SELECTOR(TAG.INPUT, ATTRIBUTE.NAME, name, true)).value;
};

const collectEmployeeFormDataForPost = () => {
  return {
    departmentId: getValueById(ELEMENT_ID.DEPARTMENT_ID),
    name: getValueById(ELEMENT_ID.NAME),
    employeePosition: getValueById(ELEMENT_ID.EMPLOYEE_POSITION),
    address: getValueById(ELEMENT_ID.ADDRESS),
    phoneNumber: getValueById(ELEMENT_ID.PHONE_NUMBER),
    bankName: getValueById(ELEMENT_ID.BANK_NAME),
    bankAccount: getValueById(ELEMENT_ID.BANK_ACCOUNT),
    residentRegistrationNumber: getValueById(ELEMENT_ID.RESIDENT_REGISTRATION_NUMBER),
    salary: getValueById(ELEMENT_ID.SALARY),
    employmentDate: getValueById(ELEMENT_ID.EMPLOYMENT_DATE),
    tempFamilyList: collectFamilyFormDataForPost()
  };
};

const collectFamilyFormDataForPost = () => {
  const familyLength = document.querySelectorAll(CLASS_SELECTOR.RADIO_GROUP).length;

  const familyForm = [];
  for (let familyNumber = 0; familyNumber < familyLength; familyNumber++) {
    familyForm.push({
      birthDate: getValueById(`${ELEMENT_ID.FAMILY_DETAIL.BIRTH_DATE}-${familyNumber}`),
      name: getValueById(`${ELEMENT_ID.FAMILY_DETAIL.NAME}-${familyNumber}`),
      relationship: getValueById(`${ELEMENT_ID.FAMILY_DETAIL.RELATIONSHIP}-${familyNumber}`),
      survival: getCheckedValue(`${ELEMENT_ID.FAMILY_DETAIL.SURVIVAL}-${familyNumber}`)
    })
  }
  return familyForm;
}

const collectEmployeeFormDataForUpdate = () => {
  return {
    id: getValueById(ELEMENT_ID.ID),
    departmentId: getValueById(ELEMENT_ID.DEPARTMENT_ID),
    name: getValueById(ELEMENT_ID.NAME),
    employeePosition: getValueById(ELEMENT_ID.EMPLOYEE_POSITION),
    address: getValueById(ELEMENT_ID.ADDRESS),
    phoneNumber: getValueById(ELEMENT_ID.PHONE_NUMBER),
    bankName: getValueById(ELEMENT_ID.BANK_NAME),
    bankAccount: getValueById(ELEMENT_ID.BANK_ACCOUNT),
    salary: getValueById(ELEMENT_ID.SALARY),
    employmentDate: getValueById(ELEMENT_ID.EMPLOYMENT_DATE),
    tempFamilyList: collectFamilyFormDataForUpdate()
  };
};

const collectFamilyFormDataForUpdate = () => {
  const familyLength = document.querySelectorAll(CLASS_SELECTOR.RADIO_GROUP).length;
  const familyForm = [];
  for (let familyNumber = 0; familyNumber < familyLength; familyNumber++) {
    const element = document.getElementById(`${ELEMENT_ID.FAMILY_DETAIL.ID}-${familyNumber}`);
    familyForm.push({
      id: element ? element.textContent : null,
      birthDate: getValueById(`${ELEMENT_ID.FAMILY_DETAIL.BIRTH_DATE}-${familyNumber}`),
      name: getValueById(`${ELEMENT_ID.FAMILY_DETAIL.NAME}-${familyNumber}`),
      relationship: getValueById(`${ELEMENT_ID.FAMILY_DETAIL.RELATIONSHIP}-${familyNumber}`),
      survival: getCheckedValue(`${ELEMENT_ID.FAMILY_DETAIL.SURVIVAL}-${familyNumber}`)
    })
  }
  return familyForm;
}
