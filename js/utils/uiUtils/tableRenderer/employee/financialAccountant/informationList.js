import {
  fetchGetAllPaymentDetail,
  fetchGetAllDepositDetail,
  fetchGetPaymentDetail,
  fetchGetDepositDetail,
  fetchGetAllCompletedPaymentDetail,
  fetchGetAllUnprocessedPaymentDetail
} from "../../../../apiUtils/apiDocumentation/employee/financialAccountant/financialAccountant.js"
import {BUTTON} from "../../../../../../config/common.js";
import {COMBOBOX} from "../../../../../../config/employee/financialAccountant/financialAccountant.js";

export const informationType = {
  HANDLE_PAYMENT_DETAIL: "HANDLE_PAYMENT_DETAIL",
  VIEW_DEPOSIT_DETAIL: "VIEW_DEPOSIT_DETAIL"
}

const paymentDetailRow = (paymentDetail) => {
  return `
    <td>${paymentDetail.id}</td>
    <td>${paymentDetail.money}</td>
    <td>${paymentDetail.bank}</td>
    <td>${paymentDetail.accountHolder}</td>
    <td>${paymentDetail.bankAccount}</td>
    <td>${paymentDetail.paymentType}</td>
    <td>${paymentDetail.processStatus}</td>
  `;
}

const depositDetailRow = (depositDetail) => {
  return `
    <td>${depositDetail.id}</td>
    <td>${depositDetail.depositorName}</td>
    <td>${depositDetail.date}</td>
    <td>${depositDetail.money}</td>
    <td>${depositDetail.path}</td>
  `;
}

const getPaymentDetailId = (data) => {
  return data.id;
}

const context = {
  VIEW_DEPOSIT_DETAIL: {
    title : "입금 정보 리스트",
    listFetch: fetchGetAllDepositDetail,
    listFetchById: fetchGetDepositDetail,
    comboListFetch: {},
    needDetail: false,
    rowGetter: depositDetailRow,
    columnList: [
      "입금 사항 번호",
      "입금자 이름",
      "입금 날짜",
      "입금 금액",
      "입금 경로"
    ]
  },
  HANDLE_PAYMENT_DETAIL: {
    title : "지급 사항 정보 리스트",
    listFetch: fetchGetAllPaymentDetail,
    listFetchById: fetchGetPaymentDetail,
    comboListFetch: {
      all: fetchGetAllPaymentDetail,
      completed: fetchGetAllCompletedPaymentDetail,
      unprocessed: fetchGetAllUnprocessedPaymentDetail
    },
    needDetail: true,
    idGetter: getPaymentDetailId,
    rowGetter: paymentDetailRow,
    columnList: [
      "지급 번호",
      "지급 금액",
      "은행 이름",
      "예금주",
      "지급 계좌 번호",
      "지급 형태",
      "지급 상태"
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
    if (window.selectedRow) {
      window.selectedRow.classList.remove("selected");
    }
    row.classList.add("selected");
    window.selectedRow = row;
  });

  // 더블 클릭 시 상세 페이지로 이동
  if (context[type].needDetail) {
    let id = context[type].idGetter(item);
    row.addEventListener("dblclick", () => {
      // 상세 정보를 세션에 저장
      sessionStorage.setItem("selectedDataId", JSON.stringify(id));
      window.location.href = "detail.html";
    });
  }

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
  const select = COMBOBOX[type].isCombo ? setComboBox() : null;
  if (select != null) { // 추가
    container.appendChild(select);
    if (select.id === "post")
      select.addEventListener("click", () => alert("버튼 눌림 - POST")); // 수정
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
      if (window.selectedRow) {
        window.selectedRow.classList.remove("selected");
      }
      row.classList.add("selected");
      window.selectedRow = row;
    });

    // 더블 클릭 시 상세 페이지로 이동
    if (context[type].needDetail) {
      let id = context[type].idGetter(item);
      row.addEventListener("dblclick", () => {
        // 상세 정보를 세션에 저장
        sessionStorage.setItem("selectedDataId", JSON.stringify(id));
        window.location.href = "detail.html";
      });
    }

    tableBody.appendChild(row);
  });
}
