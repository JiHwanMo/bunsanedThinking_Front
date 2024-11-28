import { fetchGetAllReportByDamageAssessmentCompanyID } from '../../../apiUtils/apiDocumentation/partnerCompany/partnerCompany.js';
import { fetchGetReport } from '../../../apiUtils/apiDocumentation/partnerCompany/partnerCompany.js';
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
} from '../../../../../config/common.js';
import {COMBOBOX, TYPE} from '../../../../../config/partnerCompany/partnerCompany.js';
import { TABLE_TITLE } from '../../../../../config/partnerCompany/partnerCompany.js';
import { COLUMN_NAME } from '../../../../../config/partnerCompany/partnerCompany.js';

const reportRow = (dto) => {
  return `
    <td>${dto.accident.id}</td>
  `;
}

const context = {
  REPORT_LIST: {
    // title: "사고 번호 리스트",
    needDetail: true,
    listFetch: fetchGetAllReportByDamageAssessmentCompanyID,
    listFetchById: fetchGetReport,
    rowGetter: reportRow,
    comboListFetch: {}
  }
}

export const viewSetDamageAssessmentMoney = async () => {
  const id = sessionStorage.getItem(KEY.LOGIN_ID);
  if (!id) return;

  const list = await fetchGetAllReportByDamageAssessmentCompanyID(id);
  if (!list || !list.length) return;

  sessionStorage.setItem(KEY.LIST, JSON.stringify(list));
  window.location.href = LOCATION.INFORMATION;
};

export const renderTable = () => {
  initialTable();
}

const setTitle = () => {
  const title = TABLE_TITLE[TYPE.REPORT_LIST];
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

const initTableByInput = async (id) => {
  const tableBody = document.getElementById(KEY.LIST);
  while (tableBody.firstChild) tableBody.removeChild(tableBody.firstChild);
  if (id && id.length > 0) {
    const item = await context[TYPE.REPORT_LIST].listFetchById(id); // 검색어로 단일 항목 가져오기
    setOneRow(item);
  } else {
    const list = await context[TYPE.REPORT_LIST].listFetch(sessionStorage.getItem(KEY.LOGIN_ID));
    if (list) sessionStorage.setItem(KEY.LIST, JSON.stringify(list));
    setTableBody();
  }
};

const setButton = () => {
  const button = document.createElement(TAG.BUTTON);
  button.id = ELEMENT_ID.SEARCH_BUTTON;
  button.textContent = BUTTON.COMMON.SEARCH; // 버튼 텍스트 설정
  // const type = "REPORT_LIST"; // 고정된 타입
  button.addEventListener(EVENT.CLICK, async () => {
    const value = document.getElementById(ELEMENT_ID.SEARCH_INPUT).value;
    await initTableByInput(value); // 검색 실행
  });
  return button;
};

const setComboBox = () => {
  const boxContext = COMBOBOX[TYPE.REPORT_LIST];
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
    const list = await context[TYPE.REPORT_LIST].listFetch(selectedOption);
    sessionStorage.setItem(KEY.LIST, JSON.stringify(list));
    setTableBody();
  };
  return select;
};

const setPostButton = () => null;

const setSearchBar = () => {
  const container = document.querySelector(CLASS_SELECTOR.SEARCH_CONTAINER);
  const comboBox = setComboBox();
  if (comboBox) {
    container.appendChild(comboBox);
  }

  // 검색 입력 필드 추가
  const input = setInput();
  container.appendChild(input);

  // 검색 버튼 추가 (setButton 호출)
  const button = setButton(); // setButton 함수 호출
  container.appendChild(button);
};

const setColumn = () => {
  const columnList = COLUMN_NAME[TYPE.REPORT_LIST];
  const head = document.getElementById(ELEMENT_ID.TABLE);
  const columns = document.createElement(TAG.TR);

  columnList.forEach(item => {
    const column = document.createElement(TAG.TH);
    column.innerHTML = item;
    columns.appendChild(column);
  })
  head.appendChild(columns);
}

const setOneRow = (item) => {
  const tableBody = document.getElementById(KEY.LIST);
  const row = document.createElement(TAG.TR);
  row.innerHTML = context[TYPE.REPORT_LIST].rowGetter(item);

  // 클릭 이벤트: 선택된 행 강조
  row.addEventListener(EVENT.CLICK, () => {
    if (window.selectedRow) {
      window.selectedRow.classList.remove(CLASS.SELECTED); // 기존 선택 해제
    }
    row.classList.add(CLASS.SELECTED); // 새로 선택된 행 강조
    window.selectedRow = row;
  });

  // 더블 클릭 이벤트: 상세 페이지 이동
  if (context[TYPE.REPORT_LIST].needDetail) {
    row.addEventListener(EVENT.DOUBLE_CLICK, () => {
      sessionStorage.setItem(KEY.SELECTED_DATA_ID, item.id); // 데이터 저장
      window.location.href = LOCATION.DETAIL; // 상세 페이지로 이동
    });
  }
  tableBody.appendChild(row); // 테이블 본문에 행 추가
};

const setTableBody = () => {
  const tableBody = document.getElementById(KEY.LIST);
  tableBody.innerHTML= "";

  const data = JSON.parse(sessionStorage.getItem(KEY.LIST)) || [];
  data.forEach(item => {
    const row = document.createElement(TAG.TR);
    row.innerHTML = context[TYPE.REPORT_LIST].rowGetter(item);

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


