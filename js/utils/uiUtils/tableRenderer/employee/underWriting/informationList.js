import {
  fetchGetAllRequestingInsurance,
  fetchApplyCoperation,
  fetchApplyReinsurance,
  fetchGetAllNotRequestingInsurance,
  fetchGetContract, fetchGetAllContract
} from '../../../../apiUtils/apiDocumentation/employee/underWriting/underWriting.js';
import { COMBOBOX, TABLE_TITLE, COLUMN_NAME} from '../../../../../../config/employee/underWriting/underWriting.js';
import { BUTTON} from '../../../../../../config/common.js';

export const informationType = {
  REVIEW_ACQUISITION: "REVIEW_ACQUISITION",
  APPLY_COPERATION: "APPLY_COPERATION",
  APPLY_REINSURANCE: "APPLY_REINSURANCE"
}

const reviewAcquisitionRow = (dto) => {
  return `
    <td>${dto.id}</td>
    <td>${dto.name}</td>
    <td>${dto.phoneNumber}</td>
    <td>${dto.job}</td>
    <td>${dto.age}</td>
    <td>${dto.gender}</td>
    <td>${dto.residentRegistrationNumber}</td>
    <td>${dto.address}</td>
    <td>${dto.productId}</td>
    <td>${dto.contractStatus}</td>
  `;
}

const applyCoperationRow = (dto) => {
  return; ``;
}

const applyReinsuranceRow = (dto) => {
  return ``;
}

const context = {
  REVIEW_ACQUISITION: {
    listFetch: fetchGetAllContract,
    listFetchById: fetchGetContract,
    rowGetter: reviewAcquisitionRow,
    needEmployeeId: false,
    comboListFetch: {
      all: fetchGetAllContract,
      requesting: fetchGetAllRequestingInsurance,
      notRequesting: fetchGetAllNotRequestingInsurance,
    }
  },
  APPLY_COPERATION: {
    listFetch: fetchApplyCoperation,
    rowGetter: applyCoperationRow,
    listFetchById: null,
    needEmployeeId: false,
    comboListFetch: {}
  },
  APPLY_REINSURANCE: {
    listFetch: fetchApplyReinsurance,
    rowGetter: applyReinsuranceRow,
    listFetchById: null,
    needEmployeeId: false,
    comboListFetch: {}
  }
}

export const viewInformationListAll = async (fetchType) => {
  sessionStorage.setItem("currentType", fetchType);
  let list = await context[fetchType].listFetch();
  sessionStorage.setItem("list", JSON.stringify(list));
  window.location.href = "informationList.html";
};

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
  const title = TABLE_TITLE[sessionStorage.getItem("currentType")];
  const contextTitle = document.getElementById("title");
  contextTitle.innerText = title;
}

const setSearchBar = () => {
  const container = document.querySelector(".search-container");
  const type = sessionStorage.getItem("currentType");
  const select = COMBOBOX[type].isCombo ? setComboBox() : null;
  if (select != null) { // 추가
    container.appendChild(select);
    select.onchange = () => initTableBySelect(select.id, type);
  }
  container.appendChild(setInput());
  container.appendChild(setButton());
}

const setComboBox = () => {
  const select = document.createElement("select");
  const type = sessionStorage.getItem("currentType");
  const boxContext = COMBOBOX[type];
  if (!boxContext.isCombo) return null;
  select.id = boxContext.id;
  select.className = "comboBox";
  const optionTypes = boxContext.optionTypes;
  optionTypes.forEach(optionType => {
    const option = document.createElement("option");
    option.value = optionType.value;
    option.textContent = optionType.label;
    select.appendChild(option);
  });
  return select;
}

const initTableBySelect = async (id, type) => { // 추가
  const select = document.getElementById(id);
  const selectedOption = select.options[select.selectedIndex];
  const list = context[type].needEmployeeId ?
    await context[type].comboListFetch[selectedOption.value](sessionStorage.getItem("id")) :
    await context[type].comboListFetch[selectedOption.value]();
  if (list != null) sessionStorage.setItem("list", JSON.stringify(list));
  const input = document.getElementById("searchInput");
  if (input != null) input.value = "";
  const tableBody = document.getElementById('list');
  while(tableBody.firstChild) tableBody.removeChild(tableBody.firstChild);
  setTableBody();
}

const setTableBody = () => {
  const type = sessionStorage.getItem("currentType");
  const data = JSON.parse(sessionStorage.getItem("list"));
  data.forEach(item => setOneRow(item, type));
}

const setInput = () => {
  const input = document.createElement("input");
  input.type = "text";
  input.id = "searchInput";
  input.placeholder = "검색어 입력";
  return input;
}

///
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
///

const initTableByInput = async (id, type) => {
  const tableBody = document.getElementById('list');
  while(tableBody.firstChild) tableBody.removeChild(tableBody.firstChild);
  if (id.length > 0) {
    const item = context[type].needEmployeeId ?
      await context[type].listFetchById(id, sessionStorage.getItem("id")) :
      await context[type].listFetchById(id)
    setOneRow(item, type);
  } else {
    const list = context[type].needEmployeeId ?
      await context[type].comboListFetch["all"](sessionStorage.getItem("id")) :
      await context[type].comboListFetch["all"]();
    if (list != null) sessionStorage.setItem("list", JSON.stringify(list));
    setTableBody();
  }
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
    // window.location.href = "detail.html";
  });

  tableBody.appendChild(row);
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
