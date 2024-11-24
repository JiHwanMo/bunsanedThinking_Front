import {DETAIL_COLUMN_NAME} from "../../../../../../config/employee/customerSupport/customerSupport.js";

export const renderInput = () => {
  const selectedButtonType = sessionStorage.getItem("selectedButtonType");
  const inputFieldsContainer = document.getElementById("inputFieldsContainer");
  while(inputFieldsContainer.firstChild) inputFieldsContainer.removeChild(inputFieldsContainer.firstChild);
  const type = sessionStorage.getItem("currentType");
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
      for: "damageAssessmentCompanyId",
      label: "DAMAGE_ASSESSMENT_COMPANY_ID",
      type: "number",
      id: "damageAssessmentCompanyId",
      name: "damageAssessmentCompanyId",
      value: "damageAssessmentCompanyId",
      placeholder: "DAMAGE_ASSESSMENT_COMPANY_ID"
    },
    {
      isTextArea: false,
      for: "roadsideAssistanceCompanyId",
      label: "ROADSIDE_ASSISTANCE_COMPANY_ID",
      type: "number",
      id: "roadsideAssistanceCompanyId",
      name: "roadsideAssistanceCompanyId",
      value: "roadsideAssistanceCompanyId",
      placeholder: "ROADSIDE_ASSISTANCE_COMPANY_ID"
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
  const formDiv = document.createElement("div");
  formDiv.className = "form-group";
  const formLabel = document.createElement("label");
  formLabel.for = form.for;
  formLabel.textContent = DETAIL_COLUMN_NAME[type][form.label];
  formDiv.appendChild(formLabel);
  let formInput;
  if (form.isTextArea) {
    formInput = document.createElement("textarea");
    formInput.rows = form.rows;
  } else {
    formInput = document.createElement("input");
    formInput.type = form.type;
  }
  formInput.id = form.id;
  formInput.name = form.name;
  formInput.placeholder = `${DETAIL_COLUMN_NAME[type][form.placeholder]}을(를) 입력하세요`;
  formDiv.appendChild(formInput);
  return formDiv;
}

// const createHandleComplaintForm = (form, type) => {
//   const formDiv = document.createElement("div");
//   formDiv.className = "form-group";
//   const formLabel = document.createElement("label");
//   formLabel.for = form.for;
//   formLabel.textContent = DETAIL_COLUMN_NAME[type][form.label];
//   formDiv.appendChild(formLabel);
//   let formInput = document.createElement("textarea");
//   formInput.rows = form.rows;
//   formInput.id = form.id;
//   formInput.name = form.name;
//   formInput.placeholder = `${DETAIL_COLUMN_NAME[type][form.placeholder]}을(를) 입력하세요`;
//   formDiv.appendChild(formInput);
//   return formDiv;
// }
//
// const createHandleReportForm = (form, type) => {
//   const formDiv = document.createElement("div");
//   formDiv.className = "form-group";
//   const formLabel = document.createElement("label");
//   formLabel.for = form.for;
//   formLabel.textContent = DETAIL_COLUMN_NAME[type][form.label];
//   formDiv.appendChild(formLabel);
//   let formInput = document.createElement("input");
//   formInput.type = form.type;
//   formInput.id = form.id;
//   formInput.name = form.name;
//   formInput.placeholder = `${DETAIL_COLUMN_NAME[type][form.placeholder]}을(를) 입력하세요`;
//   formDiv.appendChild(formInput);
//   return formDiv;
// }
