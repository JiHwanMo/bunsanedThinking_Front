import {
  fetchAddAutomobileInsurance,
  fetchAddDiseaseInsurance,
  fetchAddInjuryInsurance,
  fetchUpdateAutomobileInsurance,
  fetchUpdateDiseaseInsurance,
  fetchUpdateInjuryInsurance
} from "../../../../apiUtils/apiDocumentation/employee/productManagement/productManagement.js";
import {
  POP_UP,
  BUTTON,
  VALUE,
  ELEMENT_ID as PRODUCT_MANAGEMENT_ELEMENT_ID,
  KEY as PRODUCT_MANAGEMENT_KEY,
  COMMON_FORM, INSURANCE_TYPE, INJURY_FORM, DISEASE_FORM, AUTOMOBILE_FORM
} from "../../../../../../config/employee/productManagement/productManagement.js";
import {BUTTON as COMMON_BUTTON, CLASS, EVENT, KEY, LOCATION, TAG} from "../../../../../../config/common.js"

const context = {
  MANAGE_INSURANCE_PRODUCT: {
    fetchAddInsurance: {
      Disease: fetchAddDiseaseInsurance,
      Injury: fetchAddInjuryInsurance,
      Automobile: fetchAddAutomobileInsurance
    },
    fetchUpdateInsurance: {
      Disease: fetchUpdateDiseaseInsurance,
      Injury: fetchUpdateInjuryInsurance,
      Automobile: fetchUpdateAutomobileInsurance
    }
    // postButtons: BUTTON.TASK.EMPLOYEE.PRODUCT_MANAGEMENT.MANAGE_INSURANCE_PRODUCT
  }
}

export const addButtons = (buttonContainer) => {
  const selectedButtonType = JSON.parse(sessionStorage.getItem(KEY.SELECTED_BUTTON_TYPE));
  const type = sessionStorage.getItem(KEY.CURRENT_TYPE);

  const saveButton = document.createElement(TAG.BUTTON);
  const cancelButton = document.createElement(TAG.BUTTON);

  // 공통 스타일 적용
  saveButton.className = CLASS.BUTTON_ITEM;
  cancelButton.className = CLASS.BUTTON_ITEM;

  if (selectedButtonType === VALUE.POST) {
    saveButton.textContent = COMMON_BUTTON.COMMON.OK;
    cancelButton.textContent = COMMON_BUTTON.COMMON.CANCEL;
      saveButton.addEventListener(EVENT.CLICK, async () => {
        const userConfirmed = confirm(POP_UP.POST.QUESTION);
        if (userConfirmed) {
        const formData = collectFormDataForPost();
        await context[type].fetchAddInsurance[formData.insuranceType](formData);
        alert(POP_UP.POST.OK);
        window.location.href = LOCATION.HOME
        } else {
          window.history.back();
        }
      });
    cancelButton.addEventListener(EVENT.CLICK, () => window.history.back());
  } else if (selectedButtonType === VALUE.UPDATE) {
    saveButton.textContent = BUTTON.TASK.EMPLOYEE.PRODUCT_MANAGEMENT.MANAGE_INSURANCE_PRODUCT.UPDATE;
    cancelButton.textContent = COMMON_BUTTON.COMMON.CANCEL;
      saveButton.addEventListener(EVENT.CLICK, async () => {
        const userConfirmed = confirm(POP_UP.UPDATE.QUESTION);
        if (userConfirmed) {
        const formData = collectFormDataForUpdate();
        await context[type].fetchUpdateInsurance[formData.insuranceType](formData);
        alert(POP_UP.UPDATE.OK);
        window.location.href = LOCATION.HOME
        } else {
          window.history.back();
        }
      });
    cancelButton.addEventListener(EVENT.CLICK, () => window.history.back());
  }
  buttonContainer.appendChild(saveButton);
  buttonContainer.appendChild(cancelButton);
};

const collectFormDataForPost = () => {
  const getValueById = (id) => {
    const element = document.getElementById(id);
    return element ? element.value : null; // 요소가 존재하면 value 반환, 아니면 null 반환
  };

  const getCheckedValues = (name) => {
    return Array.from(document.querySelectorAll(`input[name="${name}"]:checked`)).map(
      (checkbox) => checkbox.value
    );
  };

  const insuranceType = getValueById(PRODUCT_MANAGEMENT_ELEMENT_ID.INSURANCE_TYPE); // POST는 콤보박스에서 선택한 값 사용
  const commonData = {
    insuranceType,
    name: getValueById(COMMON_FORM.NAME.ID),
    ageRange: getValueById(COMMON_FORM.AGE_RANGE.ID),
    coverage: getValueById(COMMON_FORM.COVERAGE.ID),
    maximumMoney: getValueById(COMMON_FORM.MAXIMUM_MONEY.ID),
    monthlyPremium: getValueById(COMMON_FORM.MONTHLY_PREMIUM.ID),
    contractPeriod: getValueById(COMMON_FORM.CONTRACT_PERIOD.ID),
  };

  // 보험 유형별로 데이터 추가
  switch (insuranceType) {
    case INSURANCE_TYPE.INJURY:
      return {
        ...commonData,
        injuryType: getValueById(INJURY_FORM.INJURY_TYPE.ID),
        surgeriesLimit: getValueById(INJURY_FORM.SURGERY_LIMIT.ID)
      };
    case INSURANCE_TYPE.DISEASE:
      return {
        ...commonData,
        diseaseLimit: getValueById(DISEASE_FORM.DISEASE_LIMIT.ID),
        diseaseName: getValueById(DISEASE_FORM.DISEASE_NAME.ID),
        surgeriesLimit: getValueById(DISEASE_FORM.SURGERY_LIMIT.ID),
      };
    case INSURANCE_TYPE.AUTOMOBILE:
      return {
        ...commonData,
        accidentLimit: getValueById(AUTOMOBILE_FORM.ACCIDENT_LIMIT.ID),
        vehicleType: getValueById(AUTOMOBILE_FORM.VEHICLE_TYPE.ID),
        serviceTypes: getCheckedValues(AUTOMOBILE_FORM.SERVICE.NAME),
      };
    default:
      return commonData; // 기본 데이터 반환 (보험 유형이 없을 때)
  }
};

const collectFormDataForUpdate = () => {
  const getValueById = (id) => {
    const element = document.getElementById(id);
    return element ? element.value : null; // 요소가 존재하면 value 반환, 아니면 null 반환
  };

  const getCheckedValues = (name) => {
    return Array.from(document.querySelectorAll(`input[name="${name}"]:checked`)).map(
      (checkbox) => checkbox.value
    );
  };

  const insuranceType = JSON.parse(sessionStorage.getItem(PRODUCT_MANAGEMENT_KEY.SELECTED_DATA_INSURANCE_TYPE)); // UPDATE는 세션 데이터 사용
  const commonData = {
    id: JSON.parse(sessionStorage.getItem(KEY.SELECTED_DATA_ID)), // UPDATE는 id 포함
    insuranceType,
    name: getValueById(COMMON_FORM.NAME.ID),
    ageRange: getValueById(COMMON_FORM.AGE_RANGE.ID),
    coverage: getValueById(COMMON_FORM.COVERAGE.ID),
    maximumMoney: getValueById(COMMON_FORM.MAXIMUM_MONEY.ID),
    monthlyPremium: getValueById(COMMON_FORM.MONTHLY_PREMIUM.ID),
    contractPeriod: getValueById(COMMON_FORM.CONTRACT_PERIOD.ID),
  };

  // 보험 유형별로 데이터 추가
  switch (insuranceType) {
    case INSURANCE_TYPE.INJURY:
      return {
        ...commonData,
        injuryType: getValueById(INJURY_FORM.INJURY_TYPE.ID),
        surgeriesLimit: getValueById(INJURY_FORM.SURGERY_LIMIT.ID)
      };
    case INSURANCE_TYPE.DISEASE:
      return {
        ...commonData,
        diseaseLimit: getValueById(DISEASE_FORM.DISEASE_LIMIT.ID),
        diseaseName: getValueById(DISEASE_FORM.DISEASE_NAME.ID),
        surgeriesLimit: getValueById(DISEASE_FORM.SURGERY_LIMIT.ID),
      };
    case INSURANCE_TYPE.AUTOMOBILE:
      return {
        ...commonData,
        accidentLimit: getValueById(AUTOMOBILE_FORM.ACCIDENT_LIMIT.ID),
        vehicleType: getValueById(AUTOMOBILE_FORM.VEHICLE_TYPE.ID),
        serviceTypes: getCheckedValues(AUTOMOBILE_FORM.SERVICE.NAME),
      };
    default:
      return commonData; // 기본 데이터 반환 (보험 유형이 없을 때)
  }
};
