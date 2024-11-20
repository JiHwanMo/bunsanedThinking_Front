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
        TERMINATION: '해지 신청'
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
    "민원 종류",
    "민원 번호",
    "제목",
    "등록 날짜",
    "처리된 날짜",
    "처리상태"
  ],
  INSURANCE_LIST: [
    "보험 상품 이름",
    "보험 종류",
    "보험 상품 번호",
    "연령대",
    "월 보험료(원)"
  ],
  LOAN_LIST: [
    "대출 상품 이름",
    "대출 상품 종류",
    "대출 상품 번호",
    "이자율",
    "대출가능 최대 금액(원)"
  ]
};
