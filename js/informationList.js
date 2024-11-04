document.addEventListener("DOMContentLoaded", () => {
  const searchButton = document.getElementById("searchButton");
  const insuranceList = document.getElementById("insuranceList");
  let selectedRow = null; // 현재 선택된 행을 추적하는 변수

  // 샘플 데이터
  const insuranceData = [
    { name: "건강보험A", type: "건강보험", number: "001", ageGroup: "20대", premium: "30,000원", coverage: "상해 보장", conditions: "없음", term: "1년", disease: "고혈압" },
    { name: "자동차보험B", type: "자동차보험", number: "002", ageGroup: "30대", premium: "50,000원", coverage: "사고 보장", conditions: "무사고 경력", term: "5년", disease: "없음" },
    { name: "생명보험C", type: "생명보험", number: "003", ageGroup: "40대", premium: "70,000원", coverage: "생명 보장", conditions: "건강검진 필요", term: "10년", disease: "없음" }
  ];

  // 보험 데이터를 테이블에 렌더링하는 함수
  const renderInsuranceList = (data) => {
    insuranceList.innerHTML = ""; // 기존 내용 제거
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

      insuranceList.appendChild(row);
    });
  };

  // 초기 데이터 렌더링
  renderInsuranceList(insuranceData);

  // 검색 버튼 클릭 시 필터링
  searchButton.addEventListener("click", () => {
    const insuranceType = document.getElementById("insuranceType").value;
    const searchInput = document.getElementById("searchInput").value.toLowerCase();

    const filteredData = insuranceData.filter(item => {
      const matchesType = insuranceType === "all" || item.type === insuranceType;
      const matchesSearch = item.name.toLowerCase().includes(searchInput);
      return matchesType && matchesSearch;
    });

    renderInsuranceList(filteredData);
  });
});
