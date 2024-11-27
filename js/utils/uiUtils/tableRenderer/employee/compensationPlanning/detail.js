import {
  fetchGetPartnerCompanyDetailById
} from "../../../../apiUtils/apiDocumentation/employee/compensationPlanning/compensationPlanning.js";
import {renderButtons} from "../../../buttonManager/employee/compensationPlanning/detail.js";
import {ELEMENT_ID, KEY, TAG} from "../../../../../../config/common.js";
import {
  PARTNER_COMPANY_DETAIL_LABEL,
  PARTNER_COMPANY_TYPE
} from "../../../../../../config/employee/compensationPlanning/compensationPlanning.js";

const partnerCompanyDetail = (data) => {
  return [
    { label: PARTNER_COMPANY_DETAIL_LABEL.ID,                 value: data.id },
    { label: PARTNER_COMPANY_DETAIL_LABEL.NAME,               value: data.name },
    { label: PARTNER_COMPANY_DETAIL_LABEL.PHONE_NUMBER,       value: data.phoneNumber },
    { label: PARTNER_COMPANY_DETAIL_LABEL.TYPE,               value: PARTNER_COMPANY_TYPE[data.type] },
    { label: PARTNER_COMPANY_DETAIL_LABEL.HEAD_NAME,          value: data.headName },
    { label: PARTNER_COMPANY_DETAIL_LABEL.HEAD_PHONE_NUMBER,  value: data.headPhoneNumber }
  ];
}

const context = {
  EVALUATE_PARTNERCOMPANY: {
    detailGetter: partnerCompanyDetail,
    fetchGetById: fetchGetPartnerCompanyDetailById
  },
  MANAGEMENT_PARTNERCOMPANY: {
    detailGetter: partnerCompanyDetail,
    fetchGetById: fetchGetPartnerCompanyDetailById
  }
}

export const renderDetails = async () => {
  const selectedDataId = JSON.parse(sessionStorage.getItem(KEY.SELECTED_DATA_ID));
  const type = sessionStorage.getItem(KEY.CURRENT_TYPE);

  if (selectedDataId) {
    const selectedData = await context[type].fetchGetById(selectedDataId);
    if (selectedData == null) return;
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
      const tableHead = document.createElement(TAG.TH);
      tableHead.textContent = detail.label;

      const tableData = document.createElement(TAG.TD);
      detail.value.forEach(listDetail => {
        const nestedTable = document.createElement(TAG.TABLE);
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
}
