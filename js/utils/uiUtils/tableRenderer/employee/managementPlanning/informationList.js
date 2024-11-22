import { fetchGetAllDepartment } from '../../../../../../js/utils/apiUtils/apiDocumentation/employee/humanResource/humanResource.js';
import { fetchGetDepartment } from "../../../../../../js/utils/apiUtils/apiDocumentation/employee/humanResource/humanResource.js";
import { BUTTON } from '../../../../../../config/common.js';
import { COMBOBOX } from '../../../../../../config/employee/managementPlanning/managementPlanning.js';
import { TABLE_TITLE } from '../../../../../../config/employee/managementPlanning/managementPlanning.js';
import { COLUMN_NAME } from '../../../../../../config/employee/managementPlanning/managementPlanning.js';
import {
  fetchGetAllOfficeSupplies
} from "../../../../apiUtils/apiDocumentation/employee/administrative/administrative.js";


const departmentRow = (dto) => {
  return `
    <td>${dto.id}</td>
    <td>${dto.name}</td>
    <td>${dto.employeeList.length}</td>
    <td>${dto.headName}</td>
  `;
}

const context = {
  DEPARTMENT_LIST: {
    // title: "부서 정보 리스트",
    needDetail: true,
    listFetch: fetchGetAllDepartment,
    listFetchById: fetchGetDepartment,
    rowGetter: departmentRow,
    comboListFetch: {}
  }
}


// export const viewDepartmentListAll = async () => {
//   try {
//     const list = await fetchGetAllDepartment();
//     if (!list || !list.length) {
//       console.warn("No management planning data fetched.");
//       return;
//     }
//     sessionStorage.setItem("list", JSON.stringify(list));
//     console.log("Data saved in sessionStorage:", sessionStorage.getItem("list"));
//     window.location.href = "informationList.html"; // 경로 확인 필요
//   } catch (error) {
//     console.error("Error fetching management planning:", error);
//   }
// };

export const viewDepartmentListAll = async () => {
  const list = await fetchGetAllDepartment();
  if (!list || !list.length) return;

  sessionStorage.setItem("list", JSON.stringify(list));
  sessionStorage.setItem("currentType", "DEPARTMENT_DETAIL"); // currentType 설정

  window.location.href = "informationList.html"; // 페이지 이동
};

export const renderTable = () => {
  initialTable();
}

const setTitle = () => {
  const title = TABLE_TITLE["DEPARTMENT_LIST"];
  const contextTitle = document.getElementById("title");
  contextTitle.innerText = title;
}

const setInput = () => {
  const input = document.createElement("input");
  input.type = "text";
  input.id = "searchInput";
  input.placeholder = "검색어 입력";
  return input;
};

const initTableByInput = async (id, type) => {
  const tableBody = document.getElementById("list");
  while (tableBody.firstChild) tableBody.removeChild(tableBody.firstChild);
  if (id.length > 0) {
    const item = await context[type].listFetchById(id); // 개별 데이터 가져오기
    setOneRow(item, type);
  } else {
    const list = await context[type].listFetch(); // 전체 데이터 가져오기
    if (list != null) sessionStorage.setItem("list", JSON.stringify(list));
    setTableBody();
  }
};

const setButton = () => {
  const button = document.createElement("button");
  button.id = "searchButton";
  button.textContent = BUTTON.COMMON.SEARCH;
  button.addEventListener("click", () => {
    const value = document.getElementById("searchInput").value;
    initTableByInput(value, "DEPARTMENT_LIST");
  });
  return button;
};

const setComboBox = () => {
  const boxContext = COMBOBOX["DEPARTMENT_LIST"];
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
    const list = await context["DEPARTMENT_LIST"].listFetch(selectedOption);
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

  // 검색 버튼 추가
  const button = setButton();
  container.appendChild(button);
};

const setColumn = () => {
  const columnList = COLUMN_NAME["DEPARTMENT_LIST"];
  const head = document.getElementById("tableHead");
  const columns = document.createElement("tr");

  columnList.forEach(item => {
    const column = document.createElement("th");
    column.innerHTML = item;
    columns.appendChild(column);
  });

  head.appendChild(columns);
};

const setOneRow = (item, type) => {
  const tableBody = document.getElementById("list");
  const row = document.createElement("tr");
  row.innerHTML = context[type].rowGetter(item);

  row.addEventListener("click", () => {
    if (window.selectedRow) {
      window.selectedRow.classList.remove("selected");
    }
    row.classList.add("selected");
    window.selectedRow = row;
  });

  if (context[type].needDetail) {
    row.addEventListener("dblclick", () => {
      // 상세 정보를 세션에 저장
      sessionStorage.setItem("selectedDataId", item.id);
      window.location.href = "detail.html";
    });
  }

  tableBody.appendChild(row);
};

const setTableBody = () => {
  const tableBody = document.getElementById("list");
  tableBody.innerHTML= "";

  const data = JSON.parse(sessionStorage.getItem("list")) || [];
  data.forEach(item => {
    const row = document.createElement("tr");
    row.innerHTML = context["DEPARTMENT_LIST"].rowGetter(item);

    row.addEventListener("click", () => {
      if (window.selectedRow) {
        window.selectedRow.classList.remove("selected");
      }
      row.classList.add("selected");
      window.selectedRow = row;
    });

    row.addEventListener("dblclick", () => {
      sessionStorage.setItem("selectedDataId", item.id); // 선택된 데이터 저장
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


