import { fetchGetAllDefaultContract } from '../../../../apiUtils/apiDocumentation/employee/contractManagement/contractManagement.js';
import { fetchGetContractRowById } from '../../../../apiUtils/apiDocumentation/employee/contractManagement/contractManagement.js';
import { fetchGetAllReContract } from '../../../../apiUtils/apiDocumentation/employee/contractManagement/contractManagement.js';
import { fetchGetReContractRowById } from '../../../../apiUtils/apiDocumentation/employee/contractManagement/contractManagement.js';
import { fetchGetAllUnprocessedReContract } from '../../../../apiUtils/apiDocumentation/employee/contractManagement/contractManagement.js';
import { fetchGetAllProcessedReContract } from '../../../../apiUtils/apiDocumentation/employee/contractManagement/contractManagement.js';
import { fetchGetAllEndorsementContract } from '../../../../apiUtils/apiDocumentation/employee/contractManagement/contractManagement.js';
import { fetchGetEndorsementRowById } from '../../../../apiUtils/apiDocumentation/employee/contractManagement/contractManagement.js';
import { fetchGetAllUnprocessedEndorsementContract } from '../../../../apiUtils/apiDocumentation/employee/contractManagement/contractManagement.js';
import { fetchGetAllProcessedEndorsementContract } from '../../../../apiUtils/apiDocumentation/employee/contractManagement/contractManagement.js';
import { fetchGetAllRevivalContract } from '../../../../apiUtils/apiDocumentation/employee/contractManagement/contractManagement.js';
import { fetchGetRevivalRowById } from '../../../../apiUtils/apiDocumentation/employee/contractManagement/contractManagement.js';
import { fetchGetAllUnprocessedRevival } from '../../../../apiUtils/apiDocumentation/employee/contractManagement/contractManagement.js';
import { fetchGetAllProcessedRevival } from '../../../../apiUtils/apiDocumentation/employee/contractManagement/contractManagement.js';
import { fetchGetAllTerminatingContract } from '../../../../apiUtils/apiDocumentation/employee/contractManagement/contractManagement.js';
import { fetchGetTerminationRowById } from '../../../../apiUtils/apiDocumentation/employee/contractManagement/contractManagement.js';
import { fetchGetAllUnprocessedTerminatingContract } from '../../../../apiUtils/apiDocumentation/employee/contractManagement/contractManagement.js';
import { fetchGetAllProcessedTerminatingContract } from '../../../../apiUtils/apiDocumentation/employee/contractManagement/contractManagement.js';
import { BUTTON } from '../../../../../../config/common.js';
import { COMBOBOX } from '../../../../../../config/employee/contractManagement/contractManagement.js';
import { TABLE_TITLE } from '../../../../../../config/employee/contractManagement/contractManagement.js';
import { COLUMN_NAME } from '../../../../../../config/employee/contractManagement/contractManagement.js';

export const informationType = {
  DEFAULT_CONTRACT: "DEFAULT_CONTRACT",
  RECONTRACT: "RECONTRACT",
  ENDORSEMENT: "ENDORSEMENT",
  REVIVAL: "REVIVAL",
  TERMINATION: "TERMINATION"
}
// 행 만드는 로직은 서버를 수정해야해서 일단 보류
const contractRow = (dto) => {
  return `
    <td>${dto.id}</td>
    <td>${dto.customerInfoResponse.name}</td>
    <td>${dto.customerInfoResponse.phoneNumber}</td>
    <td>${dto.customerInfoResponse.gender}</td>
    <td>${dto.customerInfoResponse.residentRegistrationNumber}</td>
    <td>${dto.customerInfoResponse.address}</td>
    <td>${dto.productId}</td>
    <td>${dto.lastPaidDate}</td>
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
    listFetchById: fetchGetContractRowById,
    rowGetter: contractRow,
    comboListFetch: {
      all: fetchGetAllDefaultContract
    }
    // 얜 없어서 비워둠
  },
  RECONTRACT: {
    listFetch: fetchGetAllReContract,
    listFetchById: fetchGetReContractRowById,
    rowGetter: recontractRow,
    comboListFetch: {
      all: fetchGetAllReContract,
      completed: fetchGetAllProcessedReContract,
      unprocessed: fetchGetAllUnprocessedReContract
    }
  },
  ENDORSEMENT: {
    listFetch: fetchGetAllEndorsementContract,
    listFetchById: fetchGetEndorsementRowById,
    rowGetter: endorsementRow,
    comboListFetch: {
      all: fetchGetAllEndorsementContract,
      completed: fetchGetAllProcessedEndorsementContract,
      unprocessed: fetchGetAllUnprocessedEndorsementContract
    }
  },
  REVIVAL: {
    listFetch: fetchGetAllRevivalContract,
    listFetchById: fetchGetRevivalRowById,
    rowGetter: revivalRow,
    comboListFetch: {
      all: fetchGetAllRevivalContract,
      completed: fetchGetAllProcessedRevival,
      unprocessed: fetchGetAllUnprocessedRevival
    }
  },
  TERMINATION: {
    listFetch: fetchGetAllTerminatingContract,
    listFetchById: fetchGetTerminationRowById,
    rowGetter: terminationRow,
    comboListFetch: {
      all: fetchGetAllTerminatingContract,
      completed: fetchGetAllProcessedTerminatingContract,
      unprocessed: fetchGetAllUnprocessedTerminatingContract
    }
  }
}

export const viewInformationList = async (fetchType) => {
  sessionStorage.setItem("currentType", fetchType);
  const list = await context[fetchType].listFetch();
  sessionStorage.setItem("list", JSON.stringify(list));
  window.location.href = "informationList.html";
}

export const renderTable = () => {
  initialTable();
}

const setTitle = () => {
  const title = TABLE_TITLE[sessionStorage.getItem("currentType")];
  const contextTitle = document.getElementById("title");
  contextTitle.innerText = title;
}

const setComboBox = () => {
  const select = document.createElement("select");
  const boxContext = COMBOBOX[sessionStorage.getItem("currentType")];
  select.id = boxContext.id;
  select.className = "combo-Box";
  const optionTypes = boxContext.optionTypes;
  optionTypes.forEach(optionType => {
    const option = document.createElement("option");
    option.value = optionType.value;
    option.textContent = optionType.label;
    select.appendChild(option);
  });
  return select;
}

const setInput = () => {
  const input = document.createElement("input");
  input.type = "text";
  input.id = "searchInput";
  input.placeholder = "검색어 입력";
  return input;
}

const initTableByInput = async (id, type) => { // 추가
  const tableBody = document.getElementById('list');
  while(tableBody.firstChild) tableBody.removeChild(tableBody.firstChild);
  if (id.length > 0) {
    const item = await context[type].listFetchById(id);
    setOneRow(item, type);
  } else {
    const list = await context[type].comboListFetch["all"]();
    if (list != null) sessionStorage.setItem("list", JSON.stringify(list));
    setTableBody();
  }
}

const setButton = () => {
  const button = document.createElement("button");
  button.id = "searchButton";
  button.textContent = BUTTON.COMMON.SEARCH;
  const type = sessionStorage.getItem("currentType");
  button.addEventListener("click", () => {
    const value = document.getElementById("searchInput").value;
    initTableByInput(value, type);
    const select = document.getElementById(COMBOBOX[type].id);
    if (select != null) select.selectedIndex = 0;
  })
  return button;
}

const initTableBySelect = async (id, type) => { // 추가
  const select = document.getElementById(id);
  const selectedOption = select.options[select.selectedIndex];
  const list = await context[type].comboListFetch[selectedOption.value]();
  if (list != null) sessionStorage.setItem("list", JSON.stringify(list));
  const input = document.getElementById("searchInput");
  if (input != null) input.value = "";
  const tableBody = document.getElementById('list');
  while(tableBody.firstChild) tableBody.removeChild(tableBody.firstChild);
  setTableBody();
}

const setSearchBar = () => {
  const container = document.querySelector(".search-container");
  const type = sessionStorage.getItem("currentType");
  if (COMBOBOX[type].isCombo) { // 수정
    const select = setComboBox();
    container.appendChild(select); // 수정
    select.onchange = () => initTableBySelect(select.id, type); // 추가
  }
  container.appendChild(setInput());
  container.appendChild(setButton());
}

const setColumn = () => {
  const columnList = COLUMN_NAME[sessionStorage.getItem("currentType")];
  const head = document.getElementById('tableHead');
  const columns = document.createElement('tr');
  columnList.forEach(item => {
    const oneColoumn = document.createElement('th');
    oneColoumn.innerHTML = item;
    columns.appendChild(oneColoumn);
  })
  head.appendChild(columns);
}

const setOneRow = (item, type) => {
  const tableBody = document.getElementById('list');
  const row = document.createElement("tr");
  row.innerHTML = context[type].rowGetter(item);
  // 각 행에 클릭 이벤트 추가
  row.addEventListener("click", () => {
    if (window.selectedRow) {
      window.selectedRow.classList.remove("selected");
    }
    row.classList.add("selected");
    window.selectedRow = row;
  });

  // 더블 클릭 시 상세 페이지로 이동
  row.addEventListener("dblclick", () => {
    // 상세 정보를 세션에 저장
    sessionStorage.setItem("selectedDataId", item.id);
    window.location.href = "detail.html";
  });

  tableBody.appendChild(row);
}

const setTableBody = () => {
  const type = sessionStorage.getItem("currentType");
  const data = JSON.parse(sessionStorage.getItem("list"));
  data.forEach(item => setOneRow(item, type));
}

const initialTable = () => {
  setTitle();
  setSearchBar();
  setColumn();
  setTableBody();
}
