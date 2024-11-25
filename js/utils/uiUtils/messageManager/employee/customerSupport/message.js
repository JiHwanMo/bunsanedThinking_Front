import { fetchGetEmployee } from '../../../../apiUtils/apiDocumentation/employee/customerSupport/customerSupport.js';
import {CLASS, KEY, MESSAGES, TAG} from '../../../../../../config/common.js';

export const renderGreeting = async () => {
  const container = document.querySelector(".container");
  const id = sessionStorage.getItem(KEY.LOGIN_ID);
  const getEmployee = await fetchGetEmployee(id);
  const greetingConstant = MESSAGES.GREETING;
  const greeting = document.createElement(TAG.DIV);
  greeting.className = CLASS.GREETING;

  greeting.textContent = `${getEmployee.name} ${greetingConstant} `;

  const headerLine = document.querySelector(".header-line");
  container.insertBefore(greeting, headerLine.nextSibling);
};
