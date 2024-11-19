import {BUTTON} from "../../../../../../config/common.js";

export const setLoanSearchBar = () => {
  const container = document.querySelector(".search-container");

  container.appendChild(setPost());
  container.appendChild(setInput());
  container.appendChild(setSearchButton());
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

const setSearchButton = () => {
  const button = document.createElement("button");
  button.id = "searchButton";
  button.textContent = BUTTON.COMMON.SEARCH;
  return button;
}
