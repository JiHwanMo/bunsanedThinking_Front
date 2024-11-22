import { fetchGetOfficeSupply } from "../../../../../../js/utils/apiUtils/apiDocumentation/employee/administrative/administrative.js";
import { BUTTON } from "../../../../../../config/employee/administrative/administrative.js";

const administrativeDetail = (data) => {
  return [
    { label: "비품 번호", value: data.id },
    { label: "비품 이름", value: data.name },
    { label: "현재 재고", value: data.inventory },
    { label: "총 재고", value: data.totalInventory },
    { label: "설명", value: data.description }
  ];
}

const context = {
  OFFICESUPPLY_DETAIL: {
    detailGetter: administrativeDetail,
    fetchGetById: fetchGetOfficeSupply,
    buttons: BUTTON.TASK.EMPLOYEE.ADMINISTRATIVE.OFFICESUPPLY_DETAIL
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
  initialButtons(context[sessionStorage.getItem("currentType")].buttons, administrativeTaskMapper);
}

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

const administrativeTaskMapper = {
  OFFICESUPPLY_DETAIL: {
    UPDATE: update,
    DELETE: deleteItem
  }
}


