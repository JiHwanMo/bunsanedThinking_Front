import { fetchGetAll } from '../../../../apiUtils/apiDocumentation/employee/compensationPlanning/compensationPlanning.js';
import { fetchGetPartnerCompanyRowById } from '../../../../apiUtils/apiDocumentation/employee/compensationPlanning/compensationPlanning.js';
import {
  BUTTON, CLASS,
  CLASS_SELECTOR,
  ELEMENT_ID,
  EVENT,
  INPUT_TYPE,
  KEY,
  LOCATION,
  MESSAGES,
  TAG, ZERO
} from '../../../../../../config/common.js';
import { TABLE_TITLE } from '../../../../../../config/employee/compensationPlanning/compensationPlanning.js';
import { COLUMN_NAME } from '../../../../../../config/employee/compensationPlanning/compensationPlanning.js';
import {setPost} from "../../../buttonManager/employee/compensationPlanning/informationList.js";

const partnerCompanyRow = (dto) => {
  return `
    <td>${dto.id}</td>
    <td>${dto.name}</td>
    <td>${dto.partnerCompanyType}</td>
    <td>${dto.phoneNumber}</td>
  `;
}

const context = {
  EVALUATE_PARTNERCOMPANY: {
    isSubmit: false,
    listFetch: fetchGetAll,
    listFetchById: fetchGetPartnerCompanyRowById,
    rowGetter: partnerCompanyRow
  },
  MANAGEMENT_PARTNERCOMPANY: {
    isSubmit: true,
    listFetch: fetchGetAll,
    listFetchById: fetchGetPartnerCompanyRowById,
    rowGetter: partnerCompanyRow
  }
}

export const viewInformationList = async (fetchType) => {
  sessionStorage.setItem(KEY.CURRENT_TYPE, fetchType);
  const list = await context[fetchType].listFetch();
  if (list == null) return;
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

const setInput = () => {
  const input = document.createElement(TAG.INPUT);
  input.type = INPUT_TYPE.TEXT;
  input.id = ELEMENT_ID.SEARCH_INPUT;
  input.placeholder = MESSAGES.PLACE_HOLDER.SEARCH;
  return input;
}

const initTableByInput = async (id, type) => {
  const tableBody = document.getElementById(KEY.LIST);
  while(tableBody.firstChild) tableBody.removeChild(tableBody.firstChild);
  if (id.length > ZERO) {
    const item = await context[type].listFetchById(id);
    if (item == null) return;
    setOneRow(item, type);
  } else {
    const list = await context[type].listFetch();
    if (list == null) return;
    sessionStorage.setItem(KEY.LIST, JSON.stringify(list));
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
  })
  return button;
}

const setSearchBar = () => {
  const container = document.querySelector(CLASS_SELECTOR.SEARCH_CONTAINER);
  const type = sessionStorage.getItem(KEY.CURRENT_TYPE);

  const select = context[type].isSubmit ? setPost() : null;
  if (select != null) container.appendChild(select);
  container.appendChild(setInput());
  container.appendChild(setButton());
}

const setColumn = () => {
  const columnList = COLUMN_NAME[sessionStorage.getItem(KEY.CURRENT_TYPE)];
  const head = document.getElementById(ELEMENT_ID.TABLE_HEAD);
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

  row.addEventListener(EVENT.DOUBLE_CLICK, () => {
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
