import {
  fetchAddCollateralProduct,
  fetchAddLoanProduct,
  fetchRequestLoan,
  fetchUpdateCollateralProduct,
  fetchUpdateFixedDepositProduct,
  fetchUpdateInsuranceContractProduct,
} from "../../../../apiUtils/apiDocumentation/employee/loanManagement/loanManagement.js";
import {BUTTON as COMMON_BUTTON} from "../../../../../../config/common.js";
import {
  fetchAddEmployee,
  fetchUpdateEmployee
} from "../../../../apiUtils/apiDocumentation/employee/humanResource/humanResource.js";

export const renderButtons = () => {
  const selectedButtonType = sessionStorage.getItem("selectedButtonType");
  context[selectedButtonType].createButtons();
};

const createPostButton = () => {
  const buttonContainer = document.getElementById("buttonContainer");

  const oKButton = createButton(COMMON_BUTTON.COMMON.OK);
  oKButton.addEventListener("click", async () => {
    const formData = collectEmployeeFormDataForPost();
    alert("정말 등록하겠습니까?");

    alert(JSON.stringify(formData));

    await fetchAddEmployee(formData);

    window.location.href = "home.html"
  });

  buttonContainer.appendChild(oKButton);
  createCancelButton();
}

const createUpdateButton = () => {
  const buttonContainer = document.getElementById("buttonContainer");

  const updateButton = createButton(COMMON_BUTTON.COMMON.UPDATE);
  updateButton.addEventListener("click", async () => {
    const formData = collectEmployeeFormDataForUpdate();
    alert("정말 수정하시겠습니까?");

    alert(JSON.stringify(formData));
    await fetchUpdateEmployee(formData);

    window.location.href = "home.html"
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
  const okButton = document.createElement("button");
  okButton.className = "button-item";
  okButton.textContent = textContent;
  return okButton;
}

const createCancelButton = () => {
  const buttonContainer = document.getElementById("buttonContainer");

  const cancelButton = document.createElement("button");
  cancelButton.className = "button-item";
  cancelButton.textContent = COMMON_BUTTON.COMMON.CANCEL;

  cancelButton.addEventListener("click", () => window.history.back());

  buttonContainer.appendChild(cancelButton);
}

const getValueById = (id) => {
  const element = document.getElementById(id);
  return element ? element.value : null; // 요소가 존재하면 value 반환, 아니면 null 반환
};

const getCheckedValue = (name) => {
  return document.querySelector(`input[name="${name}"]:checked`).value;
};

const collectEmployeeFormDataForPost = () => {
  return {
    departmentId: getValueById("departmentId"),
    name: getValueById("name"),
    employeePosition: getValueById("position"),
    address: getValueById("address"),
    phoneNumber: getValueById("phoneNumber"),
    bankName: getValueById("bankName"),
    bankAccount: getValueById("bankAccount"),
    residentRegistrationNumber: getValueById("residentRegistrationNumber"),
    salary: getValueById("salary"),
    employmentDate: getValueById("employmentDate"),
    tempFamilyList: collectFamilyFormDataForPost()
  };
};

const collectFamilyFormDataForPost = () => {
  const familyLength = document.querySelectorAll('.radio-group').length;

  const familyForm = [];
  for (let familyNumber = 0; familyNumber < familyLength; familyNumber++) {
    familyForm.push({
      birthDate: getValueById(`familyBirthDate-${familyNumber}`),
      name: getValueById(`familyName-${familyNumber}`),
      relationship: getValueById(`relationship-${familyNumber}`),
      survival: getCheckedValue(`survival-${familyNumber}`)
    })
  }
  return familyForm;
}

const collectEmployeeFormDataForUpdate = () => {
  return {
    id: getValueById("id"),
    departmentId: getValueById("departmentId"),
    name: getValueById("name"),
    employeePosition: getValueById("position"),
    address: getValueById("address"),
    phoneNumber: getValueById("phoneNumber"),
    bankName: getValueById("bankName"),
    bankAccount: getValueById("bankAccount"),
    salary: getValueById("salary"),
    employmentDate: getValueById("employmentDate"),
    tempFamilyList: collectFamilyFormDataForUpdate()
  };
};

const collectFamilyFormDataForUpdate = () => {
  const familyLength = document.querySelectorAll('.radio-group').length;
  const familyForm = [];
  for (let familyNumber = 0; familyNumber < familyLength; familyNumber++) {
    const element = document.getElementById(`familyId-${familyNumber}`);
    familyForm.push({
      id: element ? element.textContent : null,
      birthDate: getValueById(`familyBirthDate-${familyNumber}`),
      name: getValueById(`familyName-${familyNumber}`),
      relationship: getValueById(`relationship-${familyNumber}`),
      survival: getCheckedValue(`survival-${familyNumber}`)
    })
  }
  return familyForm;
}
