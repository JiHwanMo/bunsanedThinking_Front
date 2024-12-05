import { fetchAddOfficeSupply, fetchUpdateOfficeSupply } from "../../../../apiUtils/apiDocumentation/employee/administrative/administrative.js";
import { BUTTON as COMMON_BUTTON, CLASS, EVENT, KEY, LOCATION, TAG } from "../../../../../../config/common.js";
import { ELEMENT_ID, POP_UP, VALUE } from "../../../../../../config/employee/administrative/administrative.js";

export const addButtons = (buttonContainer) => {
  const selectedButtonType = JSON.parse(sessionStorage.getItem(KEY.SELECTED_BUTTON_TYPE));

  const saveButton = document.createElement(TAG.BUTTON);
  const cancelButton = document.createElement(TAG.BUTTON);

  saveButton.className = CLASS.BUTTON_ITEM;
  cancelButton.className = CLASS.BUTTON_ITEM;

  if (selectedButtonType === VALUE.POST) {
    // 등록 버튼
    saveButton.textContent = COMMON_BUTTON.COMMON.OK;
    saveButton.addEventListener(EVENT.CLICK, async () => {
      const formData = collectFormData();
      if (!formData) return; // 데이터가 유효하지 않으면 중단

      const userConfirmed = confirm(POP_UP.POST.QUESTION); // confirm 다이얼로그 표시
      if (userConfirmed) {
        try {
          const result = await fetchAddOfficeSupply(formData); // 등록 API 호출
          if (result == null) return; // 여기 참고
          alert(POP_UP.POST.OK);
          window.location.href = LOCATION.HOME; // 등록 완료 후 페이지 이동
        } catch (error) {
          console.error(POP_UP.POST.CONSOLE_ERROR, error);
          alert(POP_UP.POST.ERROR);
        }
      } else {
        window.history.back(); // 사용자가 취소를 선택한 경우 이전 페이지로 이동
      }
    });

    cancelButton.textContent = COMMON_BUTTON.COMMON.CANCEL;
    cancelButton.addEventListener(EVENT.CLICK, () => window.location.href = LOCATION.HOME);
  } else if (selectedButtonType === VALUE.UPDATE) {
    // 수정 버튼
    saveButton.textContent = COMMON_BUTTON.COMMON.UPDATE;
    saveButton.addEventListener(EVENT.CLICK, async () => {
      const formData = collectFormData();
      if (!formData) return; // 데이터가 유효하지 않으면 중단

      const userConfirmed = confirm(POP_UP.UPDATE.QUESTION); // confirm 다이얼로그 표시
      if (userConfirmed) {
        try {
          const result = await fetchUpdateOfficeSupply(formData); // 수정 API 호출
          if (result == null) return;
          alert(POP_UP.UPDATE.OK);
          window.location.href = LOCATION.HOME; // 수정 완료 후 페이지 이동
        } catch (error) {
          console.error(POP_UP.UPDATE.CONSOLE_ERROR, error);
          alert(POP_UP.UPDATE.ERROR);
        }
      } else {
        window.history.back(); // 사용자가 취소를 선택한 경우 이전 페이지로 이동
      }
    });

    cancelButton.textContent = COMMON_BUTTON.COMMON.CANCEL;
    cancelButton.addEventListener(EVENT.CLICK, () => window.location.href = LOCATION.HOME);
  }

  buttonContainer.appendChild(saveButton);
  buttonContainer.appendChild(cancelButton);
};

const collectFormData = () => {
  const selectedButtonType = JSON.parse(sessionStorage.getItem(KEY.SELECTED_BUTTON_TYPE));
  if (selectedButtonType === VALUE.POST) {
    const name = document.getElementById(ELEMENT_ID.NAME).value.trim();
    const description = document.getElementById(ELEMENT_ID.DESCRIPTION).value.trim();
    const inventory = parseInt(document.getElementById(ELEMENT_ID.INVENTORY).value, 10);
    const total_inventory = parseInt(document.getElementById(ELEMENT_ID.TOTAL_INVENTORY).value, 10);
    const department_id = parseInt(document.getElementById(ELEMENT_ID.DEPARTMENT_ID).value, 10);
    // 입력 값 검증
    if (!name || !description || !inventory || !total_inventory || !department_id) {
      alert(POP_UP.POST.VALIDATION_ERROR);
      return null;
    }
    if (inventory < 0 || total_inventory < 0) {
      alert(POP_UP.POST.INVENTORY_NEGATIVE_NUMBER_ERROR);
      return null;
    }
    if (inventory > total_inventory) {
      alert(POP_UP.POST.INVENTORY_ERROR);
      return null;
    }
    return {
      name,
      description,
      inventory,
      total_inventory,
      department_id,
    };
  } else if (selectedButtonType === VALUE.UPDATE) {
    const id = parseInt(sessionStorage.getItem(KEY.SELECTED_DATA_ID), 10);
    const index = parseInt(document.getElementById(ELEMENT_ID.INDEX).value, 10);
    const input = document.getElementById(ELEMENT_ID.INPUT).value;

    if (!input.trim()) {
      alert(POP_UP.UPDATE.VALIDATION_ERROR);
      return null;
    }
    return { id, index, input };
  }
  return null; // 예상치 못한 타입일 경우 null 반환
};
