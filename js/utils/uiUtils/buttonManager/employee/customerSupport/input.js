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
  fetchHandleAccident,
  fetchHandleComplaint
} from "../../../../apiUtils/apiDocumentation/employee/customerSupport/customerSupport.js";

export const renderButtons = () => {
  const selectedButtonType = sessionStorage.getItem("selectedButtonType");
  context[selectedButtonType].createButtons(selectedButtonType);
};

const createHandleComplaintButton = () => {
  const buttonContainer = document.getElementById("buttonContainer");

  const handleButton = createButton("접수");
  handleButton.addEventListener("click", async () => {
    let id = sessionStorage.getItem("selectedDataId");
    let result = getValueById("result");
    let employeeName = getValueById("employeeName");
    alert("정말 처리하시겠습니까?");

    await fetchHandleComplaint(id, result, employeeName);

    window.location.href = "home.html"
  });

  buttonContainer.appendChild(handleButton);
  createCancelButton();
}

const createHandleReportButton = () => {
  const buttonContainer = document.getElementById("buttonContainer");

  const handleButton = createButton("접수");
  handleButton.addEventListener("click", async () => {
    let id = sessionStorage.getItem("selectedDataId");
    let damageAssessmentCompanyId = getValueById("damageAssessmentCompanyId");
    let roadsideAssistanceCompanyId = getValueById("roadsideAssistanceCompanyId");
    alert("정말 처리하시겠습니까?");

    await fetchHandleAccident(id, damageAssessmentCompanyId, roadsideAssistanceCompanyId);

    window.location.href = "home.html"
  });

  buttonContainer.appendChild(handleButton);
  createCancelButton();
}

const context = {
  HANDLE_COMPLAINT: {
    createButtons: createHandleComplaintButton
  },
  HANDLE_REPORT: {
    createButtons: createHandleReportButton
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
