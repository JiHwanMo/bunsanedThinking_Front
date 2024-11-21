import { fetchGetPartnerCompanyById } from "../../../apiUtils/apiDocumentation/employee/compensationPlanning/compensationPlanning.js";
import { MESSAGES } from '../../../../../config/common.js';

export const renderGreeting = async () => {
  const container = document.querySelector(".container");
  const id = sessionStorage.getItem("id");
  const getPartnerCompany = await fetchGetPartnerCompanyById(id); // Employee 데이터 가져오기
  const greetingConstant = MESSAGES.GREETING;
  const greeting = document.createElement("div");
  greeting.className = "greeting";

  greeting.textContent = `${getPartnerCompany.name} ${greetingConstant}`;

  const headerLine = document.querySelector(".header-line");
  container.insertBefore(greeting, headerLine.nextSibling);
};

