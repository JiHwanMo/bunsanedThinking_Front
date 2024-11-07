// buttonManager/customer.js
import { fetchData } from '../../../apiUtils/apiHandler/customer/customer.js';

export const renderButtons = async () => {
  const buttonContainer = document.getElementById("buttonContainer");
  const data = await fetchData();

  data.forEach(item => {
    const button = document.createElement("div");
    button.className = "button-item";
    button.textContent = item.name;
    button.addEventListener("click", () => {
      alert(`${item.name} 버튼 클릭됨`);
    });
    buttonContainer.appendChild(button);
  });
};
