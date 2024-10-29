document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");

  loginForm.addEventListener("submit", (event) => {
    event.preventDefault(); // 폼 기본 제출 방지

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // 간단한 유효성 검사
    if (username.trim() === "" || password.trim() === "") {
      alert("아이디와 비밀번호를 입력해주세요.");
      return;
    }

    // 서버와 연동 없이 로그인 성공 시 index.html로 이동 (예시)
    alert(`${username}님, 환영합니다!`);
    window.location.href = "index.html"; // index.html로 이동

    // 서버와 연동 시 fetch API로 로그인 요청을 보내도록 설정합니다.
    // 예:
    /*
    fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        alert("로그인 성공!");
        window.location.href = "index.html"; // 로그인 성공 후 이동
      } else {
        alert("로그인 실패. 아이디와 비밀번호를 확인해주세요.");
      }
    })
    .catch(error => {
      console.error("로그인 요청 중 오류 발생:", error);
      alert("로그인 요청 중 문제가 발생했습니다. 다시 시도해주세요.");
    });
    */
  });
});
