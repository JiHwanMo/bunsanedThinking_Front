import {
  DETAIL_COLUMN_NAME,
  ELEMENT_ID,
  LABEL
} from "../../../../../../config/employee/customerSupport/customerSupport.js";
import {
  CLASS,
  ELEMENT_ID as COMMON_ELEMENT_ID,
  INPUT_TYPE,
  KEY,
  MESSAGES,
  TAG
} from "../../../../../../config/common.js";

export const renderInput = () => {
  const selectedButtonType = sessionStorage.getItem(KEY.SELECTED_BUTTON_TYPE);
  const inputFieldsContainer = document.getElementById(COMMON_ELEMENT_ID.INPUT_FIELDS_CONTAINER);
  while(inputFieldsContainer.firstChild) inputFieldsContainer.removeChild(inputFieldsContainer.firstChild);
  const type = sessionStorage.getItem(KEY.CURRENT_TYPE);
  context[selectedButtonType].renderingInput(inputFieldsContainer, type);
}

const forms = {
  HANDLE_COMPLAINT: [
    {
      isTextArea: false,
      for: "employeeName",
      label: "EMPLOYEE_NAME",
      type: "text",
      id: "employeeName",
      name: "employeeName",
      value: "employeeName",
      placeholder: "EMPLOYEE_NAME"
    },
    {
      isTextArea: true,
      for: "result",
      label: "RESULT",
      rows: "4",
      id: "result",
      name: "result",
      value: "result",
      placeholder: "RESULT"
    }
  ],
  HANDLE_REPORT: [
    {
      isTextArea: false,
      for: ELEMENT_ID.DAMAGE_ASSESSMENT_COMPANY_ID,
      label: LABEL.DAMAGE_ASSESSMENT_COMPANY_ID,
      type: INPUT_TYPE.NUMBER,
      id: ELEMENT_ID.DAMAGE_ASSESSMENT_COMPANY_ID,
      name: ELEMENT_ID.DAMAGE_ASSESSMENT_COMPANY_ID,
      value: ELEMENT_ID.DAMAGE_ASSESSMENT_COMPANY_ID,
      placeholder: LABEL.DAMAGE_ASSESSMENT_COMPANY_ID
    },
    {
      isTextArea: false,
      for: ELEMENT_ID.ROADSIDE_ASSISTANCE_COMPANY_ID,
      label: LABEL.ROADSIDE_ASSISTANCE_COMPANY_ID,
      type: INPUT_TYPE.NUMBER,
      id: ELEMENT_ID.ROADSIDE_ASSISTANCE_COMPANY_ID,
      name: ELEMENT_ID.ROADSIDE_ASSISTANCE_COMPANY_ID,
      value: ELEMENT_ID.ROADSIDE_ASSISTANCE_COMPANY_ID,
      placeholder: LABEL.ROADSIDE_ASSISTANCE_COMPANY_ID
    }
  ]
}

const renderHandleComplaintInputFields = (inputFieldsContainer, type) => {
  forms[type].forEach(form => inputFieldsContainer.appendChild(createForm(form, type)));
}

const renderHandleReportInputFields = (inputFieldsContainer, type) => {
  forms[type].forEach(form => inputFieldsContainer.appendChild(createForm(form, type)));
};

const context = {
  HANDLE_COMPLAINT: {
    renderingInput: renderHandleComplaintInputFields
  },
  HANDLE_REPORT: {
    renderingInput: renderHandleReportInputFields
  }
}

const createForm = (form, type) => {
  const formDiv = document.createElement(TAG.DIV);
  formDiv.className = CLASS.FORM_GROUP;
  const formLabel = document.createElement(TAG.LABEL);
  formLabel.for = form.for;
  formLabel.textContent = DETAIL_COLUMN_NAME[type][form.label];
  formDiv.appendChild(formLabel);
  let formInput;
  if (form.isTextArea) {
    formInput = document.createElement("textarea");
    formInput.rows = form.rows;
  } else {
    formInput = document.createElement(TAG.INPUT);
    formInput.type = form.type;
  }
  formInput.id = form.id;
  formInput.name = form.name;
  formInput.placeholder = `${DETAIL_COLUMN_NAME[type][form.placeholder]}${MESSAGES.PLACE_HOLDER.INPUT}`;
  formDiv.appendChild(formInput);
  return formDiv;
}
