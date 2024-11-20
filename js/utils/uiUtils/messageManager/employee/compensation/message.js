import { fetchGetEmployee } from '../../../../apiUtils/apiDocumentation/employee/humanResource/humanResource.js';

import { MESSAGES } from '../../../../../../config/common.js';

export const renderGreeting = async () => {
  const container = document.querySelector(".container");
  const id = sessionStorage.getItem("id");
  const employee = await fetchGetEmployee(id);
  const greeting = document.createElement("div");
  greeting.className = "greeting";
  greeting.textContent = `${employee.name} ${MESSAGES.GREETING} `;

  const headerLine = document.querySelector(".header-line");
  container.insertBefore(greeting, headerLine.nextSibling);
};
