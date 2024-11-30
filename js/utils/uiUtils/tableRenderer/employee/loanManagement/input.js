import {
  COLLATERAL_TYPE_LABEL,
  DETAIL_COLUMN_NAME, ELEMENT_ID, KEY, LABEL,
  LOAN_TYPE, LOAN_TYPE_RESPONSE,
  MESSAGES, PAYMENT_TYPE_LABEL
} from "../../../../../../config/employee/loanManagement/loanManagement.js";
import {
  fetchGetLoanProductDetail
} from "../../../../apiUtils/apiDocumentation/employee/loanManagement/loanManagement.js";
import {
  ATTRIBUTE,
  CLASS, ELEMENT_ID as COMMON_ELEMENT_ID, EVENT,
  INPUT_TYPE,
  KEY as COMMON_KEY,
  MESSAGES as COMMON_MESSAGES,
  STRING_EMPTY,
  TAG
} from "../../../../../../config/common.js";

export const renderInput = () => {
  const selectedButtonType = sessionStorage.getItem(COMMON_KEY.SELECTED_BUTTON_TYPE);
  context[selectedButtonType].renderingInput();
}

const getType = () => {
  return sessionStorage.getItem(COMMON_KEY.CURRENT_TYPE);
}

const renderAddLoanInput = () => {
  const loanType = renderComboBox();
  loanType.addEventListener(EVENT.CHANGE, () => {
    renderAddLoanInputFields(loanType.value);
  });
}

const renderUpdateLoanInput = async () => {
  const selectedDataId = JSON.parse(sessionStorage.getItem(COMMON_KEY.SELECTED_DATA_ID));
  const loanData = await fetchGetLoanProductDetail(selectedDataId);
  renderCommonInputFieldsWithValues(loanData.loanType, loanData);
}

const renderRequestLoanInput = () => {
  renderLoanRequestInputFields();
}

const context = {
  POST: {
    renderingInput: renderAddLoanInput
  },
  UPDATE: {
    renderingInput: renderUpdateLoanInput
  },
  LOAN_REQUEST: {
    renderingInput: renderRequestLoanInput
  }
}

const options = [
  {
    value: STRING_EMPTY,
    label: MESSAGES.SELECT_LOAN_TYPE
  },
  {
    value: LOAN_TYPE.COLLATERAL,
    label: DETAIL_COLUMN_NAME.MANAGEMENT_LOAN_PRODUCT.TYPE.COLLATERAL.LABEL
  },
  {
    value: LOAN_TYPE.FIXED_DEPOSIT,
    label: DETAIL_COLUMN_NAME.MANAGEMENT_LOAN_PRODUCT.TYPE.FIXED_DEPOSIT.LABEL
  },
  {
    value: LOAN_TYPE.INSURANCE_CONTRACT,
    label: DETAIL_COLUMN_NAME.MANAGEMENT_LOAN_PRODUCT.TYPE.INSURANCE_CONTRACT.LABEL,
  }
];

const renderComboBox = () => {
  const comboBoxContainer = document.getElementById(COMMON_ELEMENT_ID.COMBO_BOX_CONTAINER);
  // 콤보박스 컨테이너 초기화
  let loanTypeContainer = document.getElementById(ELEMENT_ID.LOAN_TYPE_CONTAINER);

  if (loanTypeContainer)
    return document.getElementById(ELEMENT_ID.LOAN_TYPE); // 이미 존재하는 콤보박스 반환

  loanTypeContainer = document.createElement(TAG.DIV);
  loanTypeContainer.className = CLASS.FORM_GROUP;
  loanTypeContainer.id = ELEMENT_ID.LOAN_TYPE_CONTAINER;

  const label = document.createElement(TAG.LABEL);
  label.setAttribute(ATTRIBUTE.FOR, ELEMENT_ID.LOAN_TYPE);
  label.textContent = DETAIL_COLUMN_NAME.MANAGEMENT_LOAN_PRODUCT.LOAN_TYPE;

  const select = document.createElement(TAG.SELECT);
  select.id = ELEMENT_ID.LOAN_TYPE;

  options.forEach(optionValue => {
    const option = document.createElement(TAG.OPTION);
    option.value = optionValue.value;
    option.textContent = optionValue.label;
    select.appendChild(option);
  });

  // 콤보박스 컨테이너에 추가
  loanTypeContainer.appendChild(label);
  loanTypeContainer.appendChild(select);

  // 메인 컨테이너에 추가
  comboBoxContainer.appendChild(loanTypeContainer);

  return select; // 생성된 콤보박스를 반환
};

const commonLoanForms = [
  {
    for: ELEMENT_ID.NAME,
    label: LABEL.LOAN_NAME,
    type: INPUT_TYPE.TEXT,
    id: ELEMENT_ID.NAME,
    name: ELEMENT_ID.NAME,
    value: ELEMENT_ID.NAME,
    placeholder: LABEL.LOAN_NAME
  },
  {
    for: ELEMENT_ID.INTEREST_RATE,
    label: LABEL.INTEREST_RATE,
    type: INPUT_TYPE.NUMBER,
    id: ELEMENT_ID.INTEREST_RATE,
    name: ELEMENT_ID.INTEREST_RATE,
    value: ELEMENT_ID.INTEREST_RATE,
    placeholder: LABEL.INTEREST_RATE
  },
  {
    for: ELEMENT_ID.MAXIMUM_MONEY,
    label: LABEL.MAXIMUM_MONEY,
    type: INPUT_TYPE.NUMBER,
    id: ELEMENT_ID.MAXIMUM_MONEY,
    name: ELEMENT_ID.MAXIMUM_MONEY,
    value: ELEMENT_ID.MAXIMUM_MONEY,
    placeholder: LABEL.MAXIMUM_MONEY
  },
  {
    for: ELEMENT_ID.MINIMUM_ASSET,
    label: LABEL.MINIMUM_ASSET,
    type: INPUT_TYPE.NUMBER,
    id: ELEMENT_ID.MINIMUM_ASSET,
    name: ELEMENT_ID.MINIMUM_ASSET,
    value: ELEMENT_ID.MINIMUM_ASSET,
    placeholder: LABEL.MINIMUM_ASSET
  }
];

const createCommonForm = (form, type) => {
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
  formInput.placeholder = `${DETAIL_COLUMN_NAME[type][form.placeholder]}${COMMON_MESSAGES.PLACE_HOLDER.INPUT}`;
  formDiv.appendChild(formInput);
  return formDiv;
}

const createCollateralForm = (type) => {
  const collateralDiv = document.createElement(TAG.DIV);
  collateralDiv.className = CLASS.FORM_GROUP;

  const collateralTypeLabel = document.createElement(TAG.LABEL);
  collateralTypeLabel.for = ELEMENT_ID.COLLATERAL.COLLATERAL_TYPE;
  collateralTypeLabel.textContent = DETAIL_COLUMN_NAME[type].TYPE.COLLATERAL.COLLATERAL_TYPE;
  collateralDiv.appendChild(collateralTypeLabel);

  const collateralTypeSelect = document.createElement(TAG.SELECT);
  collateralTypeSelect.id = ELEMENT_ID.COLLATERAL.COLLATERAL_TYPE;
  collateralTypeSelect.name = ELEMENT_ID.COLLATERAL.COLLATERAL_TYPE;
  Object.entries(COLLATERAL_TYPE_LABEL).forEach(([key, value]) => {
    const option = document.createElement(TAG.OPTION);
    option.value = key;
    option.textContent = value;
    collateralTypeSelect.appendChild(option);
  })
  collateralDiv.appendChild(collateralTypeSelect);

  const minimumValueDiv = document.createElement(TAG.DIV);
  minimumValueDiv.className = CLASS.FORM_GROUP;

  const minimumValueLabel = document.createElement(TAG.LABEL);
  minimumValueLabel.for = ELEMENT_ID.COLLATERAL.MINIMUM_VALUE;
  minimumValueLabel.textContent = DETAIL_COLUMN_NAME[type].TYPE.COLLATERAL.MINIMUM_VALUE;
  minimumValueDiv.appendChild(minimumValueLabel);

  const minimumValueInput = document.createElement(TAG.INPUT);
  minimumValueInput.id = ELEMENT_ID.COLLATERAL.MINIMUM_VALUE;
  minimumValueInput.type = INPUT_TYPE.NUMBER;
  minimumValueInput.name = ELEMENT_ID.COLLATERAL.MINIMUM_VALUE;
  minimumValueInput.placeholder = DETAIL_COLUMN_NAME[type].TYPE.COLLATERAL.MINIMUM_VALUE + COMMON_MESSAGES.PLACE_HOLDER.INPUT;
  minimumValueInput.required = true;
  minimumValueDiv.appendChild(minimumValueInput);

  return [collateralDiv, minimumValueDiv];
}

const createFixedDepositForm = (type) => {
  const fixedDepositDiv = document.createElement(TAG.DIV);
  fixedDepositDiv.className = CLASS.FORM_GROUP;

  const minimumAmountLabel = document.createElement(TAG.LABEL);
  minimumAmountLabel.for = ELEMENT_ID.FIXED_DEPOSIT.MINIMUM_AMOUNT;
  minimumAmountLabel.textContent = DETAIL_COLUMN_NAME[type].TYPE.FIXED_DEPOSIT.MINIMUM_AMOUNT;
  fixedDepositDiv.appendChild(minimumAmountLabel);

  const minimumAmountInput = document.createElement(TAG.INPUT);
  minimumAmountInput.id = ELEMENT_ID.FIXED_DEPOSIT.MINIMUM_AMOUNT;
  minimumAmountInput.type = INPUT_TYPE.NUMBER;
  minimumAmountInput.name = ELEMENT_ID.FIXED_DEPOSIT.MINIMUM_AMOUNT;
  minimumAmountInput.placeholder = DETAIL_COLUMN_NAME[type].TYPE.FIXED_DEPOSIT.MINIMUM_AMOUNT + COMMON_MESSAGES.PLACE_HOLDER.INPUT;
  minimumAmountInput.required = true;
  fixedDepositDiv.appendChild(minimumAmountInput);

  return [fixedDepositDiv];
}

const createInsuranceContractForm = (type) => {
  const insuranceContractDiv = document.createElement(TAG.DIV);
  insuranceContractDiv.className = CLASS.FORM_GROUP;

  const insuranceIdLabel = document.createElement(TAG.LABEL);
  insuranceIdLabel.for = ELEMENT_ID.INSURANCE_CONTRACT.INSURANCE_ID;
  insuranceIdLabel.textContent = DETAIL_COLUMN_NAME[type].TYPE.INSURANCE_CONTRACT.INSURANCE_ID;
  insuranceContractDiv.appendChild(insuranceIdLabel);

  const insuranceIdInput = document.createElement(TAG.INPUT);
  insuranceIdInput.id = ELEMENT_ID.INSURANCE_CONTRACT.INSURANCE_ID;
  insuranceIdInput.type = INPUT_TYPE.NUMBER;
  insuranceIdInput.name = ELEMENT_ID.INSURANCE_CONTRACT.INSURANCE_ID;
  insuranceIdInput.placeholder = DETAIL_COLUMN_NAME[type].TYPE.INSURANCE_CONTRACT.INSURANCE_ID + COMMON_MESSAGES.PLACE_HOLDER.INPUT;
  insuranceIdInput.required = true;
  insuranceContractDiv.appendChild(insuranceIdInput);

  return [insuranceContractDiv];
}

const renderAddLoanInputFields = (loanType) => {
  const inputFieldsContainer = document.getElementById(COMMON_ELEMENT_ID.INPUT_FIELDS_CONTAINER);
  while(inputFieldsContainer.firstChild) inputFieldsContainer.removeChild(inputFieldsContainer.firstChild);
  if (loanType === STRING_EMPTY) return;
  let type = getType();
  commonLoanForms.forEach(form => inputFieldsContainer.appendChild(createCommonForm(form, type)));
  // inputFieldsContainer.innerHTML += fields[LOAN_TYPE_RESPONSE[loanType]](type); // 선택된 옵션에 따라 입력란 표시
  fields[LOAN_TYPE_RESPONSE[loanType]](type).forEach(field => {
    inputFieldsContainer.appendChild(field);
  }); // 선택된 옵션에 따라 입력란 표시
}

const fields = {
  COLLATERAL: createCollateralForm,
  FIXED_DEPOSIT: createFixedDepositForm,
  INSURANCE_CONTRACT: createInsuranceContractForm
};

const renderLoanRequestInputFields = () => {
  const inputFieldsContainer = document.getElementById(COMMON_ELEMENT_ID.INPUT_FIELDS_CONTAINER);
  createLoanRequestInputForm().forEach(form => {
    inputFieldsContainer.appendChild(form);
  });
}

const createLoanRequestInputForm = () => {
  const type = getType();
  const paymentTypeDiv = document.createElement(TAG.DIV);
  paymentTypeDiv.className = CLASS.FORM_GROUP;

  const paymentTypeLabel = document.createElement(TAG.LABEL);
  paymentTypeLabel.for = ELEMENT_ID.PAYMENT_TYPE;
  paymentTypeLabel.textContent = DETAIL_COLUMN_NAME[type].PAYMENT_TYPE;
  paymentTypeDiv.appendChild(paymentTypeLabel);

  const paymentTypeSelect = document.createElement(TAG.SELECT);
  paymentTypeSelect.id = ELEMENT_ID.PAYMENT_TYPE;
  paymentTypeSelect.name = ELEMENT_ID.PAYMENT_TYPE;
  Object.entries(PAYMENT_TYPE_LABEL).forEach(([key, value]) => {
    const option = document.createElement(TAG.OPTION);
    option.value = key;
    option.textContent = value;
    paymentTypeSelect.appendChild(option);
  })
  paymentTypeDiv.appendChild(paymentTypeSelect);

  const moneyDiv = document.createElement(TAG.DIV);
  moneyDiv.className = CLASS.FORM_GROUP;

  const moneyLabel = document.createElement(TAG.LABEL);
  moneyLabel.for = ELEMENT_ID.MONEY;
  moneyLabel.textContent = DETAIL_COLUMN_NAME[type].MONEY;
  moneyDiv.appendChild(moneyLabel);

  const moneyInput = document.createElement(TAG.INPUT);
  moneyInput.id = ELEMENT_ID.MONEY;
  moneyInput.type = INPUT_TYPE.NUMBER;
  moneyInput.name = ELEMENT_ID.MONEY;
  moneyInput.placeholder = DETAIL_COLUMN_NAME[type].MONEY + COMMON_MESSAGES.PLACE_HOLDER.INPUT;
  moneyInput.required = true;
  moneyDiv.appendChild(moneyInput);

  return [paymentTypeDiv, moneyDiv];

  // return `
  //     <div class="form-group">
  //       <label for="paymentType">${DETAIL_COLUMN_NAME[type].PAYMENT_TYPE}</label>
  //       <select id="paymentType" name="paymentType">
  //         <option value="Cash" selected>현금</option>
  //         <option value="AccountTransfer">계좌이체</option>
  //       </select>
  //     </div>
  //     <div class="form-group">
  //       <label for="money">${DETAIL_COLUMN_NAME[type].MONEY}</label>
  //       <input type="number" id="money" name="money" placeholder="${DETAIL_COLUMN_NAME[type].MONEY}을 입력하세요" required>
  //     </div>
  //   `;
}

const renderCommonInputFieldsWithValues = (loanType, data) => {
  sessionStorage.setItem(KEY.SELECTED_DATA_TYPE, loanType);
  const inputFieldsContainer = document.getElementById(COMMON_ELEMENT_ID.INPUT_FIELDS_CONTAINER);
  while(inputFieldsContainer.firstChild) inputFieldsContainer.removeChild(inputFieldsContainer.firstChild);
  if (loanType === STRING_EMPTY) return;
  const type = getType();
  commonLoanForms.forEach(form => {
    inputFieldsContainer.appendChild(createCommonForm(form, type))
    const input = document.getElementById(form.id);
    input.setAttribute(ATTRIBUTE.VALUE, data[form.value]);
  });
  fieldsWithDetail[LOAN_TYPE_RESPONSE[loanType]](data, type).forEach(field => {
    inputFieldsContainer.appendChild(field);
  }); // 선택된 옵션에 따라 입력란 표시
};

const createCollateralFormWithDetail = (data, type) => {
  const collateralDiv = document.createElement(TAG.DIV);
  collateralDiv.className = CLASS.FORM_GROUP;

  const collateralTypeLabel = document.createElement(TAG.LABEL);
  collateralTypeLabel.for = ELEMENT_ID.COLLATERAL.COLLATERAL_TYPE;
  collateralTypeLabel.textContent = DETAIL_COLUMN_NAME[type].TYPE.COLLATERAL.COLLATERAL_TYPE;
  collateralDiv.appendChild(collateralTypeLabel);

  const collateralTypeSelect = document.createElement(TAG.SELECT);
  collateralTypeSelect.id = ELEMENT_ID.COLLATERAL.COLLATERAL_TYPE;
  collateralTypeSelect.name = ELEMENT_ID.COLLATERAL.COLLATERAL_TYPE;
  Object.entries(COLLATERAL_TYPE_LABEL).forEach(([key, value]) => {
    const option = document.createElement(TAG.OPTION);
    option.value = key;
    option.textContent = value;
    if (data.collateralType === value) {
      option.selected = true;
    }
    collateralTypeSelect.appendChild(option);
  })
  collateralDiv.appendChild(collateralTypeSelect);

  const minimumValueDiv = document.createElement(TAG.DIV);
  minimumValueDiv.className = CLASS.FORM_GROUP;

  const minimumValueLabel = document.createElement(TAG.LABEL);
  minimumValueLabel.for = ELEMENT_ID.COLLATERAL.MINIMUM_VALUE;
  minimumValueLabel.textContent = DETAIL_COLUMN_NAME[type].TYPE.COLLATERAL.MINIMUM_VALUE;
  minimumValueDiv.appendChild(minimumValueLabel);

  const minimumValueInput = document.createElement(TAG.INPUT);
  minimumValueInput.id = ELEMENT_ID.COLLATERAL.MINIMUM_VALUE;
  minimumValueInput.type = INPUT_TYPE.NUMBER;
  minimumValueInput.name = ELEMENT_ID.COLLATERAL.MINIMUM_VALUE;
  minimumValueInput.value = data.minimumValue || STRING_EMPTY;
  minimumValueInput.placeholder = DETAIL_COLUMN_NAME[type].TYPE.COLLATERAL.MINIMUM_VALUE + COMMON_MESSAGES.PLACE_HOLDER.INPUT;
  minimumValueInput.required = true;
  minimumValueDiv.appendChild(minimumValueInput);

  return [collateralDiv, minimumValueDiv];
}

const createFixedDepositFormWithDetail = (data, type) => {
  const forms = createFixedDepositForm(type);
  forms.forEach(form => {
    Array.from(form.children).forEach(child => {
      if (child.id === ELEMENT_ID.FIXED_DEPOSIT.MINIMUM_AMOUNT)
        child.value = data.minimumAmount || STRING_EMPTY;
    })
  })
  return forms;
}

const createInsuranceContractFormWithDetail = (data, type) => {
  const forms = createInsuranceContractForm(type);
  forms.forEach(form => {
    Array.from(form.children).forEach(child => {
      if (child.id === ELEMENT_ID.INSURANCE_CONTRACT.INSURANCE_ID)
        child.value = data.insuranceId || STRING_EMPTY;
    })
  })
  return forms;
}

const fieldsWithDetail = {
  COLLATERAL: createCollateralFormWithDetail,
  FIXED_DEPOSIT: createFixedDepositFormWithDetail,
  INSURANCE_CONTRACT: createInsuranceContractFormWithDetail
}
