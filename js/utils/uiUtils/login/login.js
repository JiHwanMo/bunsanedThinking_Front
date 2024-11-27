import { fetchloginCustomer } from '../../apiUtils/apiDocumentation/authentication.js';
import { fetchloginEmployee } from '../../apiUtils/apiDocumentation/authentication.js';
import { fetchloginPartnerCompany } from '../../apiUtils/apiDocumentation/authentication.js';
import {EVENT, KEY, MESSAGES, ZERO} from "../../../../config/common.js";
import {ELEMENT_ID, LINK, SUBMIT} from "../../../../config/login.js";

const toNextPage = (user, id) => {
  alert(`${user.name}${MESSAGES.WELCOME}`);
  sessionStorage.setItem(KEY.LOGIN_ID, id);
  window.location.href = LINK[user.type];
}

const submit = async (event) => {
  event.preventDefault();

  const id = document.getElementById(KEY.LOGIN_ID).value;
  if (id.trim() === ZERO) {
    alert(SUBMIT.NOT_INPUT);
    return;
  }

  if (id[ZERO] === SUBMIT.IS_CUSTOMER) {
    const user = await fetchloginCustomer(id);
    if (user != null) toNextPage(user, id);
  } else if (id[ZERO] === SUBMIT.IS_EMPLOYEE) {
    const employee = await fetchloginEmployee(id);
    if (employee != null) toNextPage(employee, id);
  } else if (id[ZERO] === SUBMIT.IS_PARTNER_COMPANY) {
    const partnerCompany = await fetchloginPartnerCompany(id);
    if (partnerCompany != null) toNextPage(partnerCompany, id);
  } else alert(SUBMIT.UNEXPECTED_ID);

}

export const renderLogin = () => {
  const loginForm = document.getElementById(ELEMENT_ID.LOGIN_FORM);
  loginForm.addEventListener(EVENT.SUBMIT, (event) => {
    submit(event);
  });
}
