export const BUTTON = {
  TASK: {
    COMPENSATION: {
      HOME: {
        REQUEST_COMPENSATION: '보상 지급 요청',
        REQUEST_INSURANCE_MONEY: '보험금 지급 요청'
      },
    }
  }
};

// export const POP_UP = {};
export const COMBOBOX = {
  REQUEST_COMPENSATION: {
    id: "reportType",
    optionTypes: [
      {
        value: "all",
        label: "접수상태"
      },
      {
        value: "completed",
        label: "완료"
      },
      {
        value: "unprocessed",
        label: "미완료"
      }
    ]
  },
  REQUEST_INSURANCE_MONEY: {
    id: "insuranceMoneyType",
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
}
export const TABLE_TITLE = {
  REQUEST_COMPENSATION: "사고 정보 리스트",
  REQUEST_INSURANCE_MONEY: "보험금 신청 정보 리스트"
}
export const COLUMN_NAME = {
  REQUEST_COMPENSATION: [
    "사고 번호",
    "서비스 종류",
    "사고 날짜",
    "사고 위치",
    "이름",
    "전화번호",
    "처리 상태",
    "접수 상태",
    "손해 사정 금액"
  ],
  REQUEST_INSURANCE_MONEY: [
    "신청 번호",
    "계약 상품 종류",
    "신청 날짜",
    "고객 이름",
    "처리 상태"
  ]
};
