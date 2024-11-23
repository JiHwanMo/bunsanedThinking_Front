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
