import { fetchGetEmployeeDetail } from "../../../../apiUtils/apiDocumentation/employee/humanResource/humanResource.js";
import {ELEMENT_ID, KEY, TAG} from "../../../../../../config/common.js";
import {DETAIL_COLUMN_NAME} from "../../../../../../config/employee/humanResource/humanResource.js";

const employeeDetail = (data) => {
  const LABEL = DETAIL_COLUMN_NAME.MANAGEMENT_EMPLOYEE;
  return [
    { label: LABEL.ID, value: data.id },
    { label: LABEL.NAME, value: data.name },
    { label: LABEL.POSITION, value: data.position },
    { label: LABEL.ADDRESS, value: data.address },
    { label: LABEL.PHONE_NUMBER, value: data.phoneNumber },
    { label: LABEL.BANK_NAME, value: data.bankName },
    { label: LABEL.BANK_ACCOUNT, value: data.bankAccount },
    { label: LABEL.RESIDENT_REGISTRATION_NUMBER, value: data.residentRegistrationNumber },
    { label: LABEL.FAMILY_RELATIONSHIP, value: data.familyList.map(item => family(item)) },
    { label: LABEL.DEPARTMENT_ID, value: data.departmentId },
    { label: LABEL.SALARY, value: data.salary },
    { label: LABEL.EMPLOYMENT_DATE, value: data.employmentDate }
  ];
}

const family = (data) => {
  const LABEL = DETAIL_COLUMN_NAME.MANAGEMENT_EMPLOYEE;
  return [
    { label: LABEL.FAMILY_NAME, value: data.name },
    { label: LABEL.FAMILY_BIRTH_DATE, value: data.birthDate },
    { label: LABEL.RELATIONSHIP, value: data.relationship },
    { label: LABEL.SURVIVAL, value: data.survival }
  ];
}

const context = {
  MANAGEMENT_EMPLOYEE: {
    detailGetter: employeeDetail,
    fetchGetById: fetchGetEmployeeDetail
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
