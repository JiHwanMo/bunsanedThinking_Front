import { fetchGetDepartment } from "../../../../apiUtils/apiDocumentation/employee/managementPlanning/managementPlanning.js";
import { fetchDeleteDepartment } from "../../../../apiUtils/apiDocumentation/employee/managementPlanning/managementPlanning.js";
import {
  BUTTON, DETAIL_COLUMN_NAME, MESSAGES,
  POP_UP,
  VALUE
} from '../../../../../../config/employee/managementPlanning/managementPlanning.js';
import {CLASS, ELEMENT_ID, EVENT, KEY, LOCATION, TAG} from "../../../../../../config/common.js";

const departmentDetail = (data) => {
  return [
    { label: DETAIL_COLUMN_NAME.DEPARTMENT_LIST.ID, value: data.id },
    { label: DETAIL_COLUMN_NAME.DEPARTMENT_LIST.NAME, value: data.name },
    { label: DETAIL_COLUMN_NAME.DEPARTMENT_LIST.TASK, value: data.task },
    { label: DETAIL_COLUMN_NAME.DEPARTMENT_LIST.PURPOSE, value: data.purpose },
    { label: DETAIL_COLUMN_NAME.DEPARTMENT_LIST.EMPLOYEE_COUNT, value: data.employeeList.length || MESSAGES.NONE },
    { label: DETAIL_COLUMN_NAME.DEPARTMENT_LIST.HEAD_NAME, value: data.headName }
  ];
}

const context = {
  DEPARTMENT_DETAIL: {
    detailGetter: departmentDetail,
    fetchGetById: fetchGetDepartment,
    fetchDelete: fetchDeleteDepartment,
    buttons: BUTTON.TASK.EMPLOYEE.MANAGEMENTPLANNING.DEPARTMENT_DETAIL
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
  initialButtons(context[sessionStorage.getItem(KEY.CURRENT_TYPE)].buttons, managementPlanningTaskMapper);
};

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

const update = () => {
  sessionStorage.setItem(KEY.SELECTED_BUTTON_TYPE, JSON.stringify(VALUE.UPDATE));
  window.location.href = LOCATION.INPUT; // 수정 화면으로 이동
}

const deleteItem = async () => {
  const id = sessionStorage.getItem(KEY.SELECTED_DATA_ID);

  // confirm 다이얼로그 표시
  const userConfirmed = confirm(POP_UP.DELETE.QUESTION);
  if (userConfirmed) {
    try {
      await fetchDeleteDepartment(id); // 삭제 API 호출
      alert(POP_UP.DELETE.OK); // 성공 메시지
      window.location.href = LOCATION.HOME; // 삭제 완료 후 홈 화면으로 이동
    } catch (error) {
      console.error(POP_UP.DELETE.CONSOLE_ERROR, error); // 오류 로그 출력
      alert(POP_UP.DELETE.ERROR); // 오류 메시지
    }
  } else {
    window.history.back(); // 취소 시 이전 페이지로 이동
  }
};

const managementPlanningTaskMapper  = {
  DEPARTMENT_DETAIL: {
    UPDATE: update,
    DELETE: deleteItem
  }
}
