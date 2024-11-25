import { fetchGetAllReport } from '../../../../apiUtils/apiDocumentation/employee/compensation/compensation.js';
import { fetchGetReportRowById } from '../../../../apiUtils/apiDocumentation/employee/compensation/compensation.js';
import { fetchGetAllUnprocessedReport } from '../../../../apiUtils/apiDocumentation/employee/compensation/compensation.js';
import { fetchGetAllCompletedReport } from '../../../../apiUtils/apiDocumentation/employee/compensation/compensation.js';
import { fetchGetAllInsuranceMoney } from '../../../../apiUtils/apiDocumentation/employee/compensation/compensation.js';
import { fetchGetInsuranceMoneyRowById } from '../../../../apiUtils/apiDocumentation/employee/compensation/compensation.js';
import { fetchGetAllUnprocessedInsuranceMoney } from '../../../../apiUtils/apiDocumentation/employee/compensation/compensation.js';
import { fetchGetAllProcessedInsuranceMoney } from '../../../../apiUtils/apiDocumentation/employee/compensation/compensation.js';
import {
  BUTTON, CLASS, CLASS_SELECTOR,
  ELEMENT_ID,
  EVENT,
  INPUT_TYPE,
  KEY,
  LOCATION, MESSAGES,
  STRING_EMPTY,
  TAG,
  ZERO
} from '../../../../../../config/common.js';
import { COMBOBOX } from '../../../../../../config/employee/compensation/compensation.js';
import { TABLE_TITLE } from '../../../../../../config/employee/compensation/compensation.js';
import { COLUMN_NAME } from '../../../../../../config/employee/compensation/compensation.js';

export const informationType = {
  REQUEST_COMPENSATION: "REQUEST_COMPENSATION",
  REQUEST_INSURANCE_MONEY: "REQUEST_INSURANCE_MONEY"
}
const accidentRow = (dto) => {
  return `
    <td>${dto.id}</td>
    <td>${dto.serviceType}</td>
    <td>${dto.date}</td>
    <td>${dto.location}</td>
    <td>${dto.customerName}</td>
    <td>${dto.customerPhoneNumber}</td>
    <td>${dto.accidentProcessStatus}</td>
    <td>${dto.processStatus}</td>
    <td>${dto.damageAssessmentMoney}</td>
  `;
}

const insuranceMoneyRow = (dto) => {
  return `
    <td>${dto.id}</td>
    <td>${dto.productType}</td>
    <td>${dto.date}</td>
    <td>${dto.customerName}</td>
    <td>${dto.status}</td>
  `;
}

const context = {
  REQUEST_COMPENSATION: {
    listFetch: fetchGetAllReport,
    listFetchById: fetchGetReportRowById,
    rowGetter: accidentRow,
    comboListFetch: {
      all: fetchGetAllReport,
      completed: fetchGetAllCompletedReport,
      unprocessed: fetchGetAllUnprocessedReport
    }
  },
  REQUEST_INSURANCE_MONEY: {
    listFetch: fetchGetAllInsuranceMoney,
    listFetchById: fetchGetInsuranceMoneyRowById,
    rowGetter: insuranceMoneyRow,
    comboListFetch: {
      all: fetchGetAllInsuranceMoney,
      completed: fetchGetAllProcessedInsuranceMoney,
      unprocessed: fetchGetAllUnprocessedInsuranceMoney
    }
  }
}

export const viewInformationList = async (fetchType) => {
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
  const select = document.createElement(TAG.SELECT);
  const boxContext = COMBOBOX[sessionStorage.getItem(KEY.CURRENT_TYPE)];
  select.id = boxContext.id;
  select.className = "combo-Box";
  const optionTypes = boxContext.optionTypes;
  optionTypes.forEach(optionType => {
    const option = document.createElement(TAG.OPTION);
    option.value = optionType.value;
    option.textContent = optionType.label;
    select.appendChild(option);
  });
  return select;
}

const setInput = () => {
  const input = document.createElement(TAG.INPUT);
  input.type = INPUT_TYPE.TEXT;
  input.id = ELEMENT_ID.SEARCH_INPUT;
  input.placeholder = MESSAGES.PLACE_HOLDER.SEARCH;
  return input;
}

const initTableByInput = async (id, type) => { // 추가
  const tableBody = document.getElementById(KEY.LIST);
  while(tableBody.firstChild) tableBody.removeChild(tableBody.firstChild);
  if (id.length > 0) {
    const item = await context[type].listFetchById(id);
    setOneRow(item, type);
  } else {
    const list = await context[type].comboListFetch["all"]();
    if (list != null) sessionStorage.setItem(KEY.LIST, JSON.stringify(list));
    setTableBody();
  }
}

const setButton = () => {
  const button = document.createElement(TAG.BUTTON);
  button.id = ELEMENT_ID.SEARCH_BUTTON;
  button.textContent = BUTTON.COMMON.SEARCH;
  const type = sessionStorage.getItem(KEY.CURRENT_TYPE);
  button.addEventListener(EVENT.CLICK, () => {
    const value = document.getElementById(ELEMENT_ID.SEARCH_INPUT).value;
    initTableByInput(value, type);
    const select = document.getElementById(COMBOBOX[type].id);
    if (select != null) select.selectedIndex = ZERO;
  })
  return button;
}

const initTableBySelect = async (id, type) => { // 추가
  const select = document.getElementById(id);
  const selectedOption = select.options[select.selectedIndex];
  const list = await context[type].comboListFetch[selectedOption.value]();
  if (list != null) sessionStorage.setItem(KEY.LIST, JSON.stringify(list));
  const input = document.getElementById(ELEMENT_ID.SEARCH_INPUT);
  if (input != null) input.value = STRING_EMPTY;
  const tableBody = document.getElementById(KEY.LIST);
  while(tableBody.firstChild) tableBody.removeChild(tableBody.firstChild);
  setTableBody();
}

const setSearchBar = () => {
  const container = document.querySelector(CLASS_SELECTOR.SEARCH_CONTAINER);
  const type = sessionStorage.getItem(KEY.CURRENT_TYPE);
  if (COMBOBOX[type].isCombo) { // 수정
    const select = setComboBox();
    container.appendChild(select); // 수정
    select.onchange = () => initTableBySelect(select.id, type); // 추가
  }
  container.appendChild(setInput());
  container.appendChild(setButton());
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
  // 각 행에 클릭 이벤트 추가
  row.addEventListener(EVENT.CLICK, () => {
    if (window.selectedRow) {
      window.selectedRow.classList.remove(CLASS.SELECTED);
    }
    row.classList.add(CLASS.SELECTED);
    window.selectedRow = row;
  });

  // 더블 클릭 시 상세 페이지로 이동
  row.addEventListener(EVENT.DOUBLE_CLICK, () => {
    // 상세 정보를 세션에 저장
    sessionStorage.setItem(KEY.SELECTED_DATA_ID, item.id);
    window.location.href = LOCATION.DETAIL;
  });

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
