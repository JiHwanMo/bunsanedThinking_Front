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
  }
};

export const POP_UP = {
  UPDATE: {
    QUESTION: "수정하시겠습니까?",
    OK: "수정이 완료되었습니다.",
    ERROR: "수정 중 오류가 발생했습니다."
  },
  DELETE: {
    QUESTION: "삭제하시겠습니까?",
    OK: "삭제가 완료되었습니다.",
    ERROR: "삭제 중 오류가 발생했습니다."
  },
  POST: {
    QUESTION: "등록하시겠습니까?",
    OK: "등록이 완료되었습니다.",
    ERROR: "등록 중 오류가 발생했습니다."
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
  INPUT: "input"
};
