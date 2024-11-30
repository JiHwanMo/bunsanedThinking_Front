export const MESSAGES = {
  GREETING: "님 안녕하세요.",
  WELCOME: "님, 환영합니다!",
  PLACE_HOLDER: {
    INPUT: "을(를) 입력하세요",
    SEARCH: "검색어 입력"
  }
};

export const BUTTON = {
  COMMON:{
    OK:'확인',
    CANCEL:'취소',
    SEARCH:'검색',
    POST: '등록',
    UPDATE: '수정',
    DELETE: '삭제'
  }
};

// export const POP_UP = {};
export const COMBOBOX = {
  LOAN_TYPES: "대출 종류",
  INSURANCE_TYPES: "보험 종류"
};
// export const COLUMN_NAME = {};

export const TAG = {
  DIV: "div",
  LABEL: "label",
  SELECT: "select",
  OPTION: "option",
  INPUT: "input",
  TR: "tr",
  TH: "th",
  TD: "td",
  TABLE: "table",
  TBODY: "tbody",
  BUTTON: "button",
  TEXT_AREA: "textarea"
}

export const KEY = {
  LOGIN_ID: "loginId", // id -> loginId
  CURRENT_TYPE: "currentType",
  SELECTED_BUTTON_TYPE: "selectedButtonType",
  SELECTED_DATA_ID: "selectedDataId",
  LIST: "list"
}

export const ELEMENT_ID = {
  TITLE: "title",
  DETAILS_TABLE: "detailsTable",
  SEARCH_INPUT: "searchInput",
  SEARCH_BUTTON: "searchButton",
  POST: "post",
  TABLE: "tableHead",
  INPUT_FIELDS_CONTAINER: "inputFieldsContainer",
  BUTTON_CONTAINER: "buttonContainer",
  COMBO_BOX_CONTAINER: "comboBoxContainer",
  STAR_BUTTONS_CONTAINER: "starButtonsContainer"
}

export const CLASS = {
  FORM_GROUP: "form-group",
  POST_BUTTON: "post-button",
  COMBO_BOX: "combo-box",
  GREETING: "greeting",
  STAR_BUTTONS_CONTAINER: "star-buttons-container",
  STAR_BUTTON: "star-button",
  SELECTED: "selected",
  BUTTON_ITEM: "button-item",
  BUTTON_GROUP: "button-group",
  CHECK_BOX_GROUP: "checkbox-group",
  CHECK_BOX_ITEM: "checkbox-item",
  CHECKED: "checked",
  DYNAMIC_SECTION: "dynamic-section",
  SECTION_HEADER: "section-header",
  ADD_BUTTON: "add-button",
  REMOVE_BUTTON: "remove-button",
  INPUT_FIELD: "input-field",
  GENDER_BUTTON: "gender-button",
  BUTTON_CONTAINER: "button-container",
  ACTION_BUTTON: "action-button",
  RADIO_ITEM: "radio-item",
  RADIO_GROUP: "radio-group"
}

export const LOCATION = {
  HOME: "home.html",
  INFORMATION: "informationList.html",
  DETAIL: "detail.html",
  INPUT: "input.html"
}

export const INPUT_TYPE = {
  TEXT: "text",
  NUMBER: "number",
  DATE: "date",
  RADIO: "RADIO"
}

export const EVENT = {
  CLICK: "click",
  DOUBLE_CLICK: "dblclick",
  SUBMIT: "submit",
  CHANGE: "change"
}

export const CLASS_SELECTOR = {
  CONTAINER: ".container",
  HEADER_LINE: ".header-line",
  SEARCH_CONTAINER: ".search-container",
  RADIO_GROUP: ".radio-group",
  BUTTON_GROUP: ".button-group",
  FORM_GROUP: ".form-group",
  GENDER_BUTTON: ".gender-button"
}

export const STRING_EMPTY = "";
export const ZERO = 0;
export const PLUS = "+";
export const MINUS = "-";

export const COMBO_LIST_FETCH ={
 ALL: "all"
}

export const ATTRIBUTE = {
  FOR: "for",
  VALUE: "value",
  NAME: "name"
}

export const QUERY_SELECTOR = {
  SELECTOR: (tag, condition, value, isChecked) => {
    return `${tag}[${condition}="${value}"]${isChecked ? ":checked" : ""}`
  }
}
