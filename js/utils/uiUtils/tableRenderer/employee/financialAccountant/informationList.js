import {
  fetchGetAllPaymentDetail,
  fetchGetAllDepositDetail
} from "../../../../apiUtils/apiDocumentation/employee/financialAccountant/financialAccountant.js"

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
    <td></td>
  `;
}

const depositDetailRow = (depositDetail) => {
  return `
    <td>${depositDetail.depositorName}</td>
    <td>${depositDetail.date}</td>
    <td>${depositDetail.money}</td>
    <td>${depositDetail.path}</td>
    <td></td>
  `;
}

const getPaymentDetailId = (data) => {
  return data.id;
}

const context = {
  VIEW_DEPOSIT_DETAIL: {
    title : "입금 정보 리스트",
    listFetch: fetchGetAllDepositDetail,
    needDetail: false,
    rowGetter: depositDetailRow,
    columnList: [
      "입금자 이름",
      "입금 날짜",
      "입금 금액",
      "입금 경로"
    ]
  },
  HANDLE_PAYMENT_DETAIL: {
    title : "지급 사항 정보 리스트",
    listFetch: fetchGetAllPaymentDetail,
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
