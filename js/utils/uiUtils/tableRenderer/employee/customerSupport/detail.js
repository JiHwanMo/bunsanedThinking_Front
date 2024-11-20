import { BUTTON } from '../../../../../../config/employee/customerSupport/customerSupport.js';
import {
  fetchGetAccident,
  fetchGetComplaint
} from "../../../../apiUtils/apiDocumentation/employee/customerSupport/customerSupport.js";

const accidentDetail = (data) => {
  return [
    { label: "사고 번호", value: data.id },
    { label: "서비스 종류", value: data.serviceType },
    { label: "사고 날짜", value: data.date },
    { label: "사고 위치", value: data.location },
    { label: "이름", value: data.customerName },
    { label: "전화번호", value: data.customerPhoneNumber },
    { label: "처리 상태", value: data.processStatus }
  ];
}

const complaintDetail = (data) => {
  return [
    { label: "민원 종류", value: data.complaint.complaintType },
    { label: "민원 내용", value: data.complaint.content },
    { label: "제목", value: data.complaint.title },
    { label: "처리 상태", value: data.complaint.processStatus },
    { label: "접수자 이름", value: data.customer.name },
    { label: "접수자 전화번호", value: data.customer.phoneNumber }
  ];
}

const context = {
  HANDLE_REPORT: {
    detailGetter: accidentDetail,
    fetchGetById: fetchGetAccident,
    buttons: BUTTON.TASK.EMPLOYEE.CUSTOMER_SUPPORT.HANDLE_REPORT
  },
  HANDLE_COMPLAINT: {
    detailGetter: complaintDetail,
    fetchGetById: fetchGetComplaint,
    buttons: BUTTON.TASK.EMPLOYEE.CUSTOMER_SUPPORT.HANDLE_COMPLAINT
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
  initialButtons(context[sessionStorage.getItem("currentType")].buttons, customerSupportTaskMapper);
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

const handleReport = () => {
  alert("신고 접수 - 고객지원");
}

const handleComplaint = () => {
  alert("민원 접수 - 고객지원");
}

const cancelReport = () => {
  alert("신고 취소 - 고객지원");
}

const cancelComplaint = () => {
  alert("민원 취소 - 고객지원");
}

const customerSupportTaskMapper = {
  HANDLE_REPORT: handleReport,
  HANDLE_COMPLAINT: handleComplaint,
  CANCEL_REPORT: cancelReport,
  CANCEL_COMPLAINT: cancelComplaint
}
