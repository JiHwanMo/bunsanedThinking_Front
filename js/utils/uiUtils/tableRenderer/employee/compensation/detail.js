import {
  fetchGetInsuranceMoneyById,
  fetchGetReportById
} from "../../../../apiUtils/apiDocumentation/employee/compensation/compensation.js";
import {renderButtons} from "../../../buttonManager/employee/compensation/detail.js";
import {ELEMENT_ID, KEY, TAG} from "../../../../../../config/common.js";
import {
  ACCIDENT_PROCESS_STATUS_STR, INSURANCE_MONEY_DETAIL_LABEL, REPORT_DETAIL_LABEL, REPORT_PROCESS_STATUS_STR,
  SERVICE_TYPE_STR
} from "../../../../../../config/employee/compensation/compensation.js";

const reportDetail = (data) => {
  const accident = data.accident;
  return [
    { label: REPORT_DETAIL_LABEL.ID,                                  value: data.id },
    { label: REPORT_DETAIL_LABEL.ACCIDENT_ID,                         value: accident.id },
    { label: REPORT_DETAIL_LABEL.SERVICE_TYPE,                        value: SERVICE_TYPE_STR[accident.serviceType] },
    { label: REPORT_DETAIL_LABEL.DATE,                                value: accident.date },
    { label: REPORT_DETAIL_LABEL.LOCATION,                            value: accident.location },
    { label: REPORT_DETAIL_LABEL.CUSTOMER_NAME,                       value: accident.customerName },
    { label: REPORT_DETAIL_LABEL.CUSTOMER_PHONE_NUMBER,               value: accident.customerPhoneNumber },
    { label: REPORT_DETAIL_LABEL.ACCIDENT_PROCESS_STATUS,             value: ACCIDENT_PROCESS_STATUS_STR[accident.processStatus] },
    { label: REPORT_DETAIL_LABEL.REPORT_PROCESS_STATUS,               value: REPORT_PROCESS_STATUS_STR[data.processStatus] },
    { label: REPORT_DETAIL_LABEL.DAMAGE_ASSESSMENT_COMPANY_ID,        value: data.damageAssessmentCompanyID },
    { label: REPORT_DETAIL_LABEL.ROADSIDE_ASSISTANCE_COMPANY_ID,      value: data.roadsideAssistanceCompanyID },
    { label: REPORT_DETAIL_LABEL.DAMAGE_ASSESSMENT_MONEY,             value: data.damageAssessmentMoney }
  ];
}

const insuranceMoneyDetail = (data) => {
  return [
    { label: INSURANCE_MONEY_DETAIL_LABEL.ID,                         value: data.id },
    { label: INSURANCE_MONEY_DETAIL_LABEL.PRODUCT_TYPE,               value: data.productType },
    { label: INSURANCE_MONEY_DETAIL_LABEL.APPLY_DATE,                 value: data.applyDate },
    { label: INSURANCE_MONEY_DETAIL_LABEL.CUSTOMER_NAME,              value: data.customerName },
    { label: INSURANCE_MONEY_DETAIL_LABEL.PROCESS_STATUS,             value: data.processStatus },
    { label: INSURANCE_MONEY_DETAIL_LABEL.MEDICAL_CERTIFICATE,        value: data.medicalCertificate },
    { label: INSURANCE_MONEY_DETAIL_LABEL.RECEIPT,                    value: data.receipt },
    { label: INSURANCE_MONEY_DETAIL_LABEL.RESIDENT_REGISTRATION_CARD, value: data.residentRegistrationCard }
  ];
}

const context = {
  REQUEST_COMPENSATION: {
    detailGetter: reportDetail,
    fetchGetById: fetchGetReportById
  },
  REQUEST_INSURANCE_MONEY: {
    detailGetter: insuranceMoneyDetail,
    fetchGetById: fetchGetInsuranceMoneyById
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
}
