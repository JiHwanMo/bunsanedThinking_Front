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
import {
  BUTTON,
  CLASS,
  ELEMENT_ID,
  EVENT,
  INPUT_TYPE,
  KEY,
  LOCATION,
  MESSAGES,
  TAG
} from "../../../../../../config/common.js";
import {
  CLASS_LIST,
  COLUMN_NAME,
  COMBO_LIST,
  COMBOBOX
} from "../../../../../../config/employee/customerSupport/customerSupport.js";
import {TITLE} from "../../../../../../config/employee/customerSupport/customerSupport.js";

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
    title : TITLE.HANDLE_REPORT,
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
      COLUMN_NAME.HANDLE_REPORT.ACCIDENT_ID,
      COLUMN_NAME.HANDLE_REPORT.SERVICE_TYPE,
      COLUMN_NAME.HANDLE_REPORT.ACCIDENT_DATE,
      COLUMN_NAME.HANDLE_REPORT.ACCIDENT_LOCATION,
      COLUMN_NAME.HANDLE_REPORT.CUSTOMER_NAME,
      COLUMN_NAME.HANDLE_REPORT.CUSTOMER_PHONE_NUMBER,
      COLUMN_NAME.HANDLE_REPORT.PROCESS_STATUS
    ]
  },
  HANDLE_COMPLAINT: {
    title : TITLE.HANDLE_COMPLAINT,
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
      COLUMN_NAME.HANDLE_COMPLAINT.COMPLAINT_TYPE,
      COLUMN_NAME.HANDLE_COMPLAINT.COMPLAINT_ID,
      COLUMN_NAME.HANDLE_COMPLAINT.COMPLAINT_TITLE,
      COLUMN_NAME.HANDLE_COMPLAINT.COMPLAINT_DATE,
      COLUMN_NAME.HANDLE_COMPLAINT.EMPLOYEE_NAME,
      COLUMN_NAME.HANDLE_COMPLAINT.PROCESSING_DATE,
      COLUMN_NAME.HANDLE_COMPLAINT.PROCESS_STATUS,
      COLUMN_NAME.HANDLE_COMPLAINT.CUSTOMER_NAME,
      COLUMN_NAME.HANDLE_COMPLAINT.CUSTOMER_PHONE_NUMBER
    ]
  }
}

export const viewInformationListAll = async (fetchType) => {
  sessionStorage.setItem(KEY.CURRENT_TYPE, fetchType);
  const list = await context[fetchType].listFetch();
  sessionStorage.setItem(KEY.LIST, JSON.stringify(list));
  window.location.href = LOCATION.INFORMATION;
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
  const currentContext = context[sessionStorage.getItem(KEY.CURRENT_TYPE)];
  const contextTitle = document.getElementById(ELEMENT_ID.TITLE);
  contextTitle.innerText = currentContext.title;
}

const setColumn = () => {
  const currentContext = context[sessionStorage.getItem(KEY.CURRENT_TYPE)];
  const head = document.getElementById(ELEMENT_ID.TABLE);
  const columns = document.createElement(TAG.TR);
  currentContext.columnList.forEach(item => {
    const oneColumn = document.createElement(TAG.TH);
    oneColumn.innerHTML = item;
    columns.appendChild(oneColumn);
  })
  head.appendChild(columns);
}

const setComboBox = () => {
  const select = document.createElement(TAG.SELECT);
  const type = sessionStorage.getItem(KEY.CURRENT_TYPE);
  const boxContext = COMBOBOX[type];
  console.log(JSON.stringify(boxContext));
  if (!boxContext.isCombo) return null;
  select.id = boxContext.id;
  select.className = CLASS.COMBO_BOX;
  const optionTypes = boxContext.optionTypes;
  optionTypes.forEach(optionType => {
    const option = document.createElement(TAG.OPTION);
    option.value = optionType.value;
    option.textContent = optionType.label;
    select.appendChild(option);
  });
  return select;
}

const setInput = () => {
  const input = document.createElement(TAG.INPUT);
  input.type = INPUT_TYPE.TEXT;
  input.id = ELEMENT_ID.SEARCH_INPUT;
  input.placeholder = MESSAGES.PLACE_HOLDER.SEARCH;
  return input;
}

const initTableByInput = async (id, type) => { // 추가
  const tableBody = document.getElementById(KEY.LIST);
  while(tableBody.firstChild) tableBody.removeChild(tableBody.firstChild);
  if (id.length > 0) {
    const item = await context[type].listFetchById(id);
    setOneRow(item, type);
  } else {
    const list = await context[type].comboListFetch[COMBO_LIST.ALL]();
    if (list != null) sessionStorage.setItem(KEY.LIST, JSON.stringify(list));
    setTableBody();
  }
}

const setOneRow = (item, type) => {
  const tableBody = document.getElementById(KEY.LIST);
  const row = document.createElement(TAG.TR);
  let id = context[type].idGetter(item);
  row.innerHTML = context[type].rowGetter(item);
  // 각 행에 클릭 이벤트 추가
  row.addEventListener(EVENT.CLICK, () => {
    if (window.selectedRow) {
      window.selectedRow.classList.remove(CLASS_LIST.SELECTED);
    }
    row.classList.add(CLASS_LIST.SELECTED);
    window.selectedRow = row;
  });

  // 더블 클릭 시 상세 페이지로 이동
  row.addEventListener(EVENT.DOUBLE_CLICK, () => {
    // 상세 정보를 세션에 저장
    sessionStorage.setItem(KEY.SELECTED_DATA_ID, JSON.stringify(id));
    window.location.href = LOCATION.DETAIL;
  });

  tableBody.appendChild(row);
}

const setButton = () => {
  const button = document.createElement("button");
  button.id = ELEMENT_ID.SEARCH_BUTTON;
  button.textContent = BUTTON.COMMON.SEARCH;
  const type = sessionStorage.getItem(KEY.CURRENT_TYPE);
  button.addEventListener(EVENT.CLICK, () => {
    const value = document.getElementById(ELEMENT_ID.SEARCH_INPUT).value;
    initTableByInput(value, type);
  })
  return button;
}

const initTableBySelect = async (id, type) => { // 추가
  const select = document.getElementById(id);
  const selectedOption = select.options[select.selectedIndex];
  const list = await context[type].comboListFetch[selectedOption.value]();
  if (list != null)  sessionStorage.setItem(KEY.LIST, JSON.stringify(list));
  const tableBody = document.getElementById(KEY.LIST);
  while(tableBody.firstChild) tableBody.removeChild(tableBody.firstChild);
  setTableBody();
}

const setSearchBar = () => {
  const container = document.querySelector(".search-container");
  const type = sessionStorage.getItem(KEY.CURRENT_TYPE);
  const select = COMBOBOX[type].isCombo ? setComboBox() : null;
  if (select != null) { // 추가
    container.appendChild(select);
    select.onchange = () => initTableBySelect(select.id, type); // 추가
  }
  container.appendChild(setInput());
  container.appendChild(setButton());
}

const setTableBody = () => {
  const tableBody = document.getElementById(KEY.LIST);
  const type = sessionStorage.getItem(KEY.CURRENT_TYPE);
  const data = JSON.parse(sessionStorage.getItem(KEY.LIST));
  data.forEach(item => {
    const row = document.createElement(TAG.TR);
    let id = context[type].idGetter(item);
    row.innerHTML = context[type].rowGetter(item);
    // 각 행에 클릭 이벤트 추가
    row.addEventListener(EVENT.CLICK, () => {
      if (window.selectedRow) {
        window.selectedRow.classList.remove(CLASS_LIST.SELECTED);
      }
      row.classList.add(CLASS_LIST.SELECTED);
      window.selectedRow = row;
    });

    // 더블 클릭 시 상세 페이지로 이동
    row.addEventListener(EVENT.DOUBLE_CLICK, () => {
      // 상세 정보를 세션에 저장
      sessionStorage.setItem(KEY.SELECTED_DATA_ID, JSON.stringify(id));
      window.location.href = LOCATION.DETAIL;
    });

    tableBody.appendChild(row);
  });
}
