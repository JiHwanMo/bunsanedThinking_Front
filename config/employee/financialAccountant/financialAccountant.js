import {BUTTON as COMMON_BUTTON} from "../../../config/common.js"

export const QUESTION= {
  CONFIRM_HANDLE_PAYMENT_DETAIL: "지급 처리하시겠습니까?"
}

export const BUTTON = {
  TASK: {
    EMPLOYEE: {
      FINANCIAL_ACCOUNTANT: {
        HOME: {
          HANDLE_PAYMENT_DETAIL: "지급 사항 처리",
          VIEW_DEPOSIT_DETAIL: "입금 사항 조회"
        },
        HANDLE_PAYMENT_DETAIL: {
          PAY: "지급",
          CANCEL: COMMON_BUTTON.COMMON.CANCEL
        }
      }
    }
  }
};

// export const POP_UP = {};
export const COMBOBOX = {
  HANDLE_PAYMENT_DETAIL: {
    isCombo: true,
    id: "processStatus",
    optionTypes: [
      {
        value: "all",
        label: "처리상태"
      },
      {
        value: "completed",
        label: "처리완료"
      },
      {
        value: "unprocessed",
        label: "미처리"
      }
    ]
  },
  VIEW_DEPOSIT_DETAIL: {
    isCombo: false
  }
};

export const COLUMN_NAME = {
  HANDLE_PAYMENT_DETAIL: {
    PAYMENT_DETAIL_ID: "지급 번호",
    PAYMENT_DETAIL_MONEY: "지급 금액",
    BANK_NAME: "은행 이름",
    ACCOUNT_HOLDER: "예금주",
    BANK_ACCOUNT: "지급 계좌 번호",
    PAYMENT_TYPE: "지급 형태",
    PROCESS_STATUS: "지급 상태"
  },
  VIEW_DEPOSIT_DETAIL: {
    DEPOSIT_DETAIL_ID: "입금 사항 번호",
    DEPOSITOR_NAME: "입금자 이름",
    DEPOSIT_DATE: "입금 날짜",
    DEPOSIT_MONEY: "입금 금액",
    DEPOSIT_PATH: "입금 경로"
  }
};

export const ELEMENT_ID= {
  EMPLOYEE_ID: "id"
}

export const TITLE= {
  HANDLE_PAYMENT_DETAIL: "입금 정보 리스트",
  VIEW_DEPOSIT_DETAIL: "입금 정보 리스트"
}

export const COMBO_BOX= {
  ALL: "all"
}

export const INFORMATION_TYPE= {
  HANDLE_PAYMENT_DETAIL: "HANDLE_PAYMENT_DETAIL",
  VIEW_DEPOSIT_DETAIL: "VIEW_DEPOSIT_DETAIL"
}
