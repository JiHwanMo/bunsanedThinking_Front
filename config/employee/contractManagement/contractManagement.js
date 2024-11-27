import {BUTTON as COMMON_BUTTON} from "../../common.js";

export const BUTTON = {
  TASK: {
    CONTRACT_MANAGEMENT: {
      HOME: {
        DEFAULT_CONTRACT: '분납/수금 처리',
        RECONTRACT: '만기 계약 심사',
        ENDORSEMENT: '배서 심사',
        REVIVAL: '부활 심사',
        TERMINATION: '제지급금 지급 요청'
      },
      DEFAULT_CONTRACT: {
        NOTICE: "안내장 발송",
        CANCEL: COMMON_BUTTON.COMMON.CANCEL
      },
      RECONTRACT: {
        APPLY: "승인",
        DENY: "거절"
      },
      ENDORSEMENT: {
        APPLY: "승인",
        DENY: "거절"
      },
      REVIVAL: {
        APPLY: "승인",
        DENY: "거절"
      },
      TERMINATION: {
        REQUEST: "요청",
        CANCEL: COMMON_BUTTON.COMMON.CANCEL
      },
      INPUT: {

      }
    }
  }
};

// export const POP_UP = {};
export const COMBOBOX = {
  DEFAULT_CONTRACT: {
    isCombo: false
  },
  RECONTRACT: {
    isCombo: true,
    id: "recontractType",
    optionTypes: [
      {
        value: "all",
        label: "심사상태"
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
  ENDORSEMENT: {
    isCombo: true,
    id: "endorsementType",
    optionTypes: [
      {
        value: "all",
        label: "심사상태"
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
  REVIVAL: {
    isCombo: true,
    id: "revivalType",
    optionTypes: [
      {
        value: "all",
        label: "심사상태"
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
  TERMINATION: {
    isCombo: true,
    id: "terminationType",
    optionTypes: [
      {
        value: "all",
        label: "접수상태"
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
export const TABLE_TITLE = {
  DEFAULT_CONTRACT: "납부 대상 정보 리스트",
  RECONTRACT: "만기 대상 정보 리스트",
  ENDORSEMENT: "배서 신청 처리 정보 리스트",
  REVIVAL: "부활 대상 정보 리스트",
  TERMINATION: "해지 정보 리스트"
};
export const COLUMN_NAME = {
  DEFAULT_CONTRACT: [
    "계약번호",
    "이름",
    "전화번호",
    "성별",
    "주민등록번호",
    "주소",
    "상품 번호",
    "납부 날짜"
  ],
  RECONTRACT: [
    "계약번호",
    "이름",
    "전화번호",
    "성별",
    "주민등록번호",
    "주소",
    "상품 번호",
    "만기 날짜",
    "심사 상태"
  ],
  ENDORSEMENT: [
    "계약번호",
    "이름",
    "전화번호",
    "성별",
    "주민등록번호",
    "주소",
    "상품 번호",
    "신청 날짜",
    "심사 상태"
  ],
  REVIVAL: [
    "계약번호",
    "이름",
    "전화번호",
    "성별",
    "주민등록번호",
    "주소",
    "상품 번호",
    "정지 날짜",
    "심사 상태"
  ],
  TERMINATION: [
    "계약번호",
    "이름",
    "전화번호",
    "성별",
    "주민등록번호",
    "주소",
    "상품 번호",
    "해지 날짜",
    "접수 상태"
  ]
};

export const INPUT_LABEL = {

}

export const INFORMATION_TYPE = {
  DEFAULT_CONTRACT: "DEFAULT_CONTRACT",
  RECONTRACT: "RECONTRACT",
  ENDORSEMENT: "ENDORSEMENT",
  REVIVAL: "REVIVAL",
  TERMINATION: "TERMINATION"
}

export const COMBOLIST_FETCH_ALL = "all";

export const ACCIDENT_HISTORY_DETAIL_LABEL = {
  ID: "사고 이력 번호",
  ACCIDENT_DETAIL: "사고 내용",
  DATE: "사고 날짜"
}

export const SURGERY_HISTORY_DETAIL_LABEL = {
  ID: "질병 이력 번호",
  NAME: "수술명",
  HOSPITAL_NAME: "수술 병원",
  DATE: "수술 날짜"
}

export const CUSTOMER_LABEL = {
  NAME: "고객 이름",
  PHONE_NUMBER: "전화번호",
  JOB: "직업",
  AGE: "나이",
  GENDER: "성별",
  RESIDENT_REGISTRATION_NUMBER: "주민등록번호",
  ADDRESS: "주소",
  BANK_ACCOUNT: "계좌 번호",
  PROPERTY: "재산",
  ACCIDENT_HISTORY: "사고 이력",
  SURGERY_HISTORY: "수술 이력"
}

export const CONTRACT_LABEL = {
  PRODUCT_ID: "보험 상품 번호",
  LAST_PAID_DATE: "납부 날짜"
}

export const RECONTRACT_DETAIL_LABEL = {
  PRODUCT_ID: "보험 상품 번호",
  EXPIRATION_DATE: "만기 날짜",
  RECONTRACT_STATUS: "접수 상태"
}

export const ENDORSEMENT_DETAIL_LABEL = {
  PRODUCT_ID: "보험 상품 번호",
  APPLY_DATE: "신청 날짜",
  ENDORSEMENT_STATUS: "심사 상태"
}

export const REVIVAL_DETAIL_LABEL = {
  PRODUCT_ID: "보험 상품 번호",
  TERMINATION_DATE: "정지 날짜",
  REVIVAL_STATUS: "심사 상태"
}

export const TERMINATION_DETAIL_LABEL = {
  PRODUCT_ID: "보험 상품 번호",
  APPLY_DATE: "해지 날짜",
  TERMINATION_FEE: "제지급 금액",
  TERMINATION_STATUS: "심사 상태"
}

export const ALERT = {
  CONFIRM: {
    SEND_NOTICE: "안내장을 발송하겠습니까?",
    REVIEW_RECONTRACT: "정말로 승인하겠습니까?",
    REVIEW_ENDORSEMENT: "정말로 승인하겠습니까?",
    REVIEW_REVIVAL: "정말로 승인하겠습니까?",
    REQUEST_TERMINATION_FEE: "정말로 승인하겠습니까?"
  },
  OK: {
    SEND_NOTICE: "안내장 발송이 완료되었습니다.",
    REVIEW_RECONTRACT: "승인이 완료되었습니다",
    REVIEW_ENDORSEMENT: "승인이 완료되었습니다",
    REVIEW_REVIVAL: "승인이 완료되었습니다",
    REQUEST_TERMINATION_FEE: "승인이 완료되었습니다"
  },
  CONFIRM_DENY: {
    REVIEW_RECONTRACT: "정말로 거절하겠습니까?",
    REVIEW_ENDORSEMENT: "정말로 거절하겠습니까?",
    REVIEW_REVIVAL: "정말로 거절하겠습니까?"
  },
  DENY: {
    REVIEW_RECONTRACT: "거절이 완료되었습니다",
    REVIEW_ENDORSEMENT: "거절이 완료되었습니다",
    REVIEW_REVIVAL: "거절이 완료되었습니다"
  }
}
