import { fetchGetAllReport } from '../../../../apiUtils/apiDocumentation/employee/compensation/compensation.js';
import { fetchGetAllInsuranceMoney } from '../../../../apiUtils/apiDocumentation/employee/compensation/compensation.js';
import { BUTTON } from '../../../../../../config/common.js';
import { COMBOBOX } from '../../../../../../config/employee/compensation/compensation.js';
import { TABLE_TITLE } from '../../../../../../config/employee/compensation/compensation.js';
import { COLUMN_NAME } from '../../../../../../config/employee/compensation/compensation.js';

export const informationType = {
  REQUEST_COMPENSATION: "REQUEST_COMPENSATION",
  REQUEST_INSURANCE_MONEY: "REQUEST_INSURANCE_MONEY"
}

// 사고 정보 리스트 (
//   신고처리 정보,
//   처리 상태(processStatus),
//   손해 사정 금액(damageAssessmentMoney)
// ),
// 신고처리 정보 (
//   사고 신고 정보,
//   접수 상태(accident.processStatus)
// ),
// 사고 신고 정보 (
//   사고 번호(accident.id),
//   서비스 종류(accident.serviceType),
//   사고 날짜(accident.date),
//   사고 시간(accident.??),
//   사고 위치(accident.location),
//   이름(location.customerName),
//   전화번호(accident.customerPhoneNumber)
// )
const accidentRow = (dto) => {
  return `
    <td>${dto.id}</td>
    <td>${dto.serviceType}</td>
    <td>${dto.date}</td>
    <td>${dto.location}</td>
    <td>${dto.customerName}</td>
    <td>${dto.customerPhoneNumber}</td>
    <td>${dto.accidentProcessStatus}</td>
    <td>${dto.processStatus}</td>
    <td>${dto.damageAssessmentMoney}</td>
  `;
}

const insuranceMoneyRow = (dto) => {
  return `
    <td>${dto.id}</td>
    <td>${dto.productType}</td>
    <td>${dto.date}</td>
    <td>${dto.customerName}</td>
    <td>${dto.status}</td>
  `;
}

const context = {
  REQUEST_COMPENSATION: {
    listFetch: fetchGetAllReport,
    rowGetter: accidentRow
  },
  REQUEST_INSURANCE_MONEY: {
    listFetch: fetchGetAllInsuranceMoney,
    rowGetter: insuranceMoneyRow
  }
}

export const viewInformationList = async (fetchType) => {
  sessionStorage.setItem("currentType", fetchType);
  const list = await context[fetchType].listFetch();
  sessionStorage.setItem("list", JSON.stringify(list));
  window.location.href = "informationList.html";
}

export const renderTable = () => {
  initialTable();
}

const setTitle = () => {
  const title = TABLE_TITLE[sessionStorage.getItem("currentType")];
  const contextTitle = document.getElementById("title");
  contextTitle.innerText = title;
}

const setComboBox = () => {
  const select = document.createElement("select");
  const boxContext = COMBOBOX[sessionStorage.getItem("currentType")];
  if (Object.keys(boxContext).length == 0) return null;
  select.id = boxContext.id;
  select.className = "combo-Box";
  const optionTypes = boxContext.optionTypes;
  optionTypes.forEach(optionType => {
    const option = document.createElement("option");
    option.value = optionType.value;
    option.textContent = optionType.label;
    select.appendChild(option);
  });
  return select;
}

const setInput = () => {
  const input = document.createElement("input");
  input.type = "text";
  input.id = "searchInput";
  input.placeholder = "검색어 입력";
  return input;
}

const setButton = () => {
  const button = document.createElement("button");
  button.id = "searchButton";
  button.textContent = BUTTON.COMMON.SEARCH;
  return button;
}

const setSearchBar = () => {
  const container = document.querySelector(".search-container");
  const type = sessionStorage.getItem("currentType");

  const select = setComboBox();
  if (select != null) container.appendChild(select);
  container.appendChild(setInput());
  container.appendChild(setButton());
}

const setColoumn = () => {
  const columnList = COLUMN_NAME[sessionStorage.getItem("currentType")];
  const head = document.getElementById('tableHead');
  const columns = document.createElement('tr');
  columnList.forEach(item => {
    const oneColoumn = document.createElement('th');
    oneColoumn.innerHTML = item;
    columns.appendChild(oneColoumn);
  })
  head.appendChild(columns);
}

const setTableBody = () => {
  const tableBody = document.getElementById('list');
  const type = sessionStorage.getItem("currentType");
  const data = JSON.parse(sessionStorage.getItem("list"));
  data.forEach(item => {
    const row = document.createElement("tr");
    row.innerHTML = context[type].rowGetter(item);
    // 각 행에 클릭 이벤트 추가
    // row.addEventListener("click", () => {
    //   if (selectedRow) {
    //     selectedRow.classList.remove("selected");
    //   }
    //   row.classList.add("selected");
    //   selectedRow = row;
    // });

    // 더블 클릭 시 상세 페이지로 이동
    // row.addEventListener("dblclick", () => {
    //   // 상세 정보를 세션에 저장
    //   sessionStorage.setItem("selectedInsurance", JSON.stringify(item));
    //   window.location.href = "detail.html";
    // });

    tableBody.appendChild(row);
  });
}

const initialTable = () => {
  setTitle();
  setSearchBar();
  setColoumn();
  setTableBody();
}
