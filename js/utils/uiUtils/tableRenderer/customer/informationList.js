import {
  fetchGetAccidentRowById,
  fetchGetAllAccidentByCustomerId,
  fetchGetAllAutomobileContractByCustomerId,
  fetchGetAllAutomobileInsurance,
  fetchGetAllCollateralLoan,
  fetchGetAllComplaintsByCustomerId,
  fetchGetAllContractByCustomerId,
  fetchGetAllDiseaseContractByCustomerId,
  fetchGetAllDiseaseInsurance,
  fetchGetAllFixedDepositLoan,
  fetchGetAllInjuryContractByCustomerId,
  fetchGetAllInjuryInsurance,
  fetchGetAllInsurance,
  fetchGetAllInsuranceContractLoan,
  fetchGetAllLoan,
  fetchGetComplaintRowById,
  fetchGetContractRowById,
  fetchGetInsuranceRowByProductId,
  fetchGetLoanRowByProductId
} from '../../../apiUtils/apiDocumentation/customer/customer.js';
import {COLUMN_NAME, COMBOBOX, COMBOLIST_FETCH_ALL, TABLE_TITLE} from '../../../../../config/customer/customer.js';
import {setButton, setPost} from "../../buttonManager/customer/information.js";
import {
  CLASS, CLASS_SELECTOR,
  ELEMENT_ID,
  EVENT,
  INPUT_TYPE,
  KEY,
  LOCATION,
  MESSAGES,
  STRING_EMPTY,
  TAG, ZERO
} from "../../../../../config/common.js";


const contractRow = (dto) => {
  return `
    <td>${dto.id}</td>
    <td>${dto.name}</td>
    <td>${dto.type}</td>
    <td>${dto.insuranceId}</td>
    <td>${dto.ageRange}</td>
    <td>${dto.monthlyPremium}</td>
    <td>${dto.expirationDate == null ? STRING_EMPTY : dto.expirationDate}</td>
    <td>${dto.date}</td>
    <td>${dto.paymentDate == null ? STRING_EMPTY : dto.paymentDate}</td>
    <td>${dto.status}</td>
  `;
}

const accidentRow = (dto) => {
  return `
    <td>${dto.id}</td>
    <td>${dto.serviceType}</td>
    <td>${dto.date}</td>
    <td>${dto.customerName}</td>
    <td>${dto.customerPhoneNumber}</td>
    <td>${dto.processStatus}</td>
  `;
}

const complaintRow = (dto) => {
  return `
    <td>${dto.id}</td>
    <td>${dto.type}</td>
    <td>${dto.title}</td>
    <td>${dto.postDate}</td>
    <td>${dto.processingDate == null ? STRING_EMPTY : dto.processingDate}</td>
    <td>${dto.status}</td>
  `;
}

const insuranceRow = (dto) => {
  return `
    <td>${dto.id}</td>
    <td>${dto.name}</td>
    <td>${dto.insuranceType}</td>
    <td>${dto.ageRange}</td>
    <td>${dto.monthlyPremium}</td>
  `;
}

const loanRow = (dto) => {
  return `
    <td>${dto.id}</td>
    <td>${dto.name}</td>
    <td>${dto.loanType}</td>
    <td>${dto.interestRate}</td>
    <td>${dto.maximumMoney}</td>
  `;
}

const context = {
  MANAGEMENT_CONTRACT: {
    listFetch: fetchGetAllContractByCustomerId,
    listFetchById: fetchGetContractRowById,
    rowGetter: contractRow,
    needCustomerId: true,
    needDetail: true,
    comboListFetch: {
      all: fetchGetAllContractByCustomerId,
      disease: fetchGetAllDiseaseContractByCustomerId,
      automobile: fetchGetAllAutomobileContractByCustomerId,
      injury: fetchGetAllInjuryContractByCustomerId
    }
  },
  VIEW_ACCIDENT: {
    listFetch: fetchGetAllAccidentByCustomerId,
    listFetchById: fetchGetAccidentRowById,
    rowGetter: accidentRow,
    needCustomerId: true,
    needDetail: false,
    comboListFetch: {
      all: fetchGetAllAccidentByCustomerId
    }
  },
  VIEW_COMPLAINT: {
    listFetch: fetchGetAllComplaintsByCustomerId,
    listFetchById: fetchGetComplaintRowById,
    rowGetter: complaintRow,
    needCustomerId: true,
    needDetail: false,
    comboListFetch: {
      all: fetchGetAllComplaintsByCustomerId
    }
  },
  INSURANCE_LIST: {
    listFetch: fetchGetAllInsurance,
    listFetchById: fetchGetInsuranceRowByProductId,
    rowGetter: insuranceRow,
    needCustomerId: false,
    needDetail: true,
    comboListFetch: {
      all: fetchGetAllInsurance,
      disease: fetchGetAllDiseaseInsurance,
      automobile: fetchGetAllAutomobileInsurance,
      injury: fetchGetAllInjuryInsurance
    }
  },
  LOAN_LIST: {
    listFetch: fetchGetAllLoan,
    listFetchById: fetchGetLoanRowByProductId,
    rowGetter: loanRow,
    needCustomerId: false,
    needDetail: true,
    comboListFetch: {
      all: fetchGetAllLoan,
      collateral: fetchGetAllCollateralLoan,
      fixedDeposit: fetchGetAllFixedDepositLoan,
      insuranceContract: fetchGetAllInsuranceContractLoan
    }
  }
}

export const viewInformationListById = async (fetchType) => {
  sessionStorage.setItem(KEY.CURRENT_TYPE, fetchType);
  const id = sessionStorage.getItem(KEY.LOGIN_ID);
  const list = await context[fetchType].listFetch(id);
  sessionStorage.setItem(KEY.LIST, JSON.stringify(list));
  window.location.href = LOCATION.INFORMATION;
}
export const viewInformationListAll = async (fetchType) => {
  sessionStorage.setItem(KEY.CURRENT_TYPE, fetchType);
  const list = await context[fetchType].listFetch();
  sessionStorage.setItem(KEY.LIST, JSON.stringify(list));
  window.location.href = LOCATION.INFORMATION;
}

export const renderTable = () => {
  initialTable();
}

const setTitle = () => {
  const title = TABLE_TITLE[sessionStorage.getItem(KEY.CURRENT_TYPE)];
  const contextTitle = document.getElementById(ELEMENT_ID.TITLE);
  contextTitle.innerText = title;
}

const setComboBox = () => {
  const container = document.querySelector(CLASS_SELECTOR.SEARCH_CONTAINER);
  const select = document.createElement(TAG.SELECT);
  const type = sessionStorage.getItem(KEY.CURRENT_TYPE);
  const boxContext = COMBOBOX[type];
  if (!boxContext.isCombo) return null;
  select.id = boxContext.id;
  select.className = CLASS.COMBO_BOX;
  const optionTypes = boxContext.optionTypes;
  optionTypes.forEach(optionType => {
    const option = document.createElement(TAG.OPTION);
    option.value = optionType.value;
    option.textContent = optionType.label;
    select.appendChild(option);
  });
  container.appendChild(select);
  select.onchange = () => initTableBySelect(select.id, type);
  return select;
}

const setInput = () => {
  const container = document.querySelector(CLASS_SELECTOR.SEARCH_CONTAINER);
  const input = document.createElement(TAG.INPUT);
  input.type = INPUT_TYPE.TEXT;
  input.id = ELEMENT_ID.SEARCH_INPUT;
  input.placeholder = MESSAGES.PLACE_HOLDER.SEARCH;
  container.appendChild(input);
  return input;
}

export const initTableByInput = async (id, type) => {
  const tableBody = document.getElementById(KEY.LIST);
  while(tableBody.firstChild) tableBody.removeChild(tableBody.firstChild);
  if (id.length > ZERO) {
    const item = context[type].needCustomerId ?
      await context[type].listFetchById(id, sessionStorage.getItem(KEY.LOGIN_ID)) :
      await context[type].listFetchById(id)
    setOneRow(item, type);
  } else {
    const list = context[type].needCustomerId ?
      await context[type].comboListFetch[COMBOLIST_FETCH_ALL](sessionStorage.getItem(KEY.LOGIN_ID)) :
      await context[type].comboListFetch[COMBOLIST_FETCH_ALL]();
    if (list != null) sessionStorage.setItem(KEY.LIST, JSON.stringify(list));
    setTableBody();
  }
}

const initTableBySelect = async (id, type) => {
  const select = document.getElementById(id);
  const selectedOption = select.options[select.selectedIndex];
  const list = context[type].needCustomerId ?
    await context[type].comboListFetch[selectedOption.value](sessionStorage.getItem(KEY.LOGIN_ID)) :
    await context[type].comboListFetch[selectedOption.value]();
  if (list != null) sessionStorage.setItem(KEY.LIST, JSON.stringify(list));
  const input = document.getElementById(ELEMENT_ID.SEARCH_INPUT);
  if (input != null) input.value = STRING_EMPTY;
  const tableBody = document.getElementById(KEY.LIST);
  while(tableBody.firstChild) tableBody.removeChild(tableBody.firstChild);
  setTableBody();
}

const setSearchBar = () => {
  const type = sessionStorage.getItem(KEY.CURRENT_TYPE);
  if (COMBOBOX[type].isCombo) setComboBox();
  else setPost();
  setInput();
  setButton();
}

const setColumn = () => {
  const columnList = COLUMN_NAME[sessionStorage.getItem(KEY.CURRENT_TYPE)];
  const head = document.getElementById(ELEMENT_ID.TABLE);
  const columns = document.createElement(TAG.TR);
  columnList.forEach(item => {
    const oneColoumn = document.createElement(TAG.TH);
    oneColoumn.innerHTML = item;
    columns.appendChild(oneColoumn);
  })
  head.appendChild(columns);
}

const setOneRow = (item, type) => {
  const tableBody = document.getElementById(KEY.LIST);
  const row = document.createElement(TAG.TR);
  row.innerHTML = context[type].rowGetter(item);
  row.addEventListener(EVENT.CLICK, () => {
    if (window.selectedRow) {
      window.selectedRow.classList.remove(CLASS.SELECTED);
    }
    row.classList.add(CLASS.SELECTED);
    window.selectedRow = row;
  });

  if (context[type].needDetail) {
    row.addEventListener(EVENT.DOUBLE_CLICK, () => {
      sessionStorage.setItem(KEY.SELECTED_DATA_ID, item.id);
      window.location.href = LOCATION.DETAIL;
    });
  }

  tableBody.appendChild(row);
}

const setTableBody = () => {
  const type = sessionStorage.getItem(KEY.CURRENT_TYPE);
  const data = JSON.parse(sessionStorage.getItem(KEY.LIST));
  data.forEach(item => setOneRow(item, type));
}

const initialTable = () => {
  setTitle();
  setSearchBar();
  setColumn();
  setTableBody();
}
