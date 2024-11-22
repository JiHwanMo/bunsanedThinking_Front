import { fetchGetDepartment } from "../../../../../../js/utils/apiUtils/apiDocumentation/employee/humanResource/humanResource.js";
import { BUTTON } from "../../../../../../config/employee/managementPlanning/managementPlanning.js";

const departmentDetail = (data) => {
  return [
    { label: "부서 번호", value: data.id },
    { label: "부서 이름", value: data.name },
    { label: "주 업무", value: data.task },
    { label: "부서 목적", value: data.purpose },
    { label: "소속 인원", value: data.employeeList.map((employee) => employee.name).join(", ") || "없음" },
    { label: "부서장 이름", value: data.headName }
  ];
}

const context = {
  DEPARTMENT_DETAIL: {
    detailGetter: departmentDetail,
    fetchGetById: fetchGetDepartment,
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
  alert("수정 버튼 클릭!");
}

const deleteItem = () => {
  // window.location.href = "informationList.html";
  alert("삭제 버튼 클릭!");
}

const managementPlanningTaskMapper  = {
  DEPARTMENT_DETAIL: {
    UPDATE: update,
    DELETE: deleteItem
  }
}
