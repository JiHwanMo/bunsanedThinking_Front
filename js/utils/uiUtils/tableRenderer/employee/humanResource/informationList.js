import {
  fetchGetAllEmployee, fetchGetEmployee,
} from "../../../../apiUtils/apiDocumentation/employee/humanResource/humanResource.js"
import {
  BUTTON,
  CLASS, CLASS_SELECTOR,
  ELEMENT_ID as COMMON_ELEMENT_ID,
  EVENT,
  INPUT_TYPE,
  KEY,
  LOCATION,
  MESSAGES,
  TAG
} from "../../../../../../config/common.js";
import {
  COMBO_BOX,
  COMBOBOX,
  DETAIL_COLUMN_NAME,
  INFORMATION_TYPE,
  SELECTED_BUTTON_TYPE,
  ELEMENT_ID
} from "../../../../../../config/employee/humanResource/humanResource.js";
import {TITLE} from "../../../../../../config/employee/humanResource/humanResource.js";

export const informationType = {
  MANAGEMENT_EMPLOYEE: INFORMATION_TYPE.MANAGEMENT_EMPLOYEE
}

const rowLabel = {
  MANAGEMENT_EMPLOYEE: [
    ELEMENT_ID.ID,
    ELEMENT_ID.NAME,
    ELEMENT_ID.POSITION,
    ELEMENT_ID.DEPARTMENT_ID,
    ELEMENT_ID.SALARY
  ]
}

const rows = (dto, labels) => {
  const items = [];
  labels.forEach(label => {
    const td = document.createElement(TAG.TD);
    td.textContent = dto[label];
    items.push(td);
  });
  return items;
}

const getEmployeeId = (data) => {
  return data.id;
}

const context = {
  MANAGEMENT_EMPLOYEE: {
    title : TITLE.MANAGEMENT_EMPLOYEE,
    idGetter: getEmployeeId,
    listFetch: fetchGetAllEmployee,
    listFetchById: fetchGetEmployee,
    columnList: [
      DETAIL_COLUMN_NAME.MANAGEMENT_EMPLOYEE.ID,
      DETAIL_COLUMN_NAME.MANAGEMENT_EMPLOYEE.NAME,
      DETAIL_COLUMN_NAME.MANAGEMENT_EMPLOYEE.POSITION,
      DETAIL_COLUMN_NAME.MANAGEMENT_EMPLOYEE.DEPARTMENT_ID,
      DETAIL_COLUMN_NAME.MANAGEMENT_EMPLOYEE.SALARY
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
  const contextTitle = document.getElementById(COMMON_ELEMENT_ID.TITLE);
  contextTitle.innerText = currentContext.title;
}

const setColumn = () => {
  const currentContext = context[sessionStorage.getItem(KEY.CURRENT_TYPE)];
  const head = document.getElementById(COMMON_ELEMENT_ID.TABLE_HEAD);
  const columns = document.createElement(TAG.TR);
  currentContext.columnList.forEach(item => {
    const oneColumn = document.createElement(TAG.TH);
    oneColumn.innerHTML = item;
    columns.appendChild(oneColumn);
  })
  head.appendChild(columns);
}

const setPost = () => {
  const post = document.createElement(TAG.DIV);
  post.id = COMMON_ELEMENT_ID.POST;
  post.className = CLASS.POST_BUTTON;
  post.textContent = BUTTON.COMMON.POST;
  return post;
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
  input.id = COMMON_ELEMENT_ID.SEARCH_INPUT;
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
    const list = await context[type].comboListFetch[COMBO_BOX.ALL]();
    if (list != null) sessionStorage.setItem(KEY.LIST, JSON.stringify(list));
    setTableBody();
  }
}

const setOneRow = (item, type) => {
  const tableBody = document.getElementById(KEY.LIST);
  const row = document.createElement(TAG.TR);
  let id = context[type].idGetter(item);
  rows(item, rowLabel[type]).forEach(rowItem => row.appendChild(rowItem));
  // 각 행에 클릭 이벤트 추가
  row.addEventListener(EVENT.CLICK, () => {
    if (window.selectedRow) {
      window.selectedRow.classList.remove(CLASS.SELECTED);
    }
    row.classList.add(CLASS.SELECTED);
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
  const button = document.createElement(TAG.BUTTON);
  button.id = COMMON_ELEMENT_ID.SEARCH_BUTTON;
  button.textContent = BUTTON.COMMON.SEARCH;
  const type = sessionStorage.getItem(KEY.CURRENT_TYPE);
  button.addEventListener(EVENT.CLICK, () => {
    const value = document.getElementById(COMMON_ELEMENT_ID.SEARCH_INPUT).value;
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
  const container = document.querySelector(CLASS_SELECTOR.SEARCH_CONTAINER);
  const type = sessionStorage.getItem(KEY.CURRENT_TYPE);
  const select = COMBOBOX[type].isCombo ? setComboBox() : setPost();
  if (select != null) { // 추가
    container.appendChild(select);
    if (select.id === COMMON_ELEMENT_ID.POST)
      select.addEventListener(EVENT.CLICK, () => {
        sessionStorage.setItem(KEY.SELECTED_BUTTON_TYPE, SELECTED_BUTTON_TYPE.POST);
        window.location.href = LOCATION.INPUT;
      }); // 수정
    else
      select.onchange = () => initTableBySelect(select.id, type); // 추가
  }
  container.appendChild(setInput());
  container.appendChild(setButton());
}

const setTableBody = () => {
  const type = sessionStorage.getItem(KEY.CURRENT_TYPE);
  const data = JSON.parse(sessionStorage.getItem(KEY.LIST));
  data.forEach(item => {
    setOneRow(item, type);
  });
}
