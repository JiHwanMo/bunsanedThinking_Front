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
      isImage: false,
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
      isImage: false,
      for: "depositPath",
      label: "DEPOSIT_PATH",
      id: "depositPath",
      exception: "납입 방식을 셋 중에서 선택해주세요"
    },
    DEPOSIT_MONEY: {
      isCombo: false,
      isImage: false,
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
      isImage: true,
      accept: "image/*",
      for: "medicalCertificate",
      label: "MEDICAL_CERTIFICATE",
      type: "file",
      id: "medicalCertificate",
      name: "medicalCertificate",
      placeholder: "MEDICAL_CERTIFICATE",
      exception: "진단서를 다시 입력해주세요"
    },
    RECEIPT: {
      isCombo: false,
      isImage: true,
      accept: "image/*",
      for: "receipt",
      label: "RECEIPT",
      type: "file",
      id: "receipt",
      name: "receipt",
      placeholder: "RECEIPT",
      exception: "영수증을 다시 입력해주세요"
    },
    RESIDENT_REGISTRATION_CARD: {
      isCombo: false,
      isImage: true,
      accept: "image/*",
      for: "residentRegistrationCard",
      label: "RESIDENT_REGISTRATION_CARD",
      type: "file",
      id: "residentRegistrationCard",
      name: "residentRegistrationCard",
      placeholder: "RESIDENT_REGISTRATION_CARD",
      exception: "신분증 사본을 다시 입력해주세요"
    }
  },
  ASK_INSURANCE_COUNSEL: {
    COUNSEL_DATE: {
      isCombo: false,
      isImage: false,
      for: "counselDate",
      label: "COUNSEL_DATE",
      type: "date",
      id: "counselDate",
      name: "counselDate",
      placeholder: "COUNSEL_DATE",
      exception: "상담 날짜를 다시 입력해 주세요"
    }
  },
  ADD_ACCIDENT: {
    TYPE: {
      isCombo: true,
      isImage: false,
      for: "type",
      label: "TYPE",
      id: "type",
      exception: "서비스 종류를 다시 입력해주세요"
    },
    ACCIDENT_DATE: {
      isCombo: false,
      isImage: false,
      for: "accidentDate",
      label: "ACCIDENT_DATE",
      type: "date",
      id: "accidentDate",
      name: "accidentDate",
      placeholder: "ACCIDENT_DATE",
      exception: "사고 날짜를 다시 입력해주세요"
    },
    LOCATION: {
      isCombo: false,
      isImage: false,
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
      isImage: false,
      for: "type",
      label: "TYPE",
      id: "type",
      exception: "민원 종류를 다시 입력해주세요"
    },
    COMPLAINT_TITLE: {
      isCombo: false,
      isImage: false,
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
      isImage: false,
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

export const INSURANCE_TYPE_STR = {
  Disease: "질병",
  Automobile: "자동차",
  Injury: "상해"
}

export const COMBOLIST_FETCH_ALL = "all";

export const ONE_BLANK = " ";

export const INSURANCE_DETAIL = {
  DETAIL_LABEL: {
    NAME: "보험 상품 이름",
    INSURANCE_TYPE: "보험 상품 종류",
    ID: "보험 상품 번호",
    AGE_RANGE: "연령대",
    COVERAGE: "보장 내용",
    MONTHLY_PREMIUM: "월 보험료",
    CONTRACT_PERIOD: "계약기간"
  },
  AUTOMOBILE_DETAIL: {
    TYPE_NAME: "Automobile",
    DETAIL_LABEL: {
      SERVICE_LIST: "지원 서비스",
      VEHICLE_TYPE: "차량 종류",
      ACCIDENT_LIMIT: "최대 사고 횟수"
    }
  },
  DISEASE_DETAIL: {
    TYPE_NAME: "Disease",
    DETAIL_LABEL: {
      DISEASE_NAME: "병명",
      DISEASE_LIMIT: "최대 질병 횟수"
    }
  },
  INJURY_DETAIL: {
    TYPE_NAME: "Injury",
    DETAIL_LABEL: {
      INJURY_TYPE: "상해 정도",
      SURGERIES_LIMIT: "최대 수술 횟수"
    }
  }
}

export const LOAN_DETAIL = {
  DETAIL_LABEL: {
    NAME: "대출 상품 이름",
    LOAN_TYPE: "대출 상품 종류",
    ID: "대출 상품 번호",
    INTEREST_RATE: "이자율",
    MAXIMUM_MONEY: "대출 가능 최대 금액",
    MINIMUM_ASSET: "최소 자산"
  },
  COLLATERAL_DETAIL: {
    TYPE_NAME: "Collateral",
    DETAIL_LABEL: {
      COLLATERAL_TYPE: "담보 종류",
      MINIMUM_VALUE: "담보 최소 가치"
    }
  },
  FIXEDDEPOSIT_DETAIL: {
    TYPE_NAME: "FixedDeposit",
    DETAIL_LABEL: {
      MINIMUM_AMOUNT: "최소 예치 금액"
    }
  },
  INSURANCE_CONTRACT_DETAIL: {
    TYPE_NAME: "InsuranceContract",
    DETAIL_LABEL: {
      INSURANCE_ID: "보험 번호"
    }
  }
}

export const CONTRACT_DETAIL = {
  NAME: "보험 상품 이름",
  INSURANCE_ID: "보험 상품 번호",
  AGE_RANGE: "연령대",
  MONTHLY_PREMIUM: "월 보험료",
  EXPIRATION_DATE: "만기일",
  DATE: "가입일",
  PAYMENT_DATE: "납부일",
  STATUS: "보험 상태"
}

export const SERVICE_TYPE_STR = {
  EmergencyTowing: "긴급견인",
  EmergencyStart: "긴급시동",
  EmergencyRefueling: "비상급유",
  BatteryCharging: "배터리충전",
  EngineOverheatingRepair: "엔진과열 수리",
  TirepunkRepair: "타이어펑크 수리"
}

export const VEHICLE_TYPE_STR = {
  Small: "소형",
  Medium: "중형",
  Large: "대형"
}

export const INJURY_TYPE_STR = {
  Minor: "경상",
  Serious: "중상"
}

export const LOAN_TYPE_STR = {
  Collateral: "담보",
  FixedDeposit: "정기 예금",
  InsuranceContract: "보험 계약"
}

export const COLLATERAL_TYPE_STR = {
  RealEstate: "부동산",
  Car: "자동차"
}

export const INFORMATION_TYPE = {
  INSURANCE_LIST: "INSURANCE_LIST",
  LOAN_LIST: "LOAN_LIST",
  MANAGEMENT_CONTRACT: "MANAGEMENT_CONTRACT",
  VIEW_ACCIDENT: "VIEW_ACCIDENT",
  VIEW_COMPLAINT: "VIEW_COMPLAINT"
}

export const BUTTON_TYPE = {
  APPLY_ENDORSEMENT: "APPLY_ENDORSEMENT",
  PAY_INSURANCE_FEE: "PAY_INSURANCE_FEE",
  RECEIVE_INSURANCE: "RECEIVE_INSURANCE",
  ASK_INSURANCE_COUNSEL: "ASK_INSURANCE_COUNSEL",
  ADD_ACCIDENT: "ADD_ACCIDENT",
  ADD_COMPLAINT: "ADD_COMPLAINT"
}

export const ALERT = {
  CONFIRM: {
    APPLY_RECONTRACT: "정말 신청하겠습니까?",
    APPLY_REVIVAL: "정말 신청하겠습니까?",
    APPLY_TERMINATION: "정말 신청하겠습니까?",
    APPLY_ENDORSEMENT: "정말 신청하겠습니까?",
    PAY_INSURANCE_FEE: "정말 신청하겠습니까?",
    BUY_INSURANCE: "정말 신청하겠습니까?",
    RECEIVE_INSURANCE: "정말 신청하겠습니까?",
    LOAN: "정말 신청하겠습니까?",
    ASK_INSURANCE_COUNSEL: "정말 신청하겠습니까?",
    ADD_ACCIDENT: "정말 신청하겠습니까?",
    ADD_COMPLAINT: "정말 신청하겠습니까?"
  },
  OK: {
    APPLY_RECONTRACT  : "재계약 신청이 완료되었습니다",
    APPLY_REVIVAL: "부활 신청이 완료되었습니다",
    APPLY_TERMINATION: "해지 신청이 완료되었습니다",
    APPLY_ENDORSEMENT: "배서 신청이 완료되었습니다",
    PAY_INSURANCE_FEE: "보험금 납입이 완료되었습니다",
    BUY_INSURANCE: "보험 계약 신청이 완료되었습니다",
    RECEIVE_INSURANCE: "보험금 신청이 완료되었습니다",
    LOAN: "대출 신청이 완료되었습니다",
    ASK_INSURANCE_COUNSEL: "상담 신청이 완료되었습니다",
    ADD_ACCIDENT: "사고 신고가 완료되었습니다",
    ADD_COMPLAINT: "민원 신청이 완료되었습니다"
  },
  FAIL: {
    ADD_ACCIDENT: "신청한 자동차 보험이 없어서 사고 신고를 받을 수 없습니다"
  }
}
