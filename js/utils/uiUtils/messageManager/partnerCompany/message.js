import { fetchGetPartnerCompanyById } from "../../../apiUtils/apiDocumentation/employee/compensationPlanning/compensationPlanning.js";
import {CLASS, CLASS_SELECTOR, KEY, MESSAGES, TAG} from '../../../../../config/common.js';

export const renderGreeting = async () => {
  const container = document.querySelector(CLASS_SELECTOR.CONTAINER);
  const id = sessionStorage.getItem(KEY.LOGIN_ID);
  const getPartnerCompany = await fetchGetPartnerCompanyById(id); // Employee 데이터 가져오기
  const greetingConstant = MESSAGES.GREETING;
  const greeting = document.createElement(TAG.DIV);
  greeting.className = CLASS.GREETING;

  greeting.textContent = `${getPartnerCompany.name} ${greetingConstant}`;

  const headerLine = document.querySelector(CLASS_SELECTOR.HEADER_LINE);
  container.insertBefore(greeting, headerLine.nextSibling);
};

