import {initialButtons} from "../common/buttonUtils.js";
import {BUTTON, INPUT_FORM} from "../../../../config/register.js";
import {fetchSignUp} from "../../apiUtils/apiDocumentation/customer/customer.js";
import {STRING_EMPTY, TAG} from "../../../../config/common.js";

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

  const dto = getSignUpDTO(name, age, gender, address, phoneNumber,
    residentRegistrationNumber, job, bankAccount, bankName, property,
    mapDynamicFields("accidentHistory"),
    mapDynamicFields("surgeryHistory"),
    mapDynamicFields("diseaseHistory")
  );
  console.log(JSON.stringify(dto));
  // await fetchSignUp(dto); -- 서버쪽 DTO 수정해야 함
}

const mapDynamicFields = (sectionId) => {
  const sectionDiv = document.getElementById(`${sectionId}Container`);
  if (!sectionDiv) return [];

  const inputDivs = Array.from(sectionDiv.querySelectorAll(".form-group"));
  return inputDivs.map((inputDiv) => {
    const inputs = Array.from(inputDiv.querySelectorAll(TAG.INPUT));
    const values = {};
    inputs.forEach((input) => {
      const key = input.name.replace(sectionId, STRING_EMPTY);
      if (key) values[key] = input.value;
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
