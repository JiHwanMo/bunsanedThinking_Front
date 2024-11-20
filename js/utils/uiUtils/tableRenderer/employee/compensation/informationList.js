import { fetchGetAllReport } from '../../../../apiUtils/apiDocumentation/employee/compensation/compensation.js';
import { fetchGetReportRowById } from '../../../../apiUtils/apiDocumentation/employee/compensation/compensation.js';
import { fetchGetAllUnprocessedReport } from '../../../../apiUtils/apiDocumentation/employee/compensation/compensation.js';
import { fetchGetAllCompletedReport } from '../../../../apiUtils/apiDocumentation/employee/compensation/compensation.js';
import { fetchGetAllInsuranceMoney } from '../../../../apiUtils/apiDocumentation/employee/compensation/compensation.js';
import { fetchGetInsuranceMoneyRowById } from '../../../../apiUtils/apiDocumentation/employee/compensation/compensation.js';
import { fetchGetAllUnprocessedInsuranceMoney } from '../../../../apiUtils/apiDocumentation/employee/compensation/compensation.js';
import { fetchGetAllProcessedInsuranceMoney } from '../../../../apiUtils/apiDocumentation/employee/compensation/compensation.js';
import { BUTTON } from '../../../../../../config/common.js';
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
