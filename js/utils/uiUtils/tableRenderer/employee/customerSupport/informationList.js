import {
  fetchGetAccident,
  fetchGetAllAccident,
  fetchGetAllComplaint,
  fetchGetAllCompletedAccident,
  fetchGetAllProcessedComplaint, fetchGetAllUnprocessedAccident,
  fetchGetAllUnprocessedComplaint,
  fetchGetComplaint,
  fetchGetAllProcessingAccident
} from "../../../../apiUtils/apiDocumentation/employee/customerSupport/customerSupport.js"
import {BUTTON} from "../../../../../../config/common.js";
import {COMBOBOX} from "../../../../../../config/employee/customerSupport/customerSupport.js";

export const informationType = {
  HANDLE_REPORT: "HANDLE_REPORT",
  HANDLE_COMPLAINT: "HANDLE_COMPLAINT"
}
const complaintRow = (dto) => {
  return `
    <td>${dto.complaint.complaintType}</td>
    <td>${dto.complaint.id}</td>
    <td>${dto.complaint.title}</td>
    <td>${dto.complaint.postDate}</td>
    <td>${dto.complaint.employeeName}</td>
    <td>${dto.complaint.processingDate}</td>
    <td>${dto.complaint.processStatus}</td>
    <td>${dto.customer.name}</td>
    <td>${dto.customer.phoneNumber}</td>
  `;
}

const accidentRow = (accident) => {
  return `
    <td>${accident.id}</td>
    <td>${accident.serviceType}</td>
    <td>${accident.date}</td>
    <td>${accident.location}</td>
    <td>${accident.customerName}</td>
    <td>${accident.customerPhoneNumber}</td>
    <td>${accident.processStatus}</td>
  `;
}

const getAccidentId = (data) => {
  return data.id;
}

const getComplaintId = (data) => {
  return data.complaint.id;
}

const context = {
  HANDLE_REPORT: {
    title : "신고 처리 정보 리스트",
    listFetch: fetchGetAllAccident,
    listFetchById: fetchGetAccident,
    comboListFetch: {
      all: fetchGetAllAccident,
      completed: fetchGetAllCompletedAccident,
      unprocessed: fetchGetAllUnprocessedAccident,
      processing: fetchGetAllProcessingAccident
    },
    idGetter: getAccidentId,
    rowGetter: accidentRow,
    columnList: [
      "사고 번호",
      "서비스 종류",
      "사고 날짜",
      "사고 위치",
      "이름",
      "전화번호",
      "처리상태"
    ]
  },
  HANDLE_COMPLAINT: {
    title : "민원 처리 정보 리스트",
    listFetch: fetchGetAllComplaint,
    listFetchById: fetchGetComplaint,
    comboListFetch: {
      all: fetchGetAllComplaint,
      completed: fetchGetAllProcessedComplaint,
      unprocessed: fetchGetAllUnprocessedComplaint
    },
    idGetter: getComplaintId,
    rowGetter: complaintRow,
    columnList: [
      "민원 종류",
      "민원 번호",
      "제목",
      "등록 날짜",
      "담당자 이름",
      "처리된 날짜",
      "처리 상태",
      "접수자 이름",
      "접수자 전화번호"
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
  let id = context[type].idGetter(item);
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
    sessionStorage.setItem("selectedDataId", JSON.stringify(id));
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
    let id = context[type].idGetter(item);
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
      sessionStorage.setItem("selectedDataId", JSON.stringify(id));
      window.location.href = "detail.html";
    });

    tableBody.appendChild(row);
  });
}
