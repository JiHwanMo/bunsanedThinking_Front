import {BUTTON} from "../../../../../../config/common.js";
import {inputType} from "../../../tableRenderer/employee/compensationPlanning/input.js";

const postPartnerCompany = () => {
  sessionStorage.setItem("selectedButtonType", inputType.POST);
  window.location.href = "input.html";
}

export const setPost = () => {
  const post = document.createElement("div");
  post.id = "post";
  post.className = "post-button";
  post.textContent = BUTTON.COMMON.POST;
  post.addEventListener("click", postPartnerCompany);
  return post;
}
