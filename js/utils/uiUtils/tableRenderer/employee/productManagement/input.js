import {DETAIL_COLUMN_NAME} from "../../../../../../config/employee/productManagement/productManagement.js";
import {
  fetchAddAutomobileInsurance,
  fetchAddDiseaseInsurance,
  fetchAddInjuryInsurance,
  fetchGetInsuranceProductDetail,
  fetchUpdateAutomobileInsurance,
  fetchUpdateDiseaseInsurance,
  fetchUpdateInjuryInsurance
} from "../../../../apiUtils/apiDocumentation/employee/productManagement/productManagement.js";

const context = {
  MANAGE_INSURANCE_PRODUCT: {
    fetchGetById: fetchGetInsuranceProductDetail,
    fetchUpdate: {
      fetchUpdateDiseaseInsurance,
      fetchUpdateInjuryInsurance,
      fetchUpdateAutomobileInsurance
    },
    fetchAdd:{
      fetchAddDiseaseInsurance,
      fetchAddInjuryInsurance,
      fetchAddAutomobileInsurance
    }
  }
}

export const renderComboBox = (container) => {
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

    const defaultOption = document.createElement("option");
    defaultOption.value = "";
    defaultOption.textContent = "보험 종류를 선택하세요";

    const injuryInsuranceOption = document.createElement("option");
    injuryInsuranceOption.value = "Injury";
    injuryInsuranceOption.textContent = "상해 보험";

    const diseaseInsuranceOption = document.createElement("option");
    diseaseInsuranceOption.value = "Disease";
    diseaseInsuranceOption.textContent = "질병 보험";

    const automobileInsuranceOption = document.createElement("option");
    automobileInsuranceOption.value = "Automobile";
    automobileInsuranceOption.textContent = "자동차 보험";

    // 옵션 추가
    select.appendChild(defaultOption);
    select.appendChild(injuryInsuranceOption);
    select.appendChild(diseaseInsuranceOption);
    select.appendChild(automobileInsuranceOption);

    // 콤보박스 컨테이너에 추가
    comboBoxContainer.appendChild(label);
    comboBoxContainer.appendChild(select);

    // 메인 컨테이너에 추가
    container.appendChild(comboBoxContainer);

    return select; // 생성된 콤보박스를 반환
  }

  return document.getElementById("insuranceType"); // 이미 존재하는 콤보박스 반환
};

export const renderInputFields = (insuranceType, inputFieldsContainer) => {
  const commonFields = `
    <div class="form-group">
      <label for="insuranceName">${DETAIL_COLUMN_NAME.MANAGE_INSURANCE_PRODUCT.NAME}</label>
      <input type="text" id="insuranceName" name="insuranceName" placeholder="${DETAIL_COLUMN_NAME.MANAGE_INSURANCE_PRODUCT.NAME}을 입력하세요" required>
    </div>
    <div class="form-group">
      <label for="ageRange">${DETAIL_COLUMN_NAME.MANAGE_INSURANCE_PRODUCT.AGE_RANGE}</label>
      <input type="text" id="ageRange" name="ageRange" placeholder="${DETAIL_COLUMN_NAME.MANAGE_INSURANCE_PRODUCT.AGE_RANGE}를 입력하세요 (예: 20~30세)" required>
    </div>
    <div class="form-group">
      <label for="coverage">${DETAIL_COLUMN_NAME.MANAGE_INSURANCE_PRODUCT.COVERAGE}</label>
      <textarea id="coverage" name="coverage" rows="4" placeholder="${DETAIL_COLUMN_NAME.MANAGE_INSURANCE_PRODUCT.COVERAGE}을 입력하세요" required></textarea>
    </div>
    <div class="form-group">
      <label for="monthlyPremium">${DETAIL_COLUMN_NAME.MANAGE_INSURANCE_PRODUCT.MONTHLY_PREMIUM}</label>
      <input type="number" id="monthlyPremium" name="monthlyPremium" placeholder="${DETAIL_COLUMN_NAME.MANAGE_INSURANCE_PRODUCT.MONTHLY_PREMIUM}을 입력하세요" required>
    </div>
    <div class="form-group">
      <label for="contractPeriod">${DETAIL_COLUMN_NAME.MANAGE_INSURANCE_PRODUCT.CONTRACT_PERIOD}</label>
      <input type="number" id="contractPeriod" name="contractPeriod" placeholder="${DETAIL_COLUMN_NAME.MANAGE_INSURANCE_PRODUCT.CONTRACT_PERIOD}을 입력하세요" required>
    </div>
  `;

  const fields = {
    Injury: `
      ${commonFields}
      <div class="form-group">
        <label for="injuryType">${DETAIL_COLUMN_NAME.MANAGE_INSURANCE_PRODUCT.TYPE.INJURY.INJURY_TYPE}</label>
        <select id="injuryType" name="injuryType">
          <option value="">상해 종류를 선택하세요</option>
          <option value="minor">경상</option>
          <option value="serious">중상</option>
        </select>
      </div>
    `,
    Disease: `
      ${commonFields}
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
    `,
    Automobile: `
      ${commonFields}
      <div class="form-group">
        <label for="vehicleType">${DETAIL_COLUMN_NAME.MANAGE_INSURANCE_PRODUCT.TYPE.AUTOMOBILE.VEHICLE_TYPE}</label>
        <select id="vehicleType" name="vehicleType">
          <option value="">차량 종류를 선택하세요</option>
          <option value="small">소형</option>
          <option value="medium">중형</option>
          <option value="large">대형</option>
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
    `
  };

  inputFieldsContainer.innerHTML = fields[insuranceType] || ""; // 선택된 옵션에 따라 입력란 표시
};

export const renderInputFieldsWithValues = (insuranceType, inputFieldsContainer, data) => {
  const commonFields = `
    <div class="form-group">
      <label for="insuranceName">${DETAIL_COLUMN_NAME.MANAGE_INSURANCE_PRODUCT.NAME}</label>
      <input type="text" id="insuranceName" name="insuranceName" value="${data.name || ""}" placeholder="${DETAIL_COLUMN_NAME.MANAGE_INSURANCE_PRODUCT.NAME}을 입력하세요" required>
    </div>
    <div class="form-group">
      <label for="ageRange">${DETAIL_COLUMN_NAME.MANAGE_INSURANCE_PRODUCT.AGE_RANGE}</label>
      <input type="text" id="ageRange" name="ageRange" value="${data.ageRange || ""}" placeholder="${DETAIL_COLUMN_NAME.MANAGE_INSURANCE_PRODUCT.AGE_RANGE}를 입력하세요" required>
    </div>
    <div class="form-group">
      <label for="coverage">${DETAIL_COLUMN_NAME.MANAGE_INSURANCE_PRODUCT.COVERAGE}</label>
      <textarea id="coverage" name="coverage" rows="4" placeholder="${DETAIL_COLUMN_NAME.MANAGE_INSURANCE_PRODUCT.COVERAGE}을 입력하세요" required>${data.coverage || ""}</textarea>
    </div>
    <div class="form-group">
      <label for="monthlyPremium">${DETAIL_COLUMN_NAME.MANAGE_INSURANCE_PRODUCT.MONTHLY_PREMIUM}</label>
      <input type="number" id="monthlyPremium" name="monthlyPremium" value="${data.monthlyPremium || ""}" placeholder="${DETAIL_COLUMN_NAME.MANAGE_INSURANCE_PRODUCT.MONTHLY_PREMIUM}을 입력하세요" required>
    </div>
    <div class="form-group">
      <label for="contractPeriod">${DETAIL_COLUMN_NAME.MANAGE_INSURANCE_PRODUCT.CONTRACT_PERIOD}</label>
      <input type="number" id="contractPeriod" name="contractPeriod" value="${data.contractPeriod || ""}" placeholder="${DETAIL_COLUMN_NAME.MANAGE_INSURANCE_PRODUCT.CONTRACT_PERIOD}을 입력하세요" required>
    </div>
  `;

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

  const fields = {
    Injury: `
      ${commonFields}
      <div class="form-group">
        <label for="injuryType">${DETAIL_COLUMN_NAME.MANAGE_INSURANCE_PRODUCT.TYPE.INJURY.INJURY_TYPE}</label>
        <select id="injuryType" name="injuryType">
          <option value="minor" ${data.injuryType === "Minor" ? "selected" : ""}>경상</option>
          <option value="serious" ${data.injuryType === "Serious" ? "selected" : ""}>중상</option>
        </select>
      </div>
      <div class="form-group">
        <label for="surgeriesLimit">${DETAIL_COLUMN_NAME.MANAGE_INSURANCE_PRODUCT.TYPE.INJURY.SURGERIES_LIMIT}</label>
        <input type="number" id="surgeriesLimit" name="surgeriesLimit" value="${data.surgeriesLimit || ""}" placeholder="${DETAIL_COLUMN_NAME.MANAGE_INSURANCE_PRODUCT.TYPE.INJURY.SURGERIES_LIMIT}을 입력하세요" required>
      </div>
    `,
    Disease: `
      ${commonFields}
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
    `,
    Automobile: `
      ${commonFields}
      <div class="form-group">
        <label for="accidentLimit">${DETAIL_COLUMN_NAME.MANAGE_INSURANCE_PRODUCT.TYPE.AUTOMOBILE.ACCIDENT_LIMIT}</label>
        <input type="number" id="accidentLimit" name="accidentLimit" value="${data.accidentLimit || ""}" placeholder="${DETAIL_COLUMN_NAME.MANAGE_INSURANCE_PRODUCT.TYPE.AUTOMOBILE.ACCIDENT_LIMIT}을 입력하세요" required>
      </div>
      <div class="form-group">
        <label for="vehicleType">${DETAIL_COLUMN_NAME.MANAGE_INSURANCE_PRODUCT.TYPE.AUTOMOBILE.VEHICLE_TYPE}</label>
        <select id="vehicleType" name="vehicleType">
          <option value="small" ${data.vehicleType === "Small" ? "selected" : ""}>소형</option>
          <option value="medium" ${data.vehicleType === "Medium" ? "selected" : ""}>중형</option>
          <option value="large" ${data.vehicleType === "Large" ? "selected" : ""}>대형</option>
        </select>
      </div>
      <div class="form-group">
        <label>${DETAIL_COLUMN_NAME.MANAGE_INSURANCE_PRODUCT.TYPE.AUTOMOBILE.SERVICES}</label>
        <div class="checkbox-group">
          ${renderServiceCheckbox(data.serviceTypes || [])}
        </div>
      </div>
    `
  };

  inputFieldsContainer.innerHTML = fields[insuranceType] || "";
};
