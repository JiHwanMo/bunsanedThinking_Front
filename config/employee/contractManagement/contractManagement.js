export const BUTTON = {
  TASK: {
    CONTRACT_MANAGEMENT: {
      HOME: {
        DEFAULT_CONTRACT: '분납/수금 처리',
        RECONTRACT: '만기 계약 심사',
        ENDORSEMENT: '배서 심사',
        REVIVAL: '부활 심사',
        TERMINATION: '제지급금 지급 요청'
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
    "이름",
    "전화번호",
    "성별",
    "주민등록번호",
    "주소",
    "상품 번호",
    "납부 날짜"
  ],
  RECONTRACT: [
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
