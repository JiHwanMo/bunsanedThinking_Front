import {
  fetchAddCollateralProduct,
  fetchAddLoanProduct,
  fetchRequestLoan,
  fetchUpdateCollateralProduct,
  fetchUpdateFixedDepositProduct,
  fetchUpdateInsuranceContractProduct,
} from "../../../../apiUtils/apiDocumentation/employee/loanManagement/loanManagement.js";
import {BUTTON as COMMON_BUTTON} from "../../../../../../config/common.js";

export const renderButtons = () => {
  const selectedButtonType = sessionStorage.getItem("selectedButtonType");
  context[selectedButtonType].createButtons();
};

const createPostButton = () => {
  const buttonContainer = document.getElementById("buttonContainer");

  const oKButton = createButton(COMMON_BUTTON.COMMON.OK);
  oKButton.addEventListener("click", async () => {
    const formData = collectFormDataForPost();
    alert("정말 등록하겠습니까?");

    await functions[formData.loanType].postFunction(formData);

    window.location.href = "home.html"
  });

  buttonContainer.appendChild(oKButton);
  createCancelButton();
}

const createUpdateButton = () => {
  const buttonContainer = document.getElementById("buttonContainer");

  const updateButton = createButton(COMMON_BUTTON.COMMON.UPDATE);
  updateButton.addEventListener("click", async () => {
    const formData = collectFormDataForUpdate();
    alert("정말 수정하시겠습니까?");

    await functions[formData.loanType].updateFunction(formData);

    window.location.href = "home.html"
  });

  buttonContainer.appendChild(updateButton);
  createCancelButton();
}

const createLoanRequestButton = () => {
  const buttonContainer = document.getElementById("buttonContainer");

  const oKButton = createButton(COMMON_BUTTON.COMMON.OK);
  oKButton.addEventListener("click", async () => {
    let id = sessionStorage.getItem("selectedDataId");
    let money = getValueById("money");
    let paymentType = getValueById("paymentType");
    alert("정말 처리하시겠습니까?");

    await fetchRequestLoan(id, money, paymentType, true);

    window.location.href = "home.html"
  });

  buttonContainer.appendChild(oKButton);
  createCancelButton();
}

const context = {
  POST: {
    createButtons: createPostButton
  },
  UPDATE: {
    createButtons: createUpdateButton
  },
  LOAN_REQUEST: {
    createButtons: createLoanRequestButton
  }
}

const functions= {
  Collateral: {
    postFunction: fetchAddCollateralProduct,
    updateFunction: fetchUpdateCollateralProduct
  },
  FixedDeposit: {
    postFunction: fetchAddLoanProduct,
    updateFunction: fetchUpdateFixedDepositProduct
  },
  InsuranceContract: {
    postFunction: fetchAddLoanProduct,
    updateFunction: fetchUpdateInsuranceContractProduct
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

const collectFormDataForPost = () => {
  const loanType = getValueById("loanType");
  const commonData = {
    loanType: loanType,
    name: getValueById("loanName"),
    interestRate: getValueById("interestRate"),
    maximumMoney: getValueById("maximumMoney"),
    minimumAsset: getValueById("minimumAsset")
  };

  // 보험 유형별로 데이터 추가

  switch (loanType) {
    case "Collateral":
      return {
        ...commonData,
        collateralType: getValueById("collateralType"),
        minimumValue: getValueById("minimumValue")
      };
    case "FixedDeposit":
      return {
        ...commonData,
        parameter: getValueById("minimumAmount")
      };
    case "InsuranceContract":
      return {
        ...commonData,
        parameter: getValueById("insuranceId")
      };
    default:
      return commonData; // 기본 데이터 반환 (보험 유형이 없을 때)
  }
};

const collectFormDataForUpdate = () => {
  const loanType = sessionStorage.getItem("selectedDataType");
  const commonData = {
    id: JSON.parse(sessionStorage.getItem("selectedDataId")),
    loanType: loanType,
    name: getValueById("loanName"),
    interestRate: getValueById("interestRate"),
    maximumMoney: getValueById("maximumMoney"),
    minimumAsset: getValueById("minimumAsset")
  };

  switch (loanType) {
    case "Collateral":
      return {
        ...commonData,
        collateralType: getValueById("collateralType"),
        minimumValue: getValueById("minimumValue")
      };
    case "FixedDeposit":
      return {
        ...commonData,
        minimumAmount: getValueById("minimumAmount")
      };
    case "InsuranceContract":
      return {
        ...commonData,
        insuranceId: getValueById("insuranceId")
      };
    default:
      return commonData; // 기본 데이터 반환 (보험 유형이 없을 때)
  }
}
