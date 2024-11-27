import { fetchGetAllDefaultContract } from '../../../../apiUtils/apiDocumentation/employee/contractManagement/contractManagement.js';
import { fetchGetContractById } from '../../../../apiUtils/apiDocumentation/employee/contractManagement/contractManagement.js';
import { fetchGetAllReContract } from '../../../../apiUtils/apiDocumentation/employee/contractManagement/contractManagement.js';
import { fetchGetReContractById } from '../../../../apiUtils/apiDocumentation/employee/contractManagement/contractManagement.js';
import { fetchGetAllUnprocessedReContract } from '../../../../apiUtils/apiDocumentation/employee/contractManagement/contractManagement.js';
import { fetchGetAllProcessedReContract } from '../../../../apiUtils/apiDocumentation/employee/contractManagement/contractManagement.js';
import { fetchGetAllEndorsementContract } from '../../../../apiUtils/apiDocumentation/employee/contractManagement/contractManagement.js';
import { fetchGetEndorsementById } from '../../../../apiUtils/apiDocumentation/employee/contractManagement/contractManagement.js';
import { fetchGetAllUnprocessedEndorsementContract } from '../../../../apiUtils/apiDocumentation/employee/contractManagement/contractManagement.js';
import { fetchGetAllProcessedEndorsementContract } from '../../../../apiUtils/apiDocumentation/employee/contractManagement/contractManagement.js';
import { fetchGetAllRevivalContract } from '../../../../apiUtils/apiDocumentation/employee/contractManagement/contractManagement.js';
import { fetchGetRevivalById } from '../../../../apiUtils/apiDocumentation/employee/contractManagement/contractManagement.js';
import { fetchGetAllUnprocessedRevival } from '../../../../apiUtils/apiDocumentation/employee/contractManagement/contractManagement.js';
import { fetchGetAllProcessedRevival } from '../../../../apiUtils/apiDocumentation/employee/contractManagement/contractManagement.js';
import { fetchGetAllTerminatingContract } from '../../../../apiUtils/apiDocumentation/employee/contractManagement/contractManagement.js';
import { fetchGetTerminationById } from '../../../../apiUtils/apiDocumentation/employee/contractManagement/contractManagement.js';
import { fetchGetAllUnprocessedTerminatingContract } from '../../../../apiUtils/apiDocumentation/employee/contractManagement/contractManagement.js';
import { fetchGetAllProcessedTerminatingContract } from '../../../../apiUtils/apiDocumentation/employee/contractManagement/contractManagement.js';
import {
  BUTTON, CLASS, CLASS_SELECTOR,
  ELEMENT_ID,
  EVENT,
  INPUT_TYPE,
  KEY, LOCATION,
  MESSAGES,
  STRING_EMPTY,
  TAG, ZERO
} from '../../../../../../config/common.js';
import {
  COMBOBOX,
  COMBOLIST_FETCH_ALL
} from '../../../../../../config/employee/contractManagement/contractManagement.js';
import { TABLE_TITLE } from '../../../../../../config/employee/contractManagement/contractManagement.js';
import { COLUMN_NAME } from '../../../../../../config/employee/contractManagement/contractManagement.js';

const contractRow = (dto) => {
  return `
    <td>${dto.id}</td>
    <td>${dto.customerInfoResponse.name}</td>
    <td>${dto.customerInfoResponse.phoneNumber}</td>
    <td>${dto.customerInfoResponse.gender}</td>
    <td>${dto.customerInfoResponse.residentRegistrationNumber}</td>
    <td>${dto.customerInfoResponse.address}</td>
    <td>${dto.productId}</td>
    <td>${dto.lastPaidDate == null ? STRING_EMPTY : dto.lastPaidDate}</td>
  `;
}

const recontractRow = (dto) => {
  return `
    <td>${dto.id}</td>
    <td>${dto.customerInfoResponse.name}</td>
    <td>${dto.customerInfoResponse.phoneNumber}</td>
    <td>${dto.customerInfoResponse.gender}</td>
    <td>${dto.customerInfoResponse.residentRegistrationNumber}</td>
    <td>${dto.customerInfoResponse.address}</td>
    <td>${dto.productId}</td>
    <td>${dto.expirationDate}</td>
    <td>${dto.reContractStatus}</td>
  `;
}

const endorsementRow = (dto) => {
  return `
    <td>${dto.id}</td>
    <td>${dto.customerInfoResponse.name}</td>
    <td>${dto.customerInfoResponse.phoneNumber}</td>
    <td>${dto.customerInfoResponse.gender}</td>
    <td>${dto.customerInfoResponse.residentRegistrationNumber}</td>
    <td>${dto.customerInfoResponse.address}</td>
    <td>${dto.productId}</td>
    <td>${dto.applyDate}</td>
    <td>${dto.endorsementStatus}</td>
  `;
}
const revivalRow = (dto) => {
  return `
    <td>${dto.id}</td>
    <td>${dto.customerInfoResponse.name}</td>
    <td>${dto.customerInfoResponse.phoneNumber}</td>
    <td>${dto.customerInfoResponse.gender}</td>
    <td>${dto.customerInfoResponse.residentRegistrationNumber}</td>
    <td>${dto.customerInfoResponse.address}</td>
    <td>${dto.productId}</td>
    <td>${dto.terminationDate}</td>
    <td>${dto.revivalStatus}</td>
  `;
}

const terminationRow = (dto) => {
  return `
    <td>${dto.id}</td>
    <td>${dto.customerInfoResponse.name}</td>
    <td>${dto.customerInfoResponse.phoneNumber}</td>
    <td>${dto.customerInfoResponse.gender}</td>
    <td>${dto.customerInfoResponse.residentRegistrationNumber}</td>
    <td>${dto.customerInfoResponse.address}</td>
    <td>${dto.productId}</td>
    <td>${dto.applyDate}</td>
    <td>${dto.terminationStatus}</td>
  `;
}

const context = {
  DEFAULT_CONTRACT: {
    listFetch: fetchGetAllDefaultContract,
    listFetchById: fetchGetContractById,
    rowGetter: contractRow,
    comboListFetch: {
      all: fetchGetAllDefaultContract
    }
    // 얜 없어서 비워둠
  },
  RECONTRACT: {
    listFetch: fetchGetAllReContract,
    listFetchById: fetchGetReContractById,
    rowGetter: recontractRow,
    comboListFetch: {
      all: fetchGetAllReContract,
      completed: fetchGetAllProcessedReContract,
      unprocessed: fetchGetAllUnprocessedReContract
    }
  },
  ENDORSEMENT: {
    listFetch: fetchGetAllEndorsementContract,
    listFetchById: fetchGetEndorsementById,
    rowGetter: endorsementRow,
    comboListFetch: {
      all: fetchGetAllEndorsementContract,
      completed: fetchGetAllProcessedEndorsementContract,
      unprocessed: fetchGetAllUnprocessedEndorsementContract
    }
  },
  REVIVAL: {
    listFetch: fetchGetAllRevivalContract,
    listFetchById: fetchGetRevivalById,
    rowGetter: revivalRow,
    comboListFetch: {
      all: fetchGetAllRevivalContract,
      completed: fetchGetAllProcessedRevival,
      unprocessed: fetchGetAllUnprocessedRevival
    }
  },
  TERMINATION: {
    listFetch: fetchGetAllTerminatingContract,
    listFetchById: fetchGetTerminationById,
    rowGetter: terminationRow,
    comboListFetch: {
      all: fetchGetAllTerminatingContract,
      completed: fetchGetAllProcessedTerminatingContract,
      unprocessed: fetchGetAllUnprocessedTerminatingContract
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
  if (id.length > ZERO) {
    const item = await context[type].listFetchById(id);
    setOneRow(item, type);
  } else {
    const list = await context[type].comboListFetch[COMBOLIST_FETCH_ALL]();
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

const initTableBySelect = async (id, type) => {
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
  if (COMBOBOX[type].isCombo) {
    const select = setComboBox();
    container.appendChild(select);
    select.onchange = () => initTableBySelect(select.id, type);
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
