import { fetchGetAllCustomerInformation } from "../../../../apiUtils/apiDocumentation/employee/customerInformationManagement/customerInformationManagement.js";
import { fetchGetCustomerInformation} from "../../../../apiUtils/apiDocumentation/employee/customerInformationManagement/customerInformationManagement.js";
import {
  BUTTON,
  CLASS_SELECTOR,
  ELEMENT_ID,
  EVENT,
  INPUT_TYPE,
  KEY,
  LOCATION,
  MESSAGES,
  TAG
} from '../../../../../../config/common.js';
import {
  CLASS,
  COMBOBOX,
  TYPE, VALUE
} from '../../../../../../config/employee/customerInformationManagement/customerInformationManagement.js';
import { TABLE_TITLE } from '../../../../../../config/employee/customerInformationManagement/customerInformationManagement.js';
import { COLUMN_NAME } from '../../../../../../config/employee/customerInformationManagement/customerInformationManagement.js';

const customerInformationRow = (dto) => {
  return `
    <td>${dto.name}</td>
    <td>${dto.phoneNumber}</td>
    <td>${dto.job}</td>
    <td>${dto.age}</td>
    <td>${dto.gender}</td>
    <td>${dto.residentRegistrationNumber}</td>
    <td>${dto.address}</td>
    <td>${dto.bankName}</td>
    <td>${dto.bankAccount}</td>
    <td>${dto.id}</td>
  `;
}

const context = {
  CUSTOMERINFORMATION_LIST: {
    // title: "고객 정보 리스트",
    needDetail: true,
    listFetch: fetchGetAllCustomerInformation,
    listFetchById: fetchGetCustomerInformation,
    rowGetter: customerInformationRow,
    comboListFetch: {}
  }
}

export const viewCustomerInformationListAll = async () => {
  const list = await fetchGetAllCustomerInformation();
  if (!list || !list.length) return;

  sessionStorage.setItem(KEY.LIST, JSON.stringify(list));
  sessionStorage.setItem(KEY.CURRENT_TYPE, TYPE.CUSTOMERINFORMATION_DETAIL); // currentType 설정

  window.location.href = LOCATION.INFORMATION; // 페이지 이동
};

export const renderTable = () => {
  initialTable();
}

const setTitle = () => {
  const title = TABLE_TITLE[TYPE.CUSTOMERINFORMATION_LIST];
  const contextTitle = document.getElementById(ELEMENT_ID.TITLE);
  contextTitle.innerText = title;
};

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
    initTableByInput(value, TYPE.CUSTOMERINFORMATION_LIST);
  });
  return button;
};


const setComboBox = () => {
  const boxContext = COMBOBOX[TYPE.CUSTOMERINFORMATION_LIST];
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
    const list = await context[TYPE.CUSTOMERINFORMATION_LIST].listFetch(selectedOption);
    sessionStorage.setItem(KEY.LIST, JSON.stringify(list));
    setTableBody();
  };

  return select;
};


const setPostButton = () => {
  const button = document.createElement(TAG.BUTTON);
  button.id = CLASS.POST_BUTTON;
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
  const columnList = COLUMN_NAME[TYPE.CUSTOMERINFORMATION_LIST];
  const head = document.getElementById(ELEMENT_ID.TABLE);
  const columns = document.createElement(TAG.TR);

  columnList.forEach(item => {
    const column = document.createElement(TAG.TH);
    column.innerHTML = item;
    columns.appendChild(column);
  })
  head.appendChild(columns);
}

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
    row.innerHTML = context[TYPE.CUSTOMERINFORMATION_LIST].rowGetter(item);

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
};


