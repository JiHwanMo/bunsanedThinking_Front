import { fetchGetDepartment } from '../../../../apiUtils/apiDocumentation/employee/humanResource/humanResource.js';
import { BUTTON } from '../../../../../../config/employee/managementPlanning/managementPlanning.js';
import { fetchDeleteDepartment } from "../../../../apiUtils/apiDocumentation/employee/managementPlanning/managementPlanning.js";

const departmentDetail = (data) => {
  return [
    { label: "부서 번호", value: data.id },
    { label: "부서 이름", value: data.name },
    { label: "주 업무", value: data.task },
    { label: "부서 목적", value: data.purpose },
    { label: "소속 인원", value: data.employeeList.length || "없음" },
    { label: "부서장 이름", value: data.headName }
  ];
}

const context = {
  DEPARTMENT_DETAIL: {
    detailGetter: departmentDetail,
    fetchGetById: fetchGetDepartment,
    fetchDelete: fetchDeleteDepartment,
    buttons: BUTTON.TASK.EMPLOYEE.MANAGEMENTPLANNING.DEPARTMENT_DETAIL
  }
}

export const renderDetails = async () => {
  const selectedDataId = JSON.parse(sessionStorage.getItem("selectedDataId"));
  const type = sessionStorage.getItem("currentType");

  if (selectedDataId) {
    const selectedData = await context[type].fetchGetById(selectedDataId);
    renderDetailsTable(selectedData);
    renderButtons();
  }
}

const renderDetailsTable = (data) => {
  const detailsTable = document.getElementById("detailsTable");
  const details = context[sessionStorage.getItem("currentType")].detailGetter(data);

  details.forEach(detail => {
    const row = document.createElement("tr");

    const labelCell = document.createElement("th");
    labelCell.textContent = detail.label;

    const valueCell = document.createElement("td");
    valueCell.textContent = detail.value;

    row.appendChild(labelCell);
    row.appendChild(valueCell);

    detailsTable.querySelector("tbody").appendChild(row);
  });
};

const renderButtons = () => {
  initialButtons(context[sessionStorage.getItem("currentType")].buttons, managementPlanningTaskMapper);
};

const initialButtons = (buttonMessages, buttonActionMapper) => {
  const buttonContainer = document.getElementById("buttonContainer");
  const type = sessionStorage.getItem("currentType");

  Object.entries(buttonMessages).forEach(([key, name]) => {
    const button = document.createElement("div");
    button.className = "button-item";
    button.textContent = name;

    button.addEventListener("click", buttonActionMapper[type][key]);
    buttonContainer.appendChild(button);
  });
}

const update = () => {
  sessionStorage.setItem("selectedButtonType", JSON.stringify("UPDATE"));
  window.location.href = "input.html"; // 수정 화면으로 이동
}

const deleteItem = async () => {
  const id = sessionStorage.getItem("selectedDataId");

  // confirm 다이얼로그 표시
  const userConfirmed = confirm("삭제하시겠습니까?");
  if (userConfirmed) {
    try {
      await fetchDeleteDepartment(id); // 삭제 API 호출
      alert("삭제가 완료되었습니다."); // 성공 메시지
      window.location.href = "home.html"; // 삭제 완료 후 홈 화면으로 이동
    } catch (error) {
      console.error("삭제 중 오류 발생:", error); // 오류 로그 출력
      alert("삭제 중 오류가 발생했습니다."); // 오류 메시지
    }
  } else {
    window.history.back(); // 취소 시 이전 페이지로 이동
  }
};

const managementPlanningTaskMapper  = {
  DEPARTMENT_DETAIL: {
    UPDATE: update,
    DELETE: deleteItem
  }
}
