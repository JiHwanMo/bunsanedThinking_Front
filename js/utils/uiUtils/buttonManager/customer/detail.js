import {initialButtons} from "../../common/buttonUtils.js";
import {BUTTON} from "../../../../../config/customer/customer.js";
import {
  fetchApplyInsuranceRecontractById,
  fetchApplyInsuranceRevivalById, fetchApplyInsuranceTerminationById, fetchBuyInsurance, fetchLoan
} from "../../../apiUtils/apiDocumentation/customer/customer.js";
import {buttonType} from "../../tableRenderer/customer/input.js";


const applyRecontract = async () => { // 팝업
  const contractId = sessionStorage.getItem("selectedDataId");
  // await fetchApplyInsuranceRecontractById(contractId);
  alert("재계약 신청이 완료되었습니다");
  window.history.back();
  window.history.back();
}

const applyRevival = async () => { // 팝업
  const contractId = sessionStorage.getItem("selectedDataId");
  // await fetchApplyInsuranceRevivalById(contractId);
  alert("부활 신청이 완료되었습니다");
  window.history.back();
  window.history.back();
}

const applyTermination = async () => { // 팝업
  const contractId = sessionStorage.getItem("selectedDataId");
  // await fetchApplyInsuranceTerminationById(contractId);
  alert("해지 신청이 완료되었습니다");
  window.history.back();
  window.history.back();
}

const applyEndorsement = () => { // 입력
  sessionStorage.setItem("selectedButtonType", buttonType.APPLY_ENDORSEMENT);
  window.location.href = "input.html";
}

const payInsuranceFee = () => { // 입력
  sessionStorage.setItem("selectedButtonType", buttonType.PAY_INSURANCE_FEE);
  window.location.href = "input.html";
}

const receiveInsurance = () => { // 입력 - 얜 모르것다
  sessionStorage.setItem("selectedButtonType", buttonType.RECEIVE_INSURANCE);
  window.location.href = "input.html";
}

const askInsuranceCounsel = async () => { // 입력
  sessionStorage.setItem("selectedButtonType", buttonType.ASK_INSURANCE_COUNSEL);
  window.location.href = "input.html";
}

const buyInsurance = async () => { // 팝업
  const buyInsuranceDTO = {
    insuranceId: sessionStorage.getItem("selectedDataId"),
    customerId: sessionStorage.getItem("id")
  };
  // await fetchBuyInsurance(buyInsuranceDTO);
  alert("보험 계약 신청이 완료되었습니다");
  window.history.back();
  window.history.back();
}

const loan = async () => { // 팝업
  const loanDTO = {
    loanId: sessionStorage.getItem("selectedDataId"),
    customerId: sessionStorage.getItem("id")
  }
  // await fetchLoan(loanDTO);
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
  const type = sessionStorage.getItem("currentType");
  initialButtons(BUTTON.TASK.CUSTOMER[type], customerTaskMapper[type]);
}
