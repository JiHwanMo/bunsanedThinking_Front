import {
  fetchGetPartnerCompanyDetailById
} from "../../../../apiUtils/apiDocumentation/employee/compensationPlanning/compensationPlanning.js";
import {renderButtons} from "../../../buttonManager/employee/compensationPlanning/detail.js";
import {ELEMENT_ID, KEY, TAG} from "../../../../../../config/common.js";

const partnerCompanyType = [
  "DUMY",
  "긴급출동회사",
  "손해사정업체"
];

const partnerCompanyDetail = (data) => {
  return [
    { label: "협력업체 번호", value: data.id },
    { label: "협력업체 이름", value: data.name },
    { label: "협력업체 전화번호", value: data.phoneNumber },
    { label: "협력업체 종류", value: partnerCompanyType[data.type] },
    { label: "대표자 이름", value: data.headName },
    { label: "대표자 전화번호", value: data.headPhoneNumber }
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
  // 세션에서 데이터 가져오기
  const selectedDataId = JSON.parse(sessionStorage.getItem(KEY.SELECTED_DATA_ID));
  const type = sessionStorage.getItem(KEY.CURRENT_TYPE);

  // 세션에 데이터가 있으면 렌더링
  if (selectedDataId) {
    const selectedData = await context[type].fetchGetById(selectedDataId);
    renderDetailsTable(selectedData);
    renderButtons();
  }
}

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
