import {BUTTON, CLASS, ELEMENT_ID, EVENT, KEY, LOCATION, TAG} from "../../../../../../config/common.js";
import {INPUT_TYPE} from "../../../../../../config/employee/compensationPlanning/compensationPlanning.js";

const postPartnerCompany = () => {
  sessionStorage.setItem(KEY.SELECTED_BUTTON_TYPE, INPUT_TYPE.POST);
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
