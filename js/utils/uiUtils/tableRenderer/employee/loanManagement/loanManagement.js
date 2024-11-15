import {
  fetchGetAll,
} from "../../../../apiUtils/apiDocumentation/employee/loanManagement/loanManagement.js"
import { fetchGetAllLoanRequest } from "../../../../apiUtils/apiDocumentation/employee/loanManagement/loanManagement.js"

export const informationType = {
  MANAGEMENT_LOAN_PRODUCT: "MANAGEMENT_LOAN_PRODUCT",
  LOAN_REQUEST: "LOAN_REQUEST"
}

const loanRow = (loan) => {
  return `
    <td>${loan.name}</td>
    <td>${loan.loanType}</td>
    <td>${loan.id}</td>
    <td>${loan.interestRate}</td>
    <td>${loan.maximumMoney}</td>
    <td></td>
  `;
}

const loanRequestRow = (dto) => {
  return `
    <td>${dto.contract.id}</td>
    <td>${dto.customer.name}</td>
    <td>${dto.customer.phoneNumber}</td>
    <td>${dto.customer.job}</td>
    <td>${dto.customer.age}</td>
    <td>${dto.customer.gender}</td>
    <td>${dto.customer.residentRegistrationNumber}</td>
    <td>${dto.customer.property}</td>
    <td>${dto.customer.address}</td>
    <td>${dto.customer.bankName}</td>
    <td>${dto.customer.bankAccount}</td>
    <td>${dto.loan.name}</td>
    <td>${dto.loan.loanType}</td>
    <td>${dto.loan.id}</td>
    <td>${dto.loan.interestRate}</td>
    <td>${dto.loan.maximumMoney}</td>
    <td>${dto.contract.contractStatus}</td>
    <td></td>
  `;
}

const context = {
  MANAGEMENT_LOAN_PRODUCT: {
    title : "대출 상품 정보 리스트",
    listFetch: fetchGetAll,
    rowGetter: loanRow,
    columnList: [
      "대출 상품 이름",
      "대출 종류",
      "대출 상품 번호",
      "이자율",
      "대출 가능 최대 금액"
    ]
  },
  LOAN_REQUEST: {
    title : "보험 상품 정보 리스트",
    listFetch: fetchGetAllLoanRequest,
    rowGetter: loanRequestRow,
    columnList: [
      "계약 번호",
      "고객 이름",
      "전화번호",
      "직업",
      "나이",
      "성별",
      "주민등록번호",
      "재산",
      "주소",
      "은행 이름",
      "계좌 번호",
      "대출 상품 이름",
      "대출 종류",
      "대출 상품 번호",
      "이자율",
      "대출 가능 최대 금액",
      "처리 상태"
    ]
  }
}

export const viewInformationListAll = async (fetchType) => {
  sessionStorage.setItem("currentType", fetchType);
  const list = await context[fetchType].listFetch();
  sessionStorage.setItem("list", JSON.stringify(list));
  window.location.href = "informationList.html";
}

export const renderTable = () => {
  initialTable();
}

const initialTable = () => {
  setTitle();
  setColoumn();
  setTableBody();
}

const setTitle = () => {
  const currentContext = context[sessionStorage.getItem("currentType")];
  const contextTitle = document.getElementById("title");
  contextTitle.innerText = currentContext.title;
}

const setColoumn = () => {
  const currentContext = context[sessionStorage.getItem("currentType")];
  const head = document.getElementById('tableHead');
  const columns = document.createElement('tr');
  currentContext.columnList.forEach(item => {
    const oneColoumn = document.createElement('th');
    oneColoumn.innerHTML = item;
    columns.appendChild(oneColoumn);
  })
  head.appendChild(columns);
}

const setTableBody = () => {
  const tableBody = document.getElementById('list');
  const type = sessionStorage.getItem("currentType");
  const data = JSON.parse(sessionStorage.getItem("list"));
  data.forEach(item => {
    const row = document.createElement("tr");
    row.innerHTML = context[type].rowGetter(item);
    // 각 행에 클릭 이벤트 추가
    row.addEventListener("click", () => {
      if (selectedRow) {
        selectedRow.classList.remove("selected");
      }
      row.classList.add("selected");
      selectedRow = row;
    });

    // 더블 클릭 시 상세 페이지로 이동
    row.addEventListener("dblclick", () => {
      // 상세 정보를 세션에 저장
      sessionStorage.setItem("selectedInsurance", JSON.stringify(item));
      window.location.href = "detail.html";
    });

    tableBody.appendChild(row);
  });
}
