import { BUTTON, DETAIL_COLUMN_NAME, POP_UP } from "../../../../../../config/employee/underWriting/underWriting.js";
import {
  fetchGetContractDetail,
  fetchReviewAcquisition
} from "../../../../apiUtils/apiDocumentation/employee/underWriting/underWriting.js";
import {ELEMENT_ID, KEY, LOCATION, TAG} from "../../../../../../config/common.js";
import {initialButtons} from "../../../common/buttonUtils.js";

const contractDetail = (dto) => {
  return [
    { label: DETAIL_COLUMN_NAME.REVIEW_ACQUISITION.ID, value: dto.id },
    { label: DETAIL_COLUMN_NAME.REVIEW_ACQUISITION.CONTRACT_STATUS, value: dto.contractStatus },
    { label: DETAIL_COLUMN_NAME.REVIEW_ACQUISITION.PRODUCT_ID, value: dto.productId },
    { label: DETAIL_COLUMN_NAME.REVIEW_ACQUISITION.NAME, value: dto.name },
    { label: DETAIL_COLUMN_NAME.REVIEW_ACQUISITION.PHONE_NUMBER, value: dto.phoneNumber },
    { label: DETAIL_COLUMN_NAME.REVIEW_ACQUISITION.JOB, value: dto.job },
    { label: DETAIL_COLUMN_NAME.REVIEW_ACQUISITION.AGE, value: dto.age },
    { label: DETAIL_COLUMN_NAME.REVIEW_ACQUISITION.GENDER, value: dto.gender },
    { label: DETAIL_COLUMN_NAME.REVIEW_ACQUISITION.RESIDENT_REGISTRATION_NUMBER, value: dto.residentRegistrationNumber },
    { label: DETAIL_COLUMN_NAME.REVIEW_ACQUISITION.ADDRESS, value: dto.address },
    { label: DETAIL_COLUMN_NAME.REVIEW_ACQUISITION.BANK_ACCOUNT, value: dto.bankAccount },
    { label: DETAIL_COLUMN_NAME.REVIEW_ACQUISITION.PROPERTY, value: dto.property },
    { label: DETAIL_COLUMN_NAME.REVIEW_ACQUISITION.ACCIDENT_HISTORIES, value: dto.accidentHistories.map(item => accidentHistory(item)) },
    { label: DETAIL_COLUMN_NAME.REVIEW_ACQUISITION.SURGERY_HISTORIES, value: dto.surgeryHistories.map(item => surgeryHistory(item)) },
    { label: DETAIL_COLUMN_NAME.REVIEW_ACQUISITION.DISEASE_HISTORIES, value: dto.diseaseHistories.map(item => diseaseHistory(item)) }
  ];
};

const accidentHistory = (dto) => {
  return [
    { label: DETAIL_COLUMN_NAME.REVIEW_ACQUISITION.LIST.ACCIDENT_HISTORY.ID, value: dto.id },
    { label: DETAIL_COLUMN_NAME.REVIEW_ACQUISITION.LIST.ACCIDENT_HISTORY.ACCIDENT_DETAIL, value: dto.accidentDetail },
    { label: DETAIL_COLUMN_NAME.REVIEW_ACQUISITION.LIST.ACCIDENT_HISTORY.DATE, value: dto.date }
  ];
};

const surgeryHistory = (dto) => {
  return [
    { label: DETAIL_COLUMN_NAME.REVIEW_ACQUISITION.LIST.SURGERY_HISTORY.ID, value: dto.id },
    { label: DETAIL_COLUMN_NAME.REVIEW_ACQUISITION.LIST.SURGERY_HISTORY.NAME, value: dto.name },
    { label: DETAIL_COLUMN_NAME.REVIEW_ACQUISITION.LIST.SURGERY_HISTORY.HOSPITAL_NAME, value: dto.hospitalName },
    { label: DETAIL_COLUMN_NAME.REVIEW_ACQUISITION.LIST.SURGERY_HISTORY.DATE, value: dto.date }
  ];
};

const diseaseHistory = (dto) => {
  return [
    { label: DETAIL_COLUMN_NAME.REVIEW_ACQUISITION.LIST.DISEASE_HISTORY.ID, value: dto.id },
    { label: DETAIL_COLUMN_NAME.REVIEW_ACQUISITION.LIST.DISEASE_HISTORY.NAME, value: dto.name },
    { label: DETAIL_COLUMN_NAME.REVIEW_ACQUISITION.LIST.DISEASE_HISTORY.DATE_OF_DIAGNOSIS, value: dto.date_of_diagnosis }
  ];
};

const context = {
  REVIEW_ACQUISITION: {
    detailGetter: contractDetail,
    fetchGetById: fetchGetContractDetail,
    fetchReviewAcquisition: fetchReviewAcquisition,
    buttons: BUTTON.TASK.EMPLOYEE.UNDERWRITING.REVIEW_ACQUISITION
  },
  APPLY_COPERATION: {},
  APPLY_REINSURANCE: {}
};

export const renderDetails = async () => {
  const selectedDataId = JSON.parse(sessionStorage.getItem(KEY.SELECTED_DATA_ID));
  const type = sessionStorage.getItem(KEY.CURRENT_TYPE);

  if (selectedDataId) {
    const selectedData = await context[type].fetchGetById(selectedDataId);
    console.log(selectedData);
    renderDetailsTable(selectedData);
    renderButtons(selectedDataId);
  }
};

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
};

const renderButtons = (selectedDataId) => {
  initialButtons(context[sessionStorage.getItem(KEY.CURRENT_TYPE)].buttons, underwritingTaskMapper(selectedDataId));
};

const acceptanceInsurance = async (selectedDataId) => {
  const result = await context.REVIEW_ACQUISITION.fetchReviewAcquisition(selectedDataId, true);
  if(result !== null){
    alert(POP_UP.ACCEPTANCE);
    window.location.href = LOCATION.HOME;
  } else
    window.history.back()
};

const deniedInsurance = async (selectedDataId) => {
  const result = await context.REVIEW_ACQUISITION.fetchReviewAcquisition(selectedDataId, false);
  if(result !== null) {
    alert(POP_UP.DENIED);
    window.location.href = LOCATION.HOME;
  } else
    window.history.back()
};

const underwritingTaskMapper = (selectedDataId) => ({
  ACCEPTANCE: () => acceptanceInsurance(selectedDataId),
  DENIED: () => deniedInsurance(selectedDataId)
});
