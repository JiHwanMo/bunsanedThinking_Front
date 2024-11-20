export const addButtons = (container) => {
  const buttonContainer = document.createElement("div");
  buttonContainer.className = "button-container";

  // 저장 버튼
  const saveButton = document.createElement("button");
  saveButton.id = "saveButton";
  saveButton.type = "button";
  saveButton.textContent = "저장";
  saveButton.addEventListener("click", () => {
    const insuranceData = {
      insuranceName: document.getElementById("insuranceName").value,
      limit: document.getElementById("limit").value,
      ageRange: document.getElementById("ageRange").value,
      coverage: document.getElementById("coverage").value,
      monthlyPremium: document.getElementById("monthlyPremium").value,
      contractPeriod: document.getElementById("contractPeriod").value,
    };
    console.log("보험 데이터 저장됨:", insuranceData);
    alert("보험 데이터가 저장되었습니다.");
  });

  // 취소 버튼
  const cancelButton = document.createElement("button");
  cancelButton.id = "cancelButton";
  cancelButton.type = "button";
  cancelButton.textContent = "취소";
  cancelButton.addEventListener("click", () => {
    if (confirm("입력을 취소하시겠습니까?")) {
      const inputFieldsContainer = document.getElementById("inputFieldsContainer");
      inputFieldsContainer.innerHTML = ""; // 입력 필드 초기화
    }
  });

  // 버튼 추가
  buttonContainer.appendChild(saveButton);
  buttonContainer.appendChild(cancelButton);
  container.appendChild(buttonContainer);
};
