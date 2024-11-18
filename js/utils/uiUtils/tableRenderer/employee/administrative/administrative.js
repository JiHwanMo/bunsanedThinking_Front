import { fetchGetAllOfficeSupplies } from '../../../../../../js/utils/apiUtils/apiDocumentation/employee/administrative/administrative.js';

// const officeSupplyRow = (dto) => {
//   return `
//     <td>${dto.id}</td>
//     <td>${dto.inventory}</td>
//     <td>${dto.name}</td>
//     <td>${dto.totalInventory}</td>
//     <td>${dto.description}</td>
//     <td>${dto.departmentId}</td>
//   `;
// }
//
// const context = {
//   OFFICESUPPLY_LIST: {
//     title: "집기 비품 재고 정보 리스트",
//     listFetch: fetchGetAllOfficeSupplies,
//     rowGetter: officeSupplyRow,
//     columnList: [
//       "비품 번호",
//       "현재 재고",
//       "비품 이름",
//       "총 재고",
//       "설명",
//       "부서 ID"
//     ]
//   }
// }

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
    columnList: [
      "비품 번호",
      "비품 이름",
      "현재 재고",
      "총 재고"
    ]
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
  const currentContext = context["OFFICESUPPLY_LIST"];
  const contextTitle = document.getElementById("title");
  contextTitle.innerText = currentContext.title;
}

const setColumn = () => {
  const currentContext = context["OFFICESUPPLY_LIST"];
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
  const contextData = context["OFFICESUPPLY_LIST"]; // 컨텍스트 데이터 캐싱
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
      sessionStorage.setItem("selectedSupply", JSON.stringify(item)); // 선택된 데이터 저장
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


