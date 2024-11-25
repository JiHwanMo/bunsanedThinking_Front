import {BUTTON, CLASS, ELEMENT_ID, EVENT, KEY, LOCATION, TAG} from "../../../../../../config/common.js";
import {inputType} from "../../../tableRenderer/employee/compensationPlanning/input.js";

const postPartnerCompany = () => {
  sessionStorage.setItem(KEY.SELECTED_BUTTON_TYPE, inputType.POST);
  window.location.href = LOCATION.INPUT;
}

export const setPost = () => {
  const post = document.createElement(TAG.DIV);
  post.id = ELEMENT_ID.POST;
  post.className = CLASS.POST_BUTTON;
  post.textContent = BUTTON.COMMON.POST;
  post.addEventListener(EVENT.CLICK, postPartnerCompany);
  return post;
}
