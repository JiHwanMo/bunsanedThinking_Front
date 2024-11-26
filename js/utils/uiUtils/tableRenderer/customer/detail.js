import {
  fetchGetContractById,
  fetchGetInsuranceByProductId,
  fetchGetLoanByProductId
} from "../../../apiUtils/apiDocumentation/customer/customer.js";
import {renderButtons} from "../../buttonManager/customer/detail.js";
import {ELEMENT_ID, KEY, STRING_EMPTY, TAG} from "../../../../../config/common.js";
import {
  COLLATERAL_TYPE_STR, CONTRACT_DETAIL,
  INJURY_TYPE_STR, INSURANCE_DETAIL, INSURANCE_TYPE_STR, LOAN_DETAIL,
  LOAN_TYPE_STR, ONE_BLANK,
  SERVICE_TYPE_STR,
  VEHICLE_TYPE_STR
} from "../../../../../config/customer/customer.js";

const insuranceDetail = (data) => {
  const LABEL = INSURANCE_DETAIL.DETAIL_LABEL;
  const detail = [
    { label: LABEL.NAME,            value: data.name },
    { label: LABEL.INSURANCE_TYPE,  value: INSURANCE_TYPE_STR[data.insuranceType] },
    { label: LABEL.ID,              value: data.id },
    { label: LABEL.AGE_RANGE,       value: data.ageRange },
    { label: LABEL.COVERAGE,        value: data.coverage },
    { label: LABEL.MONTHLY_PREMIUM, value: data.monthlyPremium },
    { label: LABEL.CONTRACT_PERIOD, value: data.contractPeriod }
  ];
  switch(data.insuranceType) {
    case INSURANCE_DETAIL.AUTOMOBILE_DETAIL.TYPE_NAME: return automobileDetail(detail, data);
    case INSURANCE_DETAIL.DISEASE_DETAIL.TYPE_NAME: return diseaseDetail(detail, data);
    case INSURANCE_DETAIL.INJURY_DETAIL.TYPE_NAME: return injuryDetail(detail, data);
    default: return detail;
  }
}

const automobileDetail = (detail, data) => {
  const LABEL = INSURANCE_DETAIL.AUTOMOBILE_DETAIL.DETAIL_LABEL;
  let serviceStr = STRING_EMPTY;
  for (const service of data.serviceList)
    serviceStr += SERVICE_TYPE_STR[service] + ONE_BLANK;
  detail.push(
    { label: LABEL.SERVICE_LIST,    value: serviceStr },
    { label: LABEL.VEHICLE_TYPE,    value: VEHICLE_TYPE_STR[data.vehicleType] },
    { label: LABEL.ACCIDENT_LIMIT,  value: data.accidentLimit }
  );
  return detail;
}

const diseaseDetail = (detail, data) => {
  const LABEL = INSURANCE_DETAIL.DISEASE_DETAIL.DETAIL_LABEL;
  detail.push(
    { label: LABEL.DISEASE_NAME,    value: data.diseaseName },
    { label: LABEL.DISEASE_LIMIT,   value: data.diseaseLimit }
  );
  return detail;
}

const injuryDetail = (detail, data) => {
  const LABEL = INSURANCE_DETAIL.INJURY_DETAIL.DETAIL_LABEL;
  detail.push(
    { label: LABEL.INJURY_TYPE,     value: INJURY_TYPE_STR[data.injuryType] },
    { label: LABEL.SURGERIES_LIMIT, value: data.surgeriesLimit }
  );
  return detail;
}

const loanDetail = (data) => {
  const LABEL = LOAN_DETAIL.DETAIL_LABEL;
  const detail = [
    { label: LABEL.NAME,            value: data.name },
    { label: LABEL.LOAN_TYPE,       value: LOAN_TYPE_STR[data.loanType] },
    { label: LABEL.ID,              value: data.id },
    { label: LABEL.INTEREST_RATE,   value: data.interestRate },
    { label: LABEL.MAXIMUM_MONEY,   value: data.maximumMoney },
    { label: LABEL.MINIMUM_ASSET,   value: data.minimumAsset }
  ];
  switch(data.loanType) {
    case LOAN_DETAIL.COLLATERAL_DETAIL.TYPE_NAME: return collateralDetail(detail, data);
    case LOAN_DETAIL.FIXEDDEPOSIT_DETAIL.TYPE_NAME: return fixedDepositDetail(detail, data);
    case LOAN_DETAIL.INSURANCE_CONTRACT_DETAIL.TYPE_NAME: return insuranceContractDetail(detail, data);
    default: return detail;
  }
}

const collateralDetail = (detail, data) => {
  const LABEL = LOAN_DETAIL.COLLATERAL_DETAIL.DETAIL_LABEL;
  detail.push(
    { label: LABEL.COLLATERAL_TYPE, value: COLLATERAL_TYPE_STR[data.collateralType] },
    { label: LABEL.MINIMUM_VALUE,   value: data.minimumValue }
  );
  return detail;
}

const fixedDepositDetail = (detail, data) => {
  const LABEL = LOAN_DETAIL.FIXEDDEPOSIT_DETAIL.DETAIL_LABEL;
  detail.push(
    { label: LABEL.MINIMUM_AMOUNT,  value: data.minimumAmount }
  );
  return detail;
}

const insuranceContractDetail = (detail, data) => {
  const LABEL = LOAN_DETAIL.INSURANCE_CONTRACT_DETAIL.DETAIL_LABEL;
  detail.push(
    { label: LABEL.INSURANCE_ID,    value: data.insuranceId }
  );
  return detail;
}

const contractDetail = (data) => {
  return [
    { label: CONTRACT_DETAIL.NAME,            value: data.name }, // insurance
    { label: CONTRACT_DETAIL.INSURANCE_ID,    value: data.insuranceId },
    { label: CONTRACT_DETAIL.AGE_RANGE,       value: data.ageRange },
    { label: CONTRACT_DETAIL.MONTHLY_PREMIUM, value: data.monthlyPremium },
    { label: CONTRACT_DETAIL.EXPIRATION_DATE, value: data.expirationDate }, // contract
    { label: CONTRACT_DETAIL.DATE,            value: data.date },
    { label: CONTRACT_DETAIL.PAYMENT_DATE,    value: data.paymentDate },
    { label: CONTRACT_DETAIL.STATUS,          value: data.status }
  ];
}

const context = {
  MANAGEMENT_CONTRACT: {
    needCustomerId: true,
    detailGetter: contractDetail,
    fetchGetById: fetchGetContractById
  },
  INSURANCE_LIST: {
    needCustomerId: false,
    detailGetter: insuranceDetail,
    fetchGetById: fetchGetInsuranceByProductId
  },
  LOAN_LIST: {
    needCustomerId: false,
    detailGetter: loanDetail,
    fetchGetById: fetchGetLoanByProductId
  }
}

export const renderDetails = async () => {
  // 세션에서 데이터 가져오기
  const selectedDataId = JSON.parse(sessionStorage.getItem(KEY.SELECTED_DATA_ID));
  const type = sessionStorage.getItem(KEY.CURRENT_TYPE);

  // 세션에 데이터가 있으면 렌더링
  if (selectedDataId) {
    const selectedData = context[type] ?
      await context[type].fetchGetById(selectedDataId, sessionStorage.getItem(KEY.LOGIN_ID)) :
      await context[type].fetchGetById(selectedDataId);
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
