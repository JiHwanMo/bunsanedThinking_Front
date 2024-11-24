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

export const DETAIL_COLUMN_NAME = {
  MANAGEMENT_LOAN_PRODUCT: {
    ID: "대출 상품 번호",
    NAME: "대출 상품 이름",
    LOAN_TYPE: "대출 종류",
    INTEREST_RATE: "이자율",
    MAXIMUM_MONEY: "대출 가능 최대 금액",
    MINIMUM_ASSET: "최소 자산",

    TYPE: {
      COLLATERAL: {
        COLLATERAL_TYPE: "담보 종류",
        MINIMUM_VALUE: "담보 최소 가치"
      },
      FIXED_DEPOSIT: {
        MINIMUM_AMOUNT: "최소 예금"
      },
      INSURANCE_CONTRACT: {
        INSURANCE_ID: "보험 상품 번호"
      }
    }
  },
  LOAN_REQUEST: {
    PAYMENT_TYPE: "지급 형태",
    MONEY: "지급 금액"
  }
};
