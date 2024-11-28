import { fetchGetReport } from "../../../apiUtils/apiDocumentation/partnerCompany/partnerCompany.js";
import {ACTION, BUTTON, DETAIL_COLUMN_NAME, POP_UP, TYPE} from "../../../../../config/partnerCompany/partnerCompany.js";
import {CLASS, ELEMENT_ID, EVENT, KEY, LOCATION, TAG} from "../../../../../config/common.js";

const reportDetail = (data) => {
  return [
    { label: DETAIL_COLUMN_NAME.REPORT_LIST.ACCIDENT_ID, value: data.id },
    { label: DETAIL_COLUMN_NAME.REPORT_LIST.DAMAGE_ASSESSMENT_MONEY, value: data.damageAssessmentMoney }
  ];
}

const context = {
  REPORT_DETAIL: {
    detailGetter: reportDetail,
    fetchGetById: fetchGetReport,
    buttons: BUTTON.TASK.PARTNERCOMPANY.REPORT_DETAIL
  }
}

export const renderDetails = async () => {
  const selectedDataId = JSON.parse(sessionStorage.getItem(KEY.SELECTED_DATA_ID));
  if (!selectedDataId) {
    console.error(POP_UP.CONSOLE_ERROR.SELECTED_DATA_ID);
    return;
  }

  const selectedData = await context.REPORT_DETAIL.fetchGetById(selectedDataId);
  if (selectedData) {
    renderDetailsTable(selectedData);
    renderButtons();
  } else {
    console.error(POP_UP.CONSOLE_ERROR.SELECTED_DATA);
  }
}

const renderDetailsTable = (data) => {
  const detailsTable = document.getElementById(ELEMENT_ID.DETAILS_TABLE);
  const details = context.REPORT_DETAIL.detailGetter(data);

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
  initialButtons(context.REPORT_DETAIL.buttons, partnerCompanyTaskMapper);
};

const initialButtons = (buttonMessages, buttonActionMapper) => {
  const buttonContainer = document.getElementById(ELEMENT_ID.BUTTON_CONTAINER);
  const type = TYPE.REPORT_DETAIL; // REPORT_DETAIL로 고정

  Object.entries(buttonMessages).forEach(([key, name]) => {
    const button = document.createElement(TAG.DIV);
    button.className = CLASS.BUTTON_ITEM;
    button.textContent = name;

    // 액션 매핑 확인 및 이벤트 설정
    const action = buttonActionMapper[type]?.[key];
    if (typeof action === ACTION.FUNCTION) {
      button.addEventListener(EVENT.CLICK, action);
    }
    buttonContainer.appendChild(button);
  });
};


const update = () => {
  window.location.href = LOCATION.INPUT;
}

const partnerCompanyTaskMapper = {
  REPORT_DETAIL: {
    UPDATE: update
  }
}

