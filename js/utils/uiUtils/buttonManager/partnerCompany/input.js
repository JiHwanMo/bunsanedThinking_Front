import { fetchSetDamageAssessmentMoney } from "../../../apiUtils/apiDocumentation/partnerCompany/partnerCompany.js";
import {CLASS, BUTTON, EVENT, TAG, LOCATION} from "../../../../../config/common.js";
import {ELEMENT_ID, POP_UP} from "../../../../../config/partnerCompany/partnerCompany.js";

export const addButtons = (buttonContainer) => {
  const updateButton = document.createElement(TAG.BUTTON);
  updateButton.className = CLASS.BUTTON_ITEM;
  updateButton.textContent = BUTTON.COMMON.UPDATE;

  updateButton.addEventListener(EVENT.CLICK, async () => {
    const formData = collectFormData(); // 폼 데이터 수집
    if (!formData) return; // 데이터가 유효하지 않으면 종료

    // confirm 대화 상자 표시
    const userConfirmed = confirm(POP_UP.UPDATE.QUESTION);
    if (userConfirmed) {
      try {
        await fetchSetDamageAssessmentMoney(formData.accidentId, formData.damageAssessmentMoney); // API 호출
        alert(POP_UP.UPDATE.OK);
        window.location.href = LOCATION.HOME; // 수정 완료 후 홈으로 이동
      } catch (error) {
        console.error(POP_UP.UPDATE.CONSOLE_ERROR, error);
        alert(POP_UP.UPDATE.ERROR);
      }
    } else {
      window.history.back(); // 취소 시 이전 페이지로 이동
    }
  });

  const cancelButton = document.createElement(TAG.BUTTON);
  cancelButton.className = CLASS.BUTTON_ITEM;
  cancelButton.textContent = BUTTON.COMMON.CANCEL;
  cancelButton.addEventListener(EVENT.CLICK, () => {
    window.location.href = LOCATION.HOME;
  });

  // 버튼 컨테이너에 버튼 추가
  buttonContainer.appendChild(updateButton);
  buttonContainer.appendChild(cancelButton);
};


// 폼 데이터 수집 함수
const collectFormData = () => {
  const accidentId = parseInt(document.getElementById(ELEMENT_ID.ACCIDENT_ID).value, 10); // 사고 ID
  const damageAssessmentMoney = parseInt(document.getElementById(ELEMENT_ID.DAMAGE_ASSESSMENT_MONEY).value, 10); // 손해 사정 금액

  // 데이터 유효성 검증
  if (!damageAssessmentMoney || isNaN(damageAssessmentMoney) || damageAssessmentMoney <= 0) {
    alert(POP_UP.UPDATE.VALIDATION_ERROR);
    return null;
  }

  return { accidentId, damageAssessmentMoney }; // 폼 데이터 반환
};
