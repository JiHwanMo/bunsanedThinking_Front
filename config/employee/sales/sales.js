export const BUTTON = {
  TASK: {
    EMPLOYEE: {
      SALES: {
        HOME: {
          EVALUATE_SALES_PERFORMANCE: '영업 성과 평가',
          HANDLE_INSURANCE_CONSULTATION: '보험 상담 처리',
          INDUCE_INSURANCE_PRODUCT: '보험 상품 영업',
          INDUCE_LOAN_PRODUCT: '대출 상품 영업'
        }
        // ,
        // EVALUATE_SALES_PERFORMANCE:{
        //   ONE_STAR: "*",
        //   TWO_STAR: "**",
        //   THREE_STAR: "***",
        //   FOUR_STAR: "****",
        //   FIVE_STAR: "*****",
        //   EVALUATATION: "평가"
        // },
        // HANDLE_INSURANCE_CONSULTATION:{
        //   RESERVATION: "예약"
        // },
        // INDUCE_INSURANCE_PRODUCT:{
        //   SENDING_NOTICE: "안내장 발송",
        //   INSURANCE_ENROLLMENT_REQUEST: "보험 가입 요청"
        // },
        // INDUCE_LOAN_PRODUCT:{
        //   SENDING_NOTICE: "안내장 발송",
        //   LOAN_REQUEST: "대출 요청"
        // }
      }
    }
  }
};

// export const POP_UP = {};
export const COMBOBOX = {
  HANDLE_INSURANCE_CONSULTATION: {
    isCombo: true,
    id: "counselType",
    optionTypes: [
      {
        value: "all",
        label: "처리 상태"
      },
      {
        value: "Completed",
        label: "처리완료"
      },
      {
        value: "Unprocessed",
        label: "미처리"
      }
    ]
  },
  EVALUATE_SALES_PERFORMANCE: {
    isCombo: false
  },
  INDUCE_INSURANCE_PRODUCT: {
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
  INDUCE_LOAN_PRODUCT: {
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
  EVALUATE_SALES_PERFORMANCE: "영업 직원 정보 리스트",
  HANDLE_INSURANCE_CONSULTATION: "보험 상담 처리 정보 리스트",
  INDUCE_INSURANCE_PRODUCT: "보험 상품 정보 리스트",
  INDUCE_LOAN_PRODUCT: "대출 상품 정보 리스트",
};
export const COLUMN_NAME = {
  EVALUATE_SALES_PERFORMANCE: [
    "직원 번호",
    "직원 이름",
    "직급",
    "계약 건수"
  ],
  HANDLE_INSURANCE_CONSULTATION: [
    "상담 번호",
    "고객 이름",
    "전화 번호",
    "날짜",
    "성별",
    "처리 상태"
  ],
  INDUCE_INSURANCE_PRODUCT: [
    "보험 보험 상품 번호",
    "보험 상품 이름",
    "보험 종류",
    "연령대",
    "월 보험료"
  ],
  INDUCE_LOAN_PRODUCT: [
    "대출 상품 번호",
    "대출 상품 이름",
    "대출 상품 종류",
    "이자율",
    "대출가능 최대 금액"
  ]
};
