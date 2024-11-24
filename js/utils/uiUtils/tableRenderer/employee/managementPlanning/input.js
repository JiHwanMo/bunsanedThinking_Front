import { DETAIL_COLUMN_NAME } from "../../../../../../config/employee/managementPlanning/managementPlanning.js";
import { fetchGetDepartment } from "../../../../apiUtils/apiDocumentation/employee/managementPlanning/managementPlanning.js";
import { addButtons } from "../../../buttonManager/employee/managementPlanning/input.js";

export const renderInput = async () => {
  const inputFieldsContainer = document.getElementById("inputFieldsContainer");
  const buttonContainer = document.getElementById("buttonContainer");

  const selectedButtonType = JSON.parse(sessionStorage.getItem("selectedButtonType"));

  if (selectedButtonType === "POST") {
    // 등록 화면: 빈 입력 필드 생성
    renderInputFields({});
  } else if (selectedButtonType === "UPDATE") {
    // 수정 화면: 기존 데이터 불러오기
    const selectedDataId = JSON.parse(sessionStorage.getItem("selectedDataId"));
    const departmentData = await fetchGetDepartment(selectedDataId);

    renderInputFields(departmentData);
  }
  // 버튼 추가
  addButtons(buttonContainer);
};

const renderInputFields = (data) => {
  const inputFieldsContainer = document.getElementById("inputFieldsContainer");
  const selectedButtonType = JSON.parse(sessionStorage.getItem("selectedButtonType"));

  if (selectedButtonType === "POST") {
    inputFieldsContainer.innerHTML = `
      <div class="form-group">
        <label for="name">${DETAIL_COLUMN_NAME.DEPARTMENT_LIST.NAME}</label>
        <input type="text" id="name" name="name" value="${data.name || ""}" placeholder="${DETAIL_COLUMN_NAME.DEPARTMENT_LIST.NAME}을 입력하세요" required>
      </div>
      <div class="form-group">
        <label for="purpose">${DETAIL_COLUMN_NAME.DEPARTMENT_LIST.PURPOSE}</label>
        <textarea id="purpose" name="purpose" placeholder="${DETAIL_COLUMN_NAME.DEPARTMENT_LIST.PURPOSE}을 입력하세요" required>${data.purpose || ""}</textarea>
      </div>
      <div class="form-group">
        <label for="task">${DETAIL_COLUMN_NAME.DEPARTMENT_LIST.TASK}</label>
        <input type="text" id="task" name="task" value="${data.task || ""}" placeholder="${DETAIL_COLUMN_NAME.DEPARTMENT_LIST.TASK}를 입력하세요" required>
      </div>
      <div class="form-group">
        <label for="head_name">${DETAIL_COLUMN_NAME.DEPARTMENT_LIST.HEAD_NAME}</label>
        <input type="text" id="head_name" name="head_name" value="${data.headName || ""}" placeholder="${DETAIL_COLUMN_NAME.DEPARTMENT_LIST.HEAD_NAME}을 입력하세요" required>
      </div>
    `;
  } else if (selectedButtonType === "UPDATE") {
    // 기본 선택은 "부서 이름"
    let selectedIndex = 1;
    let placeholderValue = data.name || "";

    inputFieldsContainer.innerHTML = `
      <div class="form-group">
        <label for="index">수정할 항목</label>
        <select id="index" name="index">
          <option value="1" selected>부서 이름</option>
          <option value="2">부서 목적</option>
          <option value="3">주 업무</option>
          <option value="4">부서장 이름</option>
        </select>
      </div>
      <div class="form-group">
        <label for="input">수정할 값</label>
        <input type="text" id="input" name="input" value="${placeholderValue}" placeholder="수정할 값을 입력하세요" required>
      </div>
    `;

    // `<select>` 요소의 `onchange` 이벤트 추가
    const selectElement = document.getElementById("index");
    const inputElement = document.getElementById("input");

    selectElement.addEventListener("change", (event) => {
      selectedIndex = parseInt(event.target.value, 10);

      // 선택된 항목에 따라 입력 필드 값 변경
      if (selectedIndex === 1) {
        placeholderValue = data.name || "";
      } else if (selectedIndex === 2) {
        placeholderValue = data.purpose || "";
      } else if (selectedIndex === 3) {
        placeholderValue = data.task || "";
      } else if (selectedIndex === 4) {
        placeholderValue = data.headName || "";
      }

      inputElement.value = placeholderValue;
    });
  }
};
