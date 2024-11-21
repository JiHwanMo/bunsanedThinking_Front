export const BUTTON = {
  TASK: {
    EMPLOYEE: {
      UNDERWRITING: {
        HOME: {
          REVIEW_ACQUISITION: '인수 심사',
          APPLY_COPERATION: '공동 인수 신청',
          APPLY_REINSURANCE: '재보험 신청'
        }
      }
    }
  }
};

// export const POP_UP = {};

export const COMBOBOX = {
  REVIEW_ACQUISITION: {
    isCombo: true,
    id: "requestingType",
    optionTypes: [
      {
        value: "all",
        label: "처리상태"
      },
      {
        value: "requesting",
        label: "미처리"
      },
      {
        value: "notRequesting",
        label: "처리완료"
      }
    ]
  },
  APPLY_COPERATION: {
    isCombo: false
  },
  APPLY_REINSURANCE: {
    isCombo: false
  }
};

export const TABLE_TITLE = {
  REVIEW_ACQUISITION: "인수 심사 정보 리스트",
  APPLY_COPERATION: "공동 인수 정보 리스트",
  APPLY_REINSURANCE: "재보험 정보 리스트",
};

export const COLUMN_NAME = {
  REVIEW_ACQUISITION:[
    "계약 번호",
    "고객 이름",
    "전화 번호",
    "직업",
    "나이",
    "성별",
    "주민등록번호",
    "주소",
    "신청한 보험 상품 번호",
    "심사 상태"
  ],
  APPLY_COPERATION:[
    "보험 종류",
    "보험 상품 이름",
    "타 보험사 이름"
  ],
  APPLY_REINSURANCE:[
    "보험 종류",
    "보험 상품 이름",
    "보험 상품 번호",
    "타 보험사 이름"
  ]
};
