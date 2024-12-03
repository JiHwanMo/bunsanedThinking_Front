import { fetchGetDepartment } from "../../../../apiUtils/apiDocumentation/employee/managementPlanning/managementPlanning.js";
import { addButtons } from "../../../buttonManager/employee/managementPlanning/input.js";
import {
  DETAIL_COLUMN_NAME,
  VALUE,
  ELEMENT_ID as MANAGEMENTPLANNING_ELEMENT_ID,
  POST_FORM, UPDATE_FORM, MESSAGES
} from "../../../../../../config/employee/managementPlanning/managementPlanning.js";
import { CLASS, ELEMENT_ID, EVENT, KEY, STRING_EMPTY, TAG } from "../../../../../../config/common.js";

export const renderInput = async () => {
  const inputFieldsContainer = document.getElementById(ELEMENT_ID.INPUT_FIELDS_CONTAINER);
  const buttonContainer = document.getElementById(ELEMENT_ID.BUTTON_CONTAINER);

  const selectedButtonType = JSON.parse(sessionStorage.getItem(KEY.SELECTED_BUTTON_TYPE));

  if (selectedButtonType === VALUE.POST) {
    // 등록 화면: 빈 입력 필드 생성
    renderInputFields({});
  } else if (selectedButtonType === VALUE.UPDATE) {
    // 수정 화면: 기존 데이터 불러오기
    const selectedDataId = JSON.parse(sessionStorage.getItem(KEY.SELECTED_DATA_ID));
    const departmentData = await fetchGetDepartment(selectedDataId);

    renderInputFields(departmentData);
  }
  // 버튼 추가
  addButtons(buttonContainer);
};

const renderInputFields = (data) => {
  const inputFieldsContainer = document.getElementById(ELEMENT_ID.INPUT_FIELDS_CONTAINER);
  const selectedButtonType = JSON.parse(sessionStorage.getItem(KEY.SELECTED_BUTTON_TYPE));

  if (selectedButtonType === VALUE.POST) {
    inputFieldsContainer.innerHTML = `
      <div class=${CLASS.FORM_GROUP}>
        <label for=${POST_FORM.NAME_FORM.FOR}>${DETAIL_COLUMN_NAME.DEPARTMENT_LIST.NAME}</label>
        <input type=${POST_FORM.NAME_FORM.TYPE} id=${POST_FORM.NAME_FORM.ID} name=${POST_FORM.NAME_FORM.NAME} value="${data.name || STRING_EMPTY}" placeholder="${DETAIL_COLUMN_NAME.DEPARTMENT_LIST.NAME}${MESSAGES.PLACE_HOLDER.POST_INPUT}" required>
      </div>
      <div class=${CLASS.FORM_GROUP}>
        <label for=${POST_FORM.TASK_FORM.FOR}>${DETAIL_COLUMN_NAME.DEPARTMENT_LIST.TASK}</label>
        <input type=${POST_FORM.TASK_FORM.TYPE} id=${POST_FORM.TASK_FORM.ID} name=${POST_FORM.TASK_FORM.NAME} value="${data.task || STRING_EMPTY}" placeholder="${DETAIL_COLUMN_NAME.DEPARTMENT_LIST.TASK}${MESSAGES.PLACE_HOLDER.POST_INPUT}" required>
      </div>
      <div class=${CLASS.FORM_GROUP}>
        <label for=${POST_FORM.PURPOSE_FORM.FOR}>${DETAIL_COLUMN_NAME.DEPARTMENT_LIST.PURPOSE}</label>
        <textarea id=${POST_FORM.PURPOSE_FORM.ID} name=${POST_FORM.PURPOSE_FORM.NAME} placeholder="${DETAIL_COLUMN_NAME.DEPARTMENT_LIST.PURPOSE}${MESSAGES.PLACE_HOLDER.POST_INPUT}" required>${data.purpose || STRING_EMPTY}</textarea>
      </div>
      <div class=${CLASS.FORM_GROUP}>
        <label for=${POST_FORM.HEAD_NAME_FORM.FOR}>${DETAIL_COLUMN_NAME.DEPARTMENT_LIST.HEAD_NAME}</label>
        <input type=${POST_FORM.HEAD_NAME_FORM.TYPE} id=${POST_FORM.HEAD_NAME_FORM.ID} name=${POST_FORM.HEAD_NAME_FORM.NAME} value="${data.headName || STRING_EMPTY}" placeholder="${DETAIL_COLUMN_NAME.DEPARTMENT_LIST.HEAD_NAME}${MESSAGES.PLACE_HOLDER.POST_INPUT}" required>
      </div>
    `;
  } else if (selectedButtonType === VALUE.UPDATE) {
    let selectedIndex = 1;
    let placeholderValue = `\"${data.name || STRING_EMPTY}\"`;

    inputFieldsContainer.innerHTML = `
      <div class=${CLASS.FORM_GROUP}>
        <label for=${UPDATE_FORM.FOR}>${DETAIL_COLUMN_NAME.UPDATE_COLUMN_NAME.UPDATE_ITEM}</label>
        <select id=${UPDATE_FORM.ID} name=${UPDATE_FORM.NAME}>
          <option value=${UPDATE_FORM.OPTION_VALUE.ONE} selected>${DETAIL_COLUMN_NAME.UPDATE_COLUMN_NAME.UPDATE_NAME}</option>
          <option value=${UPDATE_FORM.OPTION_VALUE.TWO}>${DETAIL_COLUMN_NAME.UPDATE_COLUMN_NAME.UPDATE_TASK}</option>
          <option value=${UPDATE_FORM.OPTION_VALUE.THREE}>${DETAIL_COLUMN_NAME.UPDATE_COLUMN_NAME.UPDATE_PURPOSE}</option>
          <option value=${UPDATE_FORM.OPTION_VALUE.FOUR}>${DETAIL_COLUMN_NAME.UPDATE_COLUMN_NAME.UPDATE_HEAD_NAME}</option>
        </select>
      </div>
      <div class=${CLASS.FORM_GROUP}>
        <label for=${UPDATE_FORM.UPDATE_INPUT.FOR}>${DETAIL_COLUMN_NAME.UPDATE_COLUMN_NAME.UPDATE_VALUE}</label>
        <input type=${UPDATE_FORM.UPDATE_INPUT.TYPE} id=${UPDATE_FORM.UPDATE_INPUT.ID} name=${UPDATE_FORM.UPDATE_INPUT.NAME} value=${placeholderValue} placeholder=${MESSAGES.PLACE_HOLDER.UPDATE_INPUT} required>
      </div>
    `;

    // `<select>` 요소의 `onchange` 이벤트 추가
    const selectElement = document.getElementById(MANAGEMENTPLANNING_ELEMENT_ID.INDEX);
    const inputElement = document.getElementById(TAG.INPUT);

    selectElement.addEventListener(EVENT.CHANGE, (event) => {
      selectedIndex = parseInt(event.target.value, 10);

      // 선택된 항목에 따라 입력 필드 값 변경
      if (selectedIndex === 1) {
        placeholderValue = data.name || STRING_EMPTY;
      } else if (selectedIndex === 2) {
        placeholderValue = data.task || STRING_EMPTY;
      } else if (selectedIndex === 3) {
        placeholderValue = data.purpose || STRING_EMPTY;
      } else if (selectedIndex === 4) {
        placeholderValue = data.headName || STRING_EMPTY;
      }

      inputElement.value = placeholderValue;
    });
  }
};
