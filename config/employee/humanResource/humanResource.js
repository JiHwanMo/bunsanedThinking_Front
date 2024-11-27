import {BUTTON as COMMON_BUTTON} from "../../../config/common.js"

export const QUESTION= {
  CONFIRM_DELETE_EMPLOYEE: "정말 삭제하시겠습니까?",
  CONFIRM_POST_EMPLOYEE: "정말 등록하시겠습니까?",
  CONFIRM_UPDATE_EMPLOYEE: "정말 수정하시겠습니까?"
}

export const BUTTON = {
  TASK: {
    EMPLOYEE: {
      HUMAN_RESOURCE: {
        HOME: {
          MANAGEMENT_EMPLOYEE: "직원 정보 관리"
        },
        MANAGEMENT_EMPLOYEE: {
          UPDATE: COMMON_BUTTON.COMMON.UPDATE,
          DELETE: COMMON_BUTTON.COMMON.DELETE
        }
      }
    }
  }
};

// export const POP_UP = {};
export const COMBOBOX = {
  MANAGEMENT_EMPLOYEE: {
    isCombo: false
  }
};

export const DETAIL_COLUMN_NAME = {
  MANAGEMENT_EMPLOYEE: {
    ID: "직원 번호",
    NAME: "직원 이름",
    RESIDENT_REGISTRATION_NUMBER: "주민등록번호",
    EMPLOYMENT_DATE: "입사일",
    ADDRESS: "주소",
    PHONE_NUMBER: "전화번호",
    SALARY: "급여",
    BANK_NAME: "은행명",
    BANK_ACCOUNT: "계좌번호",
    POSITION: "직급",
    DEPARTMENT_ID: "부서 번호",
    DEPARTMENT: "부서",

    FAMILY: "가족",
    FAMILY_ID: "가족 번호",
    RELATIONSHIP: "가족 관계",
    SURVIVAL: "생존 여부",
    FAMILY_BIRTH_DATE: "가족 생일",
    FAMILY_NAME: "가족 이름"
  }
};

export const SELECTED_BUTTON_TYPE= {
  POST: "POST",
  UPDATE: "UPDATE"
}

export const ELEMENT_ID= {
  ID: "id",
  DEPARTMENT_ID: "departmentId",
  NAME: "name",
  EMPLOYEE_POSITION: "position",
  ADDRESS: "address",
  PHONE_NUMBER: "phoneNumber",
  BANK_NAME: "bankName",
  BANK_ACCOUNT: "bankAccount",
  RESIDENT_REGISTRATION_NUMBER: "residentRegistrationNumber",
  SALARY: "salary",
  EMPLOYMENT_DATE: "employmentDate",

  FAMILY: "family",

  FAMILY_DETAIL: {
    ID: "familyId",
    BIRTH_DATE: "familyBirthDate",
    NAME: "familyName",
    RELATIONSHIP: "relationship",
    SURVIVAL: "survival"
  },

  CONTAINER: "Container",
  INPUT: "Input"
}

export const INFORMATION_TYPE= {
  MANAGEMENT_EMPLOYEE: "MANAGEMENT_EMPLOYEE"
}

export const TITLE= {
  MANAGEMENT_EMPLOYEE: "직원 정보 리스트",
  FAMILY: "가족"
}

export const FAMILY_RESPONSE = {
  SURVIVAL: "생존",
  DECEASE: "사망",
  MOTHER: "엄마",
  FATHER: "아빠",
  SISTER: "여형제",
  BROTHER: "남형제",
  SON: "아들",
  DAUGHTER: "딸"
}

export const COMBO_BOX= {
  ALL: "all"
}

export const LABEL= {
  NAME: "NAME",
  ADDRESS: "ADDRESS",
  PHONE_NUMBER: "PHONE_NUMBER",
  BANK_NAME: "BANK_NAME",
  BANK_ACCOUNT: "BANK_ACCOUNT",
  RESIDENT_REGISTRATION_NUMBER: "RESIDENT_REGISTRATION_NUMBER",
  SALARY: "SALARY",
  EMPLOYMENT_DATE: "EMPLOYMENT_DATE",

  FAMILY_BIRTH_DATE: "FAMILY_BIRTH_DATE",
  FAMILY_NAME: "FAMILY_NAME"
}

export const POSITION= {
  INTERN: "Intern",
  STAFF: "Staff",
  SENIOR_STAFF: "SeniorStaff",
  MANAGER: "Manager",
  DEPUTY_GENERAL_MANAGER: "DeputyGeneralManager",
  GENERAL_MANAGER: "GeneralManager",
}

export const POSITION_LABEL= {
  INTERN: "인턴",
  STAFF: "사원",
  SENIOR_STAFF: "주임",
  MANAGER: "과장",
  DEPUTY_GENERAL_MANAGER: "차장",
  GENERAL_MANAGER: "부장"
}

export const DTO_NAME= {
  FAMILY_BIRTH_DATE: "birthDate",
  FAMILY_NAME: "name"
}
