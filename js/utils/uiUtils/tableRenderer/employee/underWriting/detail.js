import {BUTTON, DETAIL_COLUMN_NAME} from "../../../../../../config/employee/underWriting/underWriting.js";
import {fetchGetContractDetail} from "../../../../apiUtils/apiDocumentation/employee/underWriting/underWriting.js";

const contractDetail = (dto) => {
  return [
    { label: DETAIL_COLUMN_NAME.REVIEW_ACQUISITION.ID, value: dto.id },
    { label: DETAIL_COLUMN_NAME.REVIEW_ACQUISITION.CONTRACT_STATUS, value: dto.contractStatus },
    { label: DETAIL_COLUMN_NAME.REVIEW_ACQUISITION.PRODUCT_ID, value: dto.productId },
    { label: DETAIL_COLUMN_NAME.REVIEW_ACQUISITION.NAME, value: dto.name },
    { label: DETAIL_COLUMN_NAME.REVIEW_ACQUISITION.PHONE_NUMBER, value: dto.phoneNumber },
    { label: DETAIL_COLUMN_NAME.REVIEW_ACQUISITION.JOB, value: dto.job },
    { label: DETAIL_COLUMN_NAME.REVIEW_ACQUISITION.AGE, value: dto.age },
    { label: DETAIL_COLUMN_NAME.REVIEW_ACQUISITION.GENDER, value: dto.gender },
    { label: DETAIL_COLUMN_NAME.REVIEW_ACQUISITION.RESIDENT_REGISTRATION_NUMBER, value: dto.residentRegistrationNumber },
    { label: DETAIL_COLUMN_NAME.REVIEW_ACQUISITION.ADDRESS, value: dto.address },
    { label: DETAIL_COLUMN_NAME.REVIEW_ACQUISITION.BANK_ACCOUNT, value: dto.bankAccount },
    { label: DETAIL_COLUMN_NAME.REVIEW_ACQUISITION.PROPERTY, value: dto.property },
    { label: DETAIL_COLUMN_NAME.REVIEW_ACQUISITION.ACCIDENT_HISTORIES, value: dto.accidentHistories.map(item => accidentHistory(item)) },
    { label: DETAIL_COLUMN_NAME.REVIEW_ACQUISITION.SURGERY_HISTORIES, value: dto.surgeryHistories.map(item => surgeryHistory(item)) },
  ];
}

const accidentHistory = (dto) => {
  return [
    { label: DETAIL_COLUMN_NAME.REVIEW_ACQUISITION.LIST.ACCIDENT_HISTORY.ID, value: dto.id },
    { label: DETAIL_COLUMN_NAME.REVIEW_ACQUISITION.LIST.ACCIDENT_HISTORY.ACCIDENT_DETAIL, value: dto.accidentDetail },
    { label: DETAIL_COLUMN_NAME.REVIEW_ACQUISITION.LIST.ACCIDENT_HISTORY.DATE, value: dto.date }
  ];
}

const surgeryHistory = (dto) => {
  return [
    { label: DETAIL_COLUMN_NAME.REVIEW_ACQUISITION.LIST.SURGERY_HISTORY.ID, value: dto.id },
    { label: DETAIL_COLUMN_NAME.REVIEW_ACQUISITION.LIST.SURGERY_HISTORY.NAME, value: dto.name },
    { label: DETAIL_COLUMN_NAME.REVIEW_ACQUISITION.LIST.SURGERY_HISTORY.HOSPITAL_NAME, value: dto.hospitalName },
    { label: DETAIL_COLUMN_NAME.REVIEW_ACQUISITION.LIST.SURGERY_HISTORY.DATE, value: dto.date }
  ];
}

const context = {
  REVIEW_ACQUISITION: {
    detailGetter: contractDetail,
    fetchGetById: fetchGetContractDetail,
    buttons: BUTTON.TASK.EMPLOYEE.UNDERWRITING.REVIEW_ACQUISITION
  },
  APPLY_COPERATION: {},
  APPLY_REINSURANCE:{}
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
  initialButtons(context[sessionStorage.getItem("currentType")].buttons, underwritingTaskMapper);
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

const acceptanceInsurance = () => {
  alert("승인");
}

const deniedInsurance = () => {
  alert("거절");
}

const underwritingTaskMapper = {
  ACCEPTANCE: acceptanceInsurance,
  DENIED: deniedInsurance,
}
