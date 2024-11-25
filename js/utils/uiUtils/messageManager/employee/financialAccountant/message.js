import { fetchGetEmployee } from '../../../../apiUtils/apiDocumentation/employee/financialAccountant/financialAccountant.js';
import {CLASS, CLASS_SELECTOR, KEY, MESSAGES, TAG} from '../../../../../../config/common.js';

export const renderGreeting = async () => {
  const container = document.querySelector(CLASS_SELECTOR.CONTAINER);
  const id = sessionStorage.getItem(KEY.LOGIN_ID);
  const getEmployee = await fetchGetEmployee(id);
  const greetingConstant = MESSAGES.GREETING;
  const greeting = document.createElement(TAG.DIV);
  greeting.className = CLASS.GREETING;

  greeting.textContent = `${getEmployee.name} ${greetingConstant} `;

  const headerLine = document.querySelector(CLASS_SELECTOR.HEADER_LINE);
  container.insertBefore(greeting, headerLine.nextSibling);
};
