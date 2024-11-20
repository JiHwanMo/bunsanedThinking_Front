import { fetchGetAllOfficeSupplies } from '../../../../../../js/utils/apiUtils/apiDocumentation/employee/administrative/administrative.js';
import { BUTTON } from '../../../../../../config/common.js';
import { COMBOBOX } from '../../../../../../config/employee/administrative/administrative.js';
import { TABLE_TITLE } from '../../../../../../config/employee/administrative/administrative.js';
import { COLUMN_NAME } from '../../../../../../config/employee/administrative/administrative.js';

const officeSupplyRow = (dto) => {
  return `
    <td>${dto.id}</td>
    <td>${dto.name}</td>
    <td>${dto.inventory}</td>
    <td>${dto.totalInventory}</td>
  `;
}

const context = {
  OFFICESUPPLY_LIST: {
    title: "집기 비품 재고 정보 리스트",
    listFetch: fetchGetAllOfficeSupplies,
    rowGetter: officeSupplyRow,
    comboListFetch: {}
  }
}

export const viewOfficeSupplyListAll = async () => {
  try {
    const list = await fetchGetAllOfficeSupplies();
    if (!list || !list.length) {
      console.warn("No office supplies data fetched.");
      return;
    }
    sessionStorage.setItem("list", JSON.stringify(list));
    console.log("Data saved in sessionStorage:", sessionStorage.getItem("list"));
    window.location.href = "informationList.html"; // 경로 확인 필요
  } catch (error) {
    console.error("Error fetching office supplies:", error);
  }
};

export const renderTable = () => {
  initialTable();
}

const setTitle = () => {
  const title = TABLE_TITLE["OFFICESUPPLY_LIST"];
  const contextTitle = document.getElementById("title");
  contextTitle.innerText = title;
};

const setInput = () => {
  const input = document.createElement("input");
  input.type = "text";
  input.id = "searchInput";
  input.placeholder = "검색어 입력";
  return input;
};


const setComboBox = () => {
  const boxContext = COMBOBOX["OFFICESUPPLY_LIST"];
  if (!boxContext.isCombo) return null;

  const select = document.createElement("select");
  select.id = boxContext.id;
  select.className = "combo-box";

  boxContext.optionTypes.forEach(optionType => {
    const option = document.createElement("option");
    option.value = optionType.value;
    option.textContent = optionType.label;
    select.appendChild(option);
  });

  select.onchange = async () => {
    const selectedOption = select.options[select.selectedIndex].value;
    const list = await context["OFFICESUPPLY_LIST"].listFetch(selectedOption);
    sessionStorage.setItem("list", JSON.stringify(list));
    setTableBody();
  };

  return select;
};

const setPostButton = () => {
  const button = document.createElement("button");
  button.id = "postButton";
  button.textContent = BUTTON.COMMON.POST;
  button.addEventListener("click", () => {
    alert("등록 버튼 클릭!");
  });
  return button;
};

const setSearchBar = () => {
  const container = document.querySelector(".search-container");
  const comboBox = setComboBox();
  if (comboBox) {
    container.appendChild(comboBox);
  } else {
    container.appendChild(setPostButton());
  }

  const input = setInput("searchInput", "검색어 입력");
  container.appendChild(input);

  const button = document.createElement("button");
  button.id = "searchButton";
  button.textContent = BUTTON.COMMON.SEARCH;
  container.appendChild(button);
};

const setColumn = () => {
  const columnList = COLUMN_NAME["OFFICESUPPLY_LIST"];
  const head = document.getElementById("tableHead");
  const columns = document.createElement("tr");

  columnList.forEach(item => {
    const column = document.createElement("th");
    column.innerHTML = item;
    columns.appendChild(column);
  });

  head.appendChild(columns);
};

const setTableBody = () => {
  const tableBody = document.getElementById("list");
  tableBody.innerHTML= "";

  const data = JSON.parse(sessionStorage.getItem("list")) || [];
  data.forEach(item => {
    const row = document.createElement("tr");
    row.innerHTML = context["OFFICESUPPLY_LIST"].rowGetter(item);

    row.addEventListener("click", () => {
      if (window.selectedRow) {
        window.selectedRow.classList.remove("selected");
      }
      row.classList.add("selected");
      window.selectedRow = row;
    });

    row.addEventListener("dblclick", () => {
      sessionStorage.setItem("selectedSupply", JSON.stringify(item)); // 선택된 데이터 저장
      window.location.href = "detail.html"; // 상세 페이지로 이동
    });

    tableBody.appendChild(row);
  });
};

const initialTable = () => {
  setTitle();
  setSearchBar();
  setColumn();
  setTableBody();
}


