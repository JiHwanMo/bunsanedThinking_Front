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
