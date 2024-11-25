import {BUTTON as COMMON_BUTTON} from "../../../config/common.js"

export const QUESTION = {
  CONFIRM_HANDLE_REPORT: "정말 접수하시겠습니까?",
  CONFIRM_HANDLE_COMPLAINT: "정말 접수하시겠습니까?"
}

export const BUTTON = {
  TASK: {
    EMPLOYEE: {
      CUSTOMER_SUPPORT: {
        HOME: {
          HANDLE_REPORT: "신고 처리",
          HANDLE_COMPLAINT: "민원 처리"
        },
        HANDLE_REPORT: {
          HANDLE_REPORT: "접수",
          CANCEL_REPORT: COMMON_BUTTON.COMMON.CANCEL
        },
        HANDLE_COMPLAINT: {
          HANDLE_COMPLAINT: "접수",
          CANCEL_COMPLAINT: COMMON_BUTTON.COMMON.CANCEL
        }
      }
    }
  }
};

// export const POP_UP = {};
export const COMBOBOX = {
  HANDLE_REPORT: {
    isCombo: true,
    id: "processStatus",
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
      },
      {
        value: "processing",
        label: "처리중"
      }
    ]
  },
  HANDLE_COMPLAINT: {
    isCombo: true,
    id: "processStatus",
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
};

export const COLUMN_NAME = {
  HANDLE_REPORT: {
    ACCIDENT_ID: "사고 번호",
    SERVICE_TYPE: "서비스 종류",
    ACCIDENT_DATE: "사고 날짜",
    ACCIDENT_LOCATION: "사고 위치",
    CUSTOMER_NAME: "이름",
    CUSTOMER_PHONE_NUMBER: "전화번호",
    PROCESS_STATUS: "처리 상태"
  },
  HANDLE_COMPLAINT: {
    COMPLAINT_ID: "민원 번호",
    COMPLAINT_TYPE: "민원 종류",
    COMPLAINT_CONTENT: "민원 내용",
    COMPLAINT_TITLE: "제목",
    PROCESS_STATUS: "처리 상태",
    CUSTOMER_NAME: "접수자 이름",
    CUSTOMER_PHONE_NUMBER: "접수자 전화번호",
    COMPLAINT_DATE: "등록 날짜",
    EMPLOYEE_NAME: "담당자 이름",
    PROCESSING_DATE: "처리 날짜"
  }
}

export const DETAIL_COLUMN_NAME = {
  HANDLE_COMPLAINT: {
    EMPLOYEE_NAME: "담당자 이름",
    RESULT: "접수 결과"
  },
  HANDLE_REPORT: {
    DAMAGE_ASSESSMENT_COMPANY_ID: "손해 사정 업체 번호",
    ROADSIDE_ASSISTANCE_COMPANY_ID: "긴급 출동 업체 번호"
  }
};

export const ELEMENT_ID = {
  RESULT: "result",
  EMPLOYEE_NAME: "employeeName",
  DAMAGE_ASSESSMENT_COMPANY_ID: "damageAssessmentCompanyId",
  ROADSIDE_ASSISTANCE_COMPANY_ID: "roadsideAssistanceCompanyId"
}

export const LABEL= {
  DAMAGE_ASSESSMENT_COMPANY_ID: "DAMAGE_ASSESSMENT_COMPANY_ID",
  ROADSIDE_ASSISTANCE_COMPANY_ID: "ROADSIDE_ASSISTANCE_COMPANY_ID"
}

export const TITLE = {
  HANDLE_REPORT: "신고 처리 정보 리스트",
  HANDLE_COMPLAINT: "민원 처리 정보 리스트"
}

export const COMBO_LIST= {
  ALL: "all"
}

export const CLASS_LIST= {
  SELECTED: "selected"
}
