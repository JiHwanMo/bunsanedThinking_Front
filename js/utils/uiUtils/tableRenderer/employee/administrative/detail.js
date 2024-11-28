import { fetchGetOfficeSupply } from "../../../../apiUtils/apiDocumentation/employee/administrative/administrative.js";
import { fetchDeleteOfficeSupply } from "../../../../apiUtils/apiDocumentation/employee/administrative/administrative.js";
import {
  BUTTON,
  DETAIL_COLUMN_NAME,
  POP_UP,
  VALUE
} from "../../../../../../config/employee/administrative/administrative.js";
import {
  CLASS,
  ELEMENT_ID,
  EVENT,
  KEY,
  LOCATION,
  TAG
} from "../../../../../../config/common.js";

const administrativeDetail = (data) => {
  return [
    { label: DETAIL_COLUMN_NAME.OFFICESUPPLY_LIST.ID, value: data.id },
    { label: DETAIL_COLUMN_NAME.OFFICESUPPLY_LIST.NAME, value: data.name },
    { label: DETAIL_COLUMN_NAME.OFFICESUPPLY_LIST.INVENTORY, value: data.inventory },
    { label: DETAIL_COLUMN_NAME.OFFICESUPPLY_LIST.TOTAL_INVENTORY, value: data.totalInventory },
    { label: DETAIL_COLUMN_NAME.OFFICESUPPLY_LIST.DESCRIPTION, value: data.description }
  ];
}

const context = {
  OFFICESUPPLY_DETAIL: {
    detailGetter: administrativeDetail,
    fetchGetById: fetchGetOfficeSupply,
    fetchDelete: fetchDeleteOfficeSupply,
    buttons: BUTTON.TASK.EMPLOYEE.ADMINISTRATIVE.OFFICESUPPLY_DETAIL
  }
}

export const renderDetails = async () => {
  const selectedDataId = JSON.parse(sessionStorage.getItem(KEY.SELECTED_DATA_ID));
  const type = sessionStorage.getItem(KEY.CURRENT_TYPE);

  if (selectedDataId) {
    const selectedData = await context[type].fetchGetById(selectedDataId);
    renderDetailsTable(selectedData);
    renderButtons();
  }
}

const renderDetailsTable = (data) => {
  const detailsTable = document.getElementById(ELEMENT_ID.DETAILS_TABLE);
  const details = context[sessionStorage.getItem(KEY.CURRENT_TYPE)].detailGetter(data);

  details.forEach(detail => {
    const row = document.createElement(TAG.TR);

    const labelCell = document.createElement(TAG.TH);
    labelCell.textContent = detail.label;

    const valueCell = document.createElement(TAG.TD);
    valueCell.textContent = detail.value;

    row.appendChild(labelCell);
    row.appendChild(valueCell);

    detailsTable.querySelector(TAG.TBODY).appendChild(row);
  });
};

const renderButtons = () => {
  initialButtons(context[sessionStorage.getItem(KEY.CURRENT_TYPE)].buttons, administrativeTaskMapper);
}

const initialButtons = (buttonMessages, buttonActionMapper) => {
  const buttonContainer = document.getElementById(ELEMENT_ID.BUTTON_CONTAINER);
  const type = sessionStorage.getItem(KEY.CURRENT_TYPE);

  Object.entries(buttonMessages).forEach(([key, name]) => {
    const button = document.createElement(TAG.DIV);
    button.className = CLASS.BUTTON_ITEM;
    button.textContent = name;

    button.addEventListener(EVENT.CLICK, buttonActionMapper[type][key]);
    buttonContainer.appendChild(button);
  });
}

const update = async () => {
  sessionStorage.setItem(KEY.SELECTED_BUTTON_TYPE, JSON.stringify(VALUE.UPDATE));
  window.location.href = LOCATION.INPUT; // 수정 화면으로 이동
}

const deleteItem = async () => {
  const id = sessionStorage.getItem(KEY.SELECTED_DATA_ID); // 직접 관리되는 키 사용
  // confirm 다이얼로그 표시
  const userConfirmed = confirm(POP_UP.DELETE.QUESTION);
  if (userConfirmed) {
    try {
      await fetchDeleteOfficeSupply(id); // 삭제 API 호출
      alert(POP_UP.DELETE.OK); // 성공 메시지
      window.location.href = LOCATION.HOME; // 홈 화면으로 이동
    } catch (error) {
      console.error(POP_UP.DELETE.CONSOLE_ERROR, error); // 에러 메시지 로깅
      alert(POP_UP.DELETE.ERROR); // 사용자에게 에러 메시지 알림
    }
  } else {
    window.history.back(); // 취소 선택 시 이전 페이지로 이동
  }
};

const administrativeTaskMapper = {
  OFFICESUPPLY_DETAIL: {
    UPDATE: update,
    DELETE: deleteItem
  }
}


