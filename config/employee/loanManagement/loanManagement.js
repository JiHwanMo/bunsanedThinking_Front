import {BUTTON as COMMON_BUTTON} from "../../../config/common.js"

export const BUTTON = {
  TASK: {
    EMPLOYEE: {
      LOAN_MANAGEMENT: {
        HOME: {
          MANAGEMENT_LOAN_PRODUCT: '대출 상품 관리',
          LOAN_REQUEST: '대출금 요청'
        },
        MANAGEMENT_LOAN_PRODUCT: {
          UPDATE: COMMON_BUTTON.COMMON.UPDATE,
          DELETE: COMMON_BUTTON.COMMON.DELETE
        },
        LOAN_REQUEST: {
          REQUEST: '요청',
          DENIED: '거절',
          CANCEL: COMMON_BUTTON.COMMON.CANCEL
        }
      }
    }
  }
};

// export const POP_UP = {};
export const COMBOBOX = {
  MANAGEMENT_LOAN_PRODUCT: {
    isCombo: false
  },
  LOAN_REQUEST: {
    isCombo: true,
    id: "contractStatus",
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
