import {initialButtons} from "../../common/buttonUtils.js";
import {BUTTON} from "../../../../../config/customer/customer.js";
import {
  fetchApplyInsuranceRecontractById,
  fetchApplyInsuranceRevivalById, fetchApplyInsuranceTerminationById, fetchBuyInsurance, fetchLoan
} from "../../../apiUtils/apiDocumentation/customer/customer.js";
import {buttonType} from "../../tableRenderer/customer/input.js";
import {KEY, LOCATION} from "../../../../../config/common.js";


const applyRecontract = async () => { // 팝업
  const contractId = sessionStorage.getItem(KEY.SELECTED_DATA_ID);
  await fetchApplyInsuranceRecontractById(contractId);
  alert("재계약 신청이 완료되었습니다");
  window.history.back();
  window.history.back();
}

const applyRevival = async () => { // 팝업
  const contractId = sessionStorage.getItem(KEY.SELECTED_DATA_ID);
  await fetchApplyInsuranceRevivalById(contractId);
  alert("부활 신청이 완료되었습니다");
  window.history.back();
  window.history.back();
}

const applyTermination = async () => { // 팝업
  const contractId = sessionStorage.getItem(KEY.SELECTED_DATA_ID);
  await fetchApplyInsuranceTerminationById(contractId);
  alert("해지 신청이 완료되었습니다");
  window.history.back();
  window.history.back();
}

const applyEndorsement = () => { // 입력
  sessionStorage.setItem(KEY.SELECTED_BUTTON_TYPE, buttonType.APPLY_ENDORSEMENT);
  window.location.href = LOCATION.INPUT;
}

const payInsuranceFee = () => { // 입력
  sessionStorage.setItem(KEY.SELECTED_BUTTON_TYPE, buttonType.PAY_INSURANCE_FEE);
  window.location.href = LOCATION.INPUT;
}

const receiveInsurance = () => { // 입력 - 얜 모르것다
  sessionStorage.setItem(KEY.SELECTED_BUTTON_TYPE, buttonType.RECEIVE_INSURANCE);
  window.location.href = LOCATION.INPUT;
}

const askInsuranceCounsel = async () => { // 입력
  sessionStorage.setItem(KEY.SELECTED_BUTTON_TYPE, buttonType.ASK_INSURANCE_COUNSEL);
  window.location.href = LOCATION.INPUT;
}

const buyInsurance = async () => { // 팝업
  const buyInsuranceDTO = {
    insuranceId: sessionStorage.getItem(KEY.SELECTED_DATA_ID),
    customerId: sessionStorage.getItem(KEY.LOGIN_ID)
  };
  await fetchBuyInsurance(buyInsuranceDTO);
  alert("보험 계약 신청이 완료되었습니다");
  window.history.back();
  window.history.back();
}

const loan = async () => { // 팝업
  const loanDTO = {
    loanId: sessionStorage.getItem(KEY.SELECTED_DATA_ID),
    customerId: sessionStorage.getItem(KEY.LOGIN_ID)
  }
  await fetchLoan(loanDTO);
  alert("대출 신청이 완료되었습니다");
  window.history.back();
  window.history.back();
}

const cancel = () => {
  window.history.back();
}

const customerTaskMapper = {
  MANAGEMENT_CONTRACT: {
    RECONTRACT: applyRecontract,
    REVIVAL: applyRevival,
    TERMINATION: applyTermination,
    ENDORSEMENT: applyEndorsement,
    PAY_INSURANCE_FEE: payInsuranceFee,
    RECEIVE_INSURANCE: receiveInsurance
  },
  INSURANCE_LIST: {
    COUNSEL: askInsuranceCounsel,
    BUY_INSURANCE: buyInsurance
  },
  LOAN_LIST: {
    APPLY: loan,
    CANCEL: cancel
  }
}

export const renderButtons = () => {
  const type = sessionStorage.getItem(KEY.CURRENT_TYPE);
  initialButtons(BUTTON.TASK.CUSTOMER[type], customerTaskMapper[type]);
}
