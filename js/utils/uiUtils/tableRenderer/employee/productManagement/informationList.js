import {
  fetchGetAllInsurance, fetchGetInsuranceProduct
} from '../../../../apiUtils/apiDocumentation/employee/productManagement/productManagement.js';
import {
  COLUMN_NAME,
  COMBOBOX,
  NAME_MAPPER,
  TABLE_TITLE, VALUE
} from "../../../../../../config/employee/productManagement/productManagement.js";
import {
  BUTTON,
  CLASS, CLASS_SELECTOR,
  COMBO_LIST_FETCH,
  ELEMENT_ID,
  EVENT, INPUT_TYPE,
  KEY,
  LOCATION,
  MESSAGES, STRING_EMPTY,
  TAG, ZERO
} from "../../../../../../config/common.js";

export const informationType = {
  MANAGE_INSURANCE_PRODUCT: NAME_MAPPER.MANAGE_INSURANCE_PRODUCT,
}

const manageInsuranceProductRow = (dto) => {
  return `
    <td>${dto.id}</td>
    <td>${dto.name}</td>
    <td>${dto.insuranceType}</td>
    <td>${dto.ageRange}</td>
    <td>${dto.monthlyPremium}</td>
  `;
}

const context = {
  MANAGE_INSURANCE_PRODUCT: {
    listFetch: fetchGetAllInsurance,
    listFetchById: fetchGetInsuranceProduct,
    rowGetter: manageInsuranceProductRow,
    needEmployeeId: false,
    comboListFetch: {
      all: fetchGetAllInsurance
    }
  }
}

export const viewInformationListAll = async (fetchType) => {
  sessionStorage.setItem(KEY.CURRENT_TYPE, fetchType);
  let list = await context[fetchType].listFetch();
  sessionStorage.setItem(KEY.LIST, JSON.stringify(list));
  window.location.href = LOCATION.INFORMATION;
};

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
  const title = TABLE_TITLE[sessionStorage.getItem(KEY.CURRENT_TYPE)];
  const contextTitle = document.getElementById(ELEMENT_ID.TITLE);
  contextTitle.innerText = title;
}

const setSearchBar = () => {
  const container = document.querySelector(CLASS_SELECTOR.SEARCH_CONTAINER);
  const type = sessionStorage.getItem(KEY.CURRENT_TYPE);
  const select = COMBOBOX[type].isCombo ? setComboBox() : setPost();

  if (select != null) {
    container.appendChild(select);
    if (select.id === ELEMENT_ID.POST) {
      select.addEventListener(EVENT.CLICK, () => {
        sessionStorage.setItem(KEY.SELECTED_BUTTON_TYPE, JSON.stringify(VALUE.POST));
        window.location.href = LOCATION.INPUT;
      });
    } else {
      select.onchange = () => initTableBySelect(select.id, type);
    }
  }

  container.appendChild(setInput());
  container.appendChild(setButton());
};

const setComboBox = () => {
  const select = document.createElement(CLASS.SELECTED);
  const type = sessionStorage.getItem(KEY.CURRENT_TYPE);
  const boxContext = COMBOBOX[type];
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

const setPost = () => {
  const post = document.createElement(TAG.DIV);
  post.id = ELEMENT_ID.POST;
  post.className = CLASS.POST_BUTTON;
  post.textContent = BUTTON.COMMON.POST;
  return post;
}

const initTableBySelect = async (id, type) => { // 추가
  const select = document.getElementById(id);
  const selectedOption = select.options[select.selectedIndex];
  const list = context[type].needEmployeeId ?
    await context[type].comboListFetch[selectedOption.value](sessionStorage.getItem(KEY.LOGIN_ID)) :
    await context[type].comboListFetch[selectedOption.value]();
  if (list != null) sessionStorage.setItem(KEY.LIST, JSON.stringify(list));
  const input = document.getElementById(ELEMENT_ID.SEARCH_INPUT);
  if (input != null) input.value = STRING_EMPTY;
  const tableBody = document.getElementById(KEY.LIST);
  while(tableBody.firstChild) tableBody.removeChild(tableBody.firstChild);
  setTableBody();
}

const setTableBody = () => {
  const type = sessionStorage.getItem(KEY.CURRENT_TYPE);
  const data = JSON.parse(sessionStorage.getItem(KEY.LIST));
  data.forEach(item => setOneRow(item, type));
}

const setInput = () => {
  const input = document.createElement(TAG.INPUT);
  input.type = INPUT_TYPE.TEXT;
  input.id = ELEMENT_ID.SEARCH_INPUT;
  input.placeholder = MESSAGES.PLACE_HOLDER.SEARCH;
  return input;
}

///
const setButton = () => {
  const button = document.createElement(TAG.BUTTON);
  button.id = ELEMENT_ID.SEARCH_BUTTON;
  button.textContent = BUTTON.COMMON.SEARCH;
  const type = sessionStorage.getItem(KEY.CURRENT_TYPE);
  button.addEventListener(EVENT.CLICK, () => {
    const value = document.getElementById(ELEMENT_ID.SEARCH_INPUT).value;
    initTableByInput(value, type);
    const select = document.getElementById(COMBOBOX[type].id);
    if (select != null) select.selectedIndex = ZERO;
  })
  return button;
}
///

const initTableByInput = async (id, type) => {
  const tableBody = document.getElementById(KEY.LIST);
  while(tableBody.firstChild) tableBody.removeChild(tableBody.firstChild);
  if (id.length > ZERO) {
    const item = context[type].needEmployeeId ?
      await context[type].listFetchById(id, sessionStorage.getItem(KEY.LOGIN_ID)) :
      await context[type].listFetchById(id)
    setOneRow(item, type);
  } else {
    const list = context[type].needEmployeeId ?
      await context[type].comboListFetch[COMBO_LIST_FETCH.ALL](sessionStorage.getItem(KEY.LOGIN_ID)) :
      await context[type].comboListFetch[COMBO_LIST_FETCH.ALL]();
    if (list != null) sessionStorage.setItem(KEY.LIST, JSON.stringify(list));
    setTableBody();
  }
}

const setOneRow = (item, type) => {
  const tableBody = document.getElementById(KEY.LIST);
  const row = document.createElement(TAG.TR);
  row.innerHTML = context[type].rowGetter(item);
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
    sessionStorage.setItem(KEY.SELECTED_DATA_ID, item.id);
    window.location.href = LOCATION.DETAIL;
  });

  tableBody.appendChild(row);
}

const setColumn = () => {
  const columnList = COLUMN_NAME[sessionStorage.getItem(KEY.CURRENT_TYPE)];
  const head = document.getElementById(ELEMENT_ID.TABLE_HEAD);
  const columns = document.createElement(TAG.TR);
  columnList.forEach(item => {
    const oneColumn = document.createElement(TAG.TH);
    oneColumn.innerHTML = item;
    columns.appendChild(oneColumn);
  })
  head.appendChild(columns);
}

