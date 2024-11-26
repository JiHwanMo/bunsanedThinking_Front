import { BUTTON as COMMON_BUTTON } from '../../common.js'

export const BUTTON = {
  TASK: {
    COMPENSATIONPLANNING: {
      HOME: {
        EVALUATE_PARTNERCOMPANY: '협력업체 평가',
        MANAGEMENT_PARTNERCOMPANY: '협력업체 관리'
      },
      EVALUATE_PARTNERCOMPANY: {
        EVALUATE: "평가",
        CANCEL: COMMON_BUTTON.COMMON.CANCEL
      },
      MANAGEMENT_PARTNERCOMPANY: {
        UPDATE: COMMON_BUTTON.COMMON.UPDATE,
        DELETE: COMMON_BUTTON.COMMON.DELETE
      },
      INPUT: {
        POST: {
          OK: COMMON_BUTTON.COMMON.OK,
          CANCEL: COMMON_BUTTON.COMMON.CANCEL
        },
        UPDATE: {
          UPDATE: COMMON_BUTTON.COMMON.UPDATE,
          CANCEL: COMMON_BUTTON.COMMON.CANCEL
        },
        EVALUATE: {
          ONE: "★",
          TWO: "★★",
          THREE: "★★★",
          FOUR: "★★★★",
          FIVE: "★★★★★"
        }
      }
    }
  }
};

// export const POP_UP = {};
export const COMBOBOX = {
  EVALUATE_PARTNERCOMPANY: {
    INPUT: []
  },
  MANAGEMENT_PARTNERCOMPANY: {
    INPUT: {
      POST: [
        {
          value: "all",
          label: "협력업체 종류"
        },
        {
          value: "roadsideAssistanceCompany",
          label: "긴급출동회사"
        },
        {
          value: "damageAssessmentCompany",
          label: "손해사정업체"
        }
      ],
      UPDATE: [
        {
          value: "all",
          label: "변경 정보 선택"
        },
        {
          value: "name",
          label: "이름"
        },
        {
          value: "phoneNumber",
          label: "전화번호"
        },
        {
          value: "headName",
          label: "대표자 이름"
        },
        {
          value: "headPhoneNumber",
          label: "대표자 전화번호"
        }
      ]
    }
  }
};
export const TABLE_TITLE = {
  EVALUATE_PARTNERCOMPANY: "협력업체 정보 리스트",
  MANAGEMENT_PARTNERCOMPANY: "협력업체 정보 리스트"
}
export const COLUMN_NAME = {
  EVALUATE_PARTNERCOMPANY: [
    "협력업체 번호",
    "협력업체 이름",
    "협력업체 종류",
    "협력업체 전화번호"
  ],
  MANAGEMENT_PARTNERCOMPANY: [
    "협력업체 번호",
    "협력업체 이름",
    "협력업체 종류",
    "협력업체 전화번호"
  ]
};
export const INPUT_LABEL = {
  MANAGEMENT_PARTNERCOMPANY: {
    POST: {
      NAME: "이름",
      PHONE_NUMBER: "전화번호",
      TYPE: "종류",
      HEAD_NAME: "대표자 이름",
      HEAD_PHONE_NUMBER: "대표자 전화번호"
    },
    UPDATE: {
      TYPE: "수정 정보 선택",
      INPUT: "수정 정보"
    }
  }
}

export const INPUT_FORM = {
  POST: {
    NAME: {
      isCombo: false,
      for: "name",
      label: "NAME",
      type: "text",
      id: "name",
      name: "name",
      value: "name",
      placeholder: "NAME",
      exception: "업체 이름을 입력해주세요"
    },
    PHONE_NUMBER: {
      isCombo: false,
      for: "phoneNumber",
      label: "PHONE_NUMBER",
      type: "text",
      id: "phoneNumber",
      name: "phoneNumber",
      value: "phoneNumber",
      placeholder: "PHONE_NUMBER",
      exception: "업체 핸드폰 번호를 입력해주세요"
    },
    TYPE: {
      isCombo: true,
      for: "type",
      label: "TYPE",
      id: "type",
      exception: "업체 유형은 둘 중에서 선택해주세요"
    },
    HEAD_NAME: {
      isCombo: false,
      for: "headName",
      label: "HEAD_NAME",
      type: "text",
      id: "headName",
      name: "headName",
      value: "headName",
      placeholder: "HEAD_NAME",
      exception: "업체 대표 이름을 입력해주세요"
    },
    HEAD_PHONE_NUMBER: {
      isCombo: false,
      for: "headPhoneNumber",
      label: "HEAD_PHONE_NUMBER",
      type: "text",
      id: "headPhoneNumber",
      name: "headPhoneNumber",
      value: "headPhoneNumber",
      placeholder: "HEAD_PHONE_NUMBER",
      exception: "업체 대표 핸드폰 번호를 입력해주세요"
    }
  },
  UPDATE: {
    TYPE: {
      isCombo: true,
      for: "type",
      label: "TYPE",
      id: "type",
      exception: "수정 옵션을 선택해주세요"
    },
    INPUT: {
      isCombo: false,
      for: "input",
      label: "INPUT",
      type: "text",
      id: "input",
      name: "input",
      value: "input",
      placeholder: "INPUT"
    }
  }
}

export const INFORMATION_TYPE = {
  EVALUATE_PARTNERCOMPANY: "EVALUATE_PARTNERCOMPANY",
  MANAGEMENT_PARTNERCOMPANY: "MANAGEMENT_PARTNERCOMPANY"
}

export const INPUT_TYPE = {
  POST: "POST",
  EVALUATE: "EVALUATE",
  UPDATE: "UPDATE"
}

export const PARTNER_COMPANY_TYPE = [
  "DUMY",
  "긴급출동회사",
  "손해사정업체"
];

export const PARTNER_COMPANY_DETAIL_LABEL = {
  ID: "협력업체 번호",
  NAME: "협력업체 이름",
  PHONE_NUMBER: "협력업체 전화번호",
  TYPE: "협력업체 종류",
  HEAD_NAME: "대표자 이름",
  HEAD_PHONE_NUMBER: "대표자 전화번호"
}

export const UPDATE_OPTION_PLACEHOLDER = "수정 정보 ";

export const ALERT = {
  CONFIRM: {
    ADD_PARTNER_COMPANY: "정말로 등록하시겠습니까?",
    UPDATE_PARTNER_COMPANY: "정말로 수정하시겠습니까?",
    DELETE_PARTNER_COMPANY: "정말로 삭제하시겠습니까?",
    EVALUATE_PARTNER_COMPANY: "평가를 반영하시겠습니까?"
  },
  OK: {
    ADD_PARTNER_COMPANY: "등록되었습니다.",
    UPDATE_PARTNER_COMPANY: "수정되었습니다.",
    DELETE_PARTNER_COMPANY: "삭제되었습니다.",
    EVALUATE_PARTNER_COMPANY: "평가되었습니다."
  }
}
