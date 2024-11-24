import { fetchGetOfficeSupply } from "../../../../apiUtils/apiDocumentation/employee/administrative/administrative.js";
import { fetchDeleteOfficeSupply } from "../../../../apiUtils/apiDocumentation/employee/administrative/administrative.js";
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
    fetchDelete: fetchDeleteOfficeSupply,
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

const update = async () => {
  sessionStorage.setItem("selectedButtonType", JSON.stringify("UPDATE"));
  window.location.href = "input.html"; // 수정 화면으로 이동
}

const deleteItem = async () => {
  const modal = document.createElement("div");
  modal.className = "custom-modal";
  modal.innerHTML = `
    <div class="modal-content">
      <p>삭제하시겠습니까?</p>
      <div class="modal-buttons">
        <button id="confirmDeleteButton">확인</button>
        <button id="cancelDeleteButton">취소</button>
      </div>
    </div>
  `;
  // 모달 추가
  document.body.appendChild(modal);
  // 버튼 이벤트 핸들링
  document.getElementById("confirmDeleteButton").addEventListener("click", async () => {
    const id = sessionStorage.getItem("selectedDataId");

    try {
      await fetchDeleteOfficeSupply(id);
      alert("삭제가 완료되었습니다.");
      document.body.removeChild(modal); // 모달 닫기
      window.location.href = "home.html"; // 홈 화면으로 이동
    } catch (error) {
      console.error("삭제 중 오류 발생:", error);
      document.body.removeChild(modal); // 모달 닫기
    }
  });
  document.getElementById("cancelDeleteButton").addEventListener("click", () => {
    document.body.removeChild(modal); // 모달 닫기
    window.location.href = "home.html";
  });
};

const administrativeTaskMapper = {
  OFFICESUPPLY_DETAIL: {
    UPDATE: update,
    DELETE: deleteItem
  }
}


