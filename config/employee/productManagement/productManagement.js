import {BUTTON as COMMON_BUTTON, STRING_EMPTY} from "../../../config/common.js"
import {PLACE_HOLDER} from "../../register.js";

export const BUTTON = {
  TASK: {
    EMPLOYEE: {
      PRODUCT_MANAGEMENT: {
        HOME: {
          MANAGE_INSURANCE_PRODUCT: '보험 상품 관리'
        },
        MANAGE_INSURANCE_PRODUCT:{
          UPDATE: COMMON_BUTTON.COMMON.UPDATE,
          DELETE: COMMON_BUTTON.COMMON.DELETE
        }
      }
    }
  }
};

export const POP_UP = {
  UPDATE: {
    QUESTION: "정말로 수정하시겠습니까?",
    OK: "수정이 완료되었습니다."
  },
  DELETE: {
    QUESTION: "정말로 삭제하시겠습니까?",
    OK: "삭제가 완료되었습니다."
  },
  POST: {
    QUESTION: "정말로 등록하시겠습니까?",
    OK: "등록이 완료되었습니다."
  }
};

export const COMBOBOX = {
  MANAGE_INSURANCE_PRODUCT: {
    isCombo: false
  }
};

export const TABLE_TITLE = {
  MANAGE_INSURANCE_PRODUCT: "보험 상품 관리"
};
export const COLUMN_NAME = {
  MANAGE_INSURANCE_PRODUCT:[
    "보험 상품 번호",
    "보험 상품 이름",
    "보험 종류",
    "연령대",
    "월 보험료"
  ]
};

export const DETAIL_COLUMN_NAME = {
  MANAGE_INSURANCE_PRODUCT:{
    ID: "보험 상품 번호",
    NAME: "보험 상품 이름",
    INSURANCE_TYPE: "보험 종류",
    AGE_RANGE: "연령대",
    COVERAGE: "보장 내용",
    MONTHLY_PREMIUM: "월 보험료",
    CONTRACT_PERIOD: "계약기간",
    MAXIMUM_MONEY: "한도",

    TYPE:{
      DISEASE:{
        DISEASE_LIMIT: "질병 최대 개수",
        DISEASE_NAME: "질병 이름",
        SURGERIES_LIMIT: "수술 최대 횟수"
      },
      INJURY:{
        INJURY_TYPE: "상해 보험 종류",
        SURGERIES_LIMIT:"수술 최대 횟수"
      },
      AUTOMOBILE:{
        ACCIDENT_LIMIT:"사고 최대 횟수",
        VEHICLE_TYPE:"차량 종류",
        SERVICES: "서비스"
      },

      LIST:{
        SERVICE_TYPE: "서비스 타입"
      }

    }
  }
};

export const NAME_MAPPER= {
  MANAGE_INSURANCE_PRODUCT: "MANAGE_INSURANCE_PRODUCT"
}

export const INSURANCE_TYPE={
  DISEASE : "Disease",
  INJURY : "Injury",
  AUTOMOBILE: "Automobile",
}

export const VALUE ={
  POST: "POST",
  UPDATE: "UPDATE"
}

export const KEY ={
  SELECTED_DATA_INSURANCE_TYPE: "selectedDataInsuranceType"
}

export const ELEMENT_ID={
  INSURANCE_TYPE : "insuranceType",
  INSURANCE_TYPE_CONTAINER: "insuranceTypeContainer"
}

export const OPTION ={
  DEFAULT: {
    VALUE: STRING_EMPTY,
    LABEL: "보험 종류를 선택하세요"
  },
  INJURY: {
    VALUE: "Injury",
    LABEL: "상해 보험"
  },
  DISEASE:{
    VALUE: "Disease",
    LABEL: "질병 보험"
  },
  AUTOMOBILE:{
    VALUE: "Automobile",
    LABEL: "자동차 보험"
  }
}

export const RENDER_COMBO_BOX={
  FOR: "for",
  INSURANCE_TYPE: "보험 종류"
}

export const RENDER_COMMON_INPUT_FIELDS_WITH_VALUES={
  VALUE: "value"
}

export const COMMON_FORM = {
  NAME: {
    IS_TEXT_AREA: false,
    FOR: "insuranceName",
    LABEL: "NAME",
    TYPE: "text",
    ID: "insuranceName",
    NAME: "insuranceName",
    VALUE: "name",
    PLACE_HOLDER: "NAME"
  },
  AGE_RANGE: {
    IS_TEXT_AREA: false,
    FOR: "ageRange",
    LABEL: "AGE_RANGE",
    TYPE: "text",
    ID: "ageRange",
    NAME: "ageRange",
    VALUE: "ageRange",
    PLACE_HOLDER: "AGE_RANGE"
  },
  COVERAGE: {
    IS_TEXT_AREA: true,
    FOR: "coverage",
    LABEL: "COVERAGE",
    ROWS: "4",
    ID: "coverage",
    NAME: "coverage",
    VALUE: "coverage",
    PLACE_HOLDER: "COVERAGE"
  },
  MONTHLY_PREMIUM: {
    IS_TEXT_AREA: false,
    FOR: "monthlyPremium",
    LABEL: "MONTHLY_PREMIUM",
    TYPE: "number",
    ID: "monthlyPremium",
    NAME: "monthlyPremium",
    VALUE: "monthlyPremium",
    PLACE_HOLDER: "MONTHLY_PREMIUM"
  },
  CONTRACT_PERIOD: {
    IS_TEXT_AREA: false,
    FOR: "contractPeriod",
    LABEL: "CONTRACT_PERIOD",
    TYPE: "number",
    ID: "contractPeriod",
    NAME: "contractPeriod",
    VALUE: "contractPeriod",
    PLACE_HOLDER: "CONTRACT_PERIOD"
  },
  MAXIMUM_MONEY: {
    IS_TEXT_AREA: false,
    FOR: "maximumMoney",
    LABEL: "MAXIMUM_MONEY",
    TYPE: "number",
    ID: "maximumMoney",
    NAME: "maximumMoney",
    VALUE: "maximumMoney",
    PLACE_HOLDER: "MAXIMUM_MONEY"
  }
}

export const INJURY_FORM={
  INJURY_TYPE: {
    FOR:"injuryType",
    ID: "injuryType",
    NAME: "injuryType",
    DEFAULT:{
      VALUE: STRING_EMPTY,
      LABEL: "상해 종류를 선택하세요"
    },
    MINOR:{
      VALUE: "Minor",
      LABEL: "경상"
    },
    SERIOUS:{
      VALUE:"Serious",
      LABEL:"중상"
    }
  },
  SURGERY_LIMIT:{
    FOR: "surgeriesLimit",
    TYPE: "number",
    ID: "surgeriesLimit",
    NAME: "surgeriesLimit"
  }
}

export const DISEASE_FORM = {
  DISEASE_LIMIT:{
    FOR: "diseaseLimit",
    TYPE: "number",
    ID: "diseaseLimit",
    NAME: "diseaseLimit"
  },
  DISEASE_NAME:{
    FOR: "diseaseName",
    TYPE: "text",
    ID: "diseaseName",
    NAME: "diseaseName"
  },
  SURGERY_LIMIT:{
    FOR: INJURY_FORM.SURGERY_LIMIT.FOR,
    TYPE: INJURY_FORM.SURGERY_LIMIT.TYPE,
    ID: INJURY_FORM.SURGERY_LIMIT.ID,
    NAME: INJURY_FORM.SURGERY_LIMIT.NAME
  }
}

export const AUTOMOBILE_FORM ={
  ACCIDENT_LIMIT: {
    FOR: "accidentLimit",
    TYPE: "number",
    ID: "accidentLimit",
    NAME: "accidentLimit"
  },
  VEHICLE_TYPE: {
    FOR: "vehicleType",
    ID: "vehicleType",
    NAME: "vehicleType",
    DEFAULT:{
      VALUE: STRING_EMPTY,
      LABEL: "차량 종류를 선택하세요"
    },
    SMALL:{
      VALUE: "Small",
      LABEL: "소형"
    },
    MEDIUM:{
      VALUE:"Medium",
      LABEL:"중형"
    },
    LARGE:{
      VALUE:"Large",
      LABEL:"대형"
    }
  },
  SERVICE:{
    FOR: "service-",
    TYPE: "checkbox",
    ID: "service-",
    NAME: "services"
  },
  SERVICE_TYPE: {
    SERVICE_TOWING: {
      FOR: "serviceTowing",
      TYPE: "checkbox",
      ID: "serviceTowing",
      NAME: "services",
      VALUE: "EmergencyTowing",
      LABEL: "긴급견인"
    },
    SERVICE_JUMP_START: {
      FOR: "serviceJumpstart",
      TYPE: "checkbox",
      ID: "serviceJumpstart",
      NAME: "services",
      VALUE: "EmergencyStart",
      LABEL: "긴급시동"
    },
    SERVICE_REFUELING:{
      FOR: "serviceRefueling",
      TYPE: "checkbox",
      ID: "serviceRefueling",
      NAME: "services",
      VALUE:"EmergencyRefueling",
      LABEL: "비상급유"
    },
    SERVICE_BATTERY:{
      FOR: "serviceBattery",
      TYPE: "checkbox",
      ID: "serviceBattery",
      NAME: "services",
      VALUE:"BatteryCharging",
      LABEL: "배터리충전"
    },
    SERVICE_ENGINE_REPAIR:{
      FOR: "serviceEngineRepair",
      TYPE: "checkbox",
      ID: "serviceEngineRepair",
      NAME: "services",
      VALUE:"EngineOverheatingRepair",
      LABEL: "엔진과열 수리"
    },
    SERVICE_TIRE_REPAIR:{
      FOR: "serviceTireRepair",
      TYPE: "checkbox",
      ID: "serviceTireRepair",
      NAME: "services",
      VALUE:"TirepunkRepair",
      LABEL: "타이어펑크 수리"
    }
  }
}
