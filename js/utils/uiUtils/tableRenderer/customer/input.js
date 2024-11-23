import {DETAIL_COLUMN_NAME} from "../../../../../../config/employee/productManagement/productManagement.js";
import { addButtons } from "../../../buttonManager/employee/productManagement/input.js";
import { fetchGetInsuranceProductDetail } from "../../../../apiUtils/apiDocumentation/employee/productManagement/productManagement.js";

export const renderInput = async () => {
  const comboBoxContainer = document.getElementById("comboBoxContainer");
  const buttonContainer = document.getElementById("buttonContainer");

  const selectedButtonType = JSON.parse(sessionStorage.getItem("selectedButtonType"));

  if (selectedButtonType === "POST") {
    // POST: 콤보박스 렌더링
    const insuranceType = renderComboBox(comboBoxContainer);
    insuranceType.addEventListener("change", () => {
      renderInputFields(insuranceType.value);
    });
  } else if (selectedButtonType === "UPDATE") {
    // UPDATE: 데이터 가져오기 및 필드 렌더링
    const selectedDataId = JSON.parse(sessionStorage.getItem("selectedDataId"));
    const insuranceData = await fetchGetInsuranceProductDetail(selectedDataId);
    renderCommonInputFieldsWithValues(insuranceData.insuranceType, insuranceData);
  }

  // 버튼 추가
  addButtons(buttonContainer);
}

const options = [
  {
    value: "",
    label: "보험 종류를 선택하세요"
  },
  {
    value: "Injury",
    label: "상해 보험"
  },
  {
    value: "Disease",
    label: "질병 보험"
  },
  {
    value: "Automobile",
    label: "자동차 보험"
  }
];

const renderComboBox = (container) => {
  // 콤보박스 컨테이너 초기화
  let comboBoxContainer = document.getElementById("insuranceTypeContainer");

  if (!comboBoxContainer) {
    comboBoxContainer = document.createElement("div");
    comboBoxContainer.className = "form-group";
    comboBoxContainer.id = "insuranceTypeContainer";

    const label = document.createElement("label");
    label.setAttribute("for", "insuranceType");
    label.textContent = "보험 종류";

    const select = document.createElement("select");
    select.id = "insuranceType";

    options.forEach(optionValue => {
      const option = document.createElement("option");
      option.value = optionValue.value;
      option.textContent = optionValue.label;
      select.appendChild(option);
    });

    // 콤보박스 컨테이너에 추가
    comboBoxContainer.appendChild(label);
    comboBoxContainer.appendChild(select);

    // 메인 컨테이너에 추가
    container.appendChild(comboBoxContainer);

    return select; // 생성된 콤보박스를 반환
  }

  return document.getElementById("insuranceType"); // 이미 존재하는 콤보박스 반환
};

const commonForms = [
  {
    isTextArea: false,
    for: "insuranceName",
    label: "NAME",
    type: "text",
    id: "insuranceName",
    name: "insuranceName",
    value: "name",
    placeholder: "NAME"
  },
  {
    isTextArea: false,
    for: "ageRange",
    label: "AGE_RANGE",
    type: "text",
    id: "ageRange",
    name: "ageRange",
    value: "ageRange",
    placeholder: "AGE_RANGE"
  },
  {
    isTextArea: true,
    for: "coverage",
    label: "COVERAGE",
    rows: "4",
    id: "coverage",
    name: "coverage",
    value: "coverage",
    placeholder: "COVERAGE"
  },
  {
    isTextArea: false,
    for: "monthlyPremium",
    label: "MONTHLY_PREMIUM",
    type: "number",
    id: "monthlyPremium",
    name: "monthlyPremium",
    value: "monthlyPremium",
    placeholder: "MONTHLY_PREMIUM"
  },
  {
    isTextArea: false,
    for: "contractPeriod",
    label: "CONTRACT_PERIOD",
    type: "number",
    id: "contractPeriod",
    name: "contractPeriod",
    value: "contractPeriod",
    placeholder: "CONTRACT_PERIOD"
  },
  {
    isTextArea: false,
    for: "maximumMoney",
    label: "MAXIMUM_MONEY",
    type: "number",
    id: "maximumMoney",
    name: "maximumMoney",
    value: "maximumMoney",
    placeholder: "MAXIMUM_MONEY"
  }
];

const createCommonForm = (form) => {
  const formDiv = document.createElement("div");
  formDiv.className = "form-group";
  const formLabel = document.createElement("label");
  formLabel.for = form.for;
  formLabel.textContent = DETAIL_COLUMN_NAME.MANAGE_INSURANCE_PRODUCT[form.label];
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
  formInput.placeholder = `${DETAIL_COLUMN_NAME.MANAGE_INSURANCE_PRODUCT[form.placeholder]}을(를) 입력하세요`;
  formDiv.appendChild(formInput);
  return formDiv;
}

const createInjuryForm = () => {
  return `
      <div class="form-group">
        <label for="injuryType">${DETAIL_COLUMN_NAME.MANAGE_INSURANCE_PRODUCT.TYPE.INJURY.INJURY_TYPE}</label>
        <select id="injuryType" name="injuryType">
          <option value="">상해 종류를 선택하세요</option>
          <option value="Minor">경상</option>
          <option value="Serious">중상</option>
        </select>
      </div>
      <div class="form-group">
        <label for="surgeriesLimit">${DETAIL_COLUMN_NAME.MANAGE_INSURANCE_PRODUCT.TYPE.INJURY.SURGERIES_LIMIT}</label>
        <input type="number" id="surgeriesLimit" name="surgeriesLimit" placeholder="${DETAIL_COLUMN_NAME.MANAGE_INSURANCE_PRODUCT.TYPE.INJURY.SURGERIES_LIMIT}을 입력하세요" required>
      </div>
    `;
}

const createDiseaseForm = () => {
  return `
      <div class="form-group">
        <label for="diseaseLimit">${DETAIL_COLUMN_NAME.MANAGE_INSURANCE_PRODUCT.TYPE.DISEASE.DISEASE_LIMIT}</label>
        <input type="number" id="diseaseLimit" name="diseaseLimit" placeholder="${DETAIL_COLUMN_NAME.MANAGE_INSURANCE_PRODUCT.TYPE.DISEASE.DISEASE_LIMIT}을 입력하세요" required>
      </div>
      <div class="form-group">
        <label for="diseaseName">${DETAIL_COLUMN_NAME.MANAGE_INSURANCE_PRODUCT.TYPE.DISEASE.DISEASE_NAME}</label>
        <input type="text" id="diseaseName" name="diseaseName" placeholder="${DETAIL_COLUMN_NAME.MANAGE_INSURANCE_PRODUCT.TYPE.DISEASE.DISEASE_NAME}을 입력하세요" required>
      </div>
      <div class="form-group">
        <label for="surgeriesLimit">${DETAIL_COLUMN_NAME.MANAGE_INSURANCE_PRODUCT.TYPE.DISEASE.SURGERIES_LIMIT}</label>
        <input type="number" id="surgeriesLimit" name="surgeriesLimit" placeholder="${DETAIL_COLUMN_NAME.MANAGE_INSURANCE_PRODUCT.TYPE.DISEASE.SURGERIES_LIMIT}을 입력하세요" required>
      </div>
    `;
}

const createAutomobileForm = () => {
  return `
      <div class="form-group">
        <label for="vehicleType">${DETAIL_COLUMN_NAME.MANAGE_INSURANCE_PRODUCT.TYPE.AUTOMOBILE.VEHICLE_TYPE}</label>
        <select id="vehicleType" name="vehicleType">
          <option value="">차량 종류를 선택하세요</option>
          <option value="Amall">소형</option>
          <option value="Medium">중형</option>
          <option value="Large">대형</option>
        </select>
      </div>
      <div class="form-group">
        <label>${DETAIL_COLUMN_NAME.MANAGE_INSURANCE_PRODUCT.TYPE.AUTOMOBILE.SERVICES}</label>
        <div class="checkbox-group">
          <div class="checkbox-item">
            <label for="serviceTowing">긴급견인</label>
            <input type="checkbox" id="serviceTowing" name="services" value="EmergencyTowing">
          </div>
          <div class="checkbox-item">
            <label for="serviceJumpstart">긴급시동</label>
            <input type="checkbox" id="serviceJumpstart" name="services" value="EmergencyStart">
          </div>
          <div class="checkbox-item">
            <label for="serviceRefueling">비상급유</label>
            <input type="checkbox" id="serviceRefueling" name="services" value="EmergencyRefueling">
          </div>
          <div class="checkbox-item">
            <label for="serviceBattery">배터리충전</label>
            <input type="checkbox" id="serviceBattery" name="services" value="BatteryCharging">
          </div>
          <div class="checkbox-item">
            <label for="serviceEngineRepair">엔진과열 수리</label>
            <input type="checkbox" id="serviceEngineRepair" name="services" value="EngineOverheatingRepair">
          </div>
          <div class="checkbox-item">
            <label for="serviceTireRepair">타이어펑크 수리</label>
            <input type="checkbox" id="serviceTireRepair" name="services" value="TirepunkRepair">
          </div>
        </div>
      </div>
    `;
}

const fields = {
  Injury: createInjuryForm,
  Disease: createDiseaseForm,
  Automobile: createAutomobileForm
};

const renderInputFields = (insuranceType) => {
  const inputFieldsContainer = document.getElementById("inputFieldsContainer");
  while(inputFieldsContainer.firstChild) inputFieldsContainer.removeChild(inputFieldsContainer.firstChild);
  if (insuranceType === "") return;
  commonForms.forEach(form => inputFieldsContainer.appendChild(createCommonForm(form)));
  inputFieldsContainer.innerHTML += fields[insuranceType](); // 선택된 옵션에 따라 입력란 표시
};

const renderCommonInputFieldsWithValues = (insuranceType, data) => {
  const inputFieldsContainer = document.getElementById("inputFieldsContainer");
  while(inputFieldsContainer.firstChild) inputFieldsContainer.removeChild(inputFieldsContainer.firstChild);
  if (insuranceType === "") return;
  commonForms.forEach(form => {
    inputFieldsContainer.appendChild(createCommonForm(form))
    const input = document.getElementById(form.id);
    if (form.isTextArea)
      input.textContent = data[form.value];
    else
      input.setAttribute("value", data[form.value]);
  });
  inputFieldsContainer.innerHTML += fieldsWithDetail[insuranceType](data); // 선택된 옵션에 따라 입력란 표시
};

const createInjuryFormWithDetail = (data) => {
  return `
      <div class="form-group">
        <label for="injuryType">${DETAIL_COLUMN_NAME.MANAGE_INSURANCE_PRODUCT.TYPE.INJURY.INJURY_TYPE}</label>
        <select id="injuryType" name="injuryType">
          <option value="Minor" ${data.injuryType === "Minor" ? "selected" : ""}>경상</option>
          <option value="Serious" ${data.injuryType === "Serious" ? "selected" : ""}>중상</option>
        </select>
      </div>
      <div class="form-group">
        <label for="surgeriesLimit">${DETAIL_COLUMN_NAME.MANAGE_INSURANCE_PRODUCT.TYPE.INJURY.SURGERIES_LIMIT}</label>
        <input type="number" id="surgeriesLimit" name="surgeriesLimit" value="${data.surgeriesLimit || ""}" placeholder="${DETAIL_COLUMN_NAME.MANAGE_INSURANCE_PRODUCT.TYPE.INJURY.SURGERIES_LIMIT}을 입력하세요" required>
      </div>
    `;
}

const createDiseaseFormWithDetail = (data) => {
  return `
      <div class="form-group">
        <label for="diseaseLimit">${DETAIL_COLUMN_NAME.MANAGE_INSURANCE_PRODUCT.TYPE.DISEASE.DISEASE_LIMIT}</label>
        <input type="number" id="diseaseLimit" name="diseaseLimit" value="${data.diseaseLimit || ""}" placeholder="${DETAIL_COLUMN_NAME.MANAGE_INSURANCE_PRODUCT.TYPE.DISEASE.DISEASE_LIMIT}을 입력하세요" required>
      </div>
      <div class="form-group">
        <label for="diseaseName">${DETAIL_COLUMN_NAME.MANAGE_INSURANCE_PRODUCT.TYPE.DISEASE.DISEASE_NAME}</label>
        <input type="text" id="diseaseName" name="diseaseName" value="${data.diseaseName || ""}" placeholder="${DETAIL_COLUMN_NAME.MANAGE_INSURANCE_PRODUCT.TYPE.DISEASE.DISEASE_NAME}을 입력하세요" required>
      </div>
      <div class="form-group">
        <label for="surgeriesLimit">${DETAIL_COLUMN_NAME.MANAGE_INSURANCE_PRODUCT.TYPE.DISEASE.SURGERIES_LIMIT}</label>
        <input type="number" id="surgeriesLimit" name="surgeriesLimit" value="${data.surgeriesLimit || ""}" placeholder="${DETAIL_COLUMN_NAME.MANAGE_INSURANCE_PRODUCT.TYPE.DISEASE.SURGERIES_LIMIT}을 입력하세요" required>
      </div>
    `;
}

const createAutomobileFormWithDetail = (data) => {
  const renderServiceCheckbox = (selectedServices = []) => {
    const serviceOptions = [
      { value: "EmergencyTowing", label: "긴급견인" },
      { value: "EmergencyStart", label: "긴급시동" },
      { value: "EmergencyRefueling", label: "비상급유" },
      { value: "BatteryCharging", label: "배터리충전" },
      { value: "EngineOverheatingRepair", label: "엔진과열 수리" },
      { value: "TirepunkRepair", label: "타이어펑크 수리" }
    ];

    return serviceOptions
      .map(
        (service) => `
        <div class="checkbox-item">
          <label for="service-${service.value}">${service.label}</label>
          <input
            type="checkbox"
            id="service-${service.value}"
            name="services"
            value="${service.value}"
            ${selectedServices.includes(service.value) ? "checked" : ""}
          />
        </div>
      `
      )
      .join("");
  };

  return `
      <div class="form-group">
        <label for="accidentLimit">${DETAIL_COLUMN_NAME.MANAGE_INSURANCE_PRODUCT.TYPE.AUTOMOBILE.ACCIDENT_LIMIT}</label>
        <input type="number" id="accidentLimit" name="accidentLimit" value="${data.accidentLimit || ""}" placeholder="${DETAIL_COLUMN_NAME.MANAGE_INSURANCE_PRODUCT.TYPE.AUTOMOBILE.ACCIDENT_LIMIT}을 입력하세요" required>
      </div>
      <div class="form-group">
        <label for="vehicleType">${DETAIL_COLUMN_NAME.MANAGE_INSURANCE_PRODUCT.TYPE.AUTOMOBILE.VEHICLE_TYPE}</label>
        <select id="vehicleType" name="vehicleType">
          <option value="Small" ${data.vehicleType === "Small" ? "selected" : ""}>소형</option>
          <option value="Medium" ${data.vehicleType === "Medium" ? "selected" : ""}>중형</option>
          <option value="Large" ${data.vehicleType === "Large" ? "selected" : ""}>대형</option>
        </select>
      </div>
      <div class="form-group">
        <label>${DETAIL_COLUMN_NAME.MANAGE_INSURANCE_PRODUCT.TYPE.AUTOMOBILE.SERVICES}</label>
        <div class="checkbox-group">
          ${renderServiceCheckbox(data.serviceTypes || [])}
        </div>
      </div>
    `;
}

const fieldsWithDetail = {
  Injury: createInjuryFormWithDetail,
  Disease: createDiseaseFormWithDetail,
  Automobile: createAutomobileFormWithDetail
}
