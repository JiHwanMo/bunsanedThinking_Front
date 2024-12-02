import { BUTTON as COMMON_BUTTON } from '../../common.js'

export const BUTTON = {
   TASK: {
    EMPLOYEE: {
      CUSTOMERINFORMATIONMANAGEMENT: {
        HOME: {
          CUSTOMERINFORMATION_LIST: '고객 정보 관리'
        },
        CUSTOMERINFORMATION_DETAIL:{
          UPDATE: COMMON_BUTTON.COMMON.UPDATE,
          DELETE: COMMON_BUTTON.COMMON.DELETE
        }
      }
    }
  }
};

export const COMBOBOX = {
  CUSTOMERINFORMATION_LIST: {
    isCombo: false
  }
};

export const TABLE_TITLE = {
  CUSTOMERINFORMATION_LIST: "고객 정보 리스트"
};

export const COLUMN_NAME = {
  CUSTOMERINFORMATION_LIST: [
    "고객 이름",
    "전화 번호",
    "직업",
    "나이",
    "성별",
    "주민등록번호",
    "주소",
    "은행명",
    "계좌 번호",
    "고객 번호"
  ]
};

export const DETAIL_COLUMN_NAME = {
  CUSTOMER_LIST: {
    ID: "고객 번호",
    NAME: "이름",
    PHONE_NUMBER: "전화번호",
    JOB: "직업",
    AGE: "나이",
    GENDER: "성별",
    RESIDENT_REGISTRATION_NUMBER: "주민등록번호",
    ADDRESS: "주소",
    PROPERTY: "재산",
    ACCIDENT_HISTORY: "사고 이력",
    SURGERY_HISTORY: "수술 이력",
    DISEASE_HISTORY: "병력",
    BANK_NAME: "은행명",
    BANK_ACCOUNT: "계좌 번호"
  }
};

export const POP_UP = {
  UPDATE: {
    QUESTION: "수정하시겠습니까?",
    OK: "수정이 완료되었습니다.",
    ERROR: "수정 중 오류가 발생했습니다.",
    VALIDATION_ERROR: "잘못된 정보를 입력하였습니다. 다시 입력해주세요.",
    CONSOLE_ERROR: "수정 중 오류 발생 :"
  },
  DELETE: {
    QUESTION: "삭제하시겠습니까?",
    OK: "삭제가 완료되었습니다.",
    ERROR: "삭제 중 오류가 발생했습니다.",
    CONSOLE_ERROR: "삭제 중 오류 발생 :"
  },
  POST: {
    QUESTION: "등록하시겠습니까?",
    OK: "등록이 완료되었습니다.",
    ERROR: "등록 중 오류가 발생했습니다.",
    VALIDATION_ERROR: "잘못된 정보를 입력하였습니다. 다시 입력해주세요.",
    CONSOLE_ERROR: "등록 중 오류 발생 :"
  }
};

export const VALUE = {
  POST: "POST",
  UPDATE: "UPDATE"
};

export const ELEMENT_ID = {
  NAME: "name",
  PHONE_NUMBER: "phoneNumber",
  JOB: "job",
  AGE: "age",
  GENDER: "gender",
  RESIDENT_REGISTRATION_NUMBER: "residentRegistrationNumber",
  ADDRESS: "address",
  PROPERTY: "property",
  BANK_NAME: "bankName",
  BANK_ACCOUNT: "bankAccount",
  INDEX: "index",
  INPUT: "input",
  HISTORY_ID: "historyId",
  ACCIDENT_DATE: "accidentDate",
  ACCIDENT_DETAIL: "accidentDetail",
  SURGERY_DATE: "surgeryDate",
  HOSPITAL_NAME: "hospitalName",
  SURGERY_NAME: "surgeryName",
  DISEASE_DATE: "diseaseDate",
  DISEASE_NAME: "diseaseName",
  ADD_ACCIDENT_HISTORY_BUTTON: "addAccidentHistoryButton",
  ADD_SURGERY_HISTORY_BUTTON: "addSurgeryHistoryButton",
  ADD_DISEASE_HISTORY_BUTTON: "addDiseaseHistoryButton",
  HISTORY_FIELDS: "historyFields",
  ACCIDENT_FIELDS: "accidentFields",
  SURGERY_FIELDS: "surgeryFields",
  DISEASE_FIELDS: "diseaseFields",
  ACCIDENT_HISTORY_CONTAINER: "accidentHistoryContainer",
  SURGERY_HISTORY_CONTAINER: "surgeryHistoryContainer",
  DISEASE_HISTORY_CONTAINER: "diseaseHistoryContainer"
};

export const ACCIDENT_HISTORY_LIST = {
  DATE: "date",
  ACCIDENT_DETAIL: "accidentDetail",
  LABEL_ID: "사고 이력 번호",
  LABEL_ACCIDENT_DETAIL: "사고 내용",
  LABEL_DATE: "사고 날짜"
}

export const SURGERY_HISTORY_LIST = {
  DATE: "date",
  HOSPITAL_NAME: "hospitalName",
  NAME: "name",
  LABEL_ID: "수술 이력 번호",
  LABEL_NAME: "수술명",
  LABEL_HOSPITAL_NAME: "병원 이름",
  LABEL_DATE: "수술 날짜"
}

export const DISEASE_HISTORY_LIST = {
  DATE_OF_DIAGNOSIS: "dateOfDiagnosis",
  NAME: "name",
  LABEL_ID: "질병 이력 번호",
  LABEL_NAME: "질병명",
  LABEL_DATE_OF_DIAGNOSIS: "진단 날짜"
}

export const TYPE = {
  CUSTOMERINFORMATION_DETAIL: "CUSTOMERINFORMATION_DETAIL",
  CUSTOMERINFORMATION_LIST: "CUSTOMERINFORMATION_LIST"
}

export const CLASS = {
  COMBO_BOX: "combo-box",
  POST_BUTTON: "postButton",
  SELECTED: "selected",
  ACCIDENT_HISTORY_ENTRY: "accident-history-entry",
  SURGERY_HISTORY_ENTRY: "surgery-history-entry",
  DISEASE_HISTORY_ENTRY: "disease-history-entry",
  FORM_GROUP_BASIC_INPUT_CONTAINER: "\"form-group basic-input-container\"",
  HIDDEN: "hidden",
  BASIC_INPUT_CONTAINER: "basic-input-container"
}

export const CLASS_SELECTOR = {
  BASIC_INPUT_CONTAINER: ".basic-input-container",
  ACCIDENT_HISTORY_ENTRY: ".accident-history-entry",
  SURGERY_HISTORY_ENTRY: ".surgery-history-entry",
  DISEASE_HISTORY_ENTRY: ".disease-history-entry",
  REMOVE_BUTTON: ".remove-button"
}

export const token = {
  HIDDEN: "hidden"
}

export const MESSAGES = {
  NONE: "없음",
  PLACE_HOLDER: {
    UPDATE_INPUT: "\"수정할 값을 입력하세요\"",
    POST_INPUT: "을(를) 입력하세요",
    ACCIDENT_DATE: "날짜를 입력하세요",
    ACCIDENT_DETAIL: "사고 내용을 입력하세요",
    SURGERY_DATE: "날짜를 입력하세요",
    HOSPITAL_NAME: "병원 이름을 입력하세요",
    SURGERY_NAME: "수술명을 입력하세요",
    DISEASE_DATE: "진단 날짜를 입력하세요",
    DISEASE_NAME: "질병명을 입력하세요"
  }
}

export const POST_FORM = {
  NAME_FORM: {
    FOR: "name",
    TYPE: "text",
    ID: "name",
    NAME: "name"
  },
  PHONE_NUMBER_FORM: {
    FOR: "phoneNumber",
    TYPE: "text",
    ID: "phoneNumber",
    NAME: "phoneNumber"
  },
  JOB_FORM: {
    FOR: "job",
    TYPE: "text",
    ID: "job",
    NAME: "job"
  },
  AGE_FORM: {
    FOR: "age",
    TYPE: "number",
    ID: "age",
    NAME: "age"
  },
  GENDER_FORM: {
    FOR: "gender",
    TYPE: "text",
    ID: "gender",
    NAME: "gender"
  },
  RESIDENT_REGISTRATION_NUMBER_FORM: {
    FOR: "residentRegistrationNumber",
    TYPE: "text",
    ID: "residentRegistrationNumber",
    NAME: "residentRegistrationNumber"
  },
  ADDRESS_FORM: {
    FOR: "address",
    TYPE: "text",
    ID: "address",
    NAME: "address"
  },
  PROPERTY_FORM: {
    FOR: "property",
    TYPE: "number",
    ID: "property",
    NAME: "property"
  },
  BANK_NAME_FORM: {
    FOR: "bankName",
    TYPE: "text",
    ID: "bankName",
    NAME: "bankName"
  },
  BANK_ACCOUNT_FORM: {
    FOR: "bankAccount",
    TYPE: "text",
    ID: "bankAccount",
    NAME: "bankAccount"
  },
  ACCIDEN_HISTORY_FORM: {
    ID: "accidentHistoryContainer",
    BUTTON : {
      TYPE: "button",
      ID: "addAccidentHistoryButton"
    }
  },
  SURGERY_HISTORY_FORM: {
    ID: "surgeryHistoryContainer",
    BUTTON: {
      TYPE: "button",
      ID: "addSurgeryHistoryButton"
    }
  },
  DISEASE_HISTORY_FORM: {
    ID: "diseaseHistoryContainer",
    BUTTON: {
      TYPE: "button",
      ID: "addDiseaseHistoryButton"
    }
  }
}

export const UPDATE_FORM = {
  ID_FORM: {
    FOR: "id",
    TYPE: "text",
    ID: "id",
    NAME: "id"
  },
  RESIDENT_REGISTRATION_NUMBER_FORM: {
    FOR: "resident_registration_number",
    TYPE: "text",
    ID: "resident_registration_number",
    NAME: "resident_registration_number"
  },
  INDEX_CONTAINER: {
    FOR: "index",
    ID: "index",
    NAME: "index",
    OPTION_VALUE: {
      ONE: "1",
      TWO: "2",
      THREE: "3",
      FOUR: "4",
      FIVE: "5",
      SIX: "6",
      SEVEN: "7",
      EIGHT: "8",
      NINE: "9",
      TEN: "10",
      ELEVEN: "11",
      TWELVE: "12"
    }
  },
  INPUT_CONTAINER: {
    FOR: "input",
    TYPE: "text",
    ID: "input",
    NAME: "input"
  },
  FIELDS: {
    HISTORY_FIELDS_ID: "historyFields",
    ACCIDENT_FIELDS_ID: "accidentFields",
    SURGERY_FIELDS_ID: "surgeryFields",
    DISEASE_FIELDS_ID: "diseaseFields"
  },
  HISTORY_FIELDS: {
    FOR: "historyId",
    TYPE: "number",
    ID: "historyId",
    NAME: "historyId",
    MESSAGES: {
      PLACE_HOLDER: "이력 ID를 입력하세요"
    }
  },
  ACCIDENT_FIELDS: {
    ACCIDENT_DATE:{
      FOR: "accidentDate",
      TYPE: "date",
      ID: "accidentDate",
      NAME: "accidentDate"
    },
    ACCIDENT_DETAIL:{
      FOR: "accidentDetail",
      TYPE: "text",
      ID: "accidentDetail",
      NAME: "accidentDetail",
      MESSAGES:{
        PLACE_HOLDER: "사고 내용을 입력하세요"
      }
    }
  },
  SURGERY_FIELDS: {
    SURGERY_DATE: {
      FOR: "surgeryDate",
      TYPE: "date",
      ID: "surgeryDate",
      NAME: "surgeryDate"
    },
    HOSPITAL_NAME: {
      FOR: "hospitalName",
      TYPE: "text",
      ID: "hospitalName",
      NAME: "hospitalName",
      MESSAGES: {
        PLACE_HOLDER: "병원 이름을 입력하세요"
      }
    },
    SURGERY_NAME: {
      FOR: "surgeryName",
      TYPE: "text",
      ID: "surgeryName",
      NAME: "surgeryName",
      MESSAGES: {
        PLACE_HOLDER: "수술명을 입력하세요"
      }
    }
  },
  DISEASE_FIELDS: {
    DISEASE_DATE: {
      FOR: "diseaseDate",
      TYPE: "date",
      ID: "diseaseDate",
      NAME: "diseaseDate"
    },
    DISEASE_NAME: {
      FOR: "diseaseName",
      TYPE: "text",
      ID: "diseaseName",
      NAME: "diseaseName",
      MESSAGES: {
        PLACE_HOLDER: "질병명을 입력하세요"
      }
    }
  }
}

export const ADD_ACCIDENT_HISTORY = {
  ACCIDENT_DATE: {
    TYPE: "date",
    NAME: "date",
  },
  ACCIDENT_DETAIL: {
    TYPE: "text",
    NAME: "accidentDetail"
  },
  TYPE: "button"
}

export const ADD_SURGERY_HISTORY = {
  SURGERY_DATE: {
    TYPE: "date",
    NAME: "date"
  },
  HOSPITAL_NAME: {
    TYPE: "text",
    NAME: "hospitalName"
  },
  SURGERY_NAME: {
    TYPE: "text",
    NAME: "name"
  },
  TYPE: "button"
}

export const ADD_DISEASE_HISTORY = {
  DISEASE_DATE: {
    TYPE: "date",
    NAME: "dateOfDiagnosis"
  },
  DISEASE_NAME: {
    TYPE: "text",
    NAME: "name"
  },
  TYPE: "button"
}


