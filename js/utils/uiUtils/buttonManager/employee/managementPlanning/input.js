import { fetchAddDepartment, fetchUpdateDepartment } from "../../../../apiUtils/apiDocumentation/employee/managementPlanning/managementPlanning.js";

export const addButtons = (buttonContainer) => {
  const selectedButtonType = JSON.parse(sessionStorage.getItem("selectedButtonType"));

  const saveButton = document.createElement("button");
  const cancelButton = document.createElement("button");

  saveButton.className = "button-item";
  cancelButton.className = "button-item";

  if (selectedButtonType === "POST") {
    // 등록 버튼
    saveButton.textContent = "확인";
    saveButton.addEventListener("click", async () => {
      const formData = collectFormData();
      if (!formData) return; // 데이터가 유효하지 않으면 중단

      try {
        await fetchAddDepartment(formData);

        // "저장이 완료되었습니다" 모달 표시
        const modal = document.createElement("div");
        modal.className = "custom-modal";
        modal.innerHTML = `
          <div class="modal-content">
            <p>저장이 완료되었습니다</p>
          </div>
        `;

        // 모달 추가
        document.body.appendChild(modal);

        // 3초 후 모달 제거 및 페이지 이동
        setTimeout(() => {
          document.body.removeChild(modal);
          window.location.href = "home.html";
        }, 2000);
      } catch (error) {
        console.error("등록 중 오류 발생:", error);
        alert("등록 중 오류가 발생했습니다.");
      }
    });

    cancelButton.textContent = "취소";
    cancelButton.addEventListener("click", () => window.location.href = "home.html");
  } else if (selectedButtonType === "UPDATE") {
    // 수정 버튼
    saveButton.textContent = "수정";
    saveButton.addEventListener("click", async () => {
      const formData = collectFormData();
      if (!formData) return; // 데이터가 유효하지 않으면 중단

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

      // 모달 추가
      document.body.appendChild(modal);

      // 버튼 이벤트 핸들링
      document.getElementById("confirmButton").addEventListener("click", async () => {
        await fetchUpdateDepartment(formData);
        alert("수정이 완료되었습니다.");
        document.body.removeChild(modal); // 모달 닫기
        window.location.href = "home.html";
      });

      document.getElementById("cancelButton").addEventListener("click", () => {
        document.body.removeChild(modal); // 모달 닫기
        window.history.back(); // 이전 페이지로 이동
      });
    });

    cancelButton.textContent = "취소";
    cancelButton.addEventListener("click", () => window.location.href = "home.html");
  }

  buttonContainer.appendChild(saveButton);
  buttonContainer.appendChild(cancelButton);
};

const collectFormData = () => {
  const selectedButtonType = JSON.parse(sessionStorage.getItem("selectedButtonType"));
  if (selectedButtonType === "POST") {
    const name = document.getElementById("name").value.trim();
    const purpose = document.getElementById("purpose").value.trim();
    const task = document.getElementById("task").value.trim();
    const head_name = document.getElementById("head_name").value.trim();

    // 입력 값 검증
    if (!name || !purpose || !task || !head_name) {
      alert("잘못된 정보를 입력하였습니다. 다시 입력해주세요.");
      return null;
    }

    return {
      name,
      purpose,
      task,
      head_name,
    };
  } else if (selectedButtonType === "UPDATE") {
    const id = parseInt(sessionStorage.getItem("selectedDataId"), 10);
    const index = parseInt(document.getElementById("index").value, 10);
    const input = document.getElementById("input").value;

    if (!input.trim()) {
      alert("잘못된 정보를 입력하였습니다. 다시 입력해주세요.");
      return null;
    }

    return { id, index, input };
  }
  return null; // 예상치 못한 타입일 경우 null 반환
};
