import {DETAIL_COLUMN_NAME, VALUE, ELEMENT_ID as ADMINISTRATIVE_ELEMENT_ID} from "../../../../../../config/employee/administrative/administrative.js";
import { fetchGetOfficeSupply } from "../../../../apiUtils/apiDocumentation/employee/administrative/administrative.js";
import { addButtons } from "../../../buttonManager/employee/administrative/input.js";
import {ELEMENT_ID, EVENT, KEY} from "../../../../../../config/common.js";

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
      <div class="form-group">
        <label for="name">${DETAIL_COLUMN_NAME.OFFICESUPPLY_LIST.NAME}</label>
        <input type="text" id="name" name="name" value="${data.name || ""}" placeholder="${DETAIL_COLUMN_NAME.OFFICESUPPLY_LIST.NAME}을 입력하세요" required>
      </div>
      <div class="form-group">
        <label for="description">${DETAIL_COLUMN_NAME.OFFICESUPPLY_LIST.DESCRIPTION}</label>
        <textarea id="description" name="description" placeholder="${DETAIL_COLUMN_NAME.OFFICESUPPLY_LIST.DESCRIPTION}을 입력하세요" required>${data.description || ""}</textarea>
      </div>
      <div class="form-group">
        <label for="inventory">${DETAIL_COLUMN_NAME.OFFICESUPPLY_LIST.INVENTORY}</label>
        <input type="number" id="inventory" name="inventory" value="${data.inventory || ""}" placeholder="${DETAIL_COLUMN_NAME.OFFICESUPPLY_LIST.INVENTORY}를 입력하세요" required>
      </div>
      <div class="form-group">
        <label for="total_inventory">${DETAIL_COLUMN_NAME.OFFICESUPPLY_LIST.TOTAL_INVENTORY}</label>
        <input type="number" id="total_inventory" name="total_inventory" value="${data.total_inventory || ""}" placeholder="${DETAIL_COLUMN_NAME.OFFICESUPPLY_LIST.TOTAL_INVENTORY}를 입력하세요" required>
      </div>
      <div class="form-group">
      <label for="department_id">${DETAIL_COLUMN_NAME.OFFICESUPPLY_LIST.DEPARTMENT_ID}</label>
      <input type="number" id="department_id" name="department_id" placeholder="${DETAIL_COLUMN_NAME.OFFICESUPPLY_LIST.DEPARTMENT_ID}를 입력하세요" required>
      </div>
    `;
  } else if (selectedButtonType === VALUE.UPDATE) {
    // 기본 선택은 "비품 이름"
    let selectedIndex = 1;
    let placeholderValue = data.name || "";

    inputFieldsContainer.innerHTML = `
      <div class="form-group">
        <label for="index">수정할 항목</label>
        <select id="index" name="index">
          <option value="1" selected>비품 이름</option>
          <option value="2">비품 설명</option>
          <option value="3">현재 재고</option>
        </select>
      </div>
      <div class="form-group">
        <label for="input">수정할 값</label>
        <input type="text" id="input" name="input" value="${placeholderValue}" placeholder="수정할 값을 입력하세요" required>
      </div>
    `;

    // `<select>` 요소의 `onchange` 이벤트 추가
    const selectElement = document.getElementById(ADMINISTRATIVE_ELEMENT_ID.INDEX);
    const inputElement = document.getElementById(ADMINISTRATIVE_ELEMENT_ID.INPUT);

    selectElement.addEventListener(EVENT.CHANGE, (event) => {
      selectedIndex = parseInt(event.target.value, 10);

      // 선택된 항목에 따라 입력 필드 값 변경
      if (selectedIndex === 1) {
        placeholderValue = data.name || "";
      } else if (selectedIndex === 2) {
        placeholderValue = data.description || "";
      } else if (selectedIndex === 3) {
        placeholderValue = data.inventory || "";
      }

      inputElement.value = placeholderValue;
    });
  }
};

