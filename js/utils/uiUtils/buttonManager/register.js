import {initialButtons} from "../common/buttonUtils.js";
import {BUTTON, INPUT_FORM} from "../../../../config/register.js";

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

const signUp = () => {
  const name = document.getElementById(INPUT_FORM.NAME.id).value;
  const age = document.getElementById(INPUT_FORM.AGE.id).value;
  // const gender = document.getElementById(INPUT_FORM.GENDER.id).dataset.selectedValue;
  // 이거 어캐찾누
  const address = document.getElementById(INPUT_FORM.ADDRESS.id).value;
  const phoneNumber = document.getElementById(INPUT_FORM.PHONE_NUMBER.id).value;
  const residentRegistrationNumber = document.getElementById(INPUT_FORM.RESIDENT_REGISTRATION_NUMBER.id).value;
  const job = document.getElementById(INPUT_FORM.JOB.id).value;
  const bankAccount = document.getElementById(INPUT_FORM.BANK_ACCOUNT.id).value;
  const bankName = document.getElementById(INPUT_FORM.BANK_NAME.id).value;
  const property = document.getElementById(INPUT_FORM.PROPERTY.id).value;

  const dto = getSignUpDTO(name, age, 1, address, phoneNumber,
    residentRegistrationNumber, job, bankAccount, bankName, property,
    [], [], []);
  alert(JSON.stringify(dto));
}

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
