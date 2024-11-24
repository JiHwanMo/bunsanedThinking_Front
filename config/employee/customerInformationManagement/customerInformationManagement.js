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
    ID: '고객 번호',
    NAME: '이름',
    PHONE_NUMBER: '전화번호',
    JOB: '직업',
    AGE: '나이',
    GENDER: '성별',
    RESIDENT_REGISTRATION_NUMBER: '주민등록번호',
    ADDRESS: '주소',
    PROPERTY: '재산',
    ACCIDENT_HISTORY: '사고 이력',
    SURGERY_HISTORY: '수술 이력',
    DISEASE_HISTORY: '병력',
    BANK_NAME: '은행명',
    BANK_ACCOUNT: '계좌 번호'
  }
};
