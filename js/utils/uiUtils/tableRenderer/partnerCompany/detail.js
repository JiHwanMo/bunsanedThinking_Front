import { fetchGetReport } from '../../../apiUtils/apiDocumentation/partnerCompany/partnerCompany.js';
import { BUTTON } from '../../../../../config/partnerCompany/partnerCompany.js';

const reportDetail = (data) => {
  return [
    { label: "사고 번호", value: data.id },
    { label: "손해사정금액", value: data.damageAssessmentMoney }
  ];
}

const context = {
  REPORT_DETAIL: {
    detailGetter: reportDetail,
    fetchGetById: fetchGetReport,
    buttons: BUTTON.TASK.PARTNERCOMPANY.REPORT_DETAIL
  }
}

export const renderDetails = async () => {
  const selectedDataId = JSON.parse(sessionStorage.getItem("selectedDataId"));
  if (!selectedDataId) {
    console.error("No selected data ID found.");
    return;
  }

  const selectedData = await context.REPORT_DETAIL.fetchGetById(selectedDataId);
  if (selectedData) {
    renderDetailsTable(selectedData);
    renderButtons();
  } else {
    console.error("No data fetched for the selected ID.");
  }
}

const renderDetailsTable = (data) => {
  const detailsTable = document.getElementById("detailsTable");
  const details = context.REPORT_DETAIL.detailGetter(data);

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
  initialButtons(context.REPORT_DETAIL.buttons, partnerCompanyTaskMapper);
};

const initialButtons = (buttonMessages, buttonActionMapper) => {
  const buttonContainer = document.getElementById("buttonContainer");
  const type = "REPORT_DETAIL"; // REPORT_DETAIL로 고정

  Object.entries(buttonMessages).forEach(([key, name]) => {
    const button = document.createElement("div");
    button.className = "button-item";
    button.textContent = name;

    // 액션 매핑 확인 및 이벤트 설정
    const action = buttonActionMapper[type]?.[key];
    if (typeof action === "function") {
      button.addEventListener("click", action);
    }
    buttonContainer.appendChild(button);
  });
};


const update = () => {
  window.location.href = "input.html";
}

const partnerCompanyTaskMapper = {
  REPORT_DETAIL: {
    UPDATE: update
  }
}

