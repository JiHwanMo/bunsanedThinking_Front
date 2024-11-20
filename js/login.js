import { fetchloginCustomer } from './utils/apiUtils/apiDocumentation/authentication.js';
import { fetchloginEmployee } from './utils/apiUtils/apiDocumentation/authentication.js';
import { fetchloginPartnerCompany } from './utils/apiUtils/apiDocumentation/authentication.js';

const link = {
  CUSTOMER: "customer/home.html",
  ADMINISTRATIVE: "./employee/administrative/administrative.html",
  COMPENSATION: "./employee/compensation/home.html",
  COMPENSATION_PLANNING: "./employee/compensationPlanning/home.html",
  CONTRACT_MANAGEMENT: "./employee/contractManagement/home.html",
  CUSTOMER_INFORMATION_MANAGEMENT: "./employee/customerInformationManagement/customerInformationManagement.html",
  CUSTOMER_SUPPORT: "./employee/customerSupport/home.html",
  FINANCIAL_ACCOUNTANT: "./employee/financialAccountant/home.html",
  HUMAN_RESOURCE: "./employee/humanResource/home.html",
  LOAN_MANAGEMENT: "./employee/loanManagement/loanManagement.html",
  MANAGEMENT_PLANNING: "./employee/managementPlanning/managementPlanning.html",
  PRODUCT_MANAGEMENT: "./employee/productManagement/productManagement.html",
  SALES: "./employee/sales/sales.html",
  UNDERWRITNG: "./employee/underWriting/underWriting.html",
  PARTNERCOMPANY: "./partnerCompany/partnerCompany.html",
}

const toNextPage = (user, id) => {
  alert(`${user.name}님, 환영합니다!`);
  sessionStorage.setItem("id", id);
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
