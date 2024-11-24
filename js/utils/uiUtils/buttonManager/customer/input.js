import {initialButtons} from "../../common/buttonUtils.js";
import {BUTTON, INPUT_FORM} from "../../../../../config/customer/customer.js";
import {
  fetchApplyEndorsementById, fetchAskInsuranceCounsel, fetchComplain,
  fetchPayInsurancefee,
  fetchReceiveInsurance, fetchReportAccident
} from "../../../apiUtils/apiDocumentation/customer/customer.js";

const getInputForm = () => {
  return INPUT_FORM[sessionStorage.getItem("selectedButtonType")];
}

const applyEndorsement = async () => {
  const inputForm = getInputForm();
  const contractId = sessionStorage.getItem("selectedDataId");
  const depositDate = document.getElementById(inputForm.DEPOSIT_DATE.id).value;
  if (depositDate === "") alert(inputForm.DEPOSIT_DATE.exception);
  else {
    await fetchApplyEndorsementById(depositDate, contractId);
    alert("배서 신청이 완료되었습니다");
    window.history.back();
    window.history.back();
    window.history.back();
  }
}

const getPayInsuranceFeeDTO = (contractId, depositMoney, depositPath) => {
  return {
    contractId: contractId,
    money: depositMoney,
    depositPath: depositPath-1
  }
}

const payInsuranceFee = async () => {
  const inputForm = getInputForm();
  const contractId = sessionStorage.getItem("selectedDataId");
  const depositPath = document.getElementById(inputForm.DEPOSIT_PATH.id).selectedIndex;
  const depositMoney = document.getElementById(inputForm.DEPOSIT_MONEY.id).value;
  if (depositPath === 0) alert(inputForm.DEPOSIT_PATH.exception);
  else if (depositMoney === "" || depositMoney <= 0)
    alert(inputForm.DEPOSIT_MONEY.exception);
  else {
    const depositDTO = getPayInsuranceFeeDTO(contractId, depositMoney, depositPath);
    await fetchPayInsurancefee(depositDTO);
    alert("보험금 납입이 완료되었습니다");
    window.history.back();
    window.history.back();
    window.history.back();
  }
}

const getReceiveInsuranceDTO = (contractId, medicalCertificate,
                                receipt, residentRegistrationCard) => {
  return {
    contractId: contractId,
    medicalCertificate: medicalCertificate,
    receipt: receipt,
    residentRegistrationCard: residentRegistrationCard
  }
}

const receiveInsurance = async () => {
  // 만들어두기만 함 - 서버 연동은 아직 미실시
  const inputForm = getInputForm();
  const contractId = sessionStorage.getItem("selectedDataId");
  const medicalCertificate = document.getElementById(inputForm.MEDICAL_CERTIFICATE.id).value;
  const receipt = document.getElementById(inputForm.RECEIPT.id).value;
  const residentRegistrationCard = document.getElementById(inputForm.RESIDENT_REGISTRATION_CARD.id).value;
  if (medicalCertificate === "") alert(inputForm.MEDICAL_CERTIFICATE.exception);
  else if (receipt === "") alert(inputForm.RECEIPT.exception);
  else if (residentRegistrationCard === "") alert(inputForm.RESIDENT_REGISTRATION_CARD.exception);
  else {
    const receiveInsuranceDTO = getReceiveInsuranceDTO(contractId,
      medicalCertificate, receipt, residentRegistrationCard);
    // await fetchReceiveInsurance(receiveInsuranceDTO);
    // alert("보험금 신청이 완료되었습니다");
    alert(JSON.stringify(receiveInsuranceDTO));
    window.history.back();
    window.history.back();
    window.history.back();
  }
}

const getAskInsuranceCounsel = (id, insuranceId, counselDate) => {
  return {
    customerId: id,
    insuranceId: insuranceId,
    counselDate: counselDate
  }
}

const askInsuranceCounsel = async () => {
  const inputForm = getInputForm();
  const insuranceId = sessionStorage.getItem("selectedDataId");
  const id = sessionStorage.getItem("id");
  const counselDate = document.getElementById(inputForm.COUNSEL_DATE.id).value;
  if (counselDate === "") alert(inputForm.COUNSEL_DATE.exception); // 여기 형식은 다시 찾아봐야 함
  else {
    // date 형식은 무조건 yyyy-mm-dd 형식이어야 함
    const askInsuranceCounselDTO = getAskInsuranceCounsel(id, insuranceId, counselDate);
    await fetchAskInsuranceCounsel(askInsuranceCounselDTO);
    alert("상담 신청이 완료되었습니다");
    window.history.back();
    window.history.back();
    window.history.back();
  }
}

const getReportAccident = (id, type, accidentDate, location) => {
  return {
    accidentDate: accidentDate,
    location: location,
    serviceType: type-1,
    customerId: id
  };
}

const reportAccident = async () => {
  const inputForm = getInputForm();
  const id = sessionStorage.getItem("id");
  const type = document.getElementById(inputForm.TYPE.id).selectedIndex;
  const accidentDate = document.getElementById(inputForm.ACCIDENT_DATE.id).value;
  const location = document.getElementById(inputForm.LOCATION.id).value;
  if (type === 0) alert(inputForm.TYPE.exception);
  else if (accidentDate === "") alert(inputForm.ACCIDENT_DATE.exception);
  else if (location === "") alert(inputForm.LOCATION.exception);
  else {
    // date 형식은 무조건 yyyy-mm-dd 형식이어야 함
    const reportAccidentDTO = getReportAccident(id, type, accidentDate, location);
    await fetchReportAccident(reportAccidentDTO);
    alert("사고 신고가 완료되었습니다");
    window.history.back();
    window.history.back();
  }
}

const getComplainDTO = (id, type, complaintTitle, content) => {
  return {
    complainType: type-1,
    title: complaintTitle,
    content: content,
    customerId: id
  }
}

const complain = async () => {
  const inputForm = getInputForm();
  const id = sessionStorage.getItem("id");
  const type = document.getElementById(inputForm.TYPE.id).selectedIndex;
  const complaintTitle = document.getElementById(inputForm.COMPLAINT_TITLE.id).value;
  const content = document.getElementById(inputForm.CONTENT.id).value;
  if (type === 0) alert(inputForm.TYPE.exception);
  else if (complaintTitle === "") alert(inputForm.COMPLAINT_TITLE.exception);
  else if (content === "") alert(inputForm.CONTENT.exception);
  else {
    const complainDTO = getComplainDTO(id, type, complaintTitle, content);
    await fetchComplain(complainDTO);
    alert("민원 신청이 완료되었습니다");
    window.history.back();
    window.history.back();
  }
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
