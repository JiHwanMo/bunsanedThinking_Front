import {
  DETAIL_COLUMN_NAME,
  VALUE,
  ELEMENT_ID as PRODUCT_MANAGEMENT_ELEMENT_ID,
  OPTION,
  RENDER_COMBO_BOX,
  COMMON_FORM,
  INJURY_FORM,
  DISEASE_FORM,
  AUTOMOBILE_FORM,
  RENDER_COMMON_INPUT_FIELDS_WITH_VALUES
} from "../../../../../../config/employee/productManagement/productManagement.js";
import { addButtons } from "../../../buttonManager/employee/productManagement/input.js";
import { fetchGetInsuranceProductDetail } from "../../../../apiUtils/apiDocumentation/employee/productManagement/productManagement.js";
import {CLASS, ELEMENT_ID, EVENT, KEY, MESSAGES, STRING_EMPTY, TAG} from "../../../../../../config/common.js";

export const renderInput = async () => {
  const comboBoxContainer = document.getElementById(ELEMENT_ID.COMBO_BOX_CONTAINER);
  const buttonContainer = document.getElementById(ELEMENT_ID.BUTTON_CONTAINER);

  const selectedButtonType = JSON.parse(sessionStorage.getItem(KEY.SELECTED_BUTTON_TYPE));

  if (selectedButtonType === VALUE.POST) {
    // POST: 콤보박스 렌더링
    const insuranceType = renderComboBox(comboBoxContainer);
    insuranceType.addEventListener(EVENT.CHANGE, () => {
      renderInputFields(insuranceType.value);
    });
  } else if (selectedButtonType === VALUE.UPDATE) {
    // UPDATE: 데이터 가져오기 및 필드 렌더링
    const selectedDataId = JSON.parse(sessionStorage.getItem(KEY.SELECTED_DATA_ID));
    const insuranceData = await fetchGetInsuranceProductDetail(selectedDataId);
    renderCommonInputFieldsWithValues(insuranceData.insuranceType, insuranceData);
  }

  // 버튼 추가
  addButtons(buttonContainer);
}

const options = [
  {
    value: OPTION.DEFAULT.VALUE,
    label: OPTION.DEFAULT.LABEL
  },
  {
    value: OPTION.INJURY.VALUE,
    label: OPTION.INJURY.LABEL
  },
  {
    value: OPTION.DISEASE.VALUE,
    label: OPTION.DISEASE.LABEL
  },
  {
    value: OPTION.AUTOMOBILE.VALUE,
    label: OPTION.AUTOMOBILE.LABEL
  }
];

const renderComboBox = (container) => {
  // 콤보박스 컨테이너 초기화
  let comboBoxContainer = document.getElementById(PRODUCT_MANAGEMENT_ELEMENT_ID.INSURANCE_TYPE_CONTAINER);

  if (!comboBoxContainer) {
    comboBoxContainer = document.createElement(TAG.DIV);
    comboBoxContainer.className = CLASS.FORM_GROUP;
    comboBoxContainer.id = PRODUCT_MANAGEMENT_ELEMENT_ID.INSURANCE_TYPE_CONTAINER;

    const label = document.createElement(TAG.LABEL);
    label.setAttribute(RENDER_COMBO_BOX.FOR, PRODUCT_MANAGEMENT_ELEMENT_ID.INSURANCE_TYPE);
    label.textContent = RENDER_COMBO_BOX.INSURANCE_TYPE;

    const select = document.createElement(TAG.SELECT);
    select.id = PRODUCT_MANAGEMENT_ELEMENT_ID.INSURANCE_TYPE;

    options.forEach(optionValue => {
      const option = document.createElement(TAG.OPTION);
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

  return document.getElementById(PRODUCT_MANAGEMENT_ELEMENT_ID.INSURANCE_TYPE); // 이미 존재하는 콤보박스 반환
};

const commonForms = [
  {
    isTextArea: COMMON_FORM.NAME.IS_TEXT_AREA,
    for: COMMON_FORM.NAME.FOR,
    label: COMMON_FORM.NAME.LABEL,
    type: COMMON_FORM.NAME.TYPE,
    id: COMMON_FORM.NAME.ID,
    name: COMMON_FORM.NAME.NAME,
    value: COMMON_FORM.NAME.VALUE,
    placeholder: COMMON_FORM.NAME.PLACE_HOLDER
  },
  {
    isTextArea: COMMON_FORM.AGE_RANGE.IS_TEXT_AREA,
    for: COMMON_FORM.AGE_RANGE.FOR,
    label: COMMON_FORM.AGE_RANGE.LABEL,
    type: COMMON_FORM.AGE_RANGE.TYPE,
    id: COMMON_FORM.AGE_RANGE.ID,
    name: COMMON_FORM.AGE_RANGE.NAME,
    value: COMMON_FORM.AGE_RANGE.VALUE,
    placeholder: COMMON_FORM.AGE_RANGE.PLACE_HOLDER
  },
  {
    isTextArea: COMMON_FORM.COVERAGE.IS_TEXT_AREA,
    for: COMMON_FORM.COVERAGE.FOR,
    label: COMMON_FORM.COVERAGE.LABEL,
    rows: COMMON_FORM.COVERAGE.ROWS,
    id: COMMON_FORM.COVERAGE.ID,
    name: COMMON_FORM.COVERAGE.NAME,
    value: COMMON_FORM.COVERAGE.VALUE,
    placeholder: COMMON_FORM.COVERAGE.PLACE_HOLDER
  },
  {
    isTextArea: COMMON_FORM.MONTHLY_PREMIUM.IS_TEXT_AREA,
    for: COMMON_FORM.MONTHLY_PREMIUM.FOR,
    label: COMMON_FORM.MONTHLY_PREMIUM.LABEL,
    type: COMMON_FORM.MONTHLY_PREMIUM.TYPE,
    id: COMMON_FORM.MONTHLY_PREMIUM.ID,
    name: COMMON_FORM.MONTHLY_PREMIUM.NAME,
    value:COMMON_FORM.MONTHLY_PREMIUM.VALUE,
    placeholder: COMMON_FORM.MONTHLY_PREMIUM.PLACE_HOLDER
  },
  {
    isTextArea: COMMON_FORM.CONTRACT_PERIOD.IS_TEXT_AREA,
    for: COMMON_FORM.CONTRACT_PERIOD.FOR,
    label: COMMON_FORM.CONTRACT_PERIOD.LABEL,
    type: COMMON_FORM.CONTRACT_PERIOD.TYPE,
    id: COMMON_FORM.CONTRACT_PERIOD.ID,
    name: COMMON_FORM.CONTRACT_PERIOD.NAME,
    value: COMMON_FORM.CONTRACT_PERIOD.VALUE,
    placeholder: COMMON_FORM.CONTRACT_PERIOD.PLACE_HOLDER
  },
  {
    isTextArea: COMMON_FORM.MAXIMUM_MONEY.IS_TEXT_AREA,
    for: COMMON_FORM.MAXIMUM_MONEY.FOR,
    label: COMMON_FORM.MAXIMUM_MONEY.LABEL,
    type: COMMON_FORM.MAXIMUM_MONEY.TYPE,
    id: COMMON_FORM.MAXIMUM_MONEY.ID,
    name:COMMON_FORM.MAXIMUM_MONEY.NAME,
    value: COMMON_FORM.MAXIMUM_MONEY.VALUE,
    placeholder: COMMON_FORM.MAXIMUM_MONEY.PLACE_HOLDER
  }
];

const createCommonForm = (form) => {
  const formDiv = document.createElement(TAG.DIV);
  formDiv.className = CLASS.FORM_GROUP;
  const formLabel = document.createElement(TAG.LABEL);
  formLabel.for = form.for;
  formLabel.textContent = DETAIL_COLUMN_NAME.MANAGE_INSURANCE_PRODUCT[form.label];
  formDiv.appendChild(formLabel);
  let formInput;
  if (form.isTextArea) {
    formInput = document.createElement(TAG.TEXT_AREA);
    formInput.rows = form.rows;
  } else {
    formInput = document.createElement(TAG.INPUT);
    formInput.type = form.type;
  }
  formInput.id = form.id;
  formInput.name = form.name;
  formInput.placeholder = `${DETAIL_COLUMN_NAME.MANAGE_INSURANCE_PRODUCT[form.placeholder]}${MESSAGES.PLACE_HOLDER.INPUT}`;
  formDiv.appendChild(formInput);
  return formDiv;
}

const createInjuryForm = () => {
  return `
      <div class=${CLASS.FORM_GROUP}>
        <label for=${INJURY_FORM.INJURY_TYPE.FOR}>${DETAIL_COLUMN_NAME.MANAGE_INSURANCE_PRODUCT.TYPE.INJURY.INJURY_TYPE}</label>
        <select id=${INJURY_FORM.INJURY_TYPE.ID} name=${INJURY_FORM.INJURY_TYPE.NAME}>
          <option value=${INJURY_FORM.INJURY_TYPE.DEFAULT.VALUE}>${INJURY_FORM.INJURY_TYPE.DEFAULT.LABEL}</option>
          <option value=${INJURY_FORM.INJURY_TYPE.MINOR.VALUE}>${INJURY_FORM.INJURY_TYPE.MINOR.LABEL}</option>
          <option value=${INJURY_FORM.INJURY_TYPE.SERIOUS.VALUE}>${INJURY_FORM.INJURY_TYPE.SERIOUS.LABEL}</option>
        </select>
      </div>
      <div class=${CLASS.FORM_GROUP}>
        <label for=${INJURY_FORM.SURGERY_LIMIT.FOR}>${DETAIL_COLUMN_NAME.MANAGE_INSURANCE_PRODUCT.TYPE.INJURY.SURGERIES_LIMIT}</label>
        <input type=${INJURY_FORM.SURGERY_LIMIT.TYPE} id=${INJURY_FORM.SURGERY_LIMIT.ID} name=${INJURY_FORM.SURGERY_LIMIT.NAME} placeholder="${DETAIL_COLUMN_NAME.MANAGE_INSURANCE_PRODUCT.TYPE.INJURY.SURGERIES_LIMIT}${MESSAGES.PLACE_HOLDER.INPUT}" required>
      </div>
    `;
}

const createDiseaseForm = () => {
  return `
      <div class=${CLASS.FORM_GROUP}>
        <label for=${DISEASE_FORM.DISEASE_LIMIT.FOR}>${DETAIL_COLUMN_NAME.MANAGE_INSURANCE_PRODUCT.TYPE.DISEASE.DISEASE_LIMIT}</label>
        <input type=${DISEASE_FORM.DISEASE_LIMIT.TYPE} id=${DISEASE_FORM.DISEASE_LIMIT.ID} name=${DISEASE_FORM.DISEASE_LIMIT.NAME} placeholder="${DETAIL_COLUMN_NAME.MANAGE_INSURANCE_PRODUCT.TYPE.DISEASE.DISEASE_LIMIT}${MESSAGES.PLACE_HOLDER.INPUT}" required>
      </div>
      <div class=${CLASS.FORM_GROUP}>
        <label for=${DISEASE_FORM.DISEASE_NAME.FOR}>${DETAIL_COLUMN_NAME.MANAGE_INSURANCE_PRODUCT.TYPE.DISEASE.DISEASE_NAME}</label>
        <input type=${DISEASE_FORM.DISEASE_NAME.TYPE} id=${DISEASE_FORM.DISEASE_NAME.ID} name=${DISEASE_FORM.DISEASE_NAME.NAME} placeholder="${DETAIL_COLUMN_NAME.MANAGE_INSURANCE_PRODUCT.TYPE.DISEASE.DISEASE_NAME}${MESSAGES.PLACE_HOLDER.INPUT}" required>
      </div>
      <div class=${CLASS.FORM_GROUP}>
        <label for=${DISEASE_FORM.SURGERY_LIMIT.FOR}>${DETAIL_COLUMN_NAME.MANAGE_INSURANCE_PRODUCT.TYPE.DISEASE.SURGERIES_LIMIT}</label>
        <input type=${DISEASE_FORM.SURGERY_LIMIT.TYPE} id=${DISEASE_FORM.SURGERY_LIMIT.ID} name=${DISEASE_FORM.SURGERY_LIMIT.NAME} placeholder="${DETAIL_COLUMN_NAME.MANAGE_INSURANCE_PRODUCT.TYPE.DISEASE.SURGERIES_LIMIT}${MESSAGES.PLACE_HOLDER.INPUT}" required>
      </div>
    `;
}

const createAutomobileForm = () => {
  return `
      <div class=${CLASS.FORM_GROUP}>
        <label for=${AUTOMOBILE_FORM.ACCIDENT_LIMIT.FOR}>${DETAIL_COLUMN_NAME.MANAGE_INSURANCE_PRODUCT.TYPE.AUTOMOBILE.ACCIDENT_LIMIT}</label>
        <input type=${AUTOMOBILE_FORM.ACCIDENT_LIMIT.TYPE} id=${AUTOMOBILE_FORM.ACCIDENT_LIMIT.ID} name=${AUTOMOBILE_FORM.ACCIDENT_LIMIT.NAME} placeholder="${DETAIL_COLUMN_NAME.MANAGE_INSURANCE_PRODUCT.TYPE.AUTOMOBILE.ACCIDENT_LIMIT}${MESSAGES.PLACE_HOLDER.INPUT}" required>
      </div>
      <div class=${CLASS.FORM_GROUP}>
        <label for=${AUTOMOBILE_FORM.VEHICLE_TYPE.FOR}>${DETAIL_COLUMN_NAME.MANAGE_INSURANCE_PRODUCT.TYPE.AUTOMOBILE.VEHICLE_TYPE}</label>
        <select id=${AUTOMOBILE_FORM.VEHICLE_TYPE.ID} name=${AUTOMOBILE_FORM.VEHICLE_TYPE.NAME}>
          <option value=${AUTOMOBILE_FORM.VEHICLE_TYPE.DEFAULT.VALUE}>${AUTOMOBILE_FORM.VEHICLE_TYPE.DEFAULT.LABEL}</option>
          <option value=${AUTOMOBILE_FORM.VEHICLE_TYPE.SMALL.VALUE}>${AUTOMOBILE_FORM.VEHICLE_TYPE.SMALL.LABEL}</option>
          <option value=${AUTOMOBILE_FORM.VEHICLE_TYPE.MEDIUM.VALUE}>${AUTOMOBILE_FORM.VEHICLE_TYPE.MEDIUM.LABEL}</option>
          <option value=${AUTOMOBILE_FORM.VEHICLE_TYPE.LARGE.VALUE}>${AUTOMOBILE_FORM.VEHICLE_TYPE.LARGE.LABEL}</option>
        </select>
      </div>
      <div class=${CLASS.FORM_GROUP}>
        <label>${DETAIL_COLUMN_NAME.MANAGE_INSURANCE_PRODUCT.TYPE.AUTOMOBILE.SERVICES}</label>
        <div class=${CLASS.CHECK_BOX_GROUP}>
          <div class=${CLASS.CHECK_BOX_ITEM}>
            <label for=${AUTOMOBILE_FORM.SERVICE_TYPE.SERVICE_TOWING.FOR}>${AUTOMOBILE_FORM.SERVICE_TYPE.SERVICE_TOWING.LABEL}</label>
            <input type=${AUTOMOBILE_FORM.SERVICE_TYPE.SERVICE_TOWING.TYPE} id=${AUTOMOBILE_FORM.SERVICE_TYPE.SERVICE_TOWING.ID} name=${AUTOMOBILE_FORM.SERVICE_TYPE.SERVICE_TOWING.NAME} value=${AUTOMOBILE_FORM.SERVICE_TYPE.SERVICE_TOWING.VALUE}>
          </div>
          <div class=${CLASS.CHECK_BOX_ITEM}>
            <label for=${AUTOMOBILE_FORM.SERVICE_TYPE.SERVICE_JUMP_START.FOR}>${AUTOMOBILE_FORM.SERVICE_TYPE.SERVICE_JUMP_START.LABEL}</label>
            <input type=${AUTOMOBILE_FORM.SERVICE_TYPE.SERVICE_JUMP_START.TYPE} id=${AUTOMOBILE_FORM.SERVICE_TYPE.SERVICE_JUMP_START.ID} name=${AUTOMOBILE_FORM.SERVICE_TYPE.SERVICE_JUMP_START.NAME} value=${AUTOMOBILE_FORM.SERVICE_TYPE.SERVICE_JUMP_START.VALUE}>
          </div>
          <div class=${CLASS.CHECK_BOX_ITEM}>
            <label for=${AUTOMOBILE_FORM.SERVICE_TYPE.SERVICE_REFUELING.FOR}>${AUTOMOBILE_FORM.SERVICE_TYPE.SERVICE_REFUELING.LABEL}</label>
            <input type=${AUTOMOBILE_FORM.SERVICE_TYPE.SERVICE_REFUELING.TYPE} id=${AUTOMOBILE_FORM.SERVICE_TYPE.SERVICE_REFUELING.ID} name=${AUTOMOBILE_FORM.SERVICE_TYPE.SERVICE_REFUELING.NAME} value=${AUTOMOBILE_FORM.SERVICE_TYPE.SERVICE_REFUELING.VALUE}>
          </div>
          <div class=${CLASS.CHECK_BOX_ITEM}>
            <label for=${AUTOMOBILE_FORM.SERVICE_TYPE.SERVICE_BATTERY.FOR}>${AUTOMOBILE_FORM.SERVICE_TYPE.SERVICE_BATTERY.LABEL}</label>
            <input type=${AUTOMOBILE_FORM.SERVICE_TYPE.SERVICE_BATTERY.TYPE} id=${AUTOMOBILE_FORM.SERVICE_TYPE.SERVICE_BATTERY.ID} name=${AUTOMOBILE_FORM.SERVICE_TYPE.SERVICE_BATTERY.NAME} value=${AUTOMOBILE_FORM.SERVICE_TYPE.SERVICE_BATTERY.VALUE}>
          </div>
          <div class=${CLASS.CHECK_BOX_ITEM}>
            <label for=${AUTOMOBILE_FORM.SERVICE_TYPE.SERVICE_ENGINE_REPAIR.FOR}>${AUTOMOBILE_FORM.SERVICE_TYPE.SERVICE_ENGINE_REPAIR.LABEL}</label>
            <input type=${AUTOMOBILE_FORM.SERVICE_TYPE.SERVICE_ENGINE_REPAIR.TYPE} id=${AUTOMOBILE_FORM.SERVICE_TYPE.SERVICE_ENGINE_REPAIR.ID} name=${AUTOMOBILE_FORM.SERVICE_TYPE.SERVICE_ENGINE_REPAIR.NAME} value=${AUTOMOBILE_FORM.SERVICE_TYPE.SERVICE_ENGINE_REPAIR.VALUE}>
          </div>
          <div class=${CLASS.CHECK_BOX_ITEM}>
            <label for=${AUTOMOBILE_FORM.SERVICE_TYPE.SERVICE_TIRE_REPAIR.FOR}>${AUTOMOBILE_FORM.SERVICE_TYPE.SERVICE_TIRE_REPAIR.LABEL}</label>
            <input type=${AUTOMOBILE_FORM.SERVICE_TYPE.SERVICE_TIRE_REPAIR.TYPE} id=${AUTOMOBILE_FORM.SERVICE_TYPE.SERVICE_TIRE_REPAIR.ID} name=${AUTOMOBILE_FORM.SERVICE_TYPE.SERVICE_TIRE_REPAIR.NAME} value=${AUTOMOBILE_FORM.SERVICE_TYPE.SERVICE_TIRE_REPAIR.VALUE}>
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
  const inputFieldsContainer = document.getElementById(ELEMENT_ID.INPUT_FIELDS_CONTAINER);
  while(inputFieldsContainer.firstChild) inputFieldsContainer.removeChild(inputFieldsContainer.firstChild);
  if (insuranceType === STRING_EMPTY) return;
  commonForms.forEach(form => inputFieldsContainer.appendChild(createCommonForm(form)));
  inputFieldsContainer.innerHTML += fields[insuranceType](); // 선택된 옵션에 따라 입력란 표시
};

const renderCommonInputFieldsWithValues = (insuranceType, data) => {
  const inputFieldsContainer = document.getElementById(ELEMENT_ID.INPUT_FIELDS_CONTAINER);
  while(inputFieldsContainer.firstChild) inputFieldsContainer.removeChild(inputFieldsContainer.firstChild);
  if (insuranceType === STRING_EMPTY) return;
  commonForms.forEach(form => {
    inputFieldsContainer.appendChild(createCommonForm(form))
    const input = document.getElementById(form.id);
    if (form.isTextArea)
      input.textContent = data[form.value];
    else
      input.setAttribute(RENDER_COMMON_INPUT_FIELDS_WITH_VALUES.VALUE, data[form.value]);
  });
  inputFieldsContainer.innerHTML += fieldsWithDetail[insuranceType](data); // 선택된 옵션에 따라 입력란 표시
};

const createInjuryFormWithDetail = (data) => {
  return `
      <div class=${CLASS.FORM_GROUP}>
        <label for=${INJURY_FORM.INJURY_TYPE.FOR}>${DETAIL_COLUMN_NAME.MANAGE_INSURANCE_PRODUCT.TYPE.INJURY.INJURY_TYPE}</label>
        <select id=${INJURY_FORM.INJURY_TYPE.ID} name=${INJURY_FORM.INJURY_TYPE.NAME}>
          <option value=${INJURY_FORM.INJURY_TYPE.MINOR.VALUE} ${data.injuryType === INJURY_FORM.INJURY_TYPE.MINOR.VALUE ? CLASS.SELECTED : STRING_EMPTY}>${INJURY_FORM.INJURY_TYPE.MINOR.LABEL}</option>
          <option value=${INJURY_FORM.INJURY_TYPE.SERIOUS.VALUE} ${data.injuryType === INJURY_FORM.INJURY_TYPE.SERIOUS.VALUE ? CLASS.SELECTED : STRING_EMPTY}>${INJURY_FORM.INJURY_TYPE.SERIOUS.LABEL}</option>
        </select>
      </div>
      <div class=${CLASS.FORM_GROUP}>
        <label for=${INJURY_FORM.SURGERY_LIMIT.FOR}>${DETAIL_COLUMN_NAME.MANAGE_INSURANCE_PRODUCT.TYPE.INJURY.SURGERIES_LIMIT}</label>
        <input type=${INJURY_FORM.SURGERY_LIMIT.TYPE} id=${INJURY_FORM.SURGERY_LIMIT.ID} name=${INJURY_FORM.SURGERY_LIMIT.NAME} value="${data.surgeriesLimit || STRING_EMPTY}" placeholder="${DETAIL_COLUMN_NAME.MANAGE_INSURANCE_PRODUCT.TYPE.INJURY.SURGERIES_LIMIT}${MESSAGES.PLACE_HOLDER.INPUT}" required>
      </div>
    `;
}

const createDiseaseFormWithDetail = (data) => {
  return `
      <div class=${CLASS.FORM_GROUP}>
        <label for=${DISEASE_FORM.DISEASE_LIMIT.FOR}>${DETAIL_COLUMN_NAME.MANAGE_INSURANCE_PRODUCT.TYPE.DISEASE.DISEASE_LIMIT}</label>
        <input type=${DISEASE_FORM.DISEASE_LIMIT.TYPE} id=${DISEASE_FORM.DISEASE_LIMIT.ID} name=${DISEASE_FORM.DISEASE_LIMIT.NAME} value="${data.diseaseLimit || STRING_EMPTY}" placeholder="${DETAIL_COLUMN_NAME.MANAGE_INSURANCE_PRODUCT.TYPE.DISEASE.DISEASE_LIMIT}${MESSAGES.PLACE_HOLDER.INPUT}" required>
      </div>
      <div class=${CLASS.FORM_GROUP}>
        <label for=${DISEASE_FORM.DISEASE_NAME.FOR}>${DETAIL_COLUMN_NAME.MANAGE_INSURANCE_PRODUCT.TYPE.DISEASE.DISEASE_NAME}</label>
        <input type=${DISEASE_FORM.DISEASE_NAME.TYPE} id=${DISEASE_FORM.DISEASE_NAME.ID} name=${DISEASE_FORM.DISEASE_NAME.NAME} value="${data.diseaseName || STRING_EMPTY}" placeholder="${DETAIL_COLUMN_NAME.MANAGE_INSURANCE_PRODUCT.TYPE.DISEASE.DISEASE_NAME}${MESSAGES.PLACE_HOLDER.INPUT}" required>
      </div>
      <div class=${CLASS.FORM_GROUP}>
        <label for=${DISEASE_FORM.SURGERY_LIMIT.FOR}>${DETAIL_COLUMN_NAME.MANAGE_INSURANCE_PRODUCT.TYPE.DISEASE.SURGERIES_LIMIT}</label>
        <input type=${DISEASE_FORM.SURGERY_LIMIT.TYPE} id=${DISEASE_FORM.SURGERY_LIMIT.ID} name=${DISEASE_FORM.SURGERY_LIMIT.NAME} value="${data.surgeriesLimit || STRING_EMPTY}" placeholder="${DETAIL_COLUMN_NAME.MANAGE_INSURANCE_PRODUCT.TYPE.DISEASE.SURGERIES_LIMIT}${MESSAGES.PLACE_HOLDER.INPUT}" required>
      </div>
    `;
}

const createAutomobileFormWithDetail = (data) => {
  const renderServiceCheckbox = (selectedServices = []) => {
    const serviceOptions = [
      { value: AUTOMOBILE_FORM.SERVICE_TYPE.SERVICE_TOWING.VALUE, label: AUTOMOBILE_FORM.SERVICE_TYPE.SERVICE_TOWING.LABEL },
      { value: AUTOMOBILE_FORM.SERVICE_TYPE.SERVICE_JUMP_START.VALUE, label: AUTOMOBILE_FORM.SERVICE_TYPE.SERVICE_JUMP_START.LABEL },
      { value: AUTOMOBILE_FORM.SERVICE_TYPE.SERVICE_REFUELING.VALUE, label: AUTOMOBILE_FORM.SERVICE_TYPE.SERVICE_REFUELING.LABEL },
      { value: AUTOMOBILE_FORM.SERVICE_TYPE.SERVICE_BATTERY.VALUE, label: AUTOMOBILE_FORM.SERVICE_TYPE.SERVICE_BATTERY.LABEL },
      { value: AUTOMOBILE_FORM.SERVICE_TYPE.SERVICE_ENGINE_REPAIR.VALUE, label: AUTOMOBILE_FORM.SERVICE_TYPE.SERVICE_ENGINE_REPAIR.LABEL },
      { value: AUTOMOBILE_FORM.SERVICE_TYPE.SERVICE_TIRE_REPAIR.VALUE, label: AUTOMOBILE_FORM.SERVICE_TYPE.SERVICE_TIRE_REPAIR.LABEL }
    ];

    return serviceOptions
      .map(
        (service) => `
        <div class=${CLASS.CHECK_BOX_ITEM}>
          <label for="${AUTOMOBILE_FORM.SERVICE.FOR}${service.value}">${service.label}</label>
          <input
            type=${AUTOMOBILE_FORM.SERVICE.TYPE}
            id="${AUTOMOBILE_FORM.SERVICE.ID}${service.value}"
            name=${AUTOMOBILE_FORM.SERVICE.NAME}
            value="${service.value}"
            ${selectedServices.includes(service.value) ? CLASS.CHECKED : STRING_EMPTY}
          />
        </div>
      `
      )
      .join(STRING_EMPTY);
  };

  return `
      <div class=${CLASS.FORM_GROUP}>
        <label for=${AUTOMOBILE_FORM.ACCIDENT_LIMIT.FOR}>${DETAIL_COLUMN_NAME.MANAGE_INSURANCE_PRODUCT.TYPE.AUTOMOBILE.ACCIDENT_LIMIT}</label>
        <input type=${AUTOMOBILE_FORM.ACCIDENT_LIMIT.TYPE} id=${AUTOMOBILE_FORM.ACCIDENT_LIMIT.ID} name=${AUTOMOBILE_FORM.ACCIDENT_LIMIT.NAME} value="${data.accidentLimit || STRING_EMPTY}" placeholder="${DETAIL_COLUMN_NAME.MANAGE_INSURANCE_PRODUCT.TYPE.AUTOMOBILE.ACCIDENT_LIMIT}${MESSAGES.PLACE_HOLDER.INPUT}" required>
      </div>
      <div class=${CLASS.FORM_GROUP}>
        <label for=${AUTOMOBILE_FORM.VEHICLE_TYPE.FOR}>${DETAIL_COLUMN_NAME.MANAGE_INSURANCE_PRODUCT.TYPE.AUTOMOBILE.VEHICLE_TYPE}</label>
        <select id=${AUTOMOBILE_FORM.VEHICLE_TYPE.ID} name=${AUTOMOBILE_FORM.VEHICLE_TYPE.NAME}>
          <option value=${AUTOMOBILE_FORM.VEHICLE_TYPE.SMALL.VALUE} ${data.vehicleType === AUTOMOBILE_FORM.VEHICLE_TYPE.SMALL.VALUE ? CLASS.SELECTED : STRING_EMPTY}>${AUTOMOBILE_FORM.VEHICLE_TYPE.SMALL.LABEL}</option>
          <option value=${AUTOMOBILE_FORM.VEHICLE_TYPE.MEDIUM.VALUE} ${data.vehicleType === AUTOMOBILE_FORM.VEHICLE_TYPE.MEDIUM.VALUE ? CLASS.SELECTED : STRING_EMPTY}>${AUTOMOBILE_FORM.VEHICLE_TYPE.MEDIUM.LABEL}</option>
          <option value=${AUTOMOBILE_FORM.VEHICLE_TYPE.LARGE.VALUE} ${data.vehicleType === AUTOMOBILE_FORM.VEHICLE_TYPE.LARGE.VALUE ? CLASS.SELECTED : STRING_EMPTY}>${AUTOMOBILE_FORM.VEHICLE_TYPE.LARGE.LABEL}</option>
        </select>
      </div>
      <div class=${CLASS.FORM_GROUP}>
        <label>${DETAIL_COLUMN_NAME.MANAGE_INSURANCE_PRODUCT.TYPE.AUTOMOBILE.SERVICES}</label>
        <div class=${CLASS.CHECK_BOX_GROUP}>
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
