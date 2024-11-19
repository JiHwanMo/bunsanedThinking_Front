import { fetchGetAllReportByDamageAssessmentCompanyID } from '../../../../../js/utils/apiUtils/apiDocumentation/partnerCompany/partnerCompany.js';

const reportRow = (dto) => {
  return `
    <td>${dto.accident.id}</td> <!-- 사고 번호만 표시 -->
  `;
}

const context = {
  REPORT_LIST: {
    title: "사고 번호 리스트",
    listFetch: fetchGetAllReportByDamageAssessmentCompanyID,
    rowGetter: reportRow,
    columnList: [
      "사고 번호"
    ]
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
  const currentContext = context["REPORT_LIST"];
  const contextTitle = document.getElementById("title");
  contextTitle.innerText = currentContext.title;
}

const setColumn = () => {
  const currentContext = context["REPORT_LIST"];
  const head = document.getElementById("tableHead");
  const columns = document.createElement("tr");
  currentContext.columnList.forEach(item => {
    const oneColumn = document.createElement("th");
    oneColumn.innerHTML = item;
    columns.appendChild(oneColumn);
  })
  head.appendChild(columns);
}

const setTableBody = () => {
  const tableBody = document.getElementById("list");
  tableBody.innerHTML= "";
  const contextData = context["REPORT_LIST"]; // 컨텍스트 데이터 캐싱
  const data = JSON.parse(sessionStorage.getItem("list")) || [];
  data.forEach(item => {
    const row = document.createElement("tr");
    row.innerHTML = contextData.rowGetter(item);

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
  setColumn();
  setTableBody();
}


