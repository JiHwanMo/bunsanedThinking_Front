import {
  fetchGetAllEmployee,
} from "../../../../apiUtils/apiDocumentation/employee/humanResource/humanResource.js"

export const informationType = {
  MANAGEMENT_EMPLOYEE: "MANAGEMENT_EMPLOYEE"
}

const employeeRow = (employee) => {
  return `
    <td>${employee.id}</td>
    <td>${employee.name}</td>
    <td>${employee.position}</td>
    <td>${employee.departmentID}</td>
    <td>${employee.salary}</td>
    <td></td>
  `;
}

const context = {
  MANAGEMENT_EMPLOYEE: {
    title : "직원 정보 리스트",
    listFetch: fetchGetAllEmployee,
    rowGetter: employeeRow,
    columnList: [
      "직원 번호",
      "직원 이름",
      "직급",
      "부서 번호",
      "급여"
    ]
  }
}

export const viewInformationListAll = async (fetchType) => {
  sessionStorage.setItem("currentType", fetchType);
  const list = await context[fetchType].listFetch();
  sessionStorage.setItem("list", JSON.stringify(list));
  window.location.href = "informationList.html";
}

export const renderTable = () => {
  initialTable();
}

const initialTable = () => {
  setTitle();
  setColumn();
  setTableBody();
}

const setTitle = () => {
  const currentContext = context[sessionStorage.getItem("currentType")];
  const contextTitle = document.getElementById("title");
  contextTitle.innerText = currentContext.title;
}

const setColumn = () => {
  const currentContext = context[sessionStorage.getItem("currentType")];
  const head = document.getElementById('tableHead');
  const columns = document.createElement('tr');
  currentContext.columnList.forEach(item => {
    const oneColumn = document.createElement('th');
    oneColumn.innerHTML = item;
    columns.appendChild(oneColumn);
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
    row.addEventListener("click", () => {
      if (selectedRow) {
        selectedRow.classList.remove("selected");
      }
      row.classList.add("selected");
      selectedRow = row;
    });

    // 더블 클릭 시 상세 페이지로 이동
    row.addEventListener("dblclick", () => {
      // 상세 정보를 세션에 저장
      sessionStorage.setItem("selectedInsurance", JSON.stringify(item));
      window.location.href = "detail.html";
    });

    tableBody.appendChild(row);
  });
}
