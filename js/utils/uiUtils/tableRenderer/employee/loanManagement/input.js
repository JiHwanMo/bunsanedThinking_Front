import {
  DETAIL_COLUMN_NAME, ELEMENT_ID, KEY, LABEL,
  LOAN_TYPE, LOAN_TYPE_RESPONSE,
  MESSAGES
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
  return `
      <div class="form-group">
        <label for="collateralType">${DETAIL_COLUMN_NAME[type].TYPE.COLLATERAL.COLLATERAL_TYPE}</label>
        <select id="collateralType" name="collateralType">
          <option value="RealEstate" selected>부동산</option>
          <option value="Car">자동차</option>
        </select>
      </div>
      <div class="form-group">
        <label for="minimumValue">${DETAIL_COLUMN_NAME[type].TYPE.COLLATERAL.MINIMUM_VALUE}</label>
        <input type="number" id="minimumValue" name="minimumValue" placeholder="${DETAIL_COLUMN_NAME[type].TYPE.COLLATERAL.MINIMUM_VALUE}를 입력하세요" required>
      </div>
    `;
}

const createFixedDepositForm = (type) => {
  return `
      <div class="form-group">
        <label for="minimumAmount">${DETAIL_COLUMN_NAME[type].TYPE.FIXED_DEPOSIT.MINIMUM_AMOUNT}</label>
        <input type="number" id="minimumAmount" name="minimumAmount" placeholder="${DETAIL_COLUMN_NAME[type].TYPE.FIXED_DEPOSIT.MINIMUM_AMOUNT}을 입력하세요" required>
      </div>
    `;
}

const createInsuranceContractForm = (type) => {
  return `
      <div class="form-group">
        <label for="insuranceId">${DETAIL_COLUMN_NAME[type].TYPE.INSURANCE_CONTRACT.INSURANCE_ID}</label>
        <input type="number" id="insuranceId" name="insuranceId" placeholder="${DETAIL_COLUMN_NAME[type].TYPE.INSURANCE_CONTRACT.INSURANCE_ID}를 입력하세요" required>
      </div>
    `;
}

const renderAddLoanInputFields = (loanType) => {
  const inputFieldsContainer = document.getElementById(COMMON_ELEMENT_ID.INPUT_FIELDS_CONTAINER);
  while(inputFieldsContainer.firstChild) inputFieldsContainer.removeChild(inputFieldsContainer.firstChild);
  if (loanType === STRING_EMPTY) return;
  let type = getType();
  commonLoanForms.forEach(form => inputFieldsContainer.appendChild(createCommonForm(form, type)));
  inputFieldsContainer.innerHTML += fields[LOAN_TYPE_RESPONSE[loanType]](type); // 선택된 옵션에 따라 입력란 표시
}

const fields = {
  COLLATERAL: createCollateralForm,
  FIXED_DEPOSIT: createFixedDepositForm,
  INSURANCE_CONTRACT: createInsuranceContractForm
};

const renderLoanRequestInputFields = () => {
  const inputFieldsContainer = document.getElementById(COMMON_ELEMENT_ID.INPUT_FIELDS_CONTAINER);
  inputFieldsContainer.innerHTML += createLoanRequestInputForm();
}

const createLoanRequestInputForm = () => {
  let type = getType();
  return `
      <div class="form-group">
        <label for="paymentType">${DETAIL_COLUMN_NAME[type].PAYMENT_TYPE}</label>
        <select id="paymentType" name="paymentType">
          <option value="Cash" selected>현금</option>
          <option value="AccountTransfer">계좌이체</option>
        </select>
      </div>
      <div class="form-group">
        <label for="money">${DETAIL_COLUMN_NAME[type].MONEY}</label>
        <input type="number" id="money" name="money" placeholder="${DETAIL_COLUMN_NAME[type].MONEY}을 입력하세요" required>
      </div>
    `;
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
  inputFieldsContainer.innerHTML += fieldsWithDetail[LOAN_TYPE_RESPONSE[loanType]](data, type); // 선택된 옵션에 따라 입력란 표시
};

const createCollateralFormWithDetail = (data, type) => {
  return `
      <div class="form-group">
        <label for="collateralType">${DETAIL_COLUMN_NAME[type].TYPE.COLLATERAL.COLLATERAL_TYPE}</label>
        <select id="collateralType" name="collateralType">
          <option value="RealEstate" ${data.collateralType === "RealEstate" ? "selected" : ""}>부동산</option>
          <option value="Car" ${data.collateralType === "Car" ? "selected" : ""}>자동차</option>
        </select>
      </div>
      <div class="form-group">
        <label for="minimumValue">${DETAIL_COLUMN_NAME[type].TYPE.COLLATERAL.MINIMUM_VALUE}</label>
        <input type="number" id="minimumValue" name="minimumValue" value="${data.minimumValue || ""}" placeholder="${DETAIL_COLUMN_NAME[type].TYPE.COLLATERAL.MINIMUM_VALUE}를 입력하세요" required>
      </div>
    `;
}

const createFixedDepositFormWithDetail = (data, type) => {
  return `
      <div class="form-group">
        <label for="minimumAmount">${DETAIL_COLUMN_NAME[type].TYPE.FIXED_DEPOSIT.MINIMUM_AMOUNT}</label>
        <input type="number" id="minimumAmount" name="minimumAmount" value="${data.minimumAmount || ""}" placeholder="${DETAIL_COLUMN_NAME[type].TYPE.FIXED_DEPOSIT.MINIMUM_AMOUNT}을 입력하세요" required>
      </div>
    `;
}

const createInsuranceContractFormWithDetail = (data, type) => {
  return `
      <div class="form-group">
        <label for="insuranceId">${DETAIL_COLUMN_NAME[type].TYPE.INSURANCE_CONTRACT.INSURANCE_ID}</label>
        <input type="number" id="insuranceId" name="insuranceId" value="${data.insuranceId || ""}" placeholder="${DETAIL_COLUMN_NAME[type].TYPE.INSURANCE_CONTRACT.INSURANCE_ID}를 입력하세요" required>
      </div>
    `;
}

const fieldsWithDetail = {
  COLLATERAL: createCollateralFormWithDetail,
  FIXED_DEPOSIT: createFixedDepositFormWithDetail,
  INSURANCE_CONTRACT: createInsuranceContractFormWithDetail
}
