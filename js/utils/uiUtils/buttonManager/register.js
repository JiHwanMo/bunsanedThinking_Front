import {initialButtons} from "../common/buttonUtils.js";
import {BUTTON, CONTAINER_KEY, DYNAMIC_SECTION_FORM, INPUT_FORM, SIGNUP_MESSAGE} from "../../../../config/register.js";
import {fetchSignUp} from "../../apiUtils/apiDocumentation/customer/customer.js";
import {STRING_EMPTY, TAG, ZERO} from "../../../../config/common.js";

const getSignUpDTO = (name, age, gender, address, phoneNumber,
                      residentRegistrationNumber, job,
                      bankAccount, bankName, property,
                      tempAccidentHistoryList,
                      tempSurgeryHistoryList,
                      tempDiseaseHistoryList) => {
  return {
    name: name,
    phoneNumber: phoneNumber,
    job: job,
    age: age,
    gender: gender,
    residentRegistrationNumber: residentRegistrationNumber,
    address: address,
    property: property,
    bankName: bankName,
    bankAccount: bankAccount,
    tempAccidentHistoryList: tempAccidentHistoryList,
    tempSurgeryHistoryList: tempSurgeryHistoryList,
    tempDiseaseHistoryList: tempDiseaseHistoryList
  }
}

const signUp = async () => {
  if (!confirm(SIGNUP_MESSAGE.CONFIRM)) return;
  const name = document.getElementById(INPUT_FORM.NAME.id).value;
  const age = document.getElementById(INPUT_FORM.AGE.id).value;
  const buttonGroup = document.querySelector(".button-group");
  const gender = buttonGroup ? buttonGroup.dataset.selectedValue : null;
  const address = document.getElementById(INPUT_FORM.ADDRESS.id).value;
  const phoneNumber = document.getElementById(INPUT_FORM.PHONE_NUMBER.id).value;
  const residentRegistrationNumber = document.getElementById(INPUT_FORM.RESIDENT_REGISTRATION_NUMBER.id).value;
  const job = document.getElementById(INPUT_FORM.JOB.id).value;
  const bankAccount = document.getElementById(INPUT_FORM.BANK_ACCOUNT.id).value;
  const bankName = document.getElementById(INPUT_FORM.BANK_NAME.id).value;
  const property = document.getElementById(INPUT_FORM.PROPERTY.id).value;
  if (!name) alert(INPUT_FORM.NAME.exception);
  else if (!age|| age <= ZERO) alert(INPUT_FORM.AGE.exception);
  else if (gender === undefined) alert(INPUT_FORM.GENDER.exception);
  else if (!address) alert(INPUT_FORM.ADDRESS.exception);
  else if (!phoneNumber) alert(INPUT_FORM.PHONE_NUMBER.exception);
  else if (!residentRegistrationNumber) alert(INPUT_FORM.RESIDENT_REGISTRATION_NUMBER.exception);
  else if (!job) alert(INPUT_FORM.JOB.exception);
  else if (!bankAccount) alert(INPUT_FORM.BANK_ACCOUNT.exception);
  else if (!bankName) alert(INPUT_FORM.BANK_NAME.exception);
  else if (!property || property <= ZERO) alert(INPUT_FORM.PROPERTY.exception);
  else {
    const accidentHistory = mapDynamicFields(DYNAMIC_SECTION_FORM.ACCIDENT_HISTORY.sectionId);
    const surgeryHistory = mapDynamicFields(DYNAMIC_SECTION_FORM.SURGERY_HISTORY.sectionId);
    const diseaseHistory = mapDynamicFields(DYNAMIC_SECTION_FORM.DISEASE_HISTORY.sectionId);
    const dto = getSignUpDTO(name, age, gender, address, phoneNumber,
      residentRegistrationNumber, job, bankAccount, bankName, property,
      accidentHistory, surgeryHistory, diseaseHistory
    );
    await fetchSignUp(dto);
    alert(SIGNUP_MESSAGE.OK);
    window.history.back();
  }
}

const mapDynamicFields = (sectionId) => {
  const section = document.getElementById(`${sectionId}${CONTAINER_KEY}`);
  if (!section) return [];

  const inputGroups = Array.from(section.querySelectorAll(".form-group"));
  return inputGroups.map((group) => {
    const inputs = Array.from(group.querySelectorAll(TAG.INPUT));
    const values = {};
    inputs.forEach((input) => {
      const key = input.name.replace(sectionId, STRING_EMPTY);
      if (key) {
        values[key] = input.value;
      }
    });
    return values;
  });
};

const cancel = () => {
  window.history.back();
}

const registerTaskMapper = {
  POST: signUp,
  CANCEL: cancel
}

export const renderButton = () => {
  initialButtons(BUTTON, registerTaskMapper);
}
