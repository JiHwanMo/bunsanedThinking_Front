document.addEventListener("DOMContentLoaded", () => {
  // 사용자 정보를 가져오는 함수 (여기서는 샘플 데이터를 사용)
  const fetchGreeting = async () => {
    // 실제로는 API 요청을 통해 로그인한 사용자 정보를 받아옵니다.
    return { id: "KIM", message: "님 안녕하세요" }; // 예시 데이터
  };

  // Greeting 메시지를 동적으로 추가하는 함수
  const renderGreeting = async () => {
    const container = document.querySelector(".container");
    const data = await fetchGreeting(); // fetchGreeting으로 사용자 정보 가져오기
    const greeting = document.createElement("div");
    greeting.className = "greeting";
    greeting.textContent = `${data.id}${data.message}`; // {id}님 안녕하세요 형식으로 표시

    const headerLine = document.querySelector(".header-line");
    container.insertBefore(greeting, headerLine.nextSibling); // header-line 바로 아래에 삽입
  };

  // API를 통해 버튼 데이터를 가져오는 함수 (여기서는 샘플 데이터를 사용)
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

  renderGreeting();  // Greeting 메시지 추가
  renderButtons();   // 버튼 목록 추가
});
