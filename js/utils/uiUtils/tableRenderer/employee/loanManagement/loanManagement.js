import {
  fetchGetAll, fetchGetLoanProduct, fetchGetLoanRequest,
} from "../../../../apiUtils/apiDocumentation/employee/loanManagement/loanManagement.js"
import { fetchGetAllLoanRequest } from "../../../../apiUtils/apiDocumentation/employee/loanManagement/loanManagement.js"
import {COMBOBOX} from "../../../../../../config/employee/loanManagement/loanManagement.js";
import {BUTTON} from "../../../../../../config/common.js";

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
  `;
}

const context = {
  MANAGEMENT_LOAN_PRODUCT: {
    title : "대출 상품 정보 리스트",
    listFetch: fetchGetAll,
    listFetchById: fetchGetLoanProduct,
    comboListFetch: {},
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
    listFetchById: fetchGetLoanRequest,
    comboListFetch: {
      all: fetch,
      completed: fetch,
      unprocessed: fetch
    },
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
  setSearchBar();
  setColumn();
  setTableBody();
}

const setTitle = () => {
  const currentContext = context[sessionStorage.getItem("currentType")];
  const contextTitle = document.getElementById("title");
  contextTitle.innerText = currentContext.title;
}

const setColumn = () => {
  const currentContext = context[sessionStorage.getItem("currentType")];
  const head = document.getElementById('tableHead');
  const columns = document.createElement('tr');
  currentContext.columnList.forEach(item => {
    const oneColumn = document.createElement('th');
    oneColumn.innerHTML = item;
    columns.appendChild(oneColumn);
  })
  head.appendChild(columns);
}

const setPost = () => {
  const post = document.createElement("div");
  post.id = "post";
  post.className = "post-button";
  post.textContent = BUTTON.COMMON.POST;
  return post;
}

const setComboBox = () => {
  const select = document.createElement("select");
  const type = sessionStorage.getItem("currentType");
  const boxContext = COMBOBOX[type];
  console.log(JSON.stringify(boxContext));
  if (!boxContext.isCombo) return null;
  select.id = boxContext.id;
  select.className = "comboBox";
  const optionTypes = boxContext.optionTypes;
  optionTypes.forEach(optionType => {
    const option = document.createElement("option");
    option.value = optionType.value;
    option.textContent = optionType.label;
    select.appendChild(option);
  });
  return select;
}

const setInput = () => {
  const input = document.createElement("input");
  input.type = "text";
  input.id = "searchInput";
  input.placeholder = "검색어 입력";
  return input;
}

const initTableByInput = async (id, type) => { // 추가
  const tableBody = document.getElementById('list');
  while(tableBody.firstChild) tableBody.removeChild(tableBody.firstChild);
  if (id.length > 0) {
    const item = await context[type].listFetchById(id);
    setOneRow(item, type);
  } else {
    const list = await context[type].comboListFetch["all"]();
    if (list != null) sessionStorage.setItem("list", JSON.stringify(list));
    setTableBody();
  }
}

const setOneRow = (item, type) => {
  const tableBody = document.getElementById('list');
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
    sessionStorage.setItem("selectedData", JSON.stringify(item));
    window.location.href = "detail.html";
  });

  tableBody.appendChild(row);
}

const setButton = () => {
  const button = document.createElement("button");
  button.id = "searchButton";
  button.textContent = BUTTON.COMMON.SEARCH;
  const type = sessionStorage.getItem("currentType");
  button.addEventListener("click", () => {
    const value = document.getElementById("searchInput").value;
    initTableByInput(value, type);
  })
  return button;
}

const initTableBySelect = async (id, type) => { // 추가
  const select = document.getElementById(id);
  const selectedOption = select.options[select.selectedIndex];
  const list = await context[type].comboListFetch[selectedOption.value]();
  if (list != null)  sessionStorage.setItem("list", JSON.stringify(list));
  const tableBody = document.getElementById('list');
  while(tableBody.firstChild) tableBody.removeChild(tableBody.firstChild);
  setTableBody();
}

const setSearchBar = () => {
  const container = document.querySelector(".search-container");
  const type = sessionStorage.getItem("currentType");
  const select = COMBOBOX[type].isCombo ? setComboBox() : setPost();
  if (select != null) { // 추가
    container.appendChild(select);
    if (select.id == "post")
      post.addEventListener("click", () => alert("버튼 눌림 - POST")); // 수정
    else select.onchange = () => initTableBySelect(select.id, type); // 추가
  }
  container.appendChild(setInput());
  container.appendChild(setButton());
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
      sessionStorage.setItem("selectedData", JSON.stringify(item));
      window.location.href = "detail.html";
    });

    tableBody.appendChild(row);
  });
}
