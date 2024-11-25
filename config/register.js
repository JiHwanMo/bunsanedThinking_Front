import {BUTTON as COMMON_BUTTON} from "./common.js";

export const TITLE = "회원가입";

export const INPUT_FORM = {
  NAME: {
    isTextArea: false,
    for: "name",
    label: "NAME",
    type: "text",
    id: "name",
    name: "name",
    placeholder: "고객 이름"
  },
  AGE: {
    isTextArea: false,
    for: "age",
    label: "AGE",
    type: "number",
    id: "age",
    name: "age",
    placeholder: "고객 나이"
  },
  GENDER: {
    isTextArea: false,
    for: "gender",
    label: "GENDER",
    type: "button-group", // 버튼 그룹으로 표시
    id: "gender",
    name: "gender",
    options: [
      { value: "Male", text: "남자" },
      { value: "Female", text: "여자" }
    ]
  },
  ADDRESS: {
    isTextArea: false,
    for: "address",
    label: "ADDRESS",
    type: "text",
    id: "address",
    name: "address",
    placeholder: "주소"
  },
  PHONE_NUMBER: {
    isTextArea: false,
    for: "phoneNumber",
    label: "PHONE_NUMBER",
    type: "text",
    id: "phoneNumber",
    name: "phoneNumber",
    placeholder: "전화번호"
  },
  RESIDENT_REGISTRATION_NUMBER: {
    isTextArea: false,
    for: "residentRegistrationNumber",
    label: "RESIDENT_REGISTRATION_NUMBER",
    type: "text",
    id: "residentRegistrationNumber",
    name: "residentRegistrationNumber",
    placeholder: "주민등록번호"
  },
  JOB: {
    isTextArea: false,
    for: "job",
    label: "JOB",
    type: "text",
    id: "job",
    name: "job",
    placeholder: "직업"
  },
  BANK_ACCOUNT: {
    isTextArea: false,
    for: "bankAccount",
    label: "BANK_ACCOUNT",
    type: "text",
    id: "bankAccount",
    name: "bankAccount",
    placeholder: "은행 계좌"
  },
  BANK_NAME: {
    isTextArea: false,
    for: "bankName",
    label: "BANK_NAME",
    type: "text",
    id: "bankName",
    name: "bankName",
    placeholder: "은행 이름"
  },
  PROPERTY: {
    isTextArea: false,
    for: "property",
    label: "PROPERTY",
    type: "number",
    id: "property",
    name: "property",
    placeholder: "자산"
  }
}

export const DYNAMIC_SECTION_FORM = {
  ACCIDENT_HISTORY: {
    sectionTitle: "사고 이력",
    sectionId: "accidentHistory",
    fieldNames: ["date", "사고 내역"]
  },
  SURGERY_HISTORY: {
    sectionTitle: "수술 이력",
    sectionId: "surgeryHistory",
    fieldNames: ["date", "병원 이름", "수술 이름"]
  },
  DISEASE_HISTORY: {
    sectionTitle: "질병 이력",
    sectionId: "diseaseHistory",
    fieldNames: ["date", "질병 이름"]
  }
}

export const BUTTON = {
  POST: COMMON_BUTTON.COMMON.POST,
  CANCEL: COMMON_BUTTON.COMMON.CANCEL
}
