import {BUTTON as COMMON_BUTTON} from '../common.js';

export const BUTTON = {
  TASK: {
    CUSTOMER: {
      HOME: {
        PRODUCT_LIST: '상품 리스트',
        MANAGEMENT_CONTRACT: '기가입 보험 관리',
        VIEW_ACCIDENT: '사고 신고',
        VIEW_COMPLAINT: '민원 신청'
      },
      PRODUCT_LIST: {
        INSURANCE_LIST: '보험 상품 리스트',
        LOAN_LIST: '대출 상품 리스트'
      },
      MANAGEMENT_CONTRACT: {
        RECONTRACT: "만기 재가입 신청",
        REVIVAL: "부활 신청",
        TERMINATION: "해지 신청",
        ENDORSEMENT: "배서 신청",
        PAY_INSURANCE_FEE: "보험료 납부",
        RECEIVE_INSURANCE: "보험금 신청"
      },
      INSURANCE_LIST: {
        COUNSEL: "상담 신청",
        BUY_INSURANCE: "보험 가입 신청"
      },
      LOAN_LIST: {
        APPLY: "신청",
        CANCEL: COMMON_BUTTON.COMMON.CANCEL
      },
      INPUT: {
        APPLY_ENDORSEMENT: {
          OK: COMMON_BUTTON.COMMON.OK,
          CANCEL: COMMON_BUTTON.COMMON.CANCEL
        },
        PAY_INSURANCE_FEE: {
          OK: COMMON_BUTTON.COMMON.OK,
          CANCEL: COMMON_BUTTON.COMMON.CANCEL
        },
        RECEIVE_INSURANCE: {
          OK: COMMON_BUTTON.COMMON.OK,
          CANCEL: COMMON_BUTTON.COMMON.CANCEL
        },
        ASK_INSURANCE_COUNSEL: {
          OK: "상담 신청",
          CANCEL: COMMON_BUTTON.COMMON.CANCEL
        },
        ADD_ACCIDENT: {
          POST: COMMON_BUTTON.COMMON.POST,
          CANCEL: COMMON_BUTTON.COMMON.CANCEL
        },
        ADD_COMPLAINT: {
          POST: COMMON_BUTTON.COMMON.POST,
          CANCEL: COMMON_BUTTON.COMMON.CANCEL
        }
      }
    }
  }
};

// export const POP_UP = {};
export const COMBOBOX = {
  MANAGEMENT_CONTRACT: {
    isCombo: true,
    id: "contractType",
    optionTypes: [
      {
        value: "all",
        label: "보험종류"
      },
      {
        value: "injury",
        label: "상해보험"
      },
      {
        value: "automobile",
        label: "자동차보험"
      },
      {
        value: "disease",
        label: "질병보험"
      }
    ]
  },
  VIEW_ACCIDENT: {
    isCombo: false
  },
  VIEW_COMPLAINT: {
    isCombo: false
  },
  INSURANCE_LIST: {
    isCombo: true,
    id: "insuranceType",
    optionTypes: [
      {
        value: "all",
        label: "보험종류"
      },
      {
        value: "injury",
        label: "상해보험"
      },
      {
        value: "automobile",
        label: "자동차보험"
      },
      {
        value: "disease",
        label: "질병보험"
      }
    ]
  },
  LOAN_LIST: {
    isCombo: true,
    id: "loanType",
    optionTypes: [
      {
        value: "all",
        label: "대출종류"
      },
      {
        value: "collateral",
        label: "담보"
      },
      {
        value: "fixedDeposit",
        label: "정기예금"
      },
      {
        value: "insuranceContract",
        label: "보험계약"
      }
    ]
  },
  INPUT: {
    PAY_INSURANCE_FEE: {
      DEPOSIT_PATH: [
        {
          value: "all",
          label: "납입방식"
        },
        {
          value: "cash",
          label: "현금"
        },
        {
          value: "creditCard",
          label: "카드"
        },
        {
          value: "accountTransfer",
          label: "계좌이체"
        }
      ]
    },
    ADD_ACCIDENT: {
      TYPE: [
        {
          value: "all",
          label: "서비스 종류"
        },
        {
          value: "emergencyTowing",
          label: "긴급견인"
        },
        {
          value: "emergencyStart",
          label: "긴급시동"
        },
        {
          value: "emergencyRefueling",
          label: "비상급유"
        },
        {
          value: "batteryCharging",
          label: "배터리충전"
        },
        {
          value: "engineOverheatingRepair",
          label: "엔진과열 수리"
        },
        {
          value: "tirepunkRepair",
          label: "타이어펑크 수리"
        }
      ]
    },
    ADD_COMPLAINT: {
      TYPE: [
        {
          value: "all",
          label: "민원 종류"
        },
        {
          value: "service",
          label: "서비스 민원"
        },
        {
          value: "product",
          label: "상품 민원"
        },
        {
          value: "question",
          label: "질문 민원"
        },
        {
          value: "others",
          label: "기타 민원"
        }
      ]
    }
  }
};
export const TABLE_TITLE = {
  MANAGEMENT_CONTRACT: "기가입 보험 상품 정보 리스트",
  VIEW_ACCIDENT: "사고 신고 정보 리스트",
  VIEW_COMPLAINT: "민원 신청 정보 리스트",
  INSURANCE_LIST: "보험 상품 정보 리스트",
  LOAN_LIST: "대출 상품 정보 리스트"
};
export const COLUMN_NAME = {
  MANAGEMENT_CONTRACT: [
    "계약 번호",
    "보험 상품 이름",
    "보험 종류",
    "보험 상품 번호",
    "연령대",
    "월 보험료(원)",
    "만기일",
    "가입일",
    "납부일",
    "보험 상태"
  ],
  VIEW_ACCIDENT: [
    "사고 번호",
    "서비스 종류",
    "사고 날짜",
    "이름",
    "전화번호",
    "처리 상태"
  ],
  VIEW_COMPLAINT: [
    "민원 번호",
    "민원 종류",
    "제목",
    "등록 날짜",
    "처리된 날짜",
    "처리상태"
  ],
  INSURANCE_LIST: [
    "보험 상품 번호",
    "보험 상품 이름",
    "보험 종류",
    "연령대",
    "월 보험료(원)"
  ],
  LOAN_LIST: [
    "대출 상품 번호",
    "대출 상품 이름",
    "대출 상품 종류",
    "이자율",
    "대출가능 최대 금액(원)"
  ]
};

export const INPUT_LABEL = {
  APPLY_ENDORSEMENT: {
    DEPOSIT_DATE: "납부일"
  },
  PAY_INSURANCE_FEE: {
    DEPOSIT_PATH: "납입 방식",
    DEPOSIT_MONEY: "납입 금액"
  },
  RECEIVE_INSURANCE: {
    MEDICAL_CERTIFICATE: "진단서",
    RECEIPT: "영수증",
    RESIDENT_REGISTRATION_CARD: "신분증 사본"
  },
  ASK_INSURANCE_COUNSEL: {
    COUNSEL_DATE: "상담 일자"
  },
  ADD_ACCIDENT: {
    TYPE: "서비스 종류",
    ACCIDENT_DATE: "사고 날짜",
    LOCATION: "사고 위치"
  },
  ADD_COMPLAINT: {
    TYPE: "민원 종류",
    COMPLAINT_TITLE: "민원 제목",
    CONTENT: "민원 내용"
  }
}

export const INPUT_FORM = {
  APPLY_ENDORSEMENT: {
    DEPOSIT_DATE: {
      isCombo: false,
      for: "depositDate",
      label: "DEPOSIT_DATE",
      type: "text",
      id: "depositDate",
      name: "depositDate",
      placeholder: "DEPOSIT_DATE",
      exception: "날짜를 다시 입력해주세요"
    }
  },
  PAY_INSURANCE_FEE: {
    DEPOSIT_PATH: {
      isCombo: true,
      for: "depositPath",
      label: "DEPOSIT_PATH",
      id: "depositPath",
      exception: "납입 방식을 셋 중에서 선택해주세요"
    },
    DEPOSIT_MONEY: {
      isCombo: false,
      for: "depositMoney",
      label: "DEPOSIT_MONEY",
      type: "number",
      id: "depositMoney",
      name: "depositMoney",
      placeholder: "DEPOSIT_MONEY",
      exception: "금액을 다시 입력해주세요"
    }
  },
  RECEIVE_INSURANCE: {
    MEDICAL_CERTIFICATE: {
      isCombo: false,
      for: "medicalCertificate",
      label: "MEDICAL_CERTIFICATE",
      type: "text",
      id: "medicalCertificate",
      name: "medicalCertificate",
      placeholder: "MEDICAL_CERTIFICATE",
      exception: "진단서를 다시 입력해주세요"
    },
    RECEIPT: {
      isCombo: false,
      for: "receipt",
      label: "RECEIPT",
      type: "text",
      id: "receipt",
      name: "receipt",
      placeholder: "RECEIPT",
      exception: "영수증을 다시 입력해주세요"
    },
    RESIDENT_REGISTRATION_CARD: {
      isCombo: false,
      for: "residentRegistrationCard",
      label: "RESIDENT_REGISTRATION_CARD",
      type: "text",
      id: "residentRegistrationCard",
      name: "residentRegistrationCard",
      placeholder: "RESIDENT_REGISTRATION_CARD",
      exception: "신분증 사본을 다시 입력해주세요"
    }
  },
  ASK_INSURANCE_COUNSEL: {
    COUNSEL_DATE: {
      isCombo: false,
      for: "counselDate",
      label: "COUNSEL_DATE",
      type: "text",
      id: "counselDate",
      name: "counselDate",
      placeholder: "COUNSEL_DATE",
      exception: "상담 날짜를 다시 입력해 주세요"
    }
  },
  ADD_ACCIDENT: {
    TYPE: {
      isCombo: true,
      for: "type",
      label: "TYPE",
      id: "type",
      exception: "서비스 종류를 다시 입력해주세요"
    },
    ACCIDENT_DATE: {
      isCombo: false,
      for: "accidentDate",
      label: "ACCIDENT_DATE",
      type: "text",
      id: "accidentDate",
      name: "accidentDate",
      placeholder: "ACCIDENT_DATE",
      exception: "사고 날짜를 다시 입력해주세요"
    },
    LOCATION: {
      isCombo: false,
      for: "location",
      label: "LOCATION",
      type: "text",
      id: "location",
      name: "location",
      placeholder: "LOCATION",
      exception: "사고 위치를 다시 입력해주세요"
    }
  },
  ADD_COMPLAINT: {
    TYPE: {
      isCombo: true,
      for: "type",
      label: "TYPE",
      id: "type",
      exception: "민원 종류를 다시 입력해주세요"
    },
    COMPLAINT_TITLE: {
      isCombo: false,
      for: "complaintTitle",
      label: "COMPLAINT_TITLE",
      type: "text",
      id: "complaintTitle",
      name: "complaintTitle",
      placeholder: "COMPLAINT_TITLE",
      exception: "제목을 다시 입력해주세요"
    },
    CONTENT: {
      isCombo: false,
      for: "content",
      label: "CONTENT",
      type: "text",
      id: "content",
      name: "content",
      placeholder: "CONTENT",
      exception: "내용을 한 글자 이상 입력해주세요"
    }
  }
}
