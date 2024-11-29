import {
  fetchGetAllPaymentDetail,
  fetchGetAllDepositDetail,
  fetchGetPaymentDetail,
  fetchGetDepositDetail,
  fetchGetAllCompletedPaymentDetail,
  fetchGetAllUnprocessedPaymentDetail
} from "../../../../apiUtils/apiDocumentation/employee/financialAccountant/financialAccountant.js"
import {
  BUTTON,
  CLASS, CLASS_SELECTOR,
  ELEMENT_ID as COMMON_ELEMENT_ID,
  EVENT,
  INPUT_TYPE,
  KEY,
  LOCATION,
  MESSAGES,
  TAG
} from "../../../../../../config/common.js";
import {
  COLUMN_NAME,
  COMBO_BOX,
  COMBOBOX,
  INFORMATION_TYPE,
  TITLE,
  ELEMENT_ID
} from "../../../../../../config/employee/financialAccountant/financialAccountant.js";

export const informationType = {
  HANDLE_PAYMENT_DETAIL: INFORMATION_TYPE.HANDLE_PAYMENT_DETAIL,
  VIEW_DEPOSIT_DETAIL: INFORMATION_TYPE.VIEW_DEPOSIT_DETAIL
}

const rowLabel = {
  HANDLE_PAYMENT_DETAIL: [
    ELEMENT_ID.ID,
    ELEMENT_ID.MONEY,
    ELEMENT_ID.BANK,
    ELEMENT_ID.ACCOUNT_HOLDER,
    ELEMENT_ID.BANK_ACCOUNT,
    ELEMENT_ID.PAYMENT_TYPE,
    ELEMENT_ID.PROCESS_STATUS
  ],
  VIEW_DEPOSIT_DETAIL: [
    ELEMENT_ID.ID,
    ELEMENT_ID.DEPOSITOR_NAME,
    ELEMENT_ID.DATE,
    ELEMENT_ID.MONEY,
    ELEMENT_ID.PATH
  ]
}

const rows = (dto, labels) => {
  const items = [];
  labels.forEach(label => {
    const td = document.createElement(TAG.TD);
    td.textContent = dto[label];
    items.push(td);
  });
  return items;
}

const getPaymentDetailId = (data) => {
  return data.id;
}

const context = {
  VIEW_DEPOSIT_DETAIL: {
    title : TITLE.VIEW_DEPOSIT_DETAIL,
    listFetch: fetchGetAllDepositDetail,
    listFetchById: fetchGetDepositDetail,
    comboListFetch: {},
    needDetail: false,
    columnList: [
      COLUMN_NAME.VIEW_DEPOSIT_DETAIL.DEPOSIT_DETAIL_ID,
      COLUMN_NAME.VIEW_DEPOSIT_DETAIL.DEPOSITOR_NAME,
      COLUMN_NAME.VIEW_DEPOSIT_DETAIL.DEPOSIT_DATE,
      COLUMN_NAME.VIEW_DEPOSIT_DETAIL.DEPOSIT_MONEY,
      COLUMN_NAME.VIEW_DEPOSIT_DETAIL.DEPOSIT_PATH
    ]
  },
  HANDLE_PAYMENT_DETAIL: {
    title : TITLE.HANDLE_PAYMENT_DETAIL,
    listFetch: fetchGetAllPaymentDetail,
    listFetchById: fetchGetPaymentDetail,
    comboListFetch: {
      all: fetchGetAllPaymentDetail,
      completed: fetchGetAllCompletedPaymentDetail,
      unprocessed: fetchGetAllUnprocessedPaymentDetail
    },
    needDetail: true,
    idGetter: getPaymentDetailId,
    columnList: [
      COLUMN_NAME.HANDLE_PAYMENT_DETAIL.PAYMENT_DETAIL_ID,
      COLUMN_NAME.HANDLE_PAYMENT_DETAIL.PAYMENT_DETAIL_MONEY,
      COLUMN_NAME.HANDLE_PAYMENT_DETAIL.BANK_NAME,
      COLUMN_NAME.HANDLE_PAYMENT_DETAIL.ACCOUNT_HOLDER,
      COLUMN_NAME.HANDLE_PAYMENT_DETAIL.BANK_ACCOUNT,
      COLUMN_NAME.HANDLE_PAYMENT_DETAIL.PAYMENT_TYPE,
      COLUMN_NAME.HANDLE_PAYMENT_DETAIL.PROCESS_STATUS
    ]
  }
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

const initialTable = () => {
  setTitle();
  setSearchBar();
  setColumn();
  setTableBody();
}

const setTitle = () => {
  const currentContext = context[sessionStorage.getItem(KEY.CURRENT_TYPE)];
  const contextTitle = document.getElementById(COMMON_ELEMENT_ID.TITLE);
  contextTitle.innerText = currentContext.title;
}

const setColumn = () => {
  const currentContext = context[sessionStorage.getItem(KEY.CURRENT_TYPE)];
  const head = document.getElementById(COMMON_ELEMENT_ID.TABLE);
  const columns = document.createElement(TAG.TR);
  currentContext.columnList.forEach(item => {
    const oneColumn = document.createElement(TAG.TH);
    oneColumn.innerHTML = item;
    columns.appendChild(oneColumn);
  })
  head.appendChild(columns);
}

const setComboBox = () => {
  const select = document.createElement(TAG.SELECT);
  const type = sessionStorage.getItem(KEY.CURRENT_TYPE);
  const boxContext = COMBOBOX[type];
  console.log(JSON.stringify(boxContext));
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
  return select;
}

const setInput = () => {
  const input = document.createElement(TAG.INPUT);
  input.type = INPUT_TYPE.TEXT;
  input.id = COMMON_ELEMENT_ID.SEARCH_INPUT;
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
    const list = await context[type].comboListFetch[COMBO_BOX.ALL]();
    if (list != null) sessionStorage.setItem(KEY.LIST, JSON.stringify(list));
    setTableBody();
  }
}

const setOneRow = (item, type) => {
  const tableBody = document.getElementById(KEY.LIST);
  const row = document.createElement(TAG.TR);
  rows(item, rowLabel[type]).forEach(rowItem => row.appendChild(rowItem));
  // 각 행에 클릭 이벤트 추가
  row.addEventListener(EVENT.CLICK, () => {
    if (window.selectedRow) {
      window.selectedRow.classList.remove(CLASS.SELECTED);
    }
    row.classList.add(CLASS.SELECTED);
    window.selectedRow = row;
  });

  // 더블 클릭 시 상세 페이지로 이동
  if (context[type].needDetail) {
    let id = context[type].idGetter(item);
    row.addEventListener(EVENT.DOUBLE_CLICK, () => {
      // 상세 정보를 세션에 저장
      sessionStorage.setItem(KEY.SELECTED_DATA_ID, JSON.stringify(id));
      window.location.href = LOCATION.DETAIL;
    });
  }

  tableBody.appendChild(row);
}

const setButton = () => {
  const button = document.createElement(TAG.BUTTON);
  button.id = COMMON_ELEMENT_ID.SEARCH_BUTTON;
  button.textContent = BUTTON.COMMON.SEARCH;
  const type = sessionStorage.getItem(KEY.CURRENT_TYPE);
  button.addEventListener(EVENT.CLICK, () => {
    const value = document.getElementById(COMMON_ELEMENT_ID.SEARCH_INPUT).value;
    initTableByInput(value, type);
  })
  return button;
}

const initTableBySelect = async (id, type) => { // 추가
  const select = document.getElementById(id);
  const selectedOption = select.options[select.selectedIndex];
  const list = await context[type].comboListFetch[selectedOption.value]();
  if (list != null)  sessionStorage.setItem(KEY.LIST, JSON.stringify(list));
  const tableBody = document.getElementById(KEY.LIST);
  while(tableBody.firstChild) tableBody.removeChild(tableBody.firstChild);
  setTableBody();
}

const setSearchBar = () => {
  const container = document.querySelector(CLASS_SELECTOR.SEARCH_CONTAINER);
  const type = sessionStorage.getItem(KEY.CURRENT_TYPE);
  const select = COMBOBOX[type].isCombo ? setComboBox() : null;
  if (select != null) { // 추가
    container.appendChild(select);
    select.onchange = () => initTableBySelect(select.id, type); // 추가
  }
  container.appendChild(setInput());
  container.appendChild(setButton());
}

const setTableBody = () => {
  const type = sessionStorage.getItem(KEY.CURRENT_TYPE);
  const data = JSON.parse(sessionStorage.getItem(KEY.LIST));
  data.forEach(item => {
    setOneRow(item, type);
  });
}
