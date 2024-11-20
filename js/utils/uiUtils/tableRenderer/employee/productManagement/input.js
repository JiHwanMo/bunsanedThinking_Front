export const renderComboBox = (container) => {
  // 콤보박스 컨테이너 초기화
  let comboBoxContainer = document.getElementById("insuranceTypeContainer");

  if (!comboBoxContainer) {
    comboBoxContainer = document.createElement("div");
    comboBoxContainer.className = "form-group";
    comboBoxContainer.id = "insuranceTypeContainer";

    const label = document.createElement("label");
    label.setAttribute("for", "insuranceType");
    label.textContent = "보험 종류";

    const select = document.createElement("select");
    select.id = "insuranceType";

    const defaultOption = document.createElement("option");
    defaultOption.value = "";
    defaultOption.textContent = "보험 종류를 선택하세요";

    const defaultInsuranceOption = document.createElement("option");
    defaultInsuranceOption.value = "default";
    defaultInsuranceOption.textContent = "기본 보험";

    const injuryInsuranceOption = document.createElement("option");
    injuryInsuranceOption.value = "injury";
    injuryInsuranceOption.textContent = "상해 보험";

    // 옵션 추가
    select.appendChild(defaultOption);
    select.appendChild(defaultInsuranceOption);
    select.appendChild(injuryInsuranceOption);

    // 콤보박스 컨테이너에 추가
    comboBoxContainer.appendChild(label);
    comboBoxContainer.appendChild(select);

    // 메인 컨테이너에 추가
    container.appendChild(comboBoxContainer);

    return select; // 생성된 콤보박스를 반환
  }

  return document.getElementById("insuranceType"); // 이미 존재하는 콤보박스 반환
};

export const renderInputFields = (insuranceType, inputFieldsContainer) => {
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

  const selectedType = insuranceType.value;
  inputFieldsContainer.innerHTML = fields[selectedType] || ""; // 선택된 옵션에 따라 입력란 표시
};
