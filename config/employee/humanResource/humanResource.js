import {BUTTON as COMMON_BUTTON} from "../../../config/common.js"

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

    FAMILY_ID: "가족 번호",
    RELATIONSHIP: "가족 관계",
    SURVIVAL: "생존 여부",
    FAMILY_BIRTH_DATE: "가족 생일",
    FAMILY_NAME: "가족 이름"
  }
};
