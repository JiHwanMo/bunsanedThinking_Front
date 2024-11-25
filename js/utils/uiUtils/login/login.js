import { fetchloginCustomer } from '../../apiUtils/apiDocumentation/authentication.js';
import { fetchloginEmployee } from '../../apiUtils/apiDocumentation/authentication.js';
import { fetchloginPartnerCompany } from '../../apiUtils/apiDocumentation/authentication.js';
import {KEY} from "../../../../config/common.js";

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
  alert(`${user.name}님, 환영합니다!`);
  sessionStorage.setItem(KEY.LOGIN_ID, id);
  window.location.href = link[user.type];
}

const submit = async (event) => {
  event.preventDefault(); // 폼 기본 제출 방지

  const id = document.getElementById("id").value;

  // 간단한 유효성 검사
  if (id.trim() === "") {
    alert("아이디를 입력해주세요.");
    return;
  }

  let user = await fetchloginCustomer(id);
  if (user != null) {
    toNextPage(user, id);
    return;
  }
  user = await fetchloginEmployee(id);
  if (user != null) {
    toNextPage(user, id);
    return;
  }
  user = await fetchloginPartnerCompany(id);
  if (user != null) {
    toNextPage(user, id);
    return;
  }
  if (user == null) alert("입력 아이디에 맞는 사용자가 없습니다.");
}

export const renderLogin = () => {
  const loginForm = document.getElementById("loginForm");
  loginForm.addEventListener("submit", (event) => {
    submit(event);
  });
}
