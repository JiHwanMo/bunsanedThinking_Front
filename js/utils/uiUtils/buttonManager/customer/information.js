import {
  BUTTON,
  CLASS,
  CLASS_SELECTOR,
  ELEMENT_ID,
  EVENT,
  KEY,
  LOCATION,
  TAG,
  ZERO
} from "../../../../../config/common.js";
import {BUTTON_TYPE, COMBOBOX} from "../../../../../config/customer/customer.js";
import {initTableByInput} from "../../tableRenderer/customer/informationList.js";

const addAccident = () => { // 입력
  sessionStorage.setItem(KEY.SELECTED_BUTTON_TYPE, BUTTON_TYPE.ADD_ACCIDENT);
  window.location.href = LOCATION.INPUT;
}

const addComplaint = () => { // 입력
  sessionStorage.setItem(KEY.SELECTED_BUTTON_TYPE, BUTTON_TYPE.ADD_COMPLAINT);
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
  const container = document.querySelector(CLASS_SELECTOR.SEARCH_CONTAINER);
  const post = document.createElement(TAG.DIV);
  post.id = ELEMENT_ID.POST;
  post.className = CLASS.POST_BUTTON;
  post.textContent = BUTTON.COMMON.POST;
  container.appendChild(post);
  post.addEventListener(EVENT.CLICK, customerTaskMapper[type].POST);
  return post;
}

export const setButton = () => {
  const container = document.querySelector(CLASS_SELECTOR.SEARCH_CONTAINER);
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
