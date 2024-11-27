import {
  fetchGetContractById,
  fetchGetEndorsementById,
  fetchGetReContractById,
  fetchGetRevivalById,
  fetchGetTerminationById
} from "../../../../apiUtils/apiDocumentation/employee/contractManagement/contractManagement.js";
import {renderButtons} from "../../../buttonManager/employee/contractManagement/detail.js";
import {ELEMENT_ID, KEY, TAG} from "../../../../../../config/common.js";
import {
  ACCIDENT_HISTORY_DETAIL_LABEL,
  CONTRACT_LABEL,
  CUSTOMER_LABEL,
  ENDORSEMENT_DETAIL_LABEL,
  RECONTRACT_DETAIL_LABEL, REVIVAL_DETAIL_LABEL,
  SURGERY_HISTORY_DETAIL_LABEL, TERMINATION_DETAIL_LABEL
} from "../../../../../../config/employee/contractManagement/contractManagement.js";

const accidentHistoryDetail = (data) => {
  return [
    { label: ACCIDENT_HISTORY_DETAIL_LABEL.ID,              value: data.id },
    { label: ACCIDENT_HISTORY_DETAIL_LABEL.ACCIDENT_DETAIL, value: data.accidentDetail },
    { label: ACCIDENT_HISTORY_DETAIL_LABEL.DATE,            value: data.date }
  ];
}

const surgeryHistoryDetail = (data) => {
  return [
    { label: SURGERY_HISTORY_DETAIL_LABEL.ID,               value: data.id },
    { label: SURGERY_HISTORY_DETAIL_LABEL.NAME,             value: data.name },
    { label: SURGERY_HISTORY_DETAIL_LABEL.HOSPITAL_NAME,    value: data.hospitalName },
    { label: SURGERY_HISTORY_DETAIL_LABEL.DATE,             value: data.date }
  ];
}

const customerDetail = (data) => {
  const customer = data.customerInfoResponse;
  return [
    { label: CUSTOMER_LABEL.NAME,                           value: customer.name },
    { label: CUSTOMER_LABEL.PHONE_NUMBER,                   value: customer.phoneNumber },
    { label: CUSTOMER_LABEL.JOB,                            value: customer.job },
    { label: CUSTOMER_LABEL.AGE,                            value: customer.age },
    { label: CUSTOMER_LABEL.GENDER,                         value: customer.gender },
    { label: CUSTOMER_LABEL.RESIDENT_REGISTRATION_NUMBER,   value: customer.residentRegistrationNumber },
    { label: CUSTOMER_LABEL.ADDRESS,                        value: customer.address },
    { label: CUSTOMER_LABEL.BANK_ACCOUNT,                   value: customer.bankAccount },
    { label: CUSTOMER_LABEL.PROPERTY,                       value: customer.property },
    { label: CUSTOMER_LABEL.ACCIDENT_HISTORY,               value: customer.accidentHistoryList.map(item => accidentHistoryDetail(item)) },
    { label: CUSTOMER_LABEL.SURGERY_HISTORY,                value: customer.surgeryHistoryList.map(item => surgeryHistoryDetail(item)) }
  ];
}

const contractDetail = (data) => {
  const details = customerDetail(data);
  details.push(
    { label: CONTRACT_LABEL.PRODUCT_ID,                     value: data.productId },
    { label: CONTRACT_LABEL.LAST_PAID_DATE,                 value: data.lastPaidDate }
  );
  return details;
}

const recontractDetail = (data) => {
  const details = customerDetail(data);
  details.push(
    { label: RECONTRACT_DETAIL_LABEL.PRODUCT_ID,            value: data.productId },
    { label: RECONTRACT_DETAIL_LABEL.EXPIRATION_DATE,       value: data.expirationDate },
    { label: RECONTRACT_DETAIL_LABEL.RECONTRACT_STATUS,     value: data.reContractStatus }
  );
  return details;
}

const endorsementDetail = (data) => {
  const details = customerDetail(data);
  details.push(
    { label: ENDORSEMENT_DETAIL_LABEL.PRODUCT_ID,           value: data.productId },
    { label: ENDORSEMENT_DETAIL_LABEL.APPLY_DATE,           value: data.applyDate },
    { label: ENDORSEMENT_DETAIL_LABEL.ENDORSEMENT_STATUS,   value: data.endorsementStatus }
  );
  return details;
}

const revivalDetail = (data) => {
  const details = customerDetail(data);
  details.push(
    { label: REVIVAL_DETAIL_LABEL.PRODUCT_ID,               value: data.productId },
    { label: REVIVAL_DETAIL_LABEL.TERMINATION_DATE,         value: data.terminationDate },
    { label: REVIVAL_DETAIL_LABEL.REVIVAL_STATUS,           value: data.revivalStatus }
  );
  return details;
}

const terminationDetail = (data) => {
  const details = customerDetail(data);
  details.push(
    { label: TERMINATION_DETAIL_LABEL.PRODUCT_ID,           value: data.productId },
    { label: TERMINATION_DETAIL_LABEL.APPLY_DATE,           value: data.applyDate },
    { label: TERMINATION_DETAIL_LABEL.TERMINATION_FEE,      value: data.terminationFee },
    { label: TERMINATION_DETAIL_LABEL.TERMINATION_STATUS,   value: data.terminationStatus }
  );
  return details;
}

const context = {
  DEFAULT_CONTRACT: {
    detailGetter: contractDetail,
    fetchGetById: fetchGetContractById
  },
  RECONTRACT: {
    detailGetter: recontractDetail,
    fetchGetById: fetchGetReContractById
  },
  ENDORSEMENT: {
    detailGetter: endorsementDetail,
    fetchGetById: fetchGetEndorsementById
  },
  REVIVAL: {
    detailGetter: revivalDetail,
    fetchGetById: fetchGetRevivalById
  },
  TERMINATION: {
    detailGetter: terminationDetail,
    fetchGetById: fetchGetTerminationById
  }
}

export const renderDetails = async () => {
  const selectedDataId = sessionStorage.getItem(KEY.SELECTED_DATA_ID);
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
