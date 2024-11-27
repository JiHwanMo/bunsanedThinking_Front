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

      const userConfirmed = confirm("등록하시겠습니까?"); // confirm 대화 상자 표시
      if (userConfirmed) {
        try {
          await fetchAddDepartment(formData); // 등록 API 호출
          alert("저장이 완료되었습니다.");
          window.location.href = "home.html"; // 성공적으로 저장 후 이동
        } catch (error) {
          console.error("등록 중 오류 발생:", error);
          alert("등록 중 오류가 발생했습니다.");
        }
      } else {
        window.history.back(); // 사용자가 취소를 선택한 경우 이전 페이지로 이동
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

      const userConfirmed = confirm("수정하시겠습니까?"); // confirm 대화 상자 표시
      if (userConfirmed) {
        try {
          await fetchUpdateDepartment(formData); // 수정 API 호출
          alert("수정이 완료되었습니다.");
          window.location.href = "home.html"; // 성공적으로 수정 후 이동
        } catch (error) {
          console.error("수정 중 오류 발생:", error);
          alert("수정 중 오류가 발생했습니다.");
        }
      } else {
        window.history.back(); // 사용자가 취소를 선택한 경우 이전 페이지로 이동
      }
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
