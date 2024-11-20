import { BUTTON } from '../../../../../../config/employee/loanManagement/loanManagement.js';

const loanDetail = (data) => {
  const detail = [
    { label: "대출 상품 이름", value: data.name },
    { label: "대출 종류", value: data.loanType },
    { label: "대출 상품 번호", value: data.id },
    { label: "이자율", value: data.interestRate },
    { label: "대출 가능 최대 금액", value: data.maximumMoney },
    { label: "최소 자산", value: data.minimumAsset }
  ];
  switch(data.loanType) {
    case "Collateral": return collateralDetail(detail, data);
    case "FixedDeposit": return fixedDepositDetail(detail, data);
    case "InsuranceContract": return insuranceContractDetail(detail, data);
    default: return detail;
  }
}

const collateralDetail = (detail, data) => {
  detail.push(
    { label: "담보 종류", value: data.collateralType },
    { label: "최소 가치", value: data.minimumValue }
  );
  return detail;
}

const fixedDepositDetail = (detail, data) => {
  detail.push({ label: "최소 예금", value: data.minimumAmount });
  return detail;
}

const insuranceContractDetail = (detail, data) => {
  detail.push({ label: "보험 번호", value: data.insuranceId });
  return detail;
}

const loanRequestDetail = (data) => {
  return [
    { label: "고객 이름", value: data.customer.name },
    { label: "전화번호", value: data.customer.phoneNumber },
    { label: "직업", value: data.customer.job },
    { label: "나이", value: data.customer.age },
    { label: "성별", value: data.customer.gender },
    { label: "주민등록번호", value: data.customer.residentRegistrationNumber },
    { label: "재산", value: data.customer.property },
    { label: "주소", value: data.customer.address },
    { label: "사고 이력", value: data.customer.accidentHistoryList.map(item => accidentHistory(item)) },
    { label: "수술 이력", value: data.customer.surgeryHistoryList.map(item => surgeryHistory(item)) },
    { label: "질병 이력", value: data.customer.diseaseHistoryList.map(item => diseaseHistory(item)) },
    { label: "계좌 번호", value: data.customer.bankAccount },
    { label: "대출 상품 이름", value: data.loan.name },
    { label: "대출 종류", value: data.loan.loanType },
    { label: "대출 상품 번호", value: data.loan.id },
    { label: "이자율", value: data.loan.interestRate },
    { label: "대출가능 최대 금액", value: data.loan.maximumMoney },
    { label: "최소 자산", value: data.loan.minimumAsset },
    { label: "처리 상태", value: data.contract.contractStatus }
  ];
}

const accidentHistory = (data) => {
  return [
    { label: "사고 이력 번호", value: data.id },
    { label: "사고 내용", value: data.accidentDetail },
    { label: "사고 날짜", value: data.date }
  ];
}

const diseaseHistory = (data) => {
  return [
    { label: "질병 이력 번호", value: data.id },
    { label: "병명", value: data.name },
    { label: "진단 날짜", value: data.date_of_diagnosis }
  ];
}

const surgeryHistory = (data) => {
  return [
    { label: "질병 이력 번호", value: data.id },
    { label: "수술명", value: data.name },
    { label: "수술 병원", value: data.hospitalName },
    { label: "수술 날짜", value: data.date }
  ];
}

const context = {
  MANAGEMENT_LOAN_PRODUCT: {
    detailGetter: loanDetail,
    buttons: BUTTON.TASK.EMPLOYEE.LOAN_MANAGEMENT.MANAGEMENT_LOAN_PRODUCT
  },
  LOAN_REQUEST: {
    detailGetter: loanRequestDetail,
    buttons: BUTTON.TASK.EMPLOYEE.LOAN_MANAGEMENT.LOAN_REQUEST
  }
}

export const renderDetails = () => {
  // 세션에서 데이터 가져오기
  const selectedData = JSON.parse(sessionStorage.getItem("selectedData"));

  // 세션에 데이터가 있으면 렌더링
  if (selectedData) {
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

const editLoan = () => {
  alert("수정 - 융자운용");
}

const deleteLoan = () => {
  alert("삭제 - 융자운용");
}

const requestLoan = () => {
  alert("요청 - 융자운용");
}

const deniedLoanRequest = () => {
  alert("거절 - 융자운용");
}

const cancel = () => {
  alert("취소 - 융자운용");
}

const loanManagementTaskMapper = {
  EDIT: editLoan,
  DELETE: deleteLoan,
  REQUEST: requestLoan,
  DENIED: deniedLoanRequest,
  CANCEL: cancel
}
