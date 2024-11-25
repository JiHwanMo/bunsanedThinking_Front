import {
  fetchGetLoanProductDetail,
  fetchGetLoanRequest
} from "../../../../apiUtils/apiDocumentation/employee/loanManagement/loanManagement.js";
import {
  COLUMN_NAME,
  DETAIL_COLUMN_NAME,
  LOAN_TYPE
} from "../../../../../../config/employee/loanManagement/loanManagement.js";
import {ELEMENT_ID, KEY, TAG} from "../../../../../../config/common.js";

const loanDetail = (data) => {
  const detail = [
    { label: DETAIL_COLUMN_NAME.MANAGEMENT_LOAN_PRODUCT.NAME, value: data.name },
    { label: DETAIL_COLUMN_NAME.MANAGEMENT_LOAN_PRODUCT.LOAN_TYPE, value: data.loanType },
    { label: DETAIL_COLUMN_NAME.MANAGEMENT_LOAN_PRODUCT.ID, value: data.id },
    { label: DETAIL_COLUMN_NAME.MANAGEMENT_LOAN_PRODUCT.INTEREST_RATE, value: data.interestRate },
    { label: DETAIL_COLUMN_NAME.MANAGEMENT_LOAN_PRODUCT.MAXIMUM_MONEY, value: data.maximumMoney },
    { label: DETAIL_COLUMN_NAME.MANAGEMENT_LOAN_PRODUCT.MINIMUM_ASSET, value: data.minimumAsset }
  ];
  switch(data.loanType) {
    case LOAN_TYPE.COLLATERAL: return collateralDetail(detail, data);
    case LOAN_TYPE.FIXED_DEPOSIT: return fixedDepositDetail(detail, data);
    case LOAN_TYPE.INSURANCE_CONTRACT: return insuranceContractDetail(detail, data);
    default: return detail;
  }
}

const collateralDetail = (detail, data) => {
  detail.push(
    { label: DETAIL_COLUMN_NAME.MANAGEMENT_LOAN_PRODUCT.TYPE.COLLATERAL.COLLATERAL_TYPE, value: data.collateralType },
    { label: DETAIL_COLUMN_NAME.MANAGEMENT_LOAN_PRODUCT.TYPE.COLLATERAL.MINIMUM_VALUE, value: data.minimumValue }
  );
  return detail;
}

const fixedDepositDetail = (detail, data) => {
  detail.push({ label: DETAIL_COLUMN_NAME.MANAGEMENT_LOAN_PRODUCT.TYPE.FIXED_DEPOSIT.MINIMUM_AMOUNT, value: data.minimumAmount });
  return detail;
}

const insuranceContractDetail = (detail, data) => {
  detail.push({ label: DETAIL_COLUMN_NAME.MANAGEMENT_LOAN_PRODUCT.TYPE.INSURANCE_CONTRACT.INSURANCE_ID, value: data.insuranceId });
  return detail;
}

const loanRequestDetail = (data) => {
  return [
    { label: COLUMN_NAME.LOAN_REQUEST.CUSTOMER_NAME, value: data.customer.name },
    { label: COLUMN_NAME.LOAN_REQUEST.PHONE_NUMBER, value: data.customer.phoneNumber },
    { label: COLUMN_NAME.LOAN_REQUEST.JOB, value: data.customer.job },
    { label: COLUMN_NAME.LOAN_REQUEST.AGE, value: data.customer.age },
    { label: COLUMN_NAME.LOAN_REQUEST.GENDER, value: data.customer.gender },
    { label: COLUMN_NAME.LOAN_REQUEST.RESIDENT_REGISTRATION_NUMBER, value: data.customer.residentRegistrationNumber },
    { label: COLUMN_NAME.LOAN_REQUEST.PROPERTY, value: data.customer.property },
    { label: COLUMN_NAME.LOAN_REQUEST.ADDRESS, value: data.customer.address },
    { label: COLUMN_NAME.LOAN_REQUEST.ACCIDENT_HISTORY, value: data.customer.accidentHistoryList.map(item => accidentHistory(item)) },
    { label: COLUMN_NAME.LOAN_REQUEST.SURGERY_HISTORY, value: data.customer.surgeryHistoryList.map(item => surgeryHistory(item)) },
    { label: COLUMN_NAME.LOAN_REQUEST.DISEASE_HISTORY, value: data.customer.diseaseHistoryList.map(item => diseaseHistory(item)) },
    { label: COLUMN_NAME.LOAN_REQUEST.BANK_ACCOUNT, value: data.customer.bankAccount },
    { label: COLUMN_NAME.LOAN_REQUEST.LOAN_NAME, value: data.loan.name },
    { label: COLUMN_NAME.LOAN_REQUEST.LOAN_TYPE, value: data.loan.loanType },
    { label: COLUMN_NAME.LOAN_REQUEST.LOAN_ID, value: data.loan.id },
    { label: COLUMN_NAME.LOAN_REQUEST.INTEREST_RATE, value: data.loan.interestRate },
    { label: COLUMN_NAME.LOAN_REQUEST.MAXIMUM_MONEY, value: data.loan.maximumMoney },
    { label: COLUMN_NAME.LOAN_REQUEST.MINIMUM_ASSET, value: data.loan.minimumAsset },
    { label: COLUMN_NAME.LOAN_REQUEST.CONTRACT_STATUS, value: data.contract.contractStatus }
  ];
}

const accidentHistory = (data) => {
  return [
    { label: COLUMN_NAME.LOAN_REQUEST.ACCIDENT_HISTORY_DETAIL.ID, value: data.id },
    { label: COLUMN_NAME.LOAN_REQUEST.ACCIDENT_HISTORY_DETAIL.ACCIDENT_DETAIL, value: data.accidentDetail },
    { label: COLUMN_NAME.LOAN_REQUEST.ACCIDENT_HISTORY_DETAIL.DATE, value: data.date }
  ];
}

const diseaseHistory = (data) => {
  return [
    { label: COLUMN_NAME.LOAN_REQUEST.DISEASE_HISTORY_DETAIL.ID, value: data.id },
    { label: COLUMN_NAME.LOAN_REQUEST.DISEASE_HISTORY_DETAIL.NAME, value: data.name },
    { label: COLUMN_NAME.LOAN_REQUEST.DISEASE_HISTORY_DETAIL.DATE_OF_DIAGNOSIS, value: data.date_of_diagnosis }
  ];
}

const surgeryHistory = (data) => {
  return [
    { label: COLUMN_NAME.LOAN_REQUEST.SURGERY_HISTORY_DETAIL.ID, value: data.id },
    { label: COLUMN_NAME.LOAN_REQUEST.SURGERY_HISTORY_DETAIL.NAME, value: data.name },
    { label: COLUMN_NAME.LOAN_REQUEST.SURGERY_HISTORY_DETAIL.HOSPITAL_NAME, value: data.hospitalName },
    { label: COLUMN_NAME.LOAN_REQUEST.SURGERY_HISTORY_DETAIL.DATE, value: data.date }
  ];
}

const context = {
  MANAGEMENT_LOAN_PRODUCT: {
    detailGetter: loanDetail,
    fetchGetById: fetchGetLoanProductDetail
  },
  LOAN_REQUEST: {
    detailGetter: loanRequestDetail,
    fetchGetById: fetchGetLoanRequest
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
  const detailsTable = document.getElementById(ELEMENT_ID.DETAILS_TABLE);

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
