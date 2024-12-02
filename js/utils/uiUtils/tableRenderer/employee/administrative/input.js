import { fetchGetOfficeSupply } from "../../../../apiUtils/apiDocumentation/employee/administrative/administrative.js";
import { addButtons } from "../../../buttonManager/employee/administrative/input.js";
import { CLASS, ELEMENT_ID, EVENT, KEY, STRING_EMPTY } from "../../../../../../config/common.js";
import {
  DETAIL_COLUMN_NAME,
  VALUE,
  ELEMENT_ID as ADMINISTRATIVE_ELEMENT_ID,
  UPDATE_FORM, MESSAGES, POST_FORM
} from "../../../../../../config/employee/administrative/administrative.js";

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
    const officeSupplyData = await fetchGetOfficeSupply(selectedDataId);

    renderInputFields(officeSupplyData);
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
        <label for=${POST_FORM.NAME_FORM.FOR}>${DETAIL_COLUMN_NAME.OFFICESUPPLY_LIST.NAME}</label>
        <input type=${POST_FORM.NAME_FORM.TYPE} id=${POST_FORM.NAME_FORM.ID} name=${POST_FORM.NAME_FORM.NAME} value="${data.name || STRING_EMPTY}" placeholder="${DETAIL_COLUMN_NAME.OFFICESUPPLY_LIST.NAME}${MESSAGES.PLACE_HOLDER.POST_INPUT}" required>
      </div>
      <div class=${CLASS.FORM_GROUP}>
        <label for=${POST_FORM.DESCRIPTION_FORM.FOR}>${DETAIL_COLUMN_NAME.OFFICESUPPLY_LIST.DESCRIPTION}</label>
        <textarea id=${POST_FORM.DESCRIPTION_FORM.ID} name=${POST_FORM.DESCRIPTION_FORM.NAME} placeholder="${DETAIL_COLUMN_NAME.OFFICESUPPLY_LIST.DESCRIPTION}${MESSAGES.PLACE_HOLDER.POST_INPUT}" required>${data.description || STRING_EMPTY}</textarea>
      </div>
      <div class=${CLASS.FORM_GROUP}>
        <label for=${POST_FORM.INVENTORY_FORM.FOR}>${DETAIL_COLUMN_NAME.OFFICESUPPLY_LIST.INVENTORY}</label>
        <input type=${POST_FORM.INVENTORY_FORM.TYPE} id=${POST_FORM.INVENTORY_FORM.ID} name=${POST_FORM.INVENTORY_FORM.NAME} value="${data.inventory || STRING_EMPTY}" placeholder="${DETAIL_COLUMN_NAME.OFFICESUPPLY_LIST.INVENTORY}${MESSAGES.PLACE_HOLDER.POST_INPUT}" required>
      </div>
      <div class=${CLASS.FORM_GROUP}>
        <label for=${POST_FORM.TOTAL_INVENTORY_FORM.FOR}>${DETAIL_COLUMN_NAME.OFFICESUPPLY_LIST.TOTAL_INVENTORY}</label>
        <input type=${POST_FORM.TOTAL_INVENTORY_FORM.TYPE} id=${POST_FORM.TOTAL_INVENTORY_FORM.ID} name=${POST_FORM.TOTAL_INVENTORY_FORM.NAME} value="${data.total_inventory || STRING_EMPTY}" placeholder="${DETAIL_COLUMN_NAME.OFFICESUPPLY_LIST.TOTAL_INVENTORY}${MESSAGES.PLACE_HOLDER.POST_INPUT}" required>
      </div>
      <div class=${CLASS.FORM_GROUP}>
      <label for=${POST_FORM.DEPARTMENT_ID_FORM.FOR}>${DETAIL_COLUMN_NAME.OFFICESUPPLY_LIST.DEPARTMENT_ID}</label>
      <input type=${POST_FORM.DEPARTMENT_ID_FORM.TYPE} id=${POST_FORM.DEPARTMENT_ID_FORM.ID} name=${POST_FORM.DEPARTMENT_ID_FORM.NAME} placeholder="${DETAIL_COLUMN_NAME.OFFICESUPPLY_LIST.DEPARTMENT_ID}${MESSAGES.PLACE_HOLDER.POST_INPUT}" required>
      </div>
    `;
  } else if (selectedButtonType === VALUE.UPDATE) {
    let selectedIndex = 1;
    let placeholderValue = data.name || STRING_EMPTY;

    inputFieldsContainer.innerHTML = `
      <div class=${CLASS.FORM_GROUP}>
        <label for=${UPDATE_FORM.FOR}>수정할 항목</label>
        <select id=${UPDATE_FORM.ID} name=${UPDATE_FORM.NAME}>
          <option value=${UPDATE_FORM.OPTION_VALUE.ONE} selected>비품 이름</option>
          <option value=${UPDATE_FORM.OPTION_VALUE.TWO}>비품 설명</option>
          <option value=${UPDATE_FORM.OPTION_VALUE.THREE}>현재 재고</option>
        </select>
      </div>
      <div class=${CLASS.FORM_GROUP}>
        <label for=${UPDATE_FORM.UPDATE_INPUT.FOR}>수정할 값</label>
        <input type=${UPDATE_FORM.UPDATE_INPUT.TYPE} id=${UPDATE_FORM.UPDATE_INPUT.ID} name=${UPDATE_FORM.UPDATE_INPUT.NAME} value="${placeholderValue}" placeholder="${MESSAGES.PLACE_HOLDER.UPDATE_INPUT}" required>
      </div>
    `;

    // `<select>` 요소의 `onchange` 이벤트 추가
    const selectElement = document.getElementById(ADMINISTRATIVE_ELEMENT_ID.INDEX);
    const inputElement = document.getElementById(ADMINISTRATIVE_ELEMENT_ID.INPUT);

    selectElement.addEventListener(EVENT.CHANGE, (event) => {
      selectedIndex = parseInt(event.target.value, 10);

      // 선택된 항목에 따라 입력 필드 값 변경
      if (selectedIndex === 1) {
        placeholderValue = data.name || STRING_EMPTY;
      } else if (selectedIndex === 2) {
        placeholderValue = data.description || STRING_EMPTY;
      } else if (selectedIndex === 3) {
        placeholderValue = data.inventory || STRING_EMPTY;
      }

      inputElement.value = placeholderValue;
    });
  }
};

