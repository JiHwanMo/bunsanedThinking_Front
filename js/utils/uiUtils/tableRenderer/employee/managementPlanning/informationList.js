import { fetchGetAllDepartment } from '../../../../apiUtils/apiDocumentation/employee/humanResource/humanResource.js';
import { fetchGetDepartment } from '../../../../apiUtils/apiDocumentation/employee/humanResource/humanResource.js';
import {
  BUTTON,
  CLASS, CLASS_SELECTOR,
  ELEMENT_ID,
  EVENT,
  INPUT_TYPE,
  KEY,
  LOCATION,
  MESSAGES,
  TAG
} from '../../../../../../config/common.js';
import {COMBOBOX, TYPE, VALUE, CLASS as MANAGEMENT_PLANNING_CLASS} from '../../../../../../config/employee/managementPlanning/managementPlanning.js';
import { TABLE_TITLE } from '../../../../../../config/employee/managementPlanning/managementPlanning.js';
import { COLUMN_NAME } from '../../../../../../config/employee/managementPlanning/managementPlanning.js';



const departmentRow = (dto) => {
  console.log("DTO Object:", dto);
  return `
    <td>${dto.id}</td>
    <td>${dto.name}</td>
    <td>${dto.employeeList.length}</td>
    <td>${dto.headName}</td>
  `;
}

const context = {
  DEPARTMENT_LIST: {
    needDetail: true,
    listFetch: fetchGetAllDepartment,
    listFetchById: fetchGetDepartment,
    rowGetter: departmentRow,
    comboListFetch: {}
  }
}

export const viewDepartmentListAll = async () => {
  const list = await fetchGetAllDepartment();
  if (!list || !list.length) return;

  sessionStorage.setItem(KEY.LIST, JSON.stringify(list));
  sessionStorage.setItem(KEY.CURRENT_TYPE, TYPE.DEPARTMENT_DETAIL); // currentType 설정

  window.location.href = LOCATION.INFORMATION; // 페이지 이동
};

export const renderTable = () => {
  initialTable();
}

const setTitle = () => {
  const title = TABLE_TITLE[TYPE.DEPARTMENT_LIST];
  const contextTitle = document.getElementById(ELEMENT_ID.TITLE);
  contextTitle.innerText = title;
}

const setInput = () => {
  const input = document.createElement(TAG.INPUT);
  input.type = INPUT_TYPE.TEXT;
  input.id = ELEMENT_ID.SEARCH_INPUT;
  input.placeholder = MESSAGES.PLACE_HOLDER.SEARCH;
  return input;
};

const initTableByInput = async (id, type) => {
  const tableBody = document.getElementById(KEY.LIST);
  while (tableBody.firstChild) tableBody.removeChild(tableBody.firstChild);
  if (id.length > 0) {
    const item = await context[type].listFetchById(id); // 개별 데이터 가져오기
    setOneRow(item, type);
  } else {
    const list = await context[type].listFetch(); // 전체 데이터 가져오기
    if (list != null) sessionStorage.setItem(KEY.LIST, JSON.stringify(list));
    setTableBody();
  }
};

const setButton = () => {
  const button = document.createElement(TAG.BUTTON);
  button.id = ELEMENT_ID.SEARCH_BUTTON;
  button.textContent = BUTTON.COMMON.SEARCH;
  button.addEventListener(EVENT.CLICK, () => {
    const value = document.getElementById(ELEMENT_ID.SEARCH_INPUT).value;
    initTableByInput(value, TYPE.DEPARTMENT_LIST);
  });
  return button;
};

const setComboBox = () => {
  const boxContext = COMBOBOX[TYPE.DEPARTMENT_LIST];
  if (!boxContext.isCombo) return null;

  const select = document.createElement(TAG.SELECT);
  select.id = boxContext.id;
  select.className = CLASS.COMBO_BOX;

  boxContext.optionTypes.forEach(optionType => {
    const option = document.createElement(TAG.OPTION);
    option.value = optionType.value;
    option.textContent = optionType.label;
    select.appendChild(option);
  });

  select.onchange = async () => {
    const selectedOption = select.options[select.selectedIndex].value;
    const list = await context[TYPE.DEPARTMENT_LIST].listFetch(selectedOption);
    sessionStorage.setItem(KEY.LIST, JSON.stringify(list));
    setTableBody();
  };

  return select;
};

const setPostButton = () => {
  const button = document.createElement(TAG.BUTTON);
  button.id = MANAGEMENT_PLANNING_CLASS.POST_BUTTON;
  button.textContent = BUTTON.COMMON.POST;
  button.addEventListener(EVENT.CLICK, () => {
    sessionStorage.setItem(KEY.SELECTED_BUTTON_TYPE, JSON.stringify(VALUE.POST)); // 등록 타입 설정
    window.location.href = LOCATION.INPUT; // 등록 화면으로 이동
  });
  return button;
};

const setSearchBar = () => {
  const container = document.querySelector(CLASS_SELECTOR.SEARCH_CONTAINER);
  const comboBox = setComboBox();
  if (comboBox) {
    container.appendChild(comboBox);
  } else {
    container.appendChild(setPostButton());
  }

  const input = setInput(ELEMENT_ID.SEARCH_INPUT, MESSAGES.PLACE_HOLDER.SEARCH);
  container.appendChild(input);

  // 검색 버튼 추가
  const button = setButton();
  container.appendChild(button);
};

const setColumn = () => {
  const columnList = COLUMN_NAME[TYPE.DEPARTMENT_LIST];
  const head = document.getElementById(ELEMENT_ID.TABLE);
  const columns = document.createElement(TAG.TR);

  columnList.forEach(item => {
    const column = document.createElement(TAG.TH);
    column.innerHTML = item;
    columns.appendChild(column);
  });

  head.appendChild(columns);
};

const setOneRow = (item, type) => {
  const tableBody = document.getElementById(KEY.LIST);
  const row = document.createElement(TAG.TR);
  row.innerHTML = context[type].rowGetter(item);

  row.addEventListener(EVENT.CLICK, () => {
    if (window.selectedRow) {
      window.selectedRow.classList.remove(CLASS.SELECTED);
    }
    row.classList.add(CLASS.SELECTED);
    window.selectedRow = row;
  });

  if (context[type].needDetail) {
    row.addEventListener(EVENT.DOUBLE_CLICK, () => {
      // 상세 정보를 세션에 저장
      sessionStorage.setItem(KEY.SELECTED_DATA_ID, item.id);
      window.location.href = LOCATION.DETAIL;
    });
  }

  tableBody.appendChild(row);
};

const setTableBody = () => {
  const tableBody = document.getElementById(KEY.LIST);
  tableBody.innerHTML= "";

  const data = JSON.parse(sessionStorage.getItem(KEY.LIST)) || [];
  data.forEach(item => {
    const row = document.createElement(TAG.TR);
    row.innerHTML = context[TYPE.DEPARTMENT_LIST].rowGetter(item);

    row.addEventListener(EVENT.CLICK, () => {
      if (window.selectedRow) {
        window.selectedRow.classList.remove(CLASS.SELECTED);
      }
      row.classList.add(CLASS.SELECTED);
      window.selectedRow = row;
    });

    row.addEventListener(EVENT.DOUBLE_CLICK, () => {
      sessionStorage.setItem(KEY.SELECTED_DATA_ID, item.id); // 선택된 데이터 저장
      window.location.href = LOCATION.DETAIL; // 상세 페이지로 이동
    });

    tableBody.appendChild(row);
  });
};

const initialTable = () => {
  setTitle();
  setSearchBar();
  setColumn();
  setTableBody();
}


