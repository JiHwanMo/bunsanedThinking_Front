import {
  BUTTON as SALES_BUTTON,
  CUSTOMER_FORM,
  ID,
  NAME_MAPPER,
  POP_UP
} from "../../../../../../config/employee/sales/sales.js";
import {
  fetchEvaluateSalesPerformance,
  fetchInduceInsuranceProduct, fetchInduceLoanProduct
} from "../../../../apiUtils/apiDocumentation/employee/sales/sales.js";
import {
  BUTTON,
  CLASS,
  CLASS_SELECTOR, ELEMENT_ID,
  EVENT,
  KEY,
  LOCATION,
  STRING_EMPTY,
  TAG
} from "../../../../../../config/common.js";

const context= {
  EVALUATE_SALES_PERFORMANCE: {
    fetchGetById : fetchEvaluateSalesPerformance
  },
  INDUCE_INSURANCE_PRODUCT: {
    fetchInduce: fetchInduceInsuranceProduct
  },
  INDUCE_LOAN_PRODUCT: {
    fetchInduce: fetchInduceLoanProduct
  }
}

export const addStarButtons = () => {
  const starButtonsContainer = document.getElementById(ELEMENT_ID.STAR_BUTTONS_CONTAINER);
  const type = sessionStorage.getItem(KEY.CURRENT_TYPE);
  const employeeId = sessionStorage.getItem(KEY.SELECTED_DATA_ID);

  for (let i = 1; i <= 5; i++) {
    const button = document.createElement(TAG.DIV);
    button.className = CLASS.STAR_BUTTON;
    button.innerHTML =  SALES_BUTTON.TASK.EMPLOYEE.SALES.EVALUATE_SALES_PERFORMANCE.INPUT.STAR.repeat(i);
    button.addEventListener(EVENT.CLICK, async () => {
      const result = await context[type].fetchGetById(i, employeeId);
      if(result !== null) {
        alert(POP_UP.EVALUATION);
        window.location.href = LOCATION.HOME;
      }
    });
    starButtonsContainer.appendChild(button);
  }
};

export const renderBottomButtons = (container) => {
  const type = sessionStorage.getItem(KEY.CURRENT_TYPE);
  const buttonContainer = document.createElement(TAG.DIV);
  buttonContainer.className = CLASS.BUTTON_CONTAINER;

  if (type === NAME_MAPPER.INDUCE_INSURANCE_PRODUCT) {
    const requestButton = document.createElement(TAG.BUTTON);
    requestButton.textContent = SALES_BUTTON.TASK.EMPLOYEE.SALES.INDUCE_INSURANCE_PRODUCT.INSURANCE_ENROLLMENT_REQUEST;
    requestButton.className = CLASS.ACTION_BUTTON;
    requestButton.addEventListener(EVENT.CLICK, async () => {
      const formData = collectFormData();
      console.log(formData)
      const result = await context[type].fetchInduce(formData);
      if(result !== null){
        alert(POP_UP.INSURANCE_ENROLLMENT_REQUEST);
        window.location.href = LOCATION.HOME;
      }
    });

    const cancelButton = document.createElement(TAG.BUTTON);
    cancelButton.textContent = BUTTON.COMMON.CANCEL;
    cancelButton.className = CLASS.ACTION_BUTTON;
    cancelButton.addEventListener(EVENT.CLICK, () => {
     window.history.back();
    });

    buttonContainer.appendChild(requestButton);
    buttonContainer.appendChild(cancelButton);
  } else if (type === NAME_MAPPER.INDUCE_LOAN_PRODUCT) {
    const loanButton = document.createElement(TAG.BUTTON);
    loanButton.textContent = SALES_BUTTON.TASK.EMPLOYEE.SALES.INDUCE_LOAN_PRODUCT.LOAN_REQUEST;
    loanButton.className = CLASS.ACTION_BUTTON;
    loanButton.addEventListener(EVENT.CLICK, async () => {
      const formData = collectFormData();
      const result = await context[type].fetchInduce(formData);
      if(result !== null){
        alert(POP_UP.LOAN_REQUEST);
        window.location.href = LOCATION.HOME;
      }
    });

    const cancelButton = document.createElement(TAG.BUTTON);
    cancelButton.textContent = BUTTON.COMMON.CANCEL;
    cancelButton.className = CLASS.ACTION_BUTTON;
    cancelButton.addEventListener(EVENT.CLICK, () => {
      window.history.back();
    });

    buttonContainer.appendChild(loanButton);
    buttonContainer.appendChild(cancelButton);
  }

  container.appendChild(buttonContainer);
};

export const collectFormData = () => {
  const getValueById = (id) => {
    const element = document.getElementById(id);
    return element ? element.value : null;
  };

  const getSelectedGender = () => {
    const buttonGroup = document.querySelector(CLASS_SELECTOR.BUTTON_GROUP);
    return buttonGroup ? buttonGroup.dataset.selectedValue : null; // 선택된 값 반환
  };

  const mapDynamicFields = (sectionId, mapping) => {
    const section = document.getElementById(`${sectionId}${ID.CONTAINER}`);
    if (!section) return [];

    const inputGroups = Array.from(section.querySelectorAll(CLASS_SELECTOR.FORM_GROUP));
    return inputGroups.map((group) => {
      const inputs = Array.from(group.querySelectorAll(TAG.INPUT));
      const values = {};
      inputs.forEach((input) => {
        const key = mapping[input.name.replace(sectionId, STRING_EMPTY)];
        if (key) {
          values[key] = input.value;
        }
      });
      return values;
    });
  };

  return {
    name: getValueById(CUSTOMER_FORM.NAME.ID),
    age: getValueById(CUSTOMER_FORM.AGE.ID),
    gender: getSelectedGender(),
    address: getValueById(CUSTOMER_FORM.ADDRESS.ID),
    phoneNumber: getValueById(CUSTOMER_FORM.PHONE_NUMBER.ID),
    residentRegistrationNumber: getValueById(CUSTOMER_FORM.RESIDENT_REGISTRATION_NUMBER.ID),
    job: getValueById(CUSTOMER_FORM.JOB.ID),
    bankAccount: getValueById(CUSTOMER_FORM.BANK_ACCOUNT.ID),
    bankName: getValueById(CUSTOMER_FORM.BANK_NAME.ID),
    property: getValueById(CUSTOMER_FORM.PROPERTY.ID),
    accidentHistories: mapDynamicFields(CUSTOMER_FORM.ACCIDENT_HISTORY.ID, {
      date: CUSTOMER_FORM.ACCIDENT_HISTORY.FIELD_NAME.ACCIDENT_DATE,
      accidentDetail: CUSTOMER_FORM.ACCIDENT_HISTORY.FIELD_NAME.ACCIDENT_DETAIL_ID
    }),
    surgeryHistories: mapDynamicFields(CUSTOMER_FORM.SURGERY_HISTORY.ID, {
      date: CUSTOMER_FORM.SURGERY_HISTORY.FIELD_NAME.DATE,
      hospitalName: CUSTOMER_FORM.SURGERY_HISTORY.FIELD_NAME.HOSPITAL_NAME_ID,
      name: CUSTOMER_FORM.SURGERY_HISTORY.FIELD_NAME.NAME_ID
    }),
    diseaseHistories: mapDynamicFields(CUSTOMER_FORM.DISEASE_HISTORY.ID, {
      date: CUSTOMER_FORM.DISEASE_HISTORY.FIELD_NAME.DATE_OF_DIAGNOSIS.ID,
      name: CUSTOMER_FORM.DISEASE_HISTORY.FIELD_NAME.NAME_ID
    }),
    productId: sessionStorage.getItem(KEY.SELECTED_DATA_ID),
    employeeId: sessionStorage.getItem(KEY.LOGIN_ID)
  };
};

