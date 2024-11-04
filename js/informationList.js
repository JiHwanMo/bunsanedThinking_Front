document.addEventListener("DOMContentLoaded", () => {
  const searchButton = document.getElementById("searchButton");
  const insuranceList = document.getElementById("insuranceList");
  let selectedRow = null; // 현재 선택된 행을 추적하는 변수

  // 샘플 데이터
  const insuranceData = [
    { name: "건강보험A", type: "건강보험", number: "001", ageGroup: "20대", premium: "30,000원" },
    { name: "자동차보험B", type: "자동차보험", number: "002", ageGroup: "30대", premium: "50,000원" },
    { name: "생명보험C", type: "생명보험", number: "003", ageGroup: "40대", premium: "70,000원" }
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
        // 기존 선택된 행이 있으면 클래스 제거
        if (selectedRow) {
          selectedRow.classList.remove("selected");
        }
        // 현재 클릭된 행을 선택 상태로 설정
        row.classList.add("selected");
        selectedRow = row; // 선택된 행 업데이트
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
