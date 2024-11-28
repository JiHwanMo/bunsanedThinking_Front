import {
  fetchDeleteCustomerInformation,
  fetchGetCustomerInformation
} from "../../../../apiUtils/apiDocumentation/employee/customerInformationManagement/customerInformationManagement.js";
import {
  ACCIDENT_HISTORY_LIST,
  BUTTON,
  DETAIL_COLUMN_NAME, DISEASE_HISTORY_LIST, MESSAGES, POP_UP, SURGERY_HISTORY_LIST, VALUE
} from "../../../../../../config/employee/customerInformationManagement/customerInformationManagement.js";
import {CLASS, ELEMENT_ID, EVENT, KEY, LOCATION, TAG} from "../../../../../../config/common.js";

const customerInformationDetail = (data) => {
  return [
    { label: DETAIL_COLUMN_NAME.CUSTOMER_LIST.NAME, value: data.name },
    { label: DETAIL_COLUMN_NAME.CUSTOMER_LIST.PHONE_NUMBER, value: data.phoneNumber },
    { label: DETAIL_COLUMN_NAME.CUSTOMER_LIST.JOB, value: data.job },
    { label: DETAIL_COLUMN_NAME.CUSTOMER_LIST.AGE, value: data.age },
    { label: DETAIL_COLUMN_NAME.CUSTOMER_LIST.GENDER, value: data.gender},
    { label: DETAIL_COLUMN_NAME.CUSTOMER_LIST.RESIDENT_REGISTRATION_NUMBER, value: data.residentRegistrationNumber },
    { label: DETAIL_COLUMN_NAME.CUSTOMER_LIST.ADDRESS, value: data.address },
    { label: DETAIL_COLUMN_NAME.CUSTOMER_LIST.PROPERTY, value: data.property },
    { label: DETAIL_COLUMN_NAME.CUSTOMER_LIST.ACCIDENT_HISTORY, value: data.accidentHistoryList.map(item => accidentHistory(item)) || MESSAGES.NONE },
    { label: DETAIL_COLUMN_NAME.CUSTOMER_LIST.SURGERY_HISTORY, value: data.surgeryHistoryList.map(item => surgeryHistory(item)) || MESSAGES.NONE },
    { label: DETAIL_COLUMN_NAME.CUSTOMER_LIST.DISEASE_HISTORY, value: data.diseaseHistoryList.map(item => diseaseHistory(item)) || MESSAGES.NONE },
    { label: DETAIL_COLUMN_NAME.CUSTOMER_LIST.BANK_NAME, value: data.bankName },
    { label: DETAIL_COLUMN_NAME.CUSTOMER_LIST.BANK_ACCOUNT, value: data.bankAccount },
    { label: DETAIL_COLUMN_NAME.CUSTOMER_LIST.ID, value: data.id },
  ];
};

const accidentHistory = (data) => [
  { label: ACCIDENT_HISTORY_LIST.LABEL_ID, value: data.id },
  { label: ACCIDENT_HISTORY_LIST.LABEL_ACCIDENT_DETAIL, value: data.accidentDetail },
  { label: ACCIDENT_HISTORY_LIST.LABEL_DATE, value: data.date },
];

const surgeryHistory = (data) => [
  { label: SURGERY_HISTORY_LIST.LABEL_ID, value: data.id },
  { label: SURGERY_HISTORY_LIST.LABEL_NAME, value: data.name },
  { label: SURGERY_HISTORY_LIST.LABEL_HOSPITAL_NAME, value: data.hospitalName },
  { label: SURGERY_HISTORY_LIST.LABEL_DATE, value: data.date },
];

const diseaseHistory = (data) => [
  { label: DISEASE_HISTORY_LIST.LABEL_ID, value: data.id },
  { label: DISEASE_HISTORY_LIST.LABEL_NAME, value: data.name },
  { label: DISEASE_HISTORY_LIST.LABEL_DATE_OF_DIAGNOSIS, value: data.date_of_diagnosis },
];

const context = {
  CUSTOMERINFORMATION_DETAIL: {
    detailGetter: customerInformationDetail,
    fetchGetById: fetchGetCustomerInformation,
    fetchDelete: fetchDeleteCustomerInformation,
    buttons: BUTTON.TASK.EMPLOYEE.CUSTOMERINFORMATIONMANAGEMENT.CUSTOMERINFORMATION_DETAIL,
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

    if (Array.isArray(detail.value)) {
      // 배열인 경우
      const tableHead = document.createElement(TAG.TH);
      tableHead.textContent = detail.label;

      const tableData = document.createElement(TAG.TD);
      detail.value.forEach(listDetail => {
        const nestedTable = document.createElement(TAG.TABLE);

        // 배열의 각 객체를 순회
        if (Array.isArray(listDetail)) {
          listDetail.forEach(item => {
            const nestedRow = document.createElement(TAG.TR);

            const labelCell = document.createElement(TAG.TH);
            labelCell.textContent = item.label;

            const valueCell = document.createElement(TAG.TD);
            valueCell.textContent = item.value;

            nestedRow.appendChild(labelCell);
            nestedRow.appendChild(valueCell);

            nestedTable.appendChild(nestedRow);
          });
        } else {
          // 객체 형태로 들어올 경우 처리
          Object.entries(listDetail).forEach(([key, value]) => {
            const nestedRow = document.createElement(TAG.TR);

            const labelCell = document.createElement(TAG.TH);
            labelCell.textContent = key; // 객체의 키

            const valueCell = document.createElement(TAG.TD);
            valueCell.textContent = value; // 객체의 값

            nestedRow.appendChild(labelCell);
            nestedRow.appendChild(valueCell);

            nestedTable.appendChild(nestedRow);
          });
        }
        tableData.appendChild(nestedTable);
      });

      row.appendChild(tableHead);
      row.appendChild(tableData);
    } else {
      // 배열이 아닌 일반 값 처리
      const labelCell = document.createElement(TAG.TH);
      labelCell.textContent = detail.label;

      const valueCell = document.createElement(TAG.TD);
      valueCell.textContent = detail.value;

      row.appendChild(labelCell);
      row.appendChild(valueCell);
    }
    detailsTable.querySelector(TAG.TBODY).appendChild(row);
  });
};


const renderButtons = () => {
  initialButtons(context[sessionStorage.getItem(KEY.CURRENT_TYPE)].buttons, customerInformationTaskMapper);
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

const update = () => {
  sessionStorage.setItem(KEY.SELECTED_BUTTON_TYPE, JSON.stringify(VALUE.UPDATE));
  window.location.href = LOCATION.INPUT;
}

const deleteItem = async () => {
  const id = sessionStorage.getItem(KEY.SELECTED_DATA_ID)
  const userConfirmed = confirm(POP_UP.DELETE.QUESTION);
  if (userConfirmed) {
    try {
      await fetchDeleteCustomerInformation(id);
      alert(POP_UP.DELETE.OK);
      window.location.href = LOCATION.HOME;
    } catch (error) {
      console.error(POP_UP.DELETE.CONSOLE_ERROR, error);
      alert(POP_UP.DELETE.ERROR);
    }
  } else {
    window.history.back();
  }
};


const customerInformationTaskMapper = {
  CUSTOMERINFORMATION_DETAIL: {
    UPDATE: update,
    DELETE: deleteItem
  }
}











