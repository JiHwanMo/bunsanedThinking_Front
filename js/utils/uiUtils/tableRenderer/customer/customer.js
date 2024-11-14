export const renderTable = () => {
  initialTable(insuranceData);
}

const initialTable = (data) => {
  const list = document.getElementById('list');
  data.forEach(item => {
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${item.name}</td>
        <td>${item.type}</td>
        <td>${item.number}</td>
        <td>${item.ageGroup}</td>
        <td>${item.premium}</td>
      `;

    // 각 행에 클릭 이벤트 추가
    row.addEventListener("click", () => {
      if (selectedRow) {
        selectedRow.classList.remove("selected");
      }
      row.classList.add("selected");
      selectedRow = row;
    });

    // 더블 클릭 시 상세 페이지로 이동
    row.addEventListener("dblclick", () => {
      // 상세 정보를 세션에 저장
      sessionStorage.setItem("selectedInsurance", JSON.stringify(item));
      window.location.href = "detail.html";
    });

    list.appendChild(row);
  });
}

const insuranceData = [
  { name: "건강보험A", type: "건강보험", number: "001", ageGroup: "20대", premium: "30,000원", coverage: "상해 보장", conditions: "없음", term: "1년", disease: "고혈압" },
  { name: "자동차보험B", type: "자동차보험", number: "002", ageGroup: "30대", premium: "50,000원", coverage: "사고 보장", conditions: "무사고 경력", term: "5년", disease: "없음" },
  { name: "생명보험C", type: "생명보험", number: "003", ageGroup: "40대", premium: "70,000원", coverage: "생명 보장", conditions: "건강검진 필요", term: "10년", disease: "없음" }
];
