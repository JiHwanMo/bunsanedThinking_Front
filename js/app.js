document.addEventListener("DOMContentLoaded", () => {
  // API를 통해 데이터를 가져오는 함수 (여기서는 샘플 데이터를 사용)
  const fetchData = async () => {
    return [
      { id: 1, name: "상품 리스트" },
      { id: 2, name: "가입 보험 관리" },
      { id: 3, name: "사고 신고" },
      { id: 4, name: "민원 신청" }
    ];
  };

  // 버튼을 동적으로 생성하는 함수
  const renderButtons = async () => {
    const buttonContainer = document.getElementById("buttonContainer");
    const data = await fetchData();

    data.forEach(item => {
      const button = document.createElement("div");
      button.className = "button-item";
      button.textContent = item.name;
      button.addEventListener("click", () => {
        alert(`${item.name} 버튼 클릭됨`);
      });
      buttonContainer.appendChild(button);
    });
  };

  renderButtons();
});
