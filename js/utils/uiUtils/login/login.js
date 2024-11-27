import { fetchloginCustomer } from '../../apiUtils/apiDocumentation/authentication.js';
import { fetchloginEmployee } from '../../apiUtils/apiDocumentation/authentication.js';
import { fetchloginPartnerCompany } from '../../apiUtils/apiDocumentation/authentication.js';
import {EVENT, KEY, MESSAGES, ZERO} from "../../../../config/common.js";

const link = {
  CUSTOMER: "../customer/home.html",
  ADMINISTRATIVE: "../employee/administrative/home.html",
  COMPENSATION: "../employee/compensation/home.html",
  COMPENSATION_PLANNING: "../employee/compensationPlanning/home.html",
  CONTRACT_MANAGEMENT: "../employee/contractManagement/home.html",
  CUSTOMER_INFORMATION_MANAGEMENT: "../employee/customerInformationManagement/home.html",
  CUSTOMER_SUPPORT: "../employee/customerSupport/home.html",
  FINANCIAL_ACCOUNTANT: "../employee/financialAccountant/home.html",
  HUMAN_RESOURCE: "../employee/humanResource/home.html",
  LOAN_MANAGEMENT: "../employee/loanManagement/home.html",
  MANAGEMENT_PLANNING: "../employee/managementPlanning/home.html",
  PRODUCT_MANAGEMENT: "../employee/productManagement/home.html",
  SALES: "../employee/sales/home.html",
  UNDERWRITING: "../employee/underWriting/home.html",
  PARTNERCOMPANY: "../partnerCompany/home.html",
}

const toNextPage = (user, id) => {
  alert(`${user.name}${MESSAGES.WELCOME}`);
  sessionStorage.setItem(KEY.LOGIN_ID, id);
  window.location.href = link[user.type];
}

const submit = async (event) => {
  event.preventDefault(); // 폼 기본 제출 방지

  const id = document.getElementById(KEY.LOGIN_ID).value;
  // 간단한 유효성 검사
  if (id.trim() === ZERO) {
    alert("아이디를 입력해주세요.");
    return;
  }

  if (id[0] === "2") {
    const user = await fetchloginCustomer(id);
    if (user != null) toNextPage(user, id);
  } else if (id[0] === "6") {
    const employee = await fetchloginEmployee(id);
    if (employee != null) toNextPage(employee, id);
  } else if (id[0] === "3") {
    const partnerCompany = await fetchloginPartnerCompany(id);
    if (partnerCompany != null) toNextPage(partnerCompany, id);
  } else alert("유효한 아이디가 없습니다");

}

export const renderLogin = () => {
  const loginForm = document.getElementById("loginForm");
  loginForm.addEventListener(EVENT.SUBMIT, (event) => {
    submit(event);
  });
}
