import { BUTTON as COMMON_BUTTON } from '../common.js'

export const BUTTON = {
  TASK: {
    PARTNERCOMPANY: {
      HOME: {
        REPORT_LIST: '손해 예상 금액 입력',
      },
      REPORT_DETAIL: {
        UPDATE: COMMON_BUTTON.COMMON.UPDATE,
        DELETE: COMMON_BUTTON.COMMON.DELETE
      }
    }
  }
};

export const COMBOBOX = {
  REPORT_LIST: {
    isCombo: false // 콤보박스가 없음을 명시
  }
};

export const TABLE_TITLE = {
  REPORT_LIST: "사고 번호 리스트"
};

export const COLUMN_NAME = {
  REPORT_LIST: [
    "사고 번호"
  ]
};
