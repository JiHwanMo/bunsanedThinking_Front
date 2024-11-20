import { fetchGetAllReportByDamageAssessmentCompanyID } from '../../../../../js/utils/apiUtils/apiDocumentation/partnerCompany/partnerCompany.js';
import { BUTTON } from '../../../../../config/common.js';
import { COMBOBOX } from '../../../../../config/partnerCompany/partnerCompany.js';
import { TABLE_TITLE } from '../../../../../config/partnerCompany/partnerCompany.js';
import { COLUMN_NAME } from '../../../../../config/partnerCompany/partnerCompany.js';

const reportRow = (dto) => {
  return `
    <td>${dto.accident.id}</td>
  `;
}

const context = {
  REPORT_LIST: {
    title: "사고 번호 리스트",
    listFetch: fetchGetAllReportByDamageAssessmentCompanyID,
    rowGetter: reportRow,
    comboListFetch: {}
  }
}


export const viewSetDamageAssessmentMoney = async () => {
  try {
    const id = sessionStorage.getItem("id");
    if (!id) {
      console.error("No company ID found in sessionStorage.");
      return;
    }

    const list = await fetchGetAllReportByDamageAssessmentCompanyID(id);
    if (!list || !list.length) {
      console.warn("No report data fetched.");
      return;
    }
    sessionStorage.setItem("list", JSON.stringify(list));
    console.log("Data saved in sessionStorage:", sessionStorage.getItem("list"));
    window.location.href = "informationList.html"; // 경로 확인 필요
  } catch (error) {
    console.error("Error fetching report data:", error);
  }
};

export const renderTable = () => {
  initialTable();
}

const setTitle = () => {
  const title = TABLE_TITLE["REPORT_LIST"];
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
  const boxContext = COMBOBOX["REPORT_LIST"];
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
    const list = await context["REPORT_LIST"].listFetch(selectedOption);
    sessionStorage.setItem("list", JSON.stringify(list));
    setTableBody();
  };

  return select;
};

const setPostButton = () => null;

const setSearchBar = () => {
  const container = document.querySelector(".search-container");
  const comboBox = setComboBox();
  if (comboBox) {
    container.appendChild(comboBox);
  }

  container.appendChild(setInput());

  const button = document.createElement("button");
  button.id = "searchButton";
  button.textContent = BUTTON.COMMON.SEARCH;
  container.appendChild(button);
};

const setColumn = () => {
  const columnList = COLUMN_NAME["REPORT_LIST"];
  const head = document.getElementById("tableHead");
  const columns = document.createElement("tr");

  columnList.forEach(item => {
    const column = document.createElement("th");
    column.innerHTML = item;
    columns.appendChild(column);
  })
  head.appendChild(columns);
}

const setTableBody = () => {
  const tableBody = document.getElementById("list");
  tableBody.innerHTML= "";

  const data = JSON.parse(sessionStorage.getItem("list")) || [];
  data.forEach(item => {
    const row = document.createElement("tr");
    row.innerHTML = context["REPORT_LIST"].rowGetter(item);

    row.addEventListener("click", () => {
      if (window.selectedRow) {
        window.selectedRow.classList.remove("selected");
      }
      row.classList.add("selected");
      window.selectedRow = row;
    });

    row.addEventListener("dblclick", () => {
      sessionStorage.setItem("selectedReport", JSON.stringify(item)); // 선택된 데이터 저장
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


