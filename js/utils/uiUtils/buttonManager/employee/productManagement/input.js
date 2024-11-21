export const addButtons = (buttonContainer) => {
  // `selectedButtonType`을 세션스토리지에서 가져옴
  const selectedButtonType = JSON.parse(sessionStorage.getItem("selectedButtonType"));

  const saveButton = document.createElement("button");
  const cancelButton = document.createElement("button");

  // 버튼 텍스트와 동작 설정
  if (selectedButtonType === "POST") {
    saveButton.textContent = "확인";
    saveButton.addEventListener("click", () => alert("저장 완료"));

    cancelButton.textContent = "취소";
    cancelButton.addEventListener("click", () => window.location.href = "home.html");
  } else if (selectedButtonType === "UPDATE") {
    saveButton.textContent = "수정";
    saveButton.addEventListener("click", () => alert("수정 완료"));

    cancelButton.textContent = "취소";
    cancelButton.addEventListener("click", () => window.location.href = "home.html");
  }

  // 공통 스타일 적용
  saveButton.className = "button-item";
  cancelButton.className = "button-item";

  // 버튼 추가
  buttonContainer.appendChild(saveButton);
  buttonContainer.appendChild(cancelButton);
};
