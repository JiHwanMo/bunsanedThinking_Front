import {DETAIL_COLUMN_NAME} from "../../../../../../config/employee/humanResource/humanResource.js";
import {
  fetchGetAllDepartment,
  fetchGetEmployee
} from "../../../../apiUtils/apiDocumentation/employee/humanResource/humanResource.js";

export const renderInput = () => {
  const selectedButtonType = sessionStorage.getItem("selectedButtonType");
  context[selectedButtonType].renderingInput();
}

const getType = () => {
  return sessionStorage.getItem("currentType");
}

const employeeForms = [
  {
    for: "name",
    label: "NAME",
    type: "text",
    id: "name",
    name: "name",
    value: "name",
    placeholder: "NAME"
  },
  {
    for: "address",
    label: "ADDRESS",
    type: "text",
    id: "address",
    name: "address",
    value: "address",
    placeholder: "ADDRESS"
  },
  {
    for: "phoneNumber",
    label: "PHONE_NUMBER",
    type: "text",
    id: "phoneNumber",
    name: "phoneNumber",
    value: "phoneNumber",
    placeholder: "PHONE_NUMBER"
  },
  {
    for: "bankName",
    label: "BANK_NAME",
    type: "text",
    id: "bankName",
    name: "bankName",
    value: "bankName",
    placeholder: "BANK_NAME"
  },
  {
    for: "bankAccount",
    label: "BANK_ACCOUNT",
    type: "text",
    id: "bankAccount",
    name: "bankAccount",
    value: "bankAccount",
    placeholder: "BANK_ACCOUNT"
  },
  {
    for: "residentRegistrationNumber",
    label: "RESIDENT_REGISTRATION_NUMBER",
    type: "text",
    id: "residentRegistrationNumber",
    name: "residentRegistrationNumber",
    value: "residentRegistrationNumber",
    placeholder: "RESIDENT_REGISTRATION_NUMBER"
  },
  {
    for: "salary",
    label: "SALARY",
    type: "number",
    id: "salary",
    name: "salary",
    value: "salary",
    placeholder: "SALARY"
  },
  {
    for: "employmentDate",
    label: "EMPLOYMENT_DATE",
    type: "date",
    id: "employmentDate",
    name: "employmentDate",
    value: "employmentDate",
    placeholder: "EMPLOYMENT_DATE"
  }
];

const renderAddEmployeeInputFields = async () => {
  const inputFieldsContainer = document.getElementById("inputFieldsContainer");
  while (inputFieldsContainer.firstChild) inputFieldsContainer.removeChild(inputFieldsContainer.firstChild);
  const type = getType();
  await addDepartmentComboBox(inputFieldsContainer, type);
  addPositionComboBox(inputFieldsContainer, type);
  employeeForms.forEach(form => inputFieldsContainer.appendChild(createForm(form, type)));
  addDynamicSection(inputFieldsContainer, "가족", "family");
}

const renderUpdateEmployeeInputFields = async () => {
  const inputFieldsContainer = document.getElementById("inputFieldsContainer");
  while (inputFieldsContainer.firstChild) inputFieldsContainer.removeChild(inputFieldsContainer.firstChild);
  const type = getType();
  const selectedDataId = JSON.parse(sessionStorage.getItem("selectedDataId"));
  const employeeData = await fetchGetEmployee(selectedDataId);
  await addDepartmentComboBoxWithValue(inputFieldsContainer, type, employeeData);
  addPositionComboBoxWithValue(inputFieldsContainer, type, employeeData);
  addIdLabel(inputFieldsContainer, type, employeeData);
  employeeForms.forEach(form => inputFieldsContainer.appendChild(createFormWithValue(form, type, employeeData)));
  addDynamicSectionWithValue(inputFieldsContainer, "가족", "family", employeeData);
}

const addIdLabel = (inputFieldsContainer, type, employeeData) => {
  const formDiv = document.createElement("div");
  formDiv.className = "form-group";
  const formLabel = document.createElement("label");
  formLabel.for = "id";
  formLabel.textContent = DETAIL_COLUMN_NAME[type].ID;
  formDiv.appendChild(formLabel);
  let formText = document.createElement("label");
  formText.textContent = employeeData.id;
  formText.id = "id";
  formText.value = employeeData.id;
  formText.name = "id";
  formDiv.appendChild(formText);
  inputFieldsContainer.appendChild(formDiv);
}

const addDepartmentComboBox = async (inputFieldsContainer, type) => {
  const formDiv = document.createElement("div");
  formDiv.className = "form-group";
  const formLabel = document.createElement("label");
  formLabel.for = "departmentId";
  formLabel.textContent = DETAIL_COLUMN_NAME[type].DEPARTMENT;
  const formSelect = document.createElement("select");
  formSelect.id = "departmentId";
  formSelect.name = "departmentId";

  // TODO 테스트용
  // const departmentList = await fetchGetAllDepartment();
  const departmentList = [
    {
      id: 9101,
      name: "융자운용팀"
    },
    {
      id: 9108,
      name: "인사관리팀"
    }
  ]

  departmentList.map(department => {
    const option = document.createElement("option");
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
    value: "Intern",
    label: "인턴"
  },
  {
    value: "Staff",
    label: "사원"
  },
  {
    value: "SeniorStaff",
    label: "주임"
  },
  {
    value: "Manager",
    label: "과장"
  },
  {
    value: "DeputyGeneralManager",
    label: "차장"
  },
  {
    value: "GeneralManager",
    label: "부장"
  }
]

const addPositionComboBox = (inputFieldsContainer, type) => {
  const inputDiv = document.createElement("div");
  inputDiv.className = "form-group";

  const formLabel = document.createElement("label");
  formLabel.for = "position";
  formLabel.textContent = DETAIL_COLUMN_NAME[type].POSITION;

  const formSelect = document.createElement("select");
  formSelect.id = "position";
  formSelect.name = "position";

  positions.forEach(position => {
    const option = document.createElement("option");
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
    id: "familyBirthDate",
    type: "date",
    name: "familyBirthDate",
    data: "birthDate",
    label: "FAMILY_BIRTH_DATE",
    placeHolder: "생일을 입력해주세요"
  },
  {
    id: "familyName",
    type: "text",
    name: "familyName",
    data: "name",
    label: "FAMILY_NAME",
    placeHolder: "이름을 입력해주세요"
  }
]

const context = {
  POST: {
    renderingInput: renderAddEmployeeInputFields
  },
  UPDATE: {
    renderingInput: renderUpdateEmployeeInputFields
  }
}

const createForm = (form, type) => {
  const formDiv = document.createElement("div");
  formDiv.className = "form-group";
  const formLabel = document.createElement("label");
  formLabel.for = form.for;
  formLabel.textContent = DETAIL_COLUMN_NAME[type][form.label];
  formDiv.appendChild(formLabel);
  let formInput = document.createElement("input");
  formInput.type = form.type;
  formInput.id = form.id;
  formInput.name = form.name;
  formInput.placeholder = `${DETAIL_COLUMN_NAME[type][form.placeholder]}을(를) 입력하세요`;
  formDiv.appendChild(formInput);
  return formDiv;
}

const addDynamicSection = (container, sectionTitle, sectionId) => {
  const sectionDiv = document.createElement("div");
  sectionDiv.id = `${sectionId}Container`;
  sectionDiv.className = "dynamic-section";

  const headerDiv = document.createElement("div");
  headerDiv.className = "section-header";

  const sectionLabel = document.createElement("label");
  sectionLabel.textContent = sectionTitle;

  const addButton = document.createElement("button");
  addButton.textContent = "+";
  addButton.className = "add-button";

  addButton.addEventListener("click", () => addFamilyField(sectionDiv, sectionId));

  headerDiv.appendChild(sectionLabel);
  headerDiv.appendChild(addButton);
  sectionDiv.appendChild(headerDiv);

  container.appendChild(sectionDiv);
};

const addFamilyField = (sectionDiv) => {
  const inputDiv = document.createElement("div");
  inputDiv.className = "form-group";

  const familyCount = document.querySelectorAll('.radio-group').length;

  familyForm.forEach((field) => {
    const formLabel = document.createElement("label");
    formLabel.for = `${field.name}`;
    formLabel.textContent = DETAIL_COLUMN_NAME[type][field.label];
    inputDiv.appendChild(formLabel);

    const input = document.createElement("input");
    input.id = `${field.id}-${familyCount}`;
    input.type = field.type;
    input.name = `${field.name}-${familyCount}`;
    input.placeholder = field.placeHolder;
    input.className = "input-field";
    inputDiv.appendChild(input);
  });

  inputDiv.innerHTML += createFamilyInputForm(familyCount);

  sectionDiv.appendChild(inputDiv);
};

const createFamilyInputForm = (familyCount) => {
  let type = getType();
  return `
      <div class="form-group">
        <label for="relationship-${familyCount}">${DETAIL_COLUMN_NAME[type].RELATIONSHIP}</label>
        <select id="relationship-${familyCount}" name="relationship-${familyCount}">
          <option value="Mother" selected>엄마</option>
          <option value="Father">아빠</option>
          <option value="Sister">여형제</option>
          <option value="Brother">남형제</option>
          <option value="Son">아들</option>
          <option value="Daughter">딸</option>
        </select>
      </div>
      <div class="form-group">
        <label>${DETAIL_COLUMN_NAME[type].SURVIVAL}</label>
        <div class="radio-group">
          <div class="radio-item">
            <label for="true-${familyCount}">생존</label>
            <input type="radio" id="true-${familyCount}" name=survival-${familyCount} value="true" checked>
          </div>
          <div class="radio-item">
            <label for="false-${familyCount}">사망</label>
            <input type="radio" id="false-${familyCount}" name="survival-${familyCount}" value="false">
          </div>
        </div>
      </div>
    `;
}

const addDepartmentComboBoxWithValue = (inputFieldsContainer, type, employeeData) => {
  addDepartmentComboBox(inputFieldsContainer, type);
  const option = document.querySelector(`option[value="${employeeData.departmentId}"]`);
  if (option)
    option.selected = true;
}

const addPositionComboBoxWithValue = (inputFieldsContainer, type, employeeData) => {
  addPositionComboBox(inputFieldsContainer, type);
  const option = document.querySelector(`option[value="${employeeData.position}"]`);
  if (option)
    option.selected = true;
}

const createFormWithValue = (form, type, employeeData) => {
  const formDiv = createForm(form, type);

  const input = Array.from(formDiv.children).filter(child => child.id === form.id)[0];
  if (input)
    input.value = employeeData[form.name];
  return formDiv;
}

const addDynamicSectionWithValue = (container, sectionTitle, sectionId, employeeData) => {
  addDynamicSection(container, sectionTitle, sectionId);
  const sectionDiv = document.getElementById(`${sectionId}Container`);

  employeeData.familyList.forEach(family => {
    addFamilyFieldWithValue(sectionDiv, family);
  })
}

const addFamilyFieldWithValue = (sectionDiv, familyData) => {
  const inputDiv = document.createElement("div");
  inputDiv.className = "form-group";

  const type = getType();
  let familyCount = document.querySelectorAll('.radio-group').length;

  addFamilyIdLabel(inputDiv, familyData, familyCount);
  familyForm.forEach((field) => {
    const formLabel = document.createElement("label");
    formLabel.for = `${field.name}`;
    formLabel.textContent = DETAIL_COLUMN_NAME[type][field.label];
    inputDiv.appendChild(formLabel);

    const input = document.createElement("input");
    input.id = `${field.id}-${familyCount}`;
    input.type = field.type;
    input.name = `${field.name}-${familyCount}`;
    input.setAttribute("value", familyData[field.data]);
    input.placeholder = field.placeHolder;
    input.className = "input-field";
    inputDiv.appendChild(input);
  });

  inputDiv.innerHTML += createFamilyInputFormWithValue(familyCount, familyData);

  sectionDiv.appendChild(inputDiv);
};

const addFamilyIdLabel = (container, familyData, familyNumber) => {
  const type = getType();
  const formLabel = document.createElement("label");
  formLabel.for = `familyId-${familyNumber}`;
  formLabel.textContent = DETAIL_COLUMN_NAME[type].FAMILY_ID;
  container.appendChild(formLabel);
  let formText = document.createElement("label");
  formText.textContent = familyData.id;
  formText.id = `familyId-${familyNumber}`;
  formText.value = familyData.id;
  formText.name = `familyId-${familyNumber}`;
  container.appendChild(formText);
}

const createFamilyInputFormWithValue = (familyCount, familyData) => {
  let type = getType();
  return `
      <div class="form-group">
        <label for="relationship-${familyCount}">${DETAIL_COLUMN_NAME[type].RELATIONSHIP}</label>
        <select id="relationship-${familyCount}" name="relationship-${familyCount}">
          <option value="Mother" ${familyData.relationship === "Mother" ? "selected" : ""}>엄마</option>
          <option value="Father" ${familyData.relationship === "Father" ? "selected" : ""}>아빠</option>
          <option value="Sister" ${familyData.relationship === "Sister" ? "selected" : ""}>여형제</option>
          <option value="Brother" ${familyData.relationship === "Brother" ? "selected" : ""}>남형제</option>
          <option value="Son" ${familyData.relationship === "Son" ? "selected" : ""}>아들</option>
          <option value="Daughter" ${familyData.relationship === "Daughter" ? "selected" : ""}>딸</option>
        </select>
      </div>
      <div class="form-group">
        <label>${DETAIL_COLUMN_NAME[type].SURVIVAL}</label>
        <div class="radio-group">
          <div class="radio-item">
            <label for="true-${familyCount}">생존</label>
            <input type="radio" id="true-${familyCount}" name=survival-${familyCount} value="true" ${familyData.survival === true ? "checked" : ""}>
          </div>
          <div class="radio-item">
            <label for="false-${familyCount}">사망</label>
            <input type="radio" id="false-${familyCount}" name="survival-${familyCount}" value="false" ${familyData.survival === false ? "checked" : ""}>
          </div>
        </div>
      </div>
    `;
}
