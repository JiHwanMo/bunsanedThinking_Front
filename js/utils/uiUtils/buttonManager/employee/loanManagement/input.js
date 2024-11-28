import {
  fetchAddCollateralProduct,
  fetchAddLoanProduct,
  fetchRequestLoan,
  fetchUpdateCollateralProduct,
  fetchUpdateFixedDepositProduct,
  fetchUpdateInsuranceContractProduct,
} from "../../../../apiUtils/apiDocumentation/employee/loanManagement/loanManagement.js";
import {
  BUTTON as COMMON_BUTTON, CLASS,
  ELEMENT_ID as COMMON_ELEMENT_ID,
  EVENT,
  KEY as COMMON_KEY,
  LOCATION,
  TAG
} from "../../../../../../config/common.js";
import {ELEMENT_ID, KEY, LOAN_TYPE, QUESTION} from "../../../../../../config/employee/loanManagement/loanManagement.js";

export const renderButtons = () => {
  const selectedButtonType = sessionStorage.getItem(COMMON_KEY.SELECTED_BUTTON_TYPE);
  context[selectedButtonType].createButtons();
};

const createPostButton = () => {
  const buttonContainer = document.getElementById(COMMON_ELEMENT_ID.BUTTON_CONTAINER);

  const oKButton = createButton(COMMON_BUTTON.COMMON.OK);
  oKButton.addEventListener(EVENT.CLICK, async () => {
    const formData = collectFormDataForPost();
    const check = confirm(QUESTION.CONFIRM_POST);

    if (check) {
      await functions[formData.loanType].postFunction(formData);
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
    const formData = collectFormDataForUpdate();
    const check = confirm(QUESTION.CONFIRM_UPDATE);

    if (check) {
      await functions[formData.loanType].updateFunction(formData);
      window.location.href = LOCATION.HOME;
    }
  });

  buttonContainer.appendChild(updateButton);
  createCancelButton();
}

const createLoanRequestButton = () => {
  const buttonContainer = document.getElementById(COMMON_ELEMENT_ID.BUTTON_CONTAINER);

  const oKButton = createButton(COMMON_BUTTON.COMMON.OK);
  oKButton.addEventListener(EVENT.CLICK, async () => {
    let id = sessionStorage.getItem(COMMON_KEY.SELECTED_DATA_ID);
    let money = getValueById(ELEMENT_ID.MONEY);
    let paymentType = getValueById(ELEMENT_ID.PAYMENT_TYPE);
    const check = confirm(QUESTION.CONFIRM_REQUEST_LOAN);

    if (check) {
      await fetchRequestLoan(id, money, paymentType, true);
      window.location.href = LOCATION.HOME;
    }
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

const collectFormDataForPost = () => {
  const loanType = getValueById(ELEMENT_ID.LOAN_TYPE);
  const commonData = {
    loanType: loanType,
    name: getValueById(ELEMENT_ID.LOAN_NAME),
    interestRate: getValueById(ELEMENT_ID.INTEREST_RATE),
    maximumMoney: getValueById(ELEMENT_ID.MAXIMUM_MONEY),
    minimumAsset: getValueById(ELEMENT_ID.MINIMUM_ASSET)
  };

  // 보험 유형별로 데이터 추가

  switch (loanType) {
    case LOAN_TYPE.COLLATERAL:
      return {
        ...commonData,
        collateralType: getValueById(ELEMENT_ID.COLLATERAL.COLLATERAL_TYPE),
        minimumValue: getValueById(ELEMENT_ID.COLLATERAL.MINIMUM_VALUE)
      };
    case LOAN_TYPE.FIXED_DEPOSIT:
      return {
        ...commonData,
        parameter: getValueById(ELEMENT_ID.FIXED_DEPOSIT.MINIMUM_AMOUNT)
      };
    case LOAN_TYPE.INSURANCE_CONTRACT:
      return {
        ...commonData,
        parameter: getValueById(ELEMENT_ID.INSURANCE_CONTRACT.INSURANCE_ID)
      };
    default:
      return commonData; // 기본 데이터 반환 (보험 유형이 없을 때)
  }
};

const collectFormDataForUpdate = () => {
  const loanType = sessionStorage.getItem(KEY.SELECTED_DATA_TYPE);
  const commonData = {
    id: JSON.parse(sessionStorage.getItem(COMMON_KEY.SELECTED_DATA_ID)),
    loanType: loanType,
    name: getValueById(ELEMENT_ID.LOAN_NAME),
    interestRate: getValueById(ELEMENT_ID.INTEREST_RATE),
    maximumMoney: getValueById(ELEMENT_ID.MAXIMUM_MONEY),
    minimumAsset: getValueById(ELEMENT_ID.MINIMUM_ASSET)
  };

  switch (loanType) {
    case LOAN_TYPE.COLLATERAL:
      return {
        ...commonData,
        collateralType: getValueById(ELEMENT_ID.COLLATERAL.COLLATERAL_TYPE),
        minimumValue: getValueById(ELEMENT_ID.COLLATERAL.MINIMUM_VALUE)
      };
    case LOAN_TYPE.FIXED_DEPOSIT:
      return {
        ...commonData,
        minimumAmount: getValueById(ELEMENT_ID.FIXED_DEPOSIT.MINIMUM_AMOUNT)
      };
    case LOAN_TYPE.INSURANCE_CONTRACT:
      return {
        ...commonData,
        insuranceId: getValueById(ELEMENT_ID.INSURANCE_CONTRACT.INSURANCE_ID)
      };
    default:
      return commonData; // 기본 데이터 반환 (보험 유형이 없을 때)
  }
}
