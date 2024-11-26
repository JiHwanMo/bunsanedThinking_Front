import {BUTTON as COMMON_BUTTON} from "../../../config/common.js"

export const MESSAGES= {
  SELECT_LOAN_TYPE: "대출 종류를 선택하세요"
}

export const QUESTION= {
  CONFIRM_POST: "정말 등록하시겠습니까?",
  CONFIRM_UPDATE: "정말 수정하시겠습니까?",
  CONFIRM_DELETE: "정말 삭제하시겠습니까?",
  CONFIRM_REQUEST_LOAN: "정말 처리하시겠습니까?",
  CONFIRM_DENIED_LOAN_REQUEST: "정말 거절하시겠습니까?"
}

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
export const COLUMN_NAME= {
  LOAN_REQUEST: {
    CONTRACT_ID: "계약 번호",
    CUSTOMER_NAME: "고객 이름",
    PHONE_NUMBER: "전화번호",
    JOB: "직업",
    AGE: "나이",
    GENDER: "성별",
    RESIDENT_REGISTRATION_NUMBER: "주민등록번호",
    PROPERTY: "재산",
    ADDRESS: "주소",
    ACCIDENT_HISTORY: "사고 이력",
    SURGERY_HISTORY: "수술 이력",
    DISEASE_HISTORY: "질병 이력",
    BANK_ACCOUNT: "계좌 번호",
    BANK_NAME: "은행 이름",
    LOAN_NAME: "대출 상품 이름",
    LOAN_TYPE: "대출 종류",
    LOAN_ID: "대출 상품 번호",
    INTEREST_RATE: "이자율",
    MAXIMUM_MONEY: "대출가능 최대 금액",
    MINIMUM_ASSET: "최소 자산",
    CONTRACT_STATUS: "처리 상태",

    ACCIDENT_HISTORY_DETAIL: {
      ID: "사고 이력 번호",
      ACCIDENT_DETAIL: "사고 내용",
      DATE: "사고 날짜"
    },

    DISEASE_HISTORY_DETAIL: {
      ID: "질병 이력 번호",
      NAME: "병명",
      DATE_OF_DIAGNOSIS: "진단 날짜"
    },

    SURGERY_HISTORY_DETAIL: {
      ID: "수술 이력 번호",
      NAME: "수술명",
      HOSPITAL_NAME: "수술 병원",
      DATE: "수술 날짜"
    }
  }
}

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
        LABEL: "담보 대출",
        COLLATERAL_TYPE: "담보 종류",
        MINIMUM_VALUE: "담보 최소 가치"
      },
      FIXED_DEPOSIT: {
        LABEL: "정기 예금 대출",
        MINIMUM_AMOUNT: "최소 예금"
      },
      INSURANCE_CONTRACT: {
        LABEL: "보험 계약 대출",
        INSURANCE_ID: "보험 상품 번호"
      }
    }
  },
  LOAN_REQUEST: {
    PAYMENT_TYPE: "지급 형태",
    MONEY: "지급 금액"
  }
};

export const SELECTED_BUTTON_TYPE= {
  UPDATE: "UPDATE",
  LOAN_REQUEST: "LOAN_REQUEST",
  POST: "POST"
}

export const ELEMENT_ID= {
  MONEY: "money",
  PAYMENT_TYPE: "paymentType",
  LOAN_TYPE: "loanType",
  LOAN_NAME: "name",
  INTEREST_RATE: "interestRate",
  MAXIMUM_MONEY: "maximumMoney",
  MINIMUM_ASSET: "minimumAsset",

  COLLATERAL: {
    COLLATERAL_TYPE: "collateralType",
    MINIMUM_VALUE: "minimumValue"
  },

  FIXED_DEPOSIT: {
    MINIMUM_AMOUNT: "minimumAmount"
  },

  INSURANCE_CONTRACT: {
    INSURANCE_ID: "insuranceId"
  },

  LOAN_TYPE_CONTAINER: "loanTypeContainer"
}

export const LOAN_TYPE= {
  COLLATERAL: "담보",
  FIXED_DEPOSIT: "정기 예금",
  INSURANCE_CONTRACT: "보험 계약"
}

export const KEY= {
  SELECTED_DATA_TYPE: "selectedDataType"
}

export const INFORMATION_TYPE= {
  MANAGEMENT_LOAN_PRODUCT: "MANAGEMENT_LOAN_PRODUCT",
  LOAN_REQUEST: "LOAN_REQUEST"
}

export const TITLE= {
  MANAGEMENT_LOAN_PRODUCT: "대출 상품 정보 리스트",
  LOAN_REQUEST: "대출 신청 정보 리스트"
}

export const COMBO_BOX= {
  ALL: "all"
}

export const LABEL= {
  LOAN_NAME: "NAME",
  INTEREST_RATE: "INTEREST_RATE",
  MAXIMUM_MONEY: "MAXIMUM_MONEY",
  MINIMUM_ASSET: "MINIMUM_ASSET"
}
