import {initialButtons} from "../../common/buttonUtils.js";
import {BUTTON} from "../../../../../config/customer/customer.js";

const applyEndorsement = () => {
  const dataId = sessionStorage.getItem("selectedDataId");
  const id = sessionStorage.getItem("id");
  alert("배서 승인-"+dataId+", "+id);
}

const payInsuranceFee = () => {
  const dataId = sessionStorage.getItem("selectedDataId");
  const id = sessionStorage.getItem("id");
  alert("보험금 납입-"+dataId+", "+id);
}

const receiveInsurance = () => {
  const dataId = sessionStorage.getItem("selectedDataId");
  const id = sessionStorage.getItem("id");
  alert("보험금 신청-"+dataId+", "+id);
}

const askInsuranceCounsel = () => {
  const insuranceId = sessionStorage.getItem("selectedDataId");
  const id = sessionStorage.getItem("id");
  alert("상담 신청-"+insuranceId+", "+id);
}

const reportAccident = () => {
  alert("사고 신고");
}

const complain = () => {
  alert("민원 신청");
}

const cancel = () => {
  window.history.back();
}

const customerTaskMapper = {
  APPLY_ENDORSEMENT: {
    OK: applyEndorsement,
    CANCEL: cancel
  },
  PAY_INSURANCE_FEE: {
    OK: payInsuranceFee,
    CANCEL: cancel
  },
  RECEIVE_INSURANCE: {
    OK: receiveInsurance,
    CANCEL: cancel
  },
  ASK_INSURANCE_COUNSEL: {
    OK: askInsuranceCounsel,
    CANCEL: cancel
  },
  ADD_ACCIDENT: {
    POST: reportAccident,
    CANCEL: cancel
  },
  ADD_COMPLAINT: {
    POST: complain,
    CANCEL: cancel
  }
}

export const renderButton = () => {
  const type = sessionStorage.getItem("selectedButtonType");
  initialButtons(BUTTON.TASK.CUSTOMER.INPUT[type], customerTaskMapper[type]);
}
