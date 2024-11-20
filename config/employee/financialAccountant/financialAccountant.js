import {BUTTON as COMMON_BUTTON} from "../../../config/common.js"

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
  }
};
// export const COLUMN_NAME = {};
