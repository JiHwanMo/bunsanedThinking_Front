import {BUTTON as COMMON_BUTTON} from "../../../config/common.js"

export const BUTTON = {
  TASK: {
    EMPLOYEE: {
      CUSTOMER_SUPPORT: {
        HOME: {
          HANDLE_REPORT: "신고 처리",
          HANDLE_COMPLAINT: "민원 처리"
        },
        HANDLE_REPORT: {
          HANDLE_REPORT: "접수",
          CANCEL_REPORT: COMMON_BUTTON.COMMON.CANCEL
        },
        HANDLE_COMPLAINT: {
          HANDLE_COMPLAINT: "접수",
          CANCEL_COMPLAINT: COMMON_BUTTON.COMMON.CANCEL
        }
      }
    }
  }
};

// export const POP_UP = {};
export const COMBOBOX = {
  HANDLE_REPORT: {
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
      },
      {
        value: "processing",
        label: "처리중"
      }
    ]
  },
  HANDLE_COMPLAINT: {
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
