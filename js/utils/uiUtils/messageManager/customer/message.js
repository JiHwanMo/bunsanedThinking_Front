import { fetchGetCustomerById } from '../../../apiUtils/apiDocumentation/customer/customer.js';
import {CLASS, CLASS_SELECTOR, KEY, MESSAGES, TAG} from '../../../../../config/common.js';

export const renderGreeting = async () => {
  const container = document.querySelector(CLASS_SELECTOR.CONTAINER);
  const id = sessionStorage.getItem(KEY.LOGIN_ID);
  const getCustomer = await fetchGetCustomerById(id);
  const greeting = document.createElement(TAG.DIV);
  greeting.className = CLASS.GREETING;
  greeting.textContent = `${getCustomer.name} ${MESSAGES.GREETING} `;

  const headerLine = document.querySelector(CLASS_SELECTOR.HEADER_LINE);
  container.insertBefore(greeting, headerLine.nextSibling);
};
