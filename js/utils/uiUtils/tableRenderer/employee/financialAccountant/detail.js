import {
  fetchGetPaymentDetail
} from "../../../../apiUtils/apiDocumentation/employee/financialAccountant/financialAccountant.js";
import {ELEMENT_ID as COMMON_ELEMENT_ID, KEY, TAG} from "../../../../../../config/common.js";
import {COLUMN_NAME} from "../../../../../../config/employee/financialAccountant/financialAccountant.js";

const paymentDetail = (data) => {
  return [
    { label: COLUMN_NAME.HANDLE_PAYMENT_DETAIL.PAYMENT_DETAIL_ID, value: data.id },
    { label: COLUMN_NAME.HANDLE_PAYMENT_DETAIL.PAYMENT_DETAIL_MONEY, value: data.money },
    { label: COLUMN_NAME.HANDLE_PAYMENT_DETAIL.BANK_NAME, value: data.bank },
    { label: COLUMN_NAME.HANDLE_PAYMENT_DETAIL.ACCOUNT_HOLDER, value: data.accountHolder },
    { label: COLUMN_NAME.HANDLE_PAYMENT_DETAIL.BANK_ACCOUNT, value: data.bankAccount },
    { label: COLUMN_NAME.HANDLE_PAYMENT_DETAIL.PAYMENT_TYPE, value: data.paymentType },
    { label: COLUMN_NAME.HANDLE_PAYMENT_DETAIL.PROCESS_STATUS, value: data.processStatus }
  ];
}

const context = {
  HANDLE_PAYMENT_DETAIL: {
    detailGetter: paymentDetail,
    fetchGetById: fetchGetPaymentDetail
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
