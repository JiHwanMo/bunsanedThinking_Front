import {CLASS, ELEMENT_ID, EVENT, TAG} from "../../../../config/common.js";

export let initialButtons = (buttonMessages, buttonActionMapper) => {
  const buttonContainer = document.getElementById(ELEMENT_ID.BUTTON_CONTAINER);
  Object.entries(buttonMessages).forEach(([key, task]) => {
    const button = document.createElement(TAG.DIV);
    button.className = CLASS.BUTTON_ITEM;
    button.textContent = task;

    button.addEventListener(EVENT.CLICK, buttonActionMapper[key]);
    buttonContainer.appendChild(button); // 버튼을 buttonContainer에 추가
  });
}
