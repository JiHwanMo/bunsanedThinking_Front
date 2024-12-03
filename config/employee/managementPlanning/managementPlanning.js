import { BUTTON as COMMON_BUTTON } from '../../common.js'

export const BUTTON = {
  TASK: {
    EMPLOYEE: {
      MANAGEMENTPLANNING: {
        HOME: {
          DEPARTMENT_LIST: '부서 정보 관리'
        },
        DEPARTMENT_DETAIL:{
          UPDATE: COMMON_BUTTON.COMMON.UPDATE,
          DELETE: COMMON_BUTTON.COMMON.DELETE
        }
      }
    }
  }
};

export const COMBOBOX = {
  DEPARTMENT_LIST: {
    isCombo: false // 콤보박스 없음
  }
};

export const TABLE_TITLE = {
  DEPARTMENT_LIST: "부서 정보 리스트"
};

export const COLUMN_NAME = {
  DEPARTMENT_LIST: [
    "부서 번호",
    "부서 이름",
    "소속 인원",
    "부서장 이름"
  ]
};

export const DETAIL_COLUMN_NAME = {
  DEPARTMENT_LIST: {
    ID: "부서 번호",
    NAME: "부서 이름",
    TASK: "주 업무",
    PURPOSE: "부서 목적",
    EMPLOYEE_COUNT: "소속 인원",
    HEAD_NAME: "부서장 이름",
  },
  UPDATE_COLUMN_NAME: {
    UPDATE_ITEM: "수정할 항목",
    UPDATE_VALUE: "수정할 값",
    UPDATE_NAME: "부서 이름",
    UPDATE_TASK: "주 업무",
    UPDATE_PURPOSE: "부서 목적",
    UPDATE_HEAD_NAME: "부서장 이름"
  }
};

export const POP_UP = {
  UPDATE: {
    QUESTION: "수정하시겠습니까?",
    OK: "수정이 완료되었습니다.",
    ERROR: "수정 중 오류가 발생했습니다.",
    VALIDATION_ERROR: "잘못된 정보를 입력하였습니다. 다시 입력해주세요.",
    CONSOLE_ERROR: "수정 중 오류 발생 :"
  },
  DELETE: {
    QUESTION: "삭제하시겠습니까?",
    OK: "삭제가 완료되었습니다.",
    ERROR: "삭제 중 오류가 발생했습니다.",
    CONSOLE_ERROR: "삭제 중 오류 발생 :"
  },
  POST: {
    QUESTION: "등록하시겠습니까?",
    OK: "등록이 완료되었습니다.",
    ERROR: "등록 중 오류가 발생했습니다.",
    VALIDATION_ERROR: "잘못된 정보를 입력하였습니다. 다시 입력해주세요.",
    INVENTORY_ERROR: "현재 재고는 총 재고를 초과할 수 없습니다.",
    CONSOLE_ERROR: "등록 중 오류 발생 :"
  }
};

export const VALUE = {
  POST: "POST",
  UPDATE: "UPDATE"
};

export const ELEMENT_ID = {
  NAME: "name",
  PURPOSE: "purpose",
  TASK: "task",
  HEAD_NAME: "head_name",
  INDEX: "index"
}

export const TYPE = {
  DEPARTMENT_DETAIL: "DEPARTMENT_DETAIL",
  DEPARTMENT_LIST: "DEPARTMENT_LIST"
}

export const CLASS = {
  POST_BUTTON: "postButton"
}

export const MESSAGES = {
  NONE: "없음",
  PLACE_HOLDER: {
    UPDATE_INPUT : "수정할 값을 입력하세요",
    POST_INPUT: "을(를) 입력하세요"
  }
}

export const POST_FORM = {
  NAME_FORM: {
    FOR: "name",
    TYPE: "text",
    ID: "name",
    NAME: "name"
  },
  TASK_FORM: {
    FOR: "task",
    TYPE: "text",
    ID: "task",
    NAME: "task"
  },
  PURPOSE_FORM: {
    FOR: "purpose",
    ID: "purpose",
    NAME: "purpose"
  },
  HEAD_NAME_FORM: {
    FOR: "head_name",
    TYPE: "text",
    ID: "head_name",
    NAME: "head_name"
  }
}

export const UPDATE_FORM = {
  FOR: "index",
  ID: "index",
  NAME: "index",
  OPTION_VALUE: {
    ONE: "1",
    TWO: "2",
    THREE: "3",
    FOUR: "4"
  },
  UPDATE_INPUT: {
    FOR: "input",
    TYPE: "text",
    ID: "input",
    NAME: "input"
  }
}

