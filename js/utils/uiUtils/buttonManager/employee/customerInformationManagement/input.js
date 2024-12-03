import { fetchAddCustomerInformation, fetchUpdateCustomerInformation } from "../../../../apiUtils/apiDocumentation/employee/customerInformationManagement/customerInformationManagement.js";
import { ATTRIBUTE, BUTTON, CLASS, EVENT, KEY, LOCATION, QUERY_SELECTOR, TAG } from "../../../../../../config/common.js";
import {
  ACCIDENT_HISTORY_LIST,
  CLASS_SELECTOR, DISEASE_HISTORY_LIST,
  ELEMENT_ID,
  POP_UP, SURGERY_HISTORY_LIST,
  VALUE
} from "../../../../../../config/employee/customerInformationManagement/customerInformationManagement.js";

export const addButtons = (buttonContainer) => {
  const selectedButtonType = JSON.parse(sessionStorage.getItem(KEY.SELECTED_BUTTON_TYPE));

  const saveButton = document.createElement(TAG.BUTTON);
  const cancelButton = document.createElement(TAG.BUTTON);

  saveButton.className = CLASS.BUTTON_ITEM;
  cancelButton.className = CLASS.BUTTON_ITEM;

  if (selectedButtonType === VALUE.POST) {
    saveButton.textContent = BUTTON.COMMON.OK;
    saveButton.addEventListener(EVENT.CLICK, async () => {
      const formData = collectFormData();
      if (!formData) return;

      const userConfirmed = confirm(POP_UP.POST.QUESTION);
      if (userConfirmed) {
        try {
          await fetchAddCustomerInformation(formData);
          alert(POP_UP.POST.OK);
          window.location.href = LOCATION.HOME;
        } catch (error) {
          console.error(POP_UP.POST.CONSOLE_ERROR, error);
          alert(POP_UP.POST.ERROR);
        }
      } else {
        window.history.back();
      }
    });

    cancelButton.textContent = BUTTON.COMMON.CANCEL;
    cancelButton.addEventListener(EVENT.CLICK, () => window.location.href = LOCATION.HOME);
  } else if (selectedButtonType === VALUE.UPDATE) {
    saveButton.textContent = BUTTON.COMMON.UPDATE;
    saveButton.addEventListener(EVENT.CLICK, async () => {
      const formData = collectFormData();
      if (!formData) return;

      const userConfirmed = confirm(POP_UP.UPDATE.QUESTION); // confirm 다이얼로그 표시
      if (userConfirmed) {
        try {
          await fetchUpdateCustomerInformation(formData);
          alert(POP_UP.UPDATE.OK);
          window.location.href = LOCATION.HOME;
        } catch (error) {
          console.error(POP_UP.UPDATE.CONSOLE_ERROR, error);
          alert(POP_UP.UPDATE.ERROR);
        }
      } else {
        window.history.back();
      }
    });

    cancelButton.textContent = BUTTON.COMMON.CANCEL;
    cancelButton.addEventListener(EVENT.CLICK, () => window.location.href = LOCATION.HOME);
  }

  buttonContainer.appendChild(saveButton);
  buttonContainer.appendChild(cancelButton);
};

const collectFormData = () => {
  const selectedButtonType = JSON.parse(sessionStorage.getItem(KEY.SELECTED_BUTTON_TYPE));

  if (selectedButtonType === VALUE.POST) {
    const name = document.getElementById(ELEMENT_ID.NAME).value.trim();
    const phoneNumber = document.getElementById(ELEMENT_ID.PHONE_NUMBER).value.trim();
    const job = document.getElementById(ELEMENT_ID.JOB).value.trim();
    const age = parseInt(document.getElementById(ELEMENT_ID.AGE).value, 10);
    const gender = document.getElementById(ELEMENT_ID.GENDER).value.trim();
    const residentRegistrationNumber = document.getElementById(ELEMENT_ID.RESIDENT_REGISTRATION_NUMBER).value.trim();
    const address = document.getElementById(ELEMENT_ID.ADDRESS).value.trim();
    const property = parseFloat(document.getElementById(ELEMENT_ID.PROPERTY).value);
    const bankName = document.getElementById(ELEMENT_ID.BANK_NAME).value.trim();
    const bankAccount = document.getElementById(ELEMENT_ID.BANK_ACCOUNT).value.trim();

    const accidentHistoryList = [];
    document.querySelectorAll(CLASS_SELECTOR.ACCIDENT_HISTORY_ENTRY).forEach(entry => {
      // const date = entry.querySelector('input[name="date"]').value.trim();
      const dateElement = entry.querySelector(QUERY_SELECTOR.SELECTOR(TAG.INPUT, ATTRIBUTE.NAME, ACCIDENT_HISTORY_LIST.DATE, false));
      // const accidentDetail = entry.querySelector('input[name="accidentDetail"]').value.trim();
      const accidentDetailElement = entry.querySelector(QUERY_SELECTOR.SELECTOR(TAG.INPUT, ATTRIBUTE.NAME, ACCIDENT_HISTORY_LIST.ACCIDENT_DETAIL, false));

      const date = dateElement?.value.trim();
      const accidentDetail = accidentDetailElement?.value.trim();

      if (date && accidentDetail) {
        accidentHistoryList.push({ date, accidentDetail });
      }
    });

    const surgeryHistoryList = [];
    document.querySelectorAll(CLASS_SELECTOR.SURGERY_HISTORY_ENTRY).forEach(entry => {
      // const date = entry.querySelector('input[name="date"]').value.trim();
      const dateElement = entry.querySelector(QUERY_SELECTOR.SELECTOR(TAG.INPUT, ATTRIBUTE.NAME, SURGERY_HISTORY_LIST.DATE, false));
      // const hospitalName = entry.querySelector('input[name="hospitalName"]').value.trim();
      const hospitalNameElement = entry.querySelector(QUERY_SELECTOR.SELECTOR(TAG.INPUT, ATTRIBUTE.NAME, SURGERY_HISTORY_LIST.HOSPITAL_NAME, false));
      // const name = entry.querySelector('input[name="name"]').value.trim();
      const nameElement = entry.querySelector(QUERY_SELECTOR.SELECTOR(TAG.INPUT, ATTRIBUTE.NAME, SURGERY_HISTORY_LIST.NAME, false));

      // .value.trim()으로 값을 추출
      const date = dateElement?.value.trim();
      const hospitalName = hospitalNameElement?.value.trim();
      const name = nameElement?.value.trim();

      if (date && hospitalName && name) {
        surgeryHistoryList.push({ date, hospitalName, name });
      }
    });

    const diseaseHistoryList = [];
    document.querySelectorAll(CLASS_SELECTOR.DISEASE_HISTORY_ENTRY).forEach(entry => {
      // const dateOfDiagnosis = entry.querySelector('input[name="dateOfDiagnosis"]').value.trim();
      const dateOfDiagnosisElement = entry.querySelector(QUERY_SELECTOR.SELECTOR(TAG.INPUT, ATTRIBUTE.NAME, DISEASE_HISTORY_LIST.DATE_OF_DIAGNOSIS, false));
      // const name = entry.querySelector('input[name="name"]').value.trim();
      const nameElement = entry.querySelector(QUERY_SELECTOR.SELECTOR(TAG.INPUT, ATTRIBUTE.NAME, DISEASE_HISTORY_LIST.NAME, false));

      // .value.trim()으로 값을 추출
      const dateOfDiagnosis = dateOfDiagnosisElement?.value.trim();
      const name = nameElement?.value.trim();

      if (dateOfDiagnosis && name) {
        diseaseHistoryList.push({ dateOfDiagnosis, name });
      }
    });

    if (!name || !phoneNumber || !job || isNaN(age) || !gender || !residentRegistrationNumber || !address ||
      isNaN(property) || !bankName || !bankAccount){
      alert(POP_UP.POST.VALIDATION_ERROR);
      return null;
    }
    return {
      name,
      phoneNumber,
      job,
      age,
      gender,
      residentRegistrationNumber,
      address,
      property,
      bankName,
      bankAccount,
      accidentHistoryList,
      surgeryHistoryList,
      diseaseHistoryList
    };
  } else if (selectedButtonType === VALUE.UPDATE) {
    const id = parseInt(sessionStorage.getItem(KEY.SELECTED_DATA_ID), 10);
    const index = parseInt(document.getElementById(ELEMENT_ID.INDEX).value, 10);
    const input = document.getElementById(ELEMENT_ID.INPUT).value.trim();
    if (index === 10) {
      const historyId = parseInt(document.getElementById(ELEMENT_ID.HISTORY_ID).value, 10);
      const accidentDate = document.getElementById(ELEMENT_ID.ACCIDENT_DATE).value.trim();
      const accidentDetail = document.getElementById(ELEMENT_ID.ACCIDENT_DETAIL).value.trim();
      return {
        id,
        index,
        accidentHistoryList: [{ id: historyId, date: accidentDate, accidentDetail }]
      };
    } else if (index === 11) {
      const historyId = parseInt(document.getElementById(ELEMENT_ID.HISTORY_ID).value, 10);
      const surgeryDate = document.getElementById(ELEMENT_ID.SURGERY_DATE).value.trim();
      const hospitalName = document.getElementById(ELEMENT_ID.HOSPITAL_NAME).value.trim();
      const surgeryName = document.getElementById(ELEMENT_ID.SURGERY_NAME).value.trim();
      return {
        id,
        index,
        surgeryHistoryList: [{ id: historyId, date: surgeryDate, hospitalName, name: surgeryName }]
      };
    } else if (index === 12) {
      const historyId = parseInt(document.getElementById(ELEMENT_ID.HISTORY_ID).value, 10);
      const diseaseDate = document.getElementById(ELEMENT_ID.DISEASE_DATE).value.trim();
      const diseaseName = document.getElementById(ELEMENT_ID.DISEASE_NAME).value.trim();
      return {
        id,
        index,
        diseaseHistoryList: [{ id: historyId, dateOfDiagnosis: diseaseDate, name: diseaseName }]
      };
    } else{
      if (!input) {
        alert(POP_UP.UPDATE.VALIDATION_ERROR);
        return null;
      }
      return { id, index, input };
    }
  }
  return null;
};
