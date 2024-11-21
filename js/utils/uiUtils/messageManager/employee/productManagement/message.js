import { fetchGetEmployee } from '../../../../apiUtils/apiDocumentation/employee/humanResource/humanResource.js';
import { MESSAGES } from '../../../../../../config/common.js';

export const renderGreeting = async () => {
  const container = document.querySelector(".container");
  const employeeId = sessionStorage.getItem("id");
  const getEmployee = await fetchGetEmployee(employeeId);
  const greetingConstant = MESSAGES.GREETING;
  const greeting = document.createElement("div");
  greeting.className = "greeting";

  greeting.textContent = `${getEmployee.name} ${greetingConstant} `;

  const headerLine = document.querySelector(".header-line");
  container.insertBefore(greeting, headerLine.nextSibling);
};
