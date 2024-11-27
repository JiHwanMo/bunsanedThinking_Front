import { fetchGetEmployee } from '../../../../apiUtils/apiDocumentation/employee/humanResource/humanResource.js';
import {CLASS, CLASS_SELECTOR, KEY, MESSAGES, TAG} from '../../../../../../config/common.js';

export const renderGreeting = async () => {
  const container = document.querySelector(CLASS_SELECTOR.CONTAINER);
  const employeeId = sessionStorage.getItem(KEY.LOGIN_ID);
  const getEmployee = await fetchGetEmployee(employeeId); // Employee 데이터 가져오기
  const greetingConstant = MESSAGES.GREETING;
  const greeting = document.createElement(TAG.DIV);
  greeting.className = CLASS.GREETING;

  greeting.textContent = `${getEmployee.name} ${greetingConstant}`;

  const headerLine = document.querySelector(CLASS_SELECTOR.HEADER_LINE);
  container.insertBefore(greeting, headerLine.nextSibling);
};

