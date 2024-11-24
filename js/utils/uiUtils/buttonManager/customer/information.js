import {BUTTON} from "../../../../../config/common.js";
import {COMBOBOX} from "../../../../../config/customer/customer.js";
import {initTableByInput} from "../../tableRenderer/customer/informationList.js";
import {buttonType} from "../../tableRenderer/customer/input.js";

const addAccident = () => { // 입력
  sessionStorage.setItem("selectedButtonType", buttonType.ADD_ACCIDENT);
  window.location.href = "input.html";
}

const addComplaint = () => { // 입력
  sessionStorage.setItem("selectedButtonType", buttonType.ADD_COMPLAINT);
  window.location.href = "input.html";
}

const customerTaskMapper = {
  VIEW_ACCIDENT: {
    POST: addAccident
  },
  VIEW_COMPLAINT: {
    POST: addComplaint
  }
}

export const setPost = () => {
  const type = sessionStorage.getItem("currentType");
  const container = document.querySelector(".search-container");
  const post = document.createElement("div");
  post.id = "post";
  post.className = "post-button";
  post.textContent = BUTTON.COMMON.POST;
  container.appendChild(post);
  post.addEventListener("click", customerTaskMapper[type].POST); // 수정
  return post;
}

export const setButton = () => {
  const container = document.querySelector(".search-container");
  const button = document.createElement("button");
  button.id = "searchButton";
  button.textContent = BUTTON.COMMON.SEARCH;
  const type = sessionStorage.getItem("currentType");
  button.addEventListener("click", () => {
    const value = document.getElementById("searchInput").value;
    initTableByInput(value, type);
    const select = document.getElementById(COMBOBOX[type].id);
    if (select != null) select.selectedIndex = 0;
  });
  container.appendChild(button);
  return button;
}
