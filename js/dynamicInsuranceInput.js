document.addEventListener("DOMContentLoaded", () => {
  const insuranceType = document.getElementById("insuranceType");
  const inputFieldsContainer = document.getElementById("inputFieldsContainer");

  // 입력 필드 정의
  const fields = {
    default: `
      <div class="form-group">
        <label for="insuranceName">보험 상품 이름</label>
        <input type="text" id="insuranceName" name="insuranceName" placeholder="보험 상품 이름을 입력하세요" required>
      </div>
      <div class="form-group">
        <label for="limit">한도</label>
        <input type="number" id="limit" name="limit" placeholder="한도를 입력하세요" required>
      </div>
      <div class="form-group">
        <label for="ageRange">연령대</label>
        <input type="text" id="ageRange" name="ageRange" placeholder="연령대를 입력하세요 (예: 20~30세)" required>
      </div>
      <div class="form-group">
        <label for="coverage">보장 내용</label>
        <textarea id="coverage" name="coverage" rows="4" placeholder="보장 내용을 입력하세요" required></textarea>
      </div>
      <div class="form-group">
        <label for="monthlyPremium">월 보험료</label>
        <input type="number" id="monthlyPremium" name="monthlyPremium" placeholder="월 보험료를 입력하세요" required>
      </div>
      <div class="form-group">
        <label for="contractPeriod">계약 기간 (년)</label>
        <input type="number" id="contractPeriod" name="contractPeriod" placeholder="계약 기간을 입력하세요" required>
      </div>
    `,
    injury: `
      <div class="form-group">
        <label for="injuryType">상해 종류</label>
        <input type="text" id="injuryType" name="injuryType" placeholder="상해 종류를 입력하세요" required>
      </div>
      <div class="form-group">
        <label for="surgeriesLimit">최대 수술 횟수</label>
        <input type="number" id="surgeriesLimit" name="surgeriesLimit" placeholder="최대 수술 횟수를 입력하세요" required>
      </div>
    `
  };

  // 보험 종류 선택 시 입력란 표시
  insuranceType.addEventListener("change", () => {
    const selectedType = insuranceType.value;
    inputFieldsContainer.innerHTML = fields[selectedType] || "";
  });

  // 저장 버튼 이벤트
  const saveButton = document.getElementById("saveButton");
  saveButton.addEventListener("click", () => {
    alert("저장되었습니다.");
    // 데이터를 수집하고 API 호출 로직 추가 가능
  });

  // 취소 버튼 이벤트
  const cancelButton = document.getElementById("cancelButton");
  cancelButton.addEventListener("click", () => {
    insuranceType.value = ""; // 콤보박스 초기화
    inputFieldsContainer.innerHTML = ""; // 입력란 초기화
  });
});
