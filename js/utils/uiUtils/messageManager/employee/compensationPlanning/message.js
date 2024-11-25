import { fetchGetEmployee } from '../../../../apiUtils/apiDocumentation/employee/humanResource/humanResource.js';
import {CLASS, CLASS_SELECTOR, KEY, MESSAGES, TAG} from '../../../../../../config/common.js';

export const renderGreeting = async () => {
  const container = document.querySelector(".container");
  const id = sessionStorage.getItem(KEY.LOGIN_ID);
  const employee = await fetchGetEmployee(id);
  const greeting = document.createElement(TAG.DIV);
  greeting.className = CLASS.GREETING;
  greeting.textContent = `${employee.name} ${MESSAGES.GREETING} `;

  const headerLine = document.querySelector(CLASS_SELECTOR.HEADER_LINE);
  container.insertBefore(greeting, headerLine.nextSibling);
};
