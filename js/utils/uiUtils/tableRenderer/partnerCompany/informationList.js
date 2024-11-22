import { fetchGetAllReportByDamageAssessmentCompanyID } from '../../../../../js/utils/apiUtils/apiDocumentation/partnerCompany/partnerCompany.js';
import { fetchGetReport } from '../../../../../js/utils/apiUtils/apiDocumentation/partnerCompany/partnerCompany.js';
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
    // title: "사고 번호 리스트",
    needDetail: true,
    listFetch: fetchGetAllReportByDamageAssessmentCompanyID,
    listFetchById: fetchGetReport,
    rowGetter: reportRow,
    comboListFetch: {}
  }
}


// export const viewSetDamageAssessmentMoney = async () => {
//   try {
//     const id = sessionStorage.getItem("id");
//     if (!id) {
//       console.error("No company ID found in sessionStorage.");
//       return;
//     }
//
//     const list = await fetchGetAllReportByDamageAssessmentCompanyID(id);
//     if (!list || !list.length) {
//       console.warn("No report data fetched.");
//       return;
//     }
//     sessionStorage.setItem("list", JSON.stringify(list));
//     console.log("Data saved in sessionStorage:", sessionStorage.getItem("list"));
//     window.location.href = "informationList.html"; // 경로 확인 필요
//   } catch (error) {
//     console.error("Error fetching report data:", error);
//   }
// };

export const viewSetDamageAssessmentMoney = async () => {
  const id = sessionStorage.getItem("id");
  if (!id) return;

  const list = await fetchGetAllReportByDamageAssessmentCompanyID(id);
  if (!list || !list.length) return;

  sessionStorage.setItem("list", JSON.stringify(list));
  window.location.href = "informationList.html";
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

const initTableByInput = async (id) => {
  const tableBody = document.getElementById("list");
  while (tableBody.firstChild) tableBody.removeChild(tableBody.firstChild);
  if (id && id.length > 0) {
    const item = await context["REPORT_LIST"].listFetchById(id); // 검색어로 단일 항목 가져오기
    setOneRow(item);
  } else {
    const list = await context["REPORT_LIST"].listFetch(sessionStorage.getItem("id"));
    if (list) sessionStorage.setItem("list", JSON.stringify(list));
    setTableBody();
  }
};

const setButton = () => {
  const button = document.createElement("button");
  button.id = "searchButton";
  button.textContent = BUTTON.COMMON.SEARCH; // 버튼 텍스트 설정
  // const type = "REPORT_LIST"; // 고정된 타입
  button.addEventListener("click", async () => {
    const value = document.getElementById("searchInput").value;
    await initTableByInput(value); // 검색 실행
  });
  return button;
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

  // 검색 입력 필드 추가
  const input = setInput();
  container.appendChild(input);

  // 검색 버튼 추가 (setButton 호출)
  const button = setButton(); // setButton 함수 호출
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

const setOneRow = (item) => {
  const tableBody = document.getElementById("list");
  const row = document.createElement("tr");
  row.innerHTML = context["REPORT_LIST"].rowGetter(item);

  // 클릭 이벤트: 선택된 행 강조
  row.addEventListener("click", () => {
    if (window.selectedRow) {
      window.selectedRow.classList.remove("selected"); // 기존 선택 해제
    }
    row.classList.add("selected"); // 새로 선택된 행 강조
    window.selectedRow = row;
  });

  // 더블 클릭 이벤트: 상세 페이지 이동
  if (context["REPORT_LIST"].needDetail) {
    row.addEventListener("dblclick", () => {
      sessionStorage.setItem("selectedDataId", item.id); // 데이터 저장
      window.location.href = "detail.html"; // 상세 페이지로 이동
    });
  }
  tableBody.appendChild(row); // 테이블 본문에 행 추가
};

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


