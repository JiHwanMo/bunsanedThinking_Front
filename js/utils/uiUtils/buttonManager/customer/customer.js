// buttonManager/customer.js
// import { fetchGetDatafetchData } from '../../../apiUtils/apiHandler/customer/customer.js';
import { BUTTON } from '../../../../../config/constants.js';

export const renderButtons = () => {
  const buttonContainer = document.getElementById("buttonContainer");
  const buttonMessages = BUTTON.TASK.CUSTOMER;

  // 객체의 각 항목을 순회하여 버튼 생성
  Object.entries(buttonMessages).forEach(([key, name]) => {
    const button = document.createElement("div");
    button.className = "button-item";
    button.textContent = name; // 버튼에 표시할 텍스트 설정

    button.addEventListener("click", () => {
      alert(`${name}`);
    });

    buttonContainer.appendChild(button); // 버튼을 buttonContainer에 추가
  });
};

