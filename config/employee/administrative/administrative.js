import { BUTTON as COMMON_BUTTON } from '../../common.js'

export const BUTTON = {
   TASK: {
    EMPLOYEE: {
      ADMINISTRATIVE: {
        HOME: {
          OFFICESUPPLY_LIST: '집기 비품 재고 관리'
        },
        OFFICESUPPLY_DETAIL: {
          UPDATE: COMMON_BUTTON.COMMON.UPDATE,
          DELETE: COMMON_BUTTON.COMMON.DELETE
        }
      }
    }
  }
};

export const COMBOBOX = {
  OFFICESUPPLY_LIST: {
    isCombo: false
  }
};

export const TABLE_TITLE = {
  OFFICESUPPLY_LIST: "집기 비품 재고 정보 리스트"
};

export const COLUMN_NAME = {
  OFFICESUPPLY_LIST: [
    "비품 번호",
    "비품 이름",
    "현재 재고",
    "총 재고"
  ]
};

export const DETAIL_COLUMN_NAME = {
  OFFICESUPPLY_LIST: {
    ID: "비품 번호",
    NAME: "비품 이름",
    INVENTORY: "현재 재고",
    TOTAL_INVENTORY: "총 재고",
    DESCRIPTION: "설명",
    DEPARTMENT_ID: "부서ID"
  },
  UPDATE_COLUMN_NAME: {
    UPDATE_ITEM: "수정할 항목",
    UPDATE_VALUE: "수정할 값",
    UPDATE_NAME: "비품 이름",
    UPDATE_DESCRIPTION: "비품 설명",
    UPDATE_INVENTORY: "현재 재고"
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
    INVENTORY_NEGATIVE_NUMBER_ERROR: "재고 수량은 0 이상이어야 합니다.",
    INVENTORY_ERROR: "현재 재고는 총 재고를 초과할 수 없습니다.",
    CONSOLE_ERROR: "등록 중 오류 발생 :"
  }
};

export const VALUE = {
  POST: "POST",
  UPDATE: "UPDATE"
};

export const ELEMENT_ID ={
  NAME: "name",
  DESCRIPTION: "description",
  INVENTORY: "inventory",
  TOTAL_INVENTORY: "total_inventory",
  DEPARTMENT_ID: "department_id",
  INDEX: "index",
  INPUT: "input",
  LIST: "list"
};

export const TYPE = {
  OFFICESUPPLY_DETAIL: "OFFICESUPPLY_DETAIL",
  OFFICESUPPLY_LIST: "OFFICESUPPLY_LIST"
};

export const CLASS = {
  COMBO_BOX: "combo-box",
  POST_BUTTON: "postButton",
  SELECTED: "selected"
}

export const POST_FORM = {
  NAME_FORM: {
    FOR: "name",
    TYPE: "text",
    ID: "name",
    NAME: "name"
  },
  DESCRIPTION_FORM: {
    FOR: "description",
    ID: "description",
    NAME: "description"
  },
  INVENTORY_FORM: {
    FOR: "inventory",
    TYPE: "number",
    ID: "inventory",
    NAME: "inventory"
  },
  TOTAL_INVENTORY_FORM: {
    FOR: "total_inventory",
    TYPE: "number",
    ID: "total_inventory",
    NAME: "total_inventory"
  },
  DEPARTMENT_ID_FORM: {
    FOR: "department_id",
    TYPE: "number",
    ID: "department_id",
    NAME: "department_id"
  }

}

export const UPDATE_FORM = {
  FOR: "index",
  ID: "index",
  NAME: "index",
  OPTION_VALUE: {
    ONE: "1",
    TWO: "2",
    THREE: "3"
  },
  UPDATE_INPUT: {
    FOR: "input",
    TYPE: "text",
    ID: "input",
    NAME: "input"
  }
}

export const MESSAGES = {
  PLACE_HOLDER: {
    UPDATE_INPUT : "\"수정할 값을 입력하세요\"",
    POST_INPUT: "을(를) 입력하세요"
  }
}
