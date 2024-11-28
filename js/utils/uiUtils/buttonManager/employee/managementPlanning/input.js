import { fetchAddDepartment, fetchUpdateDepartment } from "../../../../apiUtils/apiDocumentation/employee/managementPlanning/managementPlanning.js";
import {BUTTON, CLASS, EVENT, KEY, LOCATION, TAG} from "../../../../../../config/common.js";
import {ELEMENT_ID, POP_UP, VALUE} from "../../../../../../config/employee/managementPlanning/managementPlanning.js";

export const addButtons = (buttonContainer) => {
  const selectedButtonType = JSON.parse(sessionStorage.getItem(KEY.SELECTED_BUTTON_TYPE));

  const saveButton = document.createElement(TAG.BUTTON);
  const cancelButton = document.createElement(TAG.BUTTON);

  saveButton.className = CLASS.BUTTON_ITEM;
  cancelButton.className = CLASS.BUTTON_ITEM;

  if (selectedButtonType === VALUE.POST) {
    // 등록 버튼
    saveButton.textContent = BUTTON.COMMON.OK;
    saveButton.addEventListener(EVENT.CLICK, async () => {
      const formData = collectFormData();
      if (!formData) return; // 데이터가 유효하지 않으면 중단

      const userConfirmed = confirm(POP_UP.POST.QUESTION); // confirm 대화 상자 표시
      if (userConfirmed) {
        try {
          await fetchAddDepartment(formData); // 등록 API 호출
          alert(POP_UP.POST.OK);
          window.location.href = LOCATION.HOME; // 성공적으로 저장 후 이동
        } catch (error) {
          console.error(POP_UP.POST.CONSOLE_ERROR, error);
          alert(POP_UP.POST.ERROR);
        }
      } else {
        window.history.back(); // 사용자가 취소를 선택한 경우 이전 페이지로 이동
      }
    });

    cancelButton.textContent = BUTTON.COMMON.CANCEL;
    cancelButton.addEventListener(EVENT.CLICK, () => window.location.href = LOCATION.HOME);
  } else if (selectedButtonType === VALUE.UPDATE) {
    // 수정 버튼
    saveButton.textContent = BUTTON.COMMON.UPDATE;
    saveButton.addEventListener(EVENT.CLICK, async () => {
      const formData = collectFormData();
      if (!formData) return; // 데이터가 유효하지 않으면 중단

      const userConfirmed = confirm(POP_UP.UPDATE.QUESTION); // confirm 대화 상자 표시
      if (userConfirmed) {
        try {
          await fetchUpdateDepartment(formData); // 수정 API 호출
          alert(POP_UP.UPDATE.OK);
          window.location.href = LOCATION.HOME; // 성공적으로 수정 후 이동
        } catch (error) {
          console.error(POP_UP.UPDATE.CONSOLE_ERROR, error);
          alert(POP_UP.UPDATE.ERROR);
        }
      } else {
        window.history.back(); // 사용자가 취소를 선택한 경우 이전 페이지로 이동
      }
    });

    cancelButton.textContent = BUTTON.COMMON.CANCEL;
    cancelButton.addEventListener(EVENT.CLICK, () => window.location.href = LOCATION.HOME);
  }

  buttonContainer.appendChild(saveButton);
  buttonContainer.appendChild(cancelButton);
};


const collectFormData = () => {
  const selectedButtonType = JSON.parse(sessionStorage.getItem(KEY.SELECTED_BUTTON_TYPE));
  if (selectedButtonType === VALUE.POST) {
    const name = document.getElementById(ELEMENT_ID.NAME).value.trim();
    const purpose = document.getElementById(ELEMENT_ID.PURPOSE).value.trim();
    const task = document.getElementById(ELEMENT_ID.TASK).value.trim();
    const head_name = document.getElementById(ELEMENT_ID.HEAD_NAME).value.trim();

    // 입력 값 검증
    if (!name || !purpose || !task || !head_name) {
      alert(POP_UP.POST.VALIDATION_ERROR);
      return null;
    }

    return {
      name,
      purpose,
      task,
      head_name,
    };
  } else if (selectedButtonType === VALUE.UPDATE) {
    const id = parseInt(sessionStorage.getItem(KEY.SELECTED_DATA_ID), 10);
    const index = parseInt(document.getElementById(ELEMENT_ID.INDEX).value, 10);
    const input = document.getElementById(TAG.INPUT).value;

    if (!input.trim()) {
      alert(POP_UP.UPDATE.VALIDATION_ERROR);
      return null;
    }

    return { id, index, input };
  }
  return null; // 예상치 못한 타입일 경우 null 반환
};
