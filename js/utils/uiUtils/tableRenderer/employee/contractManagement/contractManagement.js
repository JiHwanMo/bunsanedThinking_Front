import { fetchGetAllDefaultContract } from '../../../../apiUtils/apiDocumentation/employee/contractManagement/contractManagement.js';
import { fetchGetAllReContract } from '../../../../apiUtils/apiDocumentation/employee/contractManagement/contractManagement.js';
import { fetchGetAllEndorsementContract } from '../../../../apiUtils/apiDocumentation/employee/contractManagement/contractManagement.js';
import { fetchGetAllRevivalContract } from '../../../../apiUtils/apiDocumentation/employee/contractManagement/contractManagement.js';
import { fetchGetAllTerminatingContract } from '../../../../apiUtils/apiDocumentation/employee/contractManagement/contractManagement.js';
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
  alert(dto.contractStatus);
  return ``;
}

const recontractRow = (dto) => {
  alert(dto.recontractStatus);
  return ``;
}

const endorsementRow = (dto) => {
  alert(dto.endorsementStatus);
  return ``;
}
const revivalRow = (dto) => {
  alert(dto.revivalStatus);
  return ``;
}

const terminationRow = (dto) => {
  alert(dto.terminationFee);
  return ``;
}

const context = {
  DEFAULT_CONTRACT: {
    listFetch: fetchGetAllDefaultContract,
    rowGetter: contractRow
  },
  RECONTRACT: {
    listFetch: fetchGetAllReContract,
    rowGetter: recontractRow
  },
  ENDORSEMENT: {
    listFetch: fetchGetAllEndorsementContract,
    rowGetter: endorsementRow
  },
  REVIVAL: {
    listFetch: fetchGetAllRevivalContract,
    rowGetter: revivalRow
  },
  TERMINATION: {
    listFetch: fetchGetAllTerminatingContract,
    rowGetter: terminationRow
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
  if (Object.keys(boxContext).length == 0) return null;
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

const setButton = () => {
  const button = document.createElement("button");
  button.id = "searchButton";
  button.textContent = BUTTON.COMMON.SEARCH;
  return button;
}

const setSearchBar = () => {
  const container = document.querySelector(".search-container");
  const type = sessionStorage.getItem("currentType");

  const select = setComboBox();
  if (select != null) container.appendChild(select);
  container.appendChild(setInput());
  container.appendChild(setButton());
}

const setColoumn = () => {
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

const setTableBody = () => {
  const tableBody = document.getElementById('list');
  const type = sessionStorage.getItem("currentType");
  const data = JSON.parse(sessionStorage.getItem("list"));
  data.forEach(item => {
    const row = document.createElement("tr");
    row.innerHTML = context[type].rowGetter(item);
    // 각 행에 클릭 이벤트 추가
    // row.addEventListener("click", () => {
    //   if (selectedRow) {
    //     selectedRow.classList.remove("selected");
    //   }
    //   row.classList.add("selected");
    //   selectedRow = row;
    // });

    // 더블 클릭 시 상세 페이지로 이동
    // row.addEventListener("dblclick", () => {
    //   // 상세 정보를 세션에 저장
    //   sessionStorage.setItem("selectedInsurance", JSON.stringify(item));
    //   window.location.href = "detail.html";
    // });

    tableBody.appendChild(row);
  });
}

const initialTable = () => {
  setTitle();
  setSearchBar();
  setColoumn();
  setTableBody();
}
