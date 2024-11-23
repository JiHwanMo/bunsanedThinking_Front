import {DETAIL_COLUMN_NAME} from "../../../../../../config/employee/loanManagement/loanManagement.js";
import {
  fetchGetLoanProductDetail
} from "../../../../apiUtils/apiDocumentation/employee/loanManagement/loanManagement.js";

export const renderInput = () => {
  const selectedButtonType = sessionStorage.getItem("selectedButtonType");
  context[selectedButtonType].renderingInput();
}

const getType = () => {
  return sessionStorage.getItem("currentType");
}

const renderAddLoanInput = () => {
  const loanType = renderComboBox();
  loanType.addEventListener("change", () => {
    renderAddLoanInputFields(loanType.value);
  });
}

const renderUpdateLoanInput = async () => {
  const selectedDataId = JSON.parse(sessionStorage.getItem("selectedDataId"));
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
    value: "",
    label: "대출 종류를 선택하세요"
  },
  {
    value: "Collateral",
    label: "담보 대출"
  },
  {
    value: "FixedDeposit",
    label: "정기 예금 대출"
  },
  {
    value: "InsuranceContract",
    label: "보험 계약 대출"
  }
];

const renderComboBox = () => {
  const comboBoxContainer = document.getElementById("comboBoxContainer");
  // 콤보박스 컨테이너 초기화
  let loanTypeContainer = document.getElementById("loanTypeContainer");

  if (loanTypeContainer)
    return document.getElementById("loanType"); // 이미 존재하는 콤보박스 반환

  loanTypeContainer = document.createElement("div");
  loanTypeContainer.className = "form-group";
  loanTypeContainer.id = "loanTypeContainer";

  const label = document.createElement("label");
  label.setAttribute("for", "loanType");
  label.textContent = "대출 종류";

  const select = document.createElement("select");
  select.id = "loanType";

  options.forEach(optionValue => {
    const option = document.createElement("option");
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
    for: "loanName",
    label: "NAME",
    type: "text",
    id: "loanName",
    name: "loanName",
    value: "name",
    placeholder: "NAME"
  },
  {
    for: "interestRate",
    label: "INTEREST_RATE",
    type: "number",
    id: "interestRate",
    name: "interestRate",
    value: "interestRate",
    placeholder: "INTEREST_RATE"
  },
  {
    for: "maximumMoney",
    label: "MAXIMUM_MONEY",
    type: "number",
    id: "maximumMoney",
    name: "maximumMoney",
    value: "maximumMoney",
    placeholder: "MAXIMUM_MONEY"
  },
  {
    for: "minimumAsset",
    label: "MINIMUM_ASSET",
    type: "number",
    id: "minimumAsset",
    name: "minimumAsset",
    value: "minimumAsset",
    placeholder: "MINIMUM_ASSET"
  }
];

const createCommonForm = (form, type) => {
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
  const inputFieldsContainer = document.getElementById("inputFieldsContainer");
  while(inputFieldsContainer.firstChild) inputFieldsContainer.removeChild(inputFieldsContainer.firstChild);
  if (loanType === "") return;
  let type = getType();
  commonLoanForms.forEach(form => inputFieldsContainer.appendChild(createCommonForm(form, type)));
  inputFieldsContainer.innerHTML += fields[loanType](type); // 선택된 옵션에 따라 입력란 표시
}

const fields = {
  Collateral: createCollateralForm,
  FixedDeposit: createFixedDepositForm,
  InsuranceContract: createInsuranceContractForm
};

const renderLoanRequestInputFields = () => {
  const inputFieldsContainer = document.getElementById("inputFieldsContainer");
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
  sessionStorage.setItem("selectedDataType", loanType);
  const inputFieldsContainer = document.getElementById("inputFieldsContainer");
  while(inputFieldsContainer.firstChild) inputFieldsContainer.removeChild(inputFieldsContainer.firstChild);
  if (loanType === "") return;
  const type = getType();
  commonLoanForms.forEach(form => {
    inputFieldsContainer.appendChild(createCommonForm(form, type))
    const input = document.getElementById(form.id);
    input.setAttribute("value", data[form.value]);
  });
  inputFieldsContainer.innerHTML += fieldsWithDetail[loanType](data, type); // 선택된 옵션에 따라 입력란 표시
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
  Collateral: createCollateralFormWithDetail,
  FixedDeposit: createFixedDepositFormWithDetail,
  InsuranceContract: createInsuranceContractFormWithDetail
}
