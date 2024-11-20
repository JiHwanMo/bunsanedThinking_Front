import { fetchGetAllDepartment } from '../../../../../../js/utils/apiUtils/apiDocumentation/employee/humanResource/humanResource.js';
import { BUTTON } from '../../../../../../config/common.js';
import { COMBOBOX } from '../../../../../../config/employee/managementPlanning/managementPlanning.js';
import { TABLE_TITLE } from '../../../../../../config/employee/managementPlanning/managementPlanning.js';
import { COLUMN_NAME } from '../../../../../../config/employee/managementPlanning/managementPlanning.js';


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
    title: "부서 정보 리스트",
    listFetch: fetchGetAllDepartment,
    rowGetter: departmentRow,
    comboListFetch: {}
  }
}


export const viewDepartmentListAll = async () => {
  try {
    const list = await fetchGetAllDepartment();
    if (!list || !list.length) {
      console.warn("No management planning data fetched.");
      return;
    }
    sessionStorage.setItem("list", JSON.stringify(list));
    console.log("Data saved in sessionStorage:", sessionStorage.getItem("list"));
    window.location.href = "informationList.html"; // 경로 확인 필요
  } catch (error) {
    console.error("Error fetching management planning:", error);
  }
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

  container.appendChild(setInput());

  const button = document.createElement("button");
  button.id = "searchButton";
  button.textContent = BUTTON.COMMON.SEARCH;
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
      sessionStorage.setItem("selectedManagementPlanning", JSON.stringify(item)); // 선택된 데이터 저장
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


