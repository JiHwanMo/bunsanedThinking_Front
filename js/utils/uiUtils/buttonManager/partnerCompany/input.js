import { fetchSetDamageAssessmentMoney } from "../../../apiUtils/apiDocumentation/partnerCompany/partnerCompany.js";

export const addButtons = (buttonContainer) => {
  // "수정" 버튼 생성
  const updateButton = document.createElement("button");
  updateButton.className = "button-item";
  updateButton.textContent = "수정";

  updateButton.addEventListener("click", async () => {
    const formData = collectFormData(); // 폼 데이터 수집
    if (!formData) return; // 데이터가 유효하지 않으면 종료

    // 커스텀 모달 생성
    const modal = document.createElement("div");
    modal.className = "custom-modal";
    modal.innerHTML = `
      <div class="modal-content">
        <p>수정하시겠습니까?</p>
        <div class="modal-buttons">
          <button id="confirmButton">확인</button>
          <button id="cancelButton">취소</button>
        </div>
      </div>
    `;
    document.body.appendChild(modal); // 모달 추가

    // "확인" 버튼 클릭 시 API 호출
    document.getElementById("confirmButton").addEventListener("click", async () => {
      await fetchSetDamageAssessmentMoney(formData.accidentId, formData.damageAssessmentMoney);
      alert("수정이 완료되었습니다.");
      document.body.removeChild(modal);
      window.location.href = "home.html";
    });

    // "취소" 버튼 클릭 시 모달 닫기
    document.getElementById("cancelButton").addEventListener("click", () => {
      document.body.removeChild(modal); // 모달 제거
      window.history.back();
    });
  });

  // "취소" 버튼 생성
  const cancelButton = document.createElement("button");
  cancelButton.className = "button-item";
  cancelButton.textContent = "취소";
  cancelButton.addEventListener("click", () => {
    window.location.href = "home.html";
  });

  // 버튼 컨테이너에 버튼 추가
  buttonContainer.appendChild(updateButton);
  buttonContainer.appendChild(cancelButton);
};

// 폼 데이터 수집 함수
const collectFormData = () => {
  const accidentId = parseInt(document.getElementById("accidentId").value, 10); // 사고 ID
  const damageAssessmentMoney = parseInt(document.getElementById("damageAssessmentMoney").value, 10); // 손해 사정 금액

  // 데이터 유효성 검증
  if (!damageAssessmentMoney || isNaN(damageAssessmentMoney) || damageAssessmentMoney <= 0) {
    alert("잘못된 정보를 입력하였습니다. 다시 입력해주세요.");
    return null;
  }

  return { accidentId, damageAssessmentMoney }; // 폼 데이터 반환
};
