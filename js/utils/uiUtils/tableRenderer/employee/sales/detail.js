import {
  BUTTON,
  DETAIL_COLUMN_NAME,
  INSURANCE_TYPE,
  LOAN_TYPE,
  POP_UP
} from "../../../../../../config/employee/sales/sales.js";
import {
  fetchGetInsuranceProductDetail,
  fetchGetLoanProductDetail,
  fetchGetSalesDetail,
  fetchGetCounselDetail,
  fetchHandleInsuranceConsultation
} from "../../../../apiUtils/apiDocumentation/employee/Sales/sales.js";
import {ELEMENT_ID, KEY, LOCATION, TAG} from "../../../../../../config/common.js";
import {initialButtons} from "../../../common/buttonUtils.js";

const salesDetail = (dto) => {
  return [
    { label: DETAIL_COLUMN_NAME.EVALUATE_SALES_PERFORMANCE.ID, value: dto.id },
    { label: DETAIL_COLUMN_NAME.EVALUATE_SALES_PERFORMANCE.NAME, value: dto.name },
    { label: DETAIL_COLUMN_NAME.EVALUATE_SALES_PERFORMANCE.POSITION, value: dto.position },
    { label: DETAIL_COLUMN_NAME.EVALUATE_SALES_PERFORMANCE.SALARY, value: dto.salary },
    { label: DETAIL_COLUMN_NAME.EVALUATE_SALES_PERFORMANCE.CONTRACT_COUNT, value: dto.contractCount }
  ];
}

const counselDetail = (dto) => {
  return [
    { label: DETAIL_COLUMN_NAME.HANDLE_INSURANCE_CONSULTATION.ID, value: dto.id },
    { label: DETAIL_COLUMN_NAME.HANDLE_INSURANCE_CONSULTATION.NAME, value: dto.name },
    { label: DETAIL_COLUMN_NAME.HANDLE_INSURANCE_CONSULTATION.PHONE_NUMBER, value: dto.phoneNumber },
    { label: DETAIL_COLUMN_NAME.HANDLE_INSURANCE_CONSULTATION.COUNSEL_DATE, value: dto.counselDate },
    { label: DETAIL_COLUMN_NAME.HANDLE_INSURANCE_CONSULTATION.JOB, value: dto.job },
    { label: DETAIL_COLUMN_NAME.HANDLE_INSURANCE_CONSULTATION.AGE, value: dto.age },
    { label: DETAIL_COLUMN_NAME.HANDLE_INSURANCE_CONSULTATION.GENDER, value: dto.gender },
    { label: DETAIL_COLUMN_NAME.HANDLE_INSURANCE_CONSULTATION.PROCESS_STATUS, value: dto.processStatus },
  ];
}

const insuranceDetail = (dto) => {
  const detail = [
    { label: DETAIL_COLUMN_NAME.INDUCE_INSURANCE_PRODUCT.ID, value: dto.id },
    { label: DETAIL_COLUMN_NAME.INDUCE_INSURANCE_PRODUCT.NAME, value: dto.name },
    { label: DETAIL_COLUMN_NAME.INDUCE_INSURANCE_PRODUCT.INSURANCE_TYPE, value: dto.insuranceType },
    { label: DETAIL_COLUMN_NAME.INDUCE_INSURANCE_PRODUCT.AGE_RANGE, value: dto.ageRange },
    { label: DETAIL_COLUMN_NAME.INDUCE_INSURANCE_PRODUCT.COVERAGE, value: dto.coverage },
    { label: DETAIL_COLUMN_NAME.INDUCE_INSURANCE_PRODUCT.MONTHLY_PREMIUM, value: dto.monthlyPremium },
    { label: DETAIL_COLUMN_NAME.INDUCE_INSURANCE_PRODUCT.CONTRACT_PERIOD, value: dto.contractPeriod }
  ];
  switch(dto.insuranceType) {
    case INSURANCE_TYPE.DISEASE: return diseaseDetail(detail, dto);
    case INSURANCE_TYPE.INJURY: return injuryDetail(detail, dto);
    case INSURANCE_TYPE.AUTOMOBILE: return automobileDetail(detail, dto);
    default: return detail;
  }
}

const diseaseDetail = (detail, dto) => {
  detail.push(
    { label: DETAIL_COLUMN_NAME.INDUCE_INSURANCE_PRODUCT.TYPE.DISEASE.DISEASE_LIMIT, value: dto.diseaseLimit },
    { label: DETAIL_COLUMN_NAME.INDUCE_INSURANCE_PRODUCT.TYPE.DISEASE.DISEASE_NAME, value: dto.diseaseName },
    { label: DETAIL_COLUMN_NAME.INDUCE_INSURANCE_PRODUCT.TYPE.DISEASE.SURGERIES_LIMIT, value: dto.surgeriesLimit }
  );
  return detail;
}

const injuryDetail = (detail, dto) => {
  detail.push(
    { label: DETAIL_COLUMN_NAME.INDUCE_INSURANCE_PRODUCT.TYPE.INJURY.INJURY_TYPE, value: dto.injuryType },
    { label: DETAIL_COLUMN_NAME.INDUCE_INSURANCE_PRODUCT.TYPE.INJURY.SURGERIES_LIMIT, value: dto.surgeriesLimit }
  );
  return detail;
}

const automobileDetail = (detail, dto) => {
  detail.push(
    { label: DETAIL_COLUMN_NAME.INDUCE_INSURANCE_PRODUCT.TYPE.AUTOMOBILE.ACCIDENT_LIMIT, value: dto.accidentLimit },
    { label: DETAIL_COLUMN_NAME.INDUCE_INSURANCE_PRODUCT.TYPE.AUTOMOBILE.VEHICLE_TYPE, value: dto.vehicleType },
    { label: DETAIL_COLUMN_NAME.INDUCE_INSURANCE_PRODUCT.TYPE.AUTOMOBILE.SERVICES, value: dto.serviceTypes.map(item => serviceType(item)) }
  );
  return detail;
}

const serviceType = (type) => {
  return [
    { label: DETAIL_COLUMN_NAME.INDUCE_INSURANCE_PRODUCT.TYPE.LIST.SERVICE_TYPE, value: type },
  ];
}

const loanDetail = (data) => {
  const detail = [
    { label: DETAIL_COLUMN_NAME.INDUCE_LOAN_PRODUCT.ID, value: data.id },
    { label: DETAIL_COLUMN_NAME.INDUCE_LOAN_PRODUCT.NAME, value: data.name },
    { label: DETAIL_COLUMN_NAME.INDUCE_LOAN_PRODUCT.LOAN_TYPE, value: data.loanType },
    { label: DETAIL_COLUMN_NAME.INDUCE_LOAN_PRODUCT.INTEREST_RATE, value: data.interestRate },
    { label: DETAIL_COLUMN_NAME.INDUCE_LOAN_PRODUCT.MAXIMUM_MONEY, value: data.maximumMoney },
    { label: DETAIL_COLUMN_NAME.INDUCE_LOAN_PRODUCT.MINIMUM_ASSET, value: data.minimumAsset }
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
    { label: DETAIL_COLUMN_NAME.INDUCE_LOAN_PRODUCT.TYPE.COLLATERAL.COLLATERAL_TYPE, value: data.collateralType },
    { label: DETAIL_COLUMN_NAME.INDUCE_LOAN_PRODUCT.TYPE.COLLATERAL.MINIMUM_VALUE, value: data.minimumValue }
  );
  return detail;
}

const fixedDepositDetail = (detail, data) => {
  detail.push({ label: DETAIL_COLUMN_NAME.INDUCE_LOAN_PRODUCT.TYPE.FIXED_DEPOSIT.MINIMUM_AMOUNT, value: data.minimumAmount });
  return detail;
}

const insuranceContractDetail = (detail, data) => {
  detail.push({ label: DETAIL_COLUMN_NAME.INDUCE_LOAN_PRODUCT.TYPE.INSURANCE_CONTRACT.PRODUCT_ID, value: data.productId });
  return detail;
}

const context = {
  EVALUATE_SALES_PERFORMANCE: {
    detailGetter: salesDetail,
    fetchGetById: fetchGetSalesDetail,
    buttons: BUTTON.TASK.EMPLOYEE.SALES.EVALUATE_SALES_PERFORMANCE.DETAIL
  },
  HANDLE_INSURANCE_CONSULTATION: {
    detailGetter: counselDetail,
    fetchGetById: fetchGetCounselDetail,
    fetchHandleInsuranceConsultation: fetchHandleInsuranceConsultation,
    buttons: BUTTON.TASK.EMPLOYEE.SALES.HANDLE_INSURANCE_CONSULTATION
  },
  INDUCE_INSURANCE_PRODUCT: {
    detailGetter: insuranceDetail,
    fetchGetById: fetchGetInsuranceProductDetail,
    buttons: BUTTON.TASK.EMPLOYEE.SALES.INDUCE_INSURANCE_PRODUCT
  },
  INDUCE_LOAN_PRODUCT: {
    detailGetter: loanDetail,
    fetchGetById: fetchGetLoanProductDetail,
    buttons: BUTTON.TASK.EMPLOYEE.SALES.INDUCE_LOAN_PRODUCT
  }
}

export const renderDetails = async () => {
  // 세션에서 데이터 가져오기
  const selectedDataId = JSON.parse(sessionStorage.getItem(KEY.SELECTED_DATA_ID));
  const type = sessionStorage.getItem(KEY.CURRENT_TYPE);
  // 세션에 데이터가 있으면 렌더링
  if (selectedDataId) {
    const selectedData = await context[type].fetchGetById(selectedDataId);
    console.log(selectedData)
    renderDetailsTable(selectedData);
    renderButtons(selectedDataId);
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


const renderButtons = (selectedDataId) => {
  initialButtons(context[sessionStorage.getItem(KEY.CURRENT_TYPE)].buttons, salesTaskMapper(selectedDataId));
};

const reservationInsuranceCounsel = async (selectedDataId) => {
  alert(POP_UP.RESERVATION);
  await context.HANDLE_INSURANCE_CONSULTATION.fetchHandleInsuranceConsultation(selectedDataId)
  window.location.href = LOCATION.HOME;
}

const evaluationSales = (selectedDataId) => {
  sessionStorage.setItem(KEY.SELECTED_DATA_ID, JSON.stringify(selectedDataId));
  window.location.href = LOCATION.INPUT;
}

const cancel = () => {
  window.history.back();
}

const sendingNotice = () => {
  alert(POP_UP.SENDING_NOTICE);
  window.location.href = LOCATION.HOME;
}

const insuranceEnrollmentRequest = (selectedDataId) => {
  sessionStorage.setItem(KEY.SELECTED_DATA_ID, JSON.stringify(selectedDataId));
  window.location.href = LOCATION.INPUT;
}

const loanRequest = (selectedDataId) => {
  sessionStorage.setItem(KEY.SELECTED_DATA_ID, JSON.stringify(selectedDataId));
  window.location.href = LOCATION.INPUT;
}

const salesTaskMapper = (selectedDataId) => ({
  RESERVATION: () => reservationInsuranceCounsel(selectedDataId),
  CANCEL: () => cancel(),
  EVALUATION: () => evaluationSales(selectedDataId),
  SENDING_NOTICE: () => sendingNotice(),
  INSURANCE_ENROLLMENT_REQUEST: () => insuranceEnrollmentRequest(selectedDataId),
  LOAN_REQUEST: () => loanRequest(selectedDataId)
});
