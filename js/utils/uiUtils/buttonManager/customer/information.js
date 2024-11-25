import {BUTTON, CLASS, ELEMENT_ID, EVENT, KEY, LOCATION, TAG, ZERO} from "../../../../../config/common.js";
import {COMBOBOX} from "../../../../../config/customer/customer.js";
import {initTableByInput} from "../../tableRenderer/customer/informationList.js";
import {buttonType} from "../../tableRenderer/customer/input.js";

const addAccident = () => { // 입력
  sessionStorage.setItem(KEY.SELECTED_BUTTON_TYPE, buttonType.ADD_ACCIDENT);
  window.location.href = LOCATION.INPUT;
}

const addComplaint = () => { // 입력
  sessionStorage.setItem(KEY.SELECTED_BUTTON_TYPE, buttonType.ADD_COMPLAINT);
  window.location.href = LOCATION.INPUT;
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
  const type = sessionStorage.getItem(KEY.CURRENT_TYPE);
  const container = document.querySelector(".search-container");
  const post = document.createElement(TAG.DIV);
  post.id = ELEMENT_ID.POST;
  post.className = CLASS.POST_BUTTON;
  post.textContent = BUTTON.COMMON.POST;
  container.appendChild(post);
  post.addEventListener(EVENT.CLICK, customerTaskMapper[type].POST); // 수정
  return post;
}

export const setButton = () => {
  const container = document.querySelector(".search-container");
  const button = document.createElement(TAG.DIV);
  button.id = ELEMENT_ID.SEARCH_BUTTON;
  button.textContent = BUTTON.COMMON.SEARCH;
  const type = sessionStorage.getItem(KEY.CURRENT_TYPE);
  button.addEventListener(EVENT.CLICK, () => {
    const value = document.getElementById(ELEMENT_ID.SEARCH_INPUT).value;
    initTableByInput(value, type);
    const select = document.getElementById(COMBOBOX[type].id);
    if (select != null) select.selectedIndex = ZERO;
  });
  container.appendChild(button);
  return button;
}
