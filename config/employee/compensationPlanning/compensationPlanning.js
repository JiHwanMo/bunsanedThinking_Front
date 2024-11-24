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
      placeholder: "NAME"
    },
    PHONE_NUMBER: {
      isCombo: false,
      for: "phoneNumber",
      label: "PHONE_NUMBER",
      type: "text",
      id: "phoneNumber",
      name: "phoneNumber",
      value: "phoneNumber",
      placeholder: "PHONE_NUMBER"
    },
    TYPE: {
      isCombo: true,
      for: "type",
      label: "TYPE",
      id: "type"
    },
    HEAD_NAME: {
      isCombo: false,
      for: "headName",
      label: "HEAD_NAME",
      type: "text",
      id: "headName",
      name: "headName",
      value: "headName",
      placeholder: "HEAD_NAME"
    },
    HEAD_PHONE_NUMBER: {
      isCombo: false,
      for: "headPhoneNumber",
      label: "HEAD_PHONE_NUMBER",
      type: "text",
      id: "headPhoneNumber",
      name: "headPhoneNumber",
      value: "headPhoneNumber",
      placeholder: "HEAD_PHONE_NUMBER"
    }
  },
  UPDATE: {
    TYPE: {
      isCombo: true,
      for: "type",
      label: "TYPE",
      id: "type"
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
