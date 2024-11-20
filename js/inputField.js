export const renderInputFields = (inputFieldsContainer) => {
  const fieldsHTML = `
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
  `;

  inputFieldsContainer.innerHTML = fieldsHTML;
};
