import {initialButtons} from "../../common/buttonUtils.js";
import {ALERT, BUTTON, BUTTON_TYPE, NOT_RECEIVE_INSURANCE_EXCEPTION} from "../../../../../config/customer/customer.js";
import {
  fetchApplyInsuranceRecontractById,
  fetchApplyInsuranceRevivalById,
  fetchApplyInsuranceTerminationById,
  fetchBuyInsurance,
  fetchIsAutomobileContract,
  fetchLoan
} from "../../../apiUtils/apiDocumentation/customer/customer.js";
import {KEY, LOCATION} from "../../../../../config/common.js";


const applyRecontract = async () => {
  if (!confirm(ALERT.CONFIRM.APPLY_RECONTRACT)) return;
  const contractId = sessionStorage.getItem(KEY.SELECTED_DATA_ID);
  const result = await fetchApplyInsuranceRecontractById(contractId);
  if (result == null) return;
  alert(ALERT.OK.APPLY_RECONTRACT);
  window.history.back();
  window.history.back();
}

const applyRevival = async () => {
  if (!confirm(ALERT.CONFIRM.APPLY_REVIVAL)) return;
  const contractId = sessionStorage.getItem(KEY.SELECTED_DATA_ID);
  const result = await fetchApplyInsuranceRevivalById(contractId);
  if (result == null) return;
  alert(ALERT.OK.APPLY_REVIVAL);
  window.history.back();
  window.history.back();
}

const applyTermination = async () => {
  if (!confirm(ALERT.CONFIRM.APPLY_TERMINATION)) return;
  const contractId = sessionStorage.getItem(KEY.SELECTED_DATA_ID);
  const result = await fetchApplyInsuranceTerminationById(contractId);
  if (result == null) return;
  alert(ALERT.OK.APPLY_TERMINATION);
  window.history.back();
  window.history.back();
}

const applyEndorsement = () => {
  sessionStorage.setItem(KEY.SELECTED_BUTTON_TYPE, BUTTON_TYPE.APPLY_ENDORSEMENT);
  window.location.href = LOCATION.INPUT;
}

const payInsuranceFee = () => {
  sessionStorage.setItem(KEY.SELECTED_BUTTON_TYPE, BUTTON_TYPE.PAY_INSURANCE_FEE);
  window.location.href = LOCATION.INPUT;
}

const receiveInsurance = async () => {
  const contractId = sessionStorage.getItem(KEY.SELECTED_DATA_ID);
  const isAutomobile = await fetchIsAutomobileContract(contractId);
  if (isAutomobile) {
    alert(NOT_RECEIVE_INSURANCE_EXCEPTION);
    return;
  }
  sessionStorage.setItem(KEY.SELECTED_BUTTON_TYPE, BUTTON_TYPE.RECEIVE_INSURANCE);
  window.location.href = LOCATION.INPUT;
}

const askInsuranceCounsel = async () => {
  sessionStorage.setItem(KEY.SELECTED_BUTTON_TYPE, BUTTON_TYPE.ASK_INSURANCE_COUNSEL);
  window.location.href = LOCATION.INPUT;
}

const buyInsurance = async () => {
  if (!confirm(ALERT.CONFIRM.BUY_INSURANCE)) return;
  const buyInsuranceDTO = {
    insuranceId: sessionStorage.getItem(KEY.SELECTED_DATA_ID),
    customerId: sessionStorage.getItem(KEY.LOGIN_ID)
  };
  const result = await fetchBuyInsurance(buyInsuranceDTO);
  if (result == null) return;
  alert(ALERT.OK.BUY_INSURANCE);
  window.history.back();
  window.history.back();
}

const loan = async () => {
  if (!confirm(ALERT.CONFIRM.LOAN)) return;
  const loanDTO = {
    loanId: sessionStorage.getItem(KEY.SELECTED_DATA_ID),
    customerId: sessionStorage.getItem(KEY.LOGIN_ID)
  }
  const result = await fetchLoan(loanDTO);
  if (result == null) return;
  alert(ALERT.OK.LOAN);
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
