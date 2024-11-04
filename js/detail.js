document.addEventListener("DOMContentLoaded", () => {
  const insuranceDetailsTable = document.getElementById("insuranceDetailsTable");

  // 세션에서 데이터 가져오기
  const selectedInsurance = JSON.parse(sessionStorage.getItem("selectedInsurance"));

  // 상세 정보를 테이블 형식으로 렌더링하는 함수
  const renderInsuranceDetails = (data) => {
    const details = [
      { label: "보험 번호", value: data.number },
      { label: "보험 상품 이름", value: data.name },
      { label: "보험 종류", value: data.type },
      { label: "연령대", value: data.ageGroup },
      { label: "보장 내용", value: data.coverage },
      { label: "월 보험료", value: data.premium },
      { label: "가입 조건", value: data.conditions },
      { label: "계약기간", value: data.term },
      { label: "병명", value: data.disease }
    ];

    // 테이블에 각 정보를 추가
    details.forEach(detail => {
      const row = document.createElement("tr");

      const labelCell = document.createElement("th");
      labelCell.textContent = detail.label;

      const valueCell = document.createElement("td");
      valueCell.textContent = detail.value;

      row.appendChild(labelCell);
      row.appendChild(valueCell);
      insuranceDetailsTable.querySelector("tbody").appendChild(row);
    });
  };

  // 세션에 데이터가 있으면 렌더링
  if (selectedInsurance) {
    renderInsuranceDetails(selectedInsurance);
  }
});
