// positionManager/customer.js
import { fetchGreeting } from '../../../apiUtils/apiHandler/customer/customer.js';

export const renderGreeting = async () => {
  const container = document.querySelector(".container");
  const data = await fetchGreeting();
  const greeting = document.createElement("div");
  greeting.className = "greeting";
  greeting.textContent = `${data.id}${data.message}`;

  const headerLine = document.querySelector(".header-line");
  container.insertBefore(greeting, headerLine.nextSibling);
};
