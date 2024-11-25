import {
  fetchGetAccident,
  fetchGetComplaint
} from "../../../../apiUtils/apiDocumentation/employee/customerSupport/customerSupport.js";
import {COLUMN_NAME} from "../../../../../../config/employee/customerSupport/customerSupport.js";
import {ELEMENT_ID as COMMON_ELEMENT_ID, KEY, TAG} from "../../../../../../config/common.js";

const accidentDetail = (data) => {
  return [
    { label: COLUMN_NAME.HANDLE_REPORT.ACCIDENT_ID, value: data.id },
    { label: COLUMN_NAME.HANDLE_REPORT.SERVICE_TYPE, value: data.serviceType },
    { label: COLUMN_NAME.HANDLE_REPORT.ACCIDENT_DATE, value: data.date },
    { label: COLUMN_NAME.HANDLE_REPORT.ACCIDENT_LOCATION, value: data.location },
    { label: COLUMN_NAME.HANDLE_REPORT.CUSTOMER_NAME, value: data.customerName },
    { label: COLUMN_NAME.HANDLE_REPORT.CUSTOMER_PHONE_NUMBER, value: data.customerPhoneNumber },
    { label: COLUMN_NAME.HANDLE_REPORT.PROCESS_STATUS, value: data.processStatus }
  ];
}

const complaintDetail = (data) => {
  return [
    { label: COLUMN_NAME.HANDLE_COMPLAINT.COMPLAINT_TYPE, value: data.complaint.complaintType },
    { label: COLUMN_NAME.HANDLE_COMPLAINT.COMPLAINT_CONTENT, value: data.complaint.content },
    { label: COLUMN_NAME.HANDLE_COMPLAINT.COMPLAINT_TITLE, value: data.complaint.title },
    { label: COLUMN_NAME.HANDLE_COMPLAINT.PROCESS_STATUS, value: data.complaint.processStatus },
    { label: COLUMN_NAME.HANDLE_COMPLAINT.CUSTOMER_NAME, value: data.customer.name },
    { label: COLUMN_NAME.HANDLE_COMPLAINT.CUSTOMER_PHONE_NUMBER, value: data.customer.phoneNumber }
  ];
}

const context = {
  HANDLE_REPORT: {
    detailGetter: accidentDetail,
    fetchGetById: fetchGetAccident
  },
  HANDLE_COMPLAINT: {
    detailGetter: complaintDetail,
    fetchGetById: fetchGetComplaint
  }
}

export const renderDetails = async () => {
  // 세션에서 데이터 가져오기
  const selectedDataId = JSON.parse(sessionStorage.getItem(KEY.SELECTED_DATA_ID));
  const type = sessionStorage.getItem(KEY.CURRENT_TYPE);

  // 세션에 데이터가 있으면 렌더링
  if (selectedDataId) {
    const selectedData = await context[type].fetchGetById(selectedDataId);
    renderDetailsTable(selectedData);
  }
};

// 상세 정보를 테이블 형식으로 렌더링하는 함수
const renderDetailsTable = (data) => {
  const detailsTable = document.getElementById(COMMON_ELEMENT_ID.DETAILS_TABLE);

  const details = context[sessionStorage.getItem(KEY.CURRENT_TYPE)].detailGetter(data);

  // 테이블에 각 정보를 추가
  details.forEach(detail => {
    const row = document.createElement(TAG.TR);
    if (Array.isArray(detail.value)) {
      const tableHead = document.createElement(TAG.TH);
      tableHead.textContent = detail.label;

      const tableData = document.createElement(TAG.TD);
      detail.value.forEach(listDetail => {
        const nestedTable = document.createElement(TAG.TABLE);
        listDetail.forEach(item => {
          const nestedRow = document.createElement(TAG.TR)
          const labelCell = document.createElement(TAG.TH);
          labelCell.textContent = item.label;

          const valueCell = document.createElement(TAG.TD);
          valueCell.textContent = item.value;

          nestedRow.appendChild(labelCell);
          nestedRow.appendChild(valueCell);

          nestedTable.appendChild(nestedRow);
        });
        tableData.appendChild(nestedTable);
      });
      row.appendChild(tableHead);
      row.appendChild(tableData);
    } else {
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
