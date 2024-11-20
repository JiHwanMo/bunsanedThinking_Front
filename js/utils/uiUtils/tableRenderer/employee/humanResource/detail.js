import { BUTTON } from '../../../../../../config/employee/humanResource/humanResource.js';
import { fetchGetEmployee } from "../../../../apiUtils/apiDocumentation/employee/humanResource/humanResource.js";

const employeeDetail = (data) => {
  return [
    { label: "직원 번호", value: data.id },
    { label: "직원 이름", value: data.name },
    { label: "직급", value: data.position },
    { label: "주소", value: data.address },
    { label: "전화번호", value: data.phoneNumber },
    { label: "은행명", value: data.bankName },
    { label: "계좌번호", value: data.bankAccount },
    { label: "주민등록번호", value: data.residentRegistrationNumber },
    { label: "가족관계", value: data.familyList.map(item => family(item)) },
    { label: "부서 번호", value: data.departmentID },
    { label: "급여", value: data.salary },
    { label: "입사 날짜", value: data.employmentDate }
  ];
}

const family = (data) => {
  return [
    { label: "이름", value: data.name },
    { label: "생일", value: data.birthDate },
    { label: "관계", value: data.relationship },
    { label: "생존 여부", value: data.survival }
  ];
}

const context = {
  MANAGEMENT_EMPLOYEE: {
    detailGetter: employeeDetail,
    fetchGetById: fetchGetEmployee,
    buttons: BUTTON.TASK.EMPLOYEE.HUMAN_RESOURCE.MANAGEMENT_EMPLOYEE
  }
}

export const renderDetails = async () => {
  // 세션에서 데이터 가져오기
  const selectedDataId = JSON.parse(sessionStorage.getItem("selectedDataId"));
  const type = sessionStorage.getItem("currentType");

  // 세션에 데이터가 있으면 렌더링
  if (selectedDataId) {
    const selectedData = await context[type].fetchGetById(selectedDataId);
    renderDetailsTable(selectedData);
    renderButtons();
  }
};

// 상세 정보를 테이블 형식으로 렌더링하는 함수
const renderDetailsTable = (data) => {
  const detailsTable = document.getElementById("detailsTable");

  const details = context[sessionStorage.getItem("currentType")].detailGetter(data);

  // 테이블에 각 정보를 추가
  details.forEach(detail => {
    const row = document.createElement("tr");
    if (Array.isArray(detail.value)) {
      const tableHead = document.createElement("th");
      tableHead.textContent = detail.label;

      const tableData = document.createElement("td");
      detail.value.forEach(listDetail => {
        const nestedTable = document.createElement("table");
        listDetail.forEach(item => {
          const nestedRow = document.createElement("tr")
          const labelCell = document.createElement("th");
          labelCell.textContent = item.label;

          const valueCell = document.createElement("td");
          valueCell.textContent = item.value;

          nestedRow.appendChild(labelCell);
          nestedRow.appendChild(valueCell);

          nestedTable.appendChild(nestedRow);
        });
        tableData.appendChild(nestedTable);
      });
      row.appendChild(tableHead);
      row.appendChild(tableData);
    } else {
      const labelCell = document.createElement("th");
      labelCell.textContent = detail.label;

      const valueCell = document.createElement("td");
      valueCell.textContent = detail.value;

      row.appendChild(labelCell);
      row.appendChild(valueCell);
    }
    detailsTable.querySelector("tbody").appendChild(row);
  });
};

const renderButtons = () => {
  initialButtons(context[sessionStorage.getItem("currentType")].buttons, loanManagementTaskMapper);
};

const initialButtons = (buttonMessages, buttonActionMapper) => {
  const buttonContainer = document.getElementById("buttonContainer");
  // 객체의 각 항목을 순회하여 버튼 생성
  Object.entries(buttonMessages).forEach(([key, name]) => {
    const button = document.createElement("div");
    button.className = "button-item";
    button.textContent = name; // 버튼에 표시할 텍스트 설정

    button.addEventListener("click", buttonActionMapper[key]);

    buttonContainer.appendChild(button); // 버튼을 buttonContainer에 추가
  });
}

const updateEmployee = () => {
  alert("수정 - 인사관리");
}

const deleteEmployee = () => {
  alert("삭제 - 인사관리");
}

const loanManagementTaskMapper = {
  UPDATE: updateEmployee,
  DELETE: deleteEmployee
}
