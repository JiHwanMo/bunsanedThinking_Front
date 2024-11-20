export const addButtons = (buttonContainer, insuranceType, inputFieldsContainer) => {
  // 저장 버튼 생성
  const saveButton = document.createElement("button");
  saveButton.id = "saveButton";
  saveButton.type = "button";
  saveButton.textContent = "저장";
  saveButton.addEventListener("click", () => {
    alert("저장되었습니다.");
    // 데이터 저장 로직 추가 가능
  });

  // 취소 버튼 생성
  const cancelButton = document.createElement("button");
  cancelButton.id = "cancelButton";
  cancelButton.type = "button";
  cancelButton.textContent = "취소";
  cancelButton.addEventListener("click", () => {
    insuranceType.value = ""; // 콤보박스 초기화
    inputFieldsContainer.innerHTML = ""; // 입력란 초기화
  });

  // 버튼 컨테이너에 추가
  buttonContainer.appendChild(saveButton);
  buttonContainer.appendChild(cancelButton);
};
