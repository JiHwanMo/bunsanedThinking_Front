import { fetchGetCustomerInformation} from "../../../../apiUtils/apiDocumentation/employee/customerInformationManagement/customerInformationManagement.js";
import { BUTTON } from "../../../../../../config/employee/customerInformationManagement/customerInformationManagement.js";

const customerInformationDetail = (data) => {
  return [
    { label: "고객 이름", value: data.name },
    { label: "전화번호", value: data.phoneNumber },
    { label: "직업", value: data.job },
    { label: "나이", value: data.age },
    { label: "성별", value: data.gender},
    { label: "주민등록번호", value: data.residentRegistrationNumber },
    { label: "주소", value: data.address },
    { label: "재산", value: data.property },
    { label: "사고 이력", value: data.accidentHistoryList.map(item => accidentHistory(item)) || "없음" },
    { label: "수술 이력", value: data.surgeryHistoryList.map(item => surgeryHistory(item)) || "없음" },
    { label: "질병 이력", value: data.diseaseHistoryList.map(item => diseaseHistory(item)) || "없음" },
    { label: "은행명", value: data.bankName },
    { label: "계좌 번호", value: data.bankAccount },
    { label: "고객 번호", value: data.id },
  ];
};

const accidentHistory = (data) => [
  { label: "사고 이력 번호", value: data.id },
  { label: "사고 내용", value: data.accidentDetail },
  { label: "사고 날짜", value: data.date },
];

const surgeryHistory = (data) => [
  { label: "수술 이력 번호", value: data.id },
  { label: "수술명", value: data.name },
  { label: "병원 이름", value: data.hospitalName },
  { label: "수술 날짜", value: data.date },
];

const diseaseHistory = (data) => [
  { label: "질병 이력 번호", value: data.id },
  { label: "질병명", value: data.name },
  { label: "진단 날짜", value: data.date_of_diagnosis },
];

const context = {
  CUSTOMERINFORMATION_DETAIL: {
    detailGetter: customerInformationDetail,
    fetchGetById: fetchGetCustomerInformation,
    buttons: BUTTON.TASK.EMPLOYEE.CUSTOMERINFORMATIONMANAGEMENT.CUSTOMERINFORMATION_DETAIL,
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

// const renderDetailsTable = (data) => {
//   const detailsTable = document.getElementById("detailsTable");
//   const details = context[sessionStorage.getItem("currentType")].detailGetter(data);
//
//   details.forEach(detail => {
//     const row = document.createElement("tr");
//
//     if (Array.isArray(detail.value)) {
//       const tableHead = document.createElement("th");
//       tableHead.textContent = detail.label;
//
//       const tableData = document.createElement("td");
//       detail.value.forEach(listDetail => {
//         const nestedTable = document.createElement("table");
//         listDetail.forEach(item => {
//           const nestedRow = document.createElement("tr");
//
//           const labelCell = document.createElement("th");
//           labelCell.textContent = item.label;
//
//           const valueCell = document.createElement("td");
//           valueCell.textContent = item.value;
//
//           nestedRow.appendChild(labelCell);
//           nestedRow.appendChild(valueCell);
//
//           nestedTable.appendChild(nestedRow);
//         });
//         tableData.appendChild(nestedTable);
//       });
//       row.appendChild(tableHead);
//       row.appendChild(tableData);
//     } else {
//       const labelCell = document.createElement("th");
//       labelCell.textContent = detail.label;
//
//       const valueCell = document.createElement("td");
//       valueCell.textContent = detail.value;
//
//       row.appendChild(labelCell);
//       row.appendChild(valueCell);
//     }
//     detailsTable.querySelector("tbody").appendChild(row);
//   });
// };

const renderDetailsTable = (data) => {
  const detailsTable = document.getElementById("detailsTable");
  const details = context[sessionStorage.getItem("currentType")].detailGetter(data);

  details.forEach(detail => {
    const row = document.createElement("tr");

    if (Array.isArray(detail.value)) {
      // 배열인 경우
      const tableHead = document.createElement("th");
      tableHead.textContent = detail.label;

      const tableData = document.createElement("td");
      detail.value.forEach(listDetail => {
        const nestedTable = document.createElement("table");

        // 배열의 각 객체를 순회
        if (Array.isArray(listDetail)) {
          listDetail.forEach(item => {
            const nestedRow = document.createElement("tr");

            const labelCell = document.createElement("th");
            labelCell.textContent = item.label;

            const valueCell = document.createElement("td");
            valueCell.textContent = item.value;

            nestedRow.appendChild(labelCell);
            nestedRow.appendChild(valueCell);

            nestedTable.appendChild(nestedRow);
          });
        } else {
          // 객체 형태로 들어올 경우 처리
          Object.entries(listDetail).forEach(([key, value]) => {
            const nestedRow = document.createElement("tr");

            const labelCell = document.createElement("th");
            labelCell.textContent = key; // 객체의 키

            const valueCell = document.createElement("td");
            valueCell.textContent = value; // 객체의 값

            nestedRow.appendChild(labelCell);
            nestedRow.appendChild(valueCell);

            nestedTable.appendChild(nestedRow);
          });
        }
        tableData.appendChild(nestedTable);
      });

      row.appendChild(tableHead);
      row.appendChild(tableData);
    } else {
      // 배열이 아닌 일반 값 처리
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
  initialButtons(context[sessionStorage.getItem("currentType")].buttons, customerInformationTaskMapper);
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

const customerInformationTaskMapper = {
  CUSTOMERINFORMATION_DETAIL: {
    UPDATE: update,
    DELETE: deleteItem
  }
}











