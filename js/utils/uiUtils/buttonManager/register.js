import {initialButtons} from "../common/buttonUtils.js";
import {BUTTON, INPUT_FORM} from "../../../../config/register.js";
import {fetchSignUp} from "../../apiUtils/apiDocumentation/customer/customer.js";

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
  // 이거 어캐찾누
  const address = document.getElementById(INPUT_FORM.ADDRESS.id).value;
  const phoneNumber = document.getElementById(INPUT_FORM.PHONE_NUMBER.id).value;
  const residentRegistrationNumber = document.getElementById(INPUT_FORM.RESIDENT_REGISTRATION_NUMBER.id).value;
  const job = document.getElementById(INPUT_FORM.JOB.id).value;
  const bankAccount = document.getElementById(INPUT_FORM.BANK_ACCOUNT.id).value;
  const bankName = document.getElementById(INPUT_FORM.BANK_NAME.id).value;
  const property = document.getElementById(INPUT_FORM.PROPERTY.id).value;

  const dto = getSignUpDTO(name, age, gender, address, phoneNumber,
    residentRegistrationNumber, job, bankAccount, bankName, property,
    mapDynamicFields("accidentHistory", {
      date: "date",
      사고내역: "accidentDetail"
    }),
    mapDynamicFields("surgeryHistory", {
      date: "date",
      병원이름: "hospitalName",
      수술이름: "name"
    }),
    mapDynamicFields("diseaseHistory", {
      date: "dateOfDiagnosis",
      질병이름: "name"
    }));
  await fetchSignUp(dto);
}

const mapDynamicFields = (sectionId, mapping) => {
  const section = document.getElementById(`${sectionId}Container`);
  if (!section) return [];

  const inputGroups = Array.from(section.querySelectorAll(".form-group"));
  return inputGroups.map((group) => {
    const inputs = Array.from(group.querySelectorAll("input"));
    const values = {};
    inputs.forEach((input) => {
      const key = mapping[input.name.replace(sectionId, "")];
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
