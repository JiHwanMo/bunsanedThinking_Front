import { fetchGetAllDepartment } from '../../../../../../js/utils/apiUtils/apiDocumentation/employee/humanResource/humanResource.js';

// const departmentRow = (dto) => {
//   return `
//     <td>${dto.headName}</td>
//     <td>${dto.id}</td>
//     <td>${dto.name}</td>
//     <td>${dto.officeSupplyList}</td>
//     <td>${dto.porpose}</td>
//     <td>${dto.task}</td>
//     <td>${dto.employeeList}</td>
//   `;
// }

// const context = {
//   DEPARTMENT_LIST: {
//     title: "부서 정보 리스트",
//     listFetch: fetchGetAllDepartment,
//     rowGetter: departmentRow,
//     columnList: [
//       "부서장 이름",
//       "부서 번호",
//       "부서 이름",
//       "집기비품목록",
//       "부서 목적",
//       "주업무",
//       "직원목록"
//     ]
//   }
// }

const departmentRow = (dto) => {
  return `
    <td>${dto.id}</td>
    <td>${dto.name}</td>
    <td>${dto.employeeList.length}</td> <!-- 소속 인원 수 -->
    <td>${dto.headName}</td>
  `;
}

const context = {
  DEPARTMENT_LIST: {
    title: "부서 정보 리스트",
    listFetch: fetchGetAllDepartment,
    rowGetter: departmentRow,
    columnList: [
      "부서 번호",
      "부서 이름",
      "소속 인원",
      "부서장 이름"
    ]
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
  const currentContext = context["DEPARTMENT_LIST"];
  const contextTitle = document.getElementById("title");
  contextTitle.innerText = currentContext.title;
}

const setColumn = () => {
  const currentContext = context["DEPARTMENT_LIST"];
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
  const contextData = context["DEPARTMENT_LIST"]; // 컨텍스트 데이터 캐싱
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
      sessionStorage.setItem("selectedManagementPlanning", JSON.stringify(item)); // 선택된 데이터 저장
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


