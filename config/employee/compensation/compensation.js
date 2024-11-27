import { BUTTON as COMMON_BUTTON } from '../../common.js'

export const BUTTON = {
  TASK: {
    COMPENSATION: {
      HOME: {
        REQUEST_COMPENSATION: '보상 지급 요청',
        REQUEST_INSURANCE_MONEY: '보험금 지급 요청'
      },
      REQUEST_COMPENSATION: {
        REQUEST: "요청",
        CANCEL: COMMON_BUTTON.COMMON.CANCEL
      },
      REQUEST_INSURANCE_MONEY: {
        REQUEST: "요청",
        CANCEL: COMMON_BUTTON.COMMON.CANCEL
      },
      INPUT: {
        REQUEST_COMPENSATION: {
          OK: COMMON_BUTTON.COMMON.OK,
          CANCEL: COMMON_BUTTON.COMMON.CANCEL
        },
        REQUEST_INSURANCE_MONEY: {
          OK: COMMON_BUTTON.COMMON.OK,
          CANCEL: COMMON_BUTTON.COMMON.CANCEL
        }
      }
    }
  }
};

// export const POP_UP = {};
export const COMBOBOX = {
  REQUEST_COMPENSATION: {
    isCombo: true,
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
    ],
    input: [
      {
        value: "paymentType",
        label: "지급 형태"
      },
      {
        value: "cash",
        label: "현금"
      },
      {
        value: "accountTransfer",
        label: "계좌 이체"
      }
    ]
  },
  REQUEST_INSURANCE_MONEY: {
    isCombo: true,
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
    ],
    input: [
      {
        value: "paymentType",
        label: "지급 형태"
      },
      {
        value: "cash",
        label: "현금"
      },
      {
        value: "accountTransfer",
        label: "계좌 이체"
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
}

export const INPUT_LABEL = {
  REQUEST_COMPENSATION: {
    MONEY: "지급 금액",
    PAYMENTTYPE: "지급 형태"
  },
  REQUEST_INSURANCE_MONEY: {
    MONEY: "지급 금액",
    PAYMENTTYPE: "지급 형태"
  }
}

export const INPUT_FORM  = {
  MONEY: {
    isCombo: false,
    for: "money",
    label: "MONEY",
    type: "number",
    id: "money",
    name: "money",
    placeholder: "MONEY",
    exception: "금액을 다시 입력해 주세요"
  },
  PAYMENTTYPE: {
    isCombo: true,
    for: "paymentType",
    label: "PAYMENTTYPE",
    id: "paymentType",
    exception: "현금 혹은 계좌이체 중에서 선택해주세요"
  }
}

export const INFORMATION_TYPE = {
  REQUEST_COMPENSATION: "REQUEST_COMPENSATION",
  REQUEST_INSURANCE_MONEY: "REQUEST_INSURANCE_MONEY"
}

export const SERVICE_TYPE_STR = {
  EmergencyTowing: "긴급견인",
  EmergencyStart: "긴급시동",
  EmergencyRefueling: "비상급유",
  BatteryCharging: "배터리충전",
  EngineOverheatingRepair: "엔진과열 수리",
  TirepunkRepair: "타이어펑크 수리"
}

export const ACCIDENT_PROCESS_STATUS_STR = {
  Unprocessed: "미처리",
  Completed: "처리 완료",
  Processing: "처리중"
}

export const REPORT_PROCESS_STATUS_STR = {
  Unprocessed: "미처리",
  Completed: "처리 완료",
}

export const REPORT_DETAIL_LABEL = {
  ID: "신고 번호",
  ACCIDENT_ID: "사고 번호",
  SERVICE_TYPE: "서비스 종류",
  DATE: "사고 날짜",
  LOCATION: "사고 위치",
  CUSTOMER_NAME: "고객 이름",
  CUSTOMER_PHONE_NUMBER: "고객 전화번호",
  ACCIDENT_PROCESS_STATUS: "접수 상태",
  REPORT_PROCESS_STATUS: "처리 상태",
  DAMAGE_ASSESSMENT_COMPANY_ID: "손해 사정 업체 번호",
  ROADSIDE_ASSISTANCE_COMPANY_ID: "긴급 서비스 업체 번호",
  DAMAGE_ASSESSMENT_MONEY: "손해 사정 금액"
}

export const INSURANCE_MONEY_DETAIL_LABEL = {
  ID: "신청 번호",
  PRODUCT_TYPE: "계약 상품 종류",
  APPLY_DATE: "신청 날짜",
  CUSTOMER_NAME: "고객 이름",
  PROCESS_STATUS: "처리 상태",
  MEDICAL_CERTIFICATE: "진단서 사진",
  RECEIPT: "영수증 사진",
  RESIDENT_REGISTRATION_CARD: "주민등록증 사본"
}

export const COMBOLIST_FETCH_ALL = "all";

export const ALERT = {
  CONFIRM: {
    REQUEST_COMPENSATION: "정말로 요청하시겠습니까?",
    REQUEST_INSURANCE_MONEY: "정말로 요청하시겠습니까?"
  },
  OK: {
    REQUEST_COMPENSATION: "요청이 완료되었습니다",
    REQUEST_INSURANCE_MONEY: "요청이 완료되었습니다"
  }
}
