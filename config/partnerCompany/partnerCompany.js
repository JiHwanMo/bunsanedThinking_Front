import { BUTTON as COMMON_BUTTON } from '../common.js'

export const BUTTON = {
  TASK: {
    PARTNERCOMPANY: {
      HOME: {
        REPORT_LIST: '손해 예상 금액 입력',
      },
      REPORT_DETAIL: {
        UPDATE: COMMON_BUTTON.COMMON.UPDATE
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

export const DETAIL_COLUMN_NAME = {
  REPORT_LIST: {
    ACCIDENT_ID: "사고 번호",
    DAMAGE_ASSESSMENT_MONEY: "손해 사정 금액"
  }
}

export const ELEMENT_ID = {
  ACCIDENT_ID: "accidentId",
  DAMAGE_ASSESSMENT_MONEY: "damageAssessmentMoney"
}

export const POP_UP = {
  UPDATE: {
    QUESTION: "수정하시겠습니까?",
    OK: "수정이 완료되었습니다.",
    ERROR: "수정 중 오류가 발생했습니다.",
    VALIDATION_ERROR: "잘못된 정보를 입력하였습니다. 다시 입력해주세요.",
    CONSOLE_ERROR: "수정 중 오류 발생 :"
  },
  CONSOLE_ERROR: {
    SELECTED_DATA_ID: "No selected data ID found.",
    SELECTED_DATA: "No data fetched for the selected ID."
  }
}

export const TYPE = {
  REPORT_DETAIL: "REPORT_DETAIL",
  REPORT_LIST: "REPORT_LIST"
}

export const ACTION = {
  FUNCTION: "function"
}

export const REPORT_FORM = {
  ACCIDENT_FORM: {
    FOR: "accidentId",
    TYPE: "text",
    ID: "accidentId",
    NAME: "accidentId"
  },
  DAMAGE_ASSESSMENT_MONEY_FORM: {
    FOR: "damageAssessmentMoney",
    TYPE: "text",
    ID: "damageAssessmentMoney",
    NAME: "damageAssessmentMoney"
  }
}

export const MESSAGES = {
  PLACE_HOLDER: {
    UPDATE: "수정할 값을 입력하세요"
  }
}
