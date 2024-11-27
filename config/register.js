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
    placeholder: "고객 이름",
    exception: "이름을 한 글자 이상 입력해주세요"
  },
  AGE: {
    isTextArea: false,
    for: "age",
    label: "AGE",
    type: "number",
    id: "age",
    name: "age",
    placeholder: "고객 나이",
    exception: "나이를 다시 입력해주세요"
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
    ],
    placeholder: "성별",
    exception: "남자 및 여자 중에서 선택해 주세요"
  },
  ADDRESS: {
    isTextArea: false,
    for: "address",
    label: "ADDRESS",
    type: "text",
    id: "address",
    name: "address",
    placeholder: "주소",
    exception: "주소를 한 글자 이상 입력해주세요"
  },
  PHONE_NUMBER: {
    isTextArea: false,
    for: "phoneNumber",
    label: "PHONE_NUMBER",
    type: "text",
    id: "phoneNumber",
    name: "phoneNumber",
    placeholder: "전화번호",
    exception: "전화번호를 한 글자 이상 입력해주세요"
  },
  RESIDENT_REGISTRATION_NUMBER: {
    isTextArea: false,
    for: "residentRegistrationNumber",
    label: "RESIDENT_REGISTRATION_NUMBER",
    type: "text",
    id: "residentRegistrationNumber",
    name: "residentRegistrationNumber",
    placeholder: "주민등록번호",
    exception: "주민등록번호를 한 글자 이상 입력해주세요"
  },
  JOB: {
    isTextArea: false,
    for: "job",
    label: "JOB",
    type: "text",
    id: "job",
    name: "job",
    placeholder: "직업",
    exception: "직업을 한 글자 이상 입력해주세요"
  },
  BANK_ACCOUNT: {
    isTextArea: false,
    for: "bankAccount",
    label: "BANK_ACCOUNT",
    type: "text",
    id: "bankAccount",
    name: "bankAccount",
    placeholder: "은행 계좌",
    exception: "계좌번호를 한 글자 이상 입력해주세요"
  },
  BANK_NAME: {
    isTextArea: false,
    for: "bankName",
    label: "BANK_NAME",
    type: "text",
    id: "bankName",
    name: "bankName",
    placeholder: "은행 이름",
    exception: "은행 이름을 한 글자 이상 입력해주세요"
  },
  PROPERTY: {
    isTextArea: false,
    for: "property",
    label: "PROPERTY",
    type: "number",
    id: "property",
    name: "property",
    placeholder: "자산",
    exception: "자산을 다시 이상 입력해주세요"
  }
}

export const SIGNUP_MESSAGE = {
  CONFIRM: "회원가입 하시겠습니까?",
  OK: "회원가입이 완료되었습니다."
}

export const CONTAINER_KEY = "Container";

export const CLASS_REGISTER = {
  DYNAMIC_SECTION: "dynamic-section",
  SECTION_HEADER: "section-header",
  ADD_BUTTON: "add-button",
  REMOVE_BUTTON: "remove-button",
  INPUT_FIELD: "input-field",
  GENDER_BUTTON: "gender-button"
}

export const CLASS_SELECTOR_REGISTER = {
  GENDER_BUTTON: ".gender-button"
}

export const TEXT_CONTANT = {
  PLUS: "+",
  MINUS: "-"
}

export const FIELD_NAME_KEY = {
  DATE: "date",
  DATE_OF_DIAGNOSIS: "dateOfDiagnosis"
}

export const PLACE_HOLDER = {
  DEFAULT: "입력",
  DATE: "날짜"
}

export const DYNAMIC_SECTION_FORM = {
  ACCIDENT_HISTORY: {
    sectionTitle: "사고 이력",
    sectionId: "accidentHistory",
    fieldNames: {
      date: FIELD_NAME_KEY.DATE,
      accidentDetail: "사고 내역"
    }
  },
  SURGERY_HISTORY: {
    sectionTitle: "수술 이력",
    sectionId: "surgeryHistory",
    fieldNames: {
      date: FIELD_NAME_KEY.DATE,
      hospitalName: "병원 이름",
      name: "수술 이름"
    }
  },
  DISEASE_HISTORY: {
    sectionTitle: "질병 이력",
    sectionId: "diseaseHistory",
    fieldNames: {
      dateOfDiagnosis: FIELD_NAME_KEY.DATE_OF_DIAGNOSIS,
      name: "질병 이름"
    }
  }
}

export const BUTTON = {
  POST: COMMON_BUTTON.COMMON.POST,
  CANCEL: COMMON_BUTTON.COMMON.CANCEL
}
