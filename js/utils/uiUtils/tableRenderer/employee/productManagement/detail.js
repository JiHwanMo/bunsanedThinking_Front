import {
  BUTTON,
  DETAIL_COLUMN_NAME,
  INSURANCE_TYPE,
  POP_UP, VALUE
} from "../../../../../../config/employee/productManagement/productManagement.js";
import {
  fetchDeleteInsuranceProduct,
  fetchGetInsuranceProductDetail
} from "../../../../apiUtils/apiDocumentation/employee/productManagement/productManagement.js"
import {CLASS, ELEMENT_ID, EVENT, KEY, LOCATION, TAG} from "../../../../../../config/common.js";

const insuranceDetail = (dto) => {
  const detail = [
    { label: DETAIL_COLUMN_NAME.MANAGE_INSURANCE_PRODUCT.ID, value: dto.id },
    { label: DETAIL_COLUMN_NAME.MANAGE_INSURANCE_PRODUCT.NAME, value: dto.name },
    { label: DETAIL_COLUMN_NAME.MANAGE_INSURANCE_PRODUCT.INSURANCE_TYPE, value: dto.insuranceType },
    { label: DETAIL_COLUMN_NAME.MANAGE_INSURANCE_PRODUCT.AGE_RANGE, value: dto.ageRange },
    { label: DETAIL_COLUMN_NAME.MANAGE_INSURANCE_PRODUCT.COVERAGE, value: dto.coverage },
    { label: DETAIL_COLUMN_NAME.MANAGE_INSURANCE_PRODUCT.MAXIMUM_MONEY, value: dto.maximumMoney },
    { label: DETAIL_COLUMN_NAME.MANAGE_INSURANCE_PRODUCT.MONTHLY_PREMIUM, value: dto.monthlyPremium },
    { label: DETAIL_COLUMN_NAME.MANAGE_INSURANCE_PRODUCT.CONTRACT_PERIOD, value: dto.contractPeriod }
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
    { label: DETAIL_COLUMN_NAME.MANAGE_INSURANCE_PRODUCT.TYPE.DISEASE.DISEASE_LIMIT, value: dto.diseaseLimit },
    { label: DETAIL_COLUMN_NAME.MANAGE_INSURANCE_PRODUCT.TYPE.DISEASE.DISEASE_NAME, value: dto.diseaseName },
    { label: DETAIL_COLUMN_NAME.MANAGE_INSURANCE_PRODUCT.TYPE.DISEASE.SURGERIES_LIMIT, value: dto.surgeriesLimit }
  );
  return detail;
}

const injuryDetail = (detail, dto) => {
  detail.push(
    { label: DETAIL_COLUMN_NAME.MANAGE_INSURANCE_PRODUCT.TYPE.INJURY.INJURY_TYPE, value: dto.injuryType },
    { label: DETAIL_COLUMN_NAME.MANAGE_INSURANCE_PRODUCT.TYPE.INJURY.SURGERIES_LIMIT, value: dto.surgeriesLimit }
  );
  return detail;
}

const automobileDetail = (detail, dto) => {
  detail.push(
    { label: DETAIL_COLUMN_NAME.MANAGE_INSURANCE_PRODUCT.TYPE.AUTOMOBILE.ACCIDENT_LIMIT, value: dto.accidentLimit },
    { label: DETAIL_COLUMN_NAME.MANAGE_INSURANCE_PRODUCT.TYPE.AUTOMOBILE.VEHICLE_TYPE, value: dto.vehicleType },
    { label: DETAIL_COLUMN_NAME.MANAGE_INSURANCE_PRODUCT.TYPE.AUTOMOBILE.SERVICES, value: dto.serviceTypes.map(item => serviceType(item)) }
  );
  return detail;
}

const serviceType = (type) => {
  return [
    { label: DETAIL_COLUMN_NAME.MANAGE_INSURANCE_PRODUCT.TYPE.LIST.SERVICE_TYPE, value: type },
  ];
}

const context = {
  MANAGE_INSURANCE_PRODUCT: {
    detailGetter: insuranceDetail,
    fetchGetById: fetchGetInsuranceProductDetail,
    fetchDelete: fetchDeleteInsuranceProduct,
    buttons: BUTTON.TASK.EMPLOYEE.PRODUCT_MANAGEMENT.MANAGE_INSURANCE_PRODUCT
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
    renderButtons();
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


const renderButtons = () => {
  initialButtons(context[sessionStorage.getItem(KEY.CURRENT_TYPE)].buttons, productManagementTaskMapper);
};

const initialButtons = (buttonMessages, buttonActionMapper) => {
  const buttonContainer = document.getElementById(ELEMENT_ID.BUTTON_CONTAINER);
  // 객체의 각 항목을 순회하여 버튼 생성
  Object.entries(buttonMessages).forEach(([key, name]) => {
    const button = document.createElement(TAG.DIV);
    button.className = CLASS.BUTTON_ITEM;
    button.textContent = name; // 버튼에 표시할 텍스트 설정

    button.addEventListener(EVENT.CLICK, buttonActionMapper[key]);

    buttonContainer.appendChild(button); // 버튼을 buttonContainer에 추가
  });
}

const updateInsurance = async () => {
  sessionStorage.setItem(KEY.SELECTED_BUTTON_TYPE, JSON.stringify(VALUE.UPDATE));
  window.location.href = LOCATION.INPUT;
}

const deleteInsurance = async () => {
  const userConfirmed = confirm(POP_UP.DELETE.QUESTION);
  if (userConfirmed) {
    alert(POP_UP.DELETE.OK);
    const type = sessionStorage.getItem(KEY.CURRENT_TYPE);
    const id = sessionStorage.getItem(KEY.SELECTED_DATA_ID);
    await context[type].fetchDelete(id);
    window.location.href = LOCATION.HOME;
  } else {
    window.history.back();
  }
}

const productManagementTaskMapper = {
  UPDATE: updateInsurance,
  DELETE: deleteInsurance
};
