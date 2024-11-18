import {BUTTON} from "../../../../../../config/common.js";

export const setLoanTableBody = (rowGetter) => {
  const tableBody = document.getElementById('list');
  const type = sessionStorage.getItem("currentType");
  const data = JSON.parse(sessionStorage.getItem("list"));
  data.forEach(item => {
    const row = document.createElement("tr");
    row.innerHTML = rowGetter(item);
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

    tableBody.appendChild(row);
  });
}

export const setLoanSearchBar = () => {
  const container = document.querySelector(".search-container");

  container.appendChild(setPost());
  container.appendChild(setInput());
  container.appendChild(setButton());
}

const setPost = () => {
  const post = document.createElement("div");
  post.id = "post";
  post.className = "post-button";
  post.textContent = BUTTON.COMMON.POST;
  post.addEventListener("click", () => {
    alert("등록 - 융자운용");
  });
  return post;
}

const setInput = () => {
  const input = document.createElement("input");
  input.type = "text";
  input.id = "searchInput";
  input.placeholder = "검색어 입력";
  return input;
}

const setButton = () => {
  const button = document.createElement("button");
  button.id = "searchButton";
  button.textContent = BUTTON.COMMON.SEARCH;
  return button;
}
