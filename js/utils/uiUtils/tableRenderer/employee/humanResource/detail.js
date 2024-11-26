import { fetchGetEmployeeDetail } from "../../../../apiUtils/apiDocumentation/employee/humanResource/humanResource.js";
import {ELEMENT_ID, KEY, TAG} from "../../../../../../config/common.js";

const employeeDetail = (data) => {
  return [
    { label: "직원 번호", value: data.id },
    { label: "직원 이름", value: data.name },
    { label: "직급", value: data.position },
    { label: "주소", value: data.address },
    { label: "전화번호", value: data.phoneNumber },
    { label: "은행명", value: data.bankName },
    { label: "계좌번호", value: data.bankAccount },
    { label: "주민등록번호", value: data.residentRegistrationNumber },
    { label: "가족관계", value: data.familyList.map(item => family(item)) },
    { label: "부서 번호", value: data.departmentId },
    { label: "급여", value: data.salary },
    { label: "입사 날짜", value: data.employmentDate }
  ];
}

const family = (data) => {
  return [
    { label: "이름", value: data.name },
    { label: "생일", value: data.birthDate },
    { label: "관계", value: data.relationship },
    { label: "생존 여부", value: data.survival }
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
