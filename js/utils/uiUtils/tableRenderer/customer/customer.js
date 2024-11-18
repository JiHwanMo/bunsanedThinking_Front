import { fetchGetAllInsurance } from '../../../../../js/utils/apiUtils/apiDocumentation/customer/customer.js';
import { fetchGetAllDiseaseInsurance } from '../../../../../js/utils/apiUtils/apiDocumentation/customer/customer.js';
import { fetchGetAllInjuryInsurance } from '../../../../../js/utils/apiUtils/apiDocumentation/customer/customer.js';
import { fetchGetAllAutomobileInsurance } from '../../../../../js/utils/apiUtils/apiDocumentation/customer/customer.js';
import { fetchGetAllLoan } from '../../../../../js/utils/apiUtils/apiDocumentation/customer/customer.js';
import { fetchGetAllCollateralLoan } from '../../../../../js/utils/apiUtils/apiDocumentation/customer/customer.js';
import { fetchGetAllFixedDepositLoan } from '../../../../../js/utils/apiUtils/apiDocumentation/customer/customer.js';
import { fetchGetAllInsuranceContractLoan } from '../../../../../js/utils/apiUtils/apiDocumentation/customer/customer.js';
import { fetchGetAllContractByCustomerId } from '../../../../../js/utils/apiUtils/apiDocumentation/customer/customer.js';
import { fetchGetAllAccidentByCustomerId } from '../../../../../js/utils/apiUtils/apiDocumentation/customer/customer.js';
import { fetchGetAllComplaintsByCustomerId } from '../../../../../js/utils/apiUtils/apiDocumentation/customer/customer.js';
import { timeStampFormatter } from '../../../../../js/utils/TimeStampFormatter.js';
import { BUTTON } from '../../../../../config/common.js';
import { COMBOBOX } from '../../../../../config/customer/customer.js';
import { TABLE_TITLE } from '../../../../../config/customer/customer.js';
import { COLUMN_NAME } from '../../../../../config/customer/customer.js';

export const informationType = {
  INSURANCE_LIST: "INSURANCE_LIST",
  LOAN_LIST: "LOAN_LIST",
  MANAGEMENT_CONTRACT: "MANAGEMENT_CONTRACT",
  VIEW_ACCIDENT: "VIEW_ACCIDENT",
  VIEW_COMPLAINT: "VIEW_COMPLAINT"
}

const insuranceRow = (dto) => {
  return `
    <td>${dto.name}</td>
    <td>${dto.insuranceType}</td>
    <td>${dto.id}</td>
    <td>${dto.ageRange}</td>
    <td>${dto.monthlyPremium}</td>
  `;
}

const loanRow = (dto) => {
  return `
    <td>${dto.name}</td>
    <td>${dto.loanType}</td>
    <td>${dto.id}</td>
    <td>${dto.interestRate}</td>
    <td>${dto.maximumMoney}</td>
  `;
}

const contractRow = (dto) => {
  return `
    <td>${dto.name}</td>
    <td>${dto.type}</td>
    <td>${dto.insuranceId}</td>
    <td>${dto.ageRange}</td>
    <td>${dto.monthlyPremium}</td>
    <td>${dto.expirationDate}</td>
    <td>${dto.date}</td>
    <td>${dto.paymentDate}</td>
    <td>${dto.status}</td>
  `;
}

const accidentRow = (dto) => {
  return `
    <td>${dto.id}</td>
    <td>${dto.serviceType}</td>
    <td>${dto.date}</td>
    <td>${dto.customerName}</td>
    <td>${dto.customerPhoneNumber}</td>
    <td>${dto.processStatus}</td>
  `;
}

const complaintRow = (dto) => {
  return `
    <td>${dto.type}</td>
    <td>${dto.id}</td>
    <td>${dto.title}</td>
    <td>${dto.postDate}</td>
    <td>${dto.processingDate}</td>
    <td>${dto.status}</td>
  `;
}

const context = {
  MANAGEMENT_CONTRACT: {
    listFetch: fetchGetAllContractByCustomerId,
    rowGetter: contractRow,
    comboListFetch: {
      all: () => {
        return null;
      },
      disease: () => {
        return null;
      },
      automobile: () => {
        return null;
      },
      injury: () => {
        return null;
      }
    }
    // 콤보박스는 있는데 아이디 받는 부분이 뭔가 이상해서 일단 이렇게
  },
  VIEW_ACCIDENT: {
    listFetch: fetchGetAllAccidentByCustomerId,
    rowGetter: accidentRow,
    comboListFetch: {}
    // 콤보박스가 없어서 비워둠
  },
  VIEW_COMPLAINT: {
    listFetch: fetchGetAllComplaintsByCustomerId,
    rowGetter: complaintRow,
    comboListFetch: {}
  },
  INSURANCE_LIST: {
    listFetch: fetchGetAllInsurance,
    rowGetter: insuranceRow,
    comboListFetch: {
      all: fetchGetAllInsurance,
      disease: fetchGetAllDiseaseInsurance,
      automobile: fetchGetAllAutomobileInsurance,
      injury: fetchGetAllInjuryInsurance
    }
  },
  LOAN_LIST: {
    listFetch: fetchGetAllLoan,
    rowGetter: loanRow,
    comboListFetch: {
      all: fetchGetAllLoan,
      collateral: fetchGetAllCollateralLoan,
      fixedDeposit: fetchGetAllFixedDepositLoan,
      insuranceContract: fetchGetAllInsuranceContractLoan
    }
  }
}

export const viewInformationListById = async (fetchType) => {
  sessionStorage.setItem("currentType", fetchType);

  const id = sessionStorage.getItem("id");
  // 아이디 파라미터로 받는게 아니랍니다
  const list = await context[fetchType].listFetch(id);
  sessionStorage.setItem("list", JSON.stringify(list));
  window.location.href = "informationList.html";
  // 이거 js 파일 기준이 아니라 실행중인 html 파일 기준으로 링크 지정해야 합니다.....!!
  // 현재 js 파일 밖으로 벗어난다고 ../../../ 해서 들어가면 css가 지정이 안되요
}
export const viewInformationListAll = async (fetchType) => {
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

const setPost = () => {
  const post = document.createElement("div");
  post.id = "post";
  post.className = "post-button";
  post.textContent = BUTTON.COMMON.POST;
  return post;
}

const setComboBox = () => {
  const select = document.createElement("select");
  const type = sessionStorage.getItem("currentType");
  const boxContext = COMBOBOX[type];
  if (Object.keys(boxContext).length == 0) return null;
  select.id = boxContext.id;
  select.className = "comboBox";
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

const initTableBySelect = async (id, type) => { // 추가
  const select = document.getElementById(id);
  const selectedOption = select.options[select.selectedIndex];
  const list = await context[type].comboListFetch[selectedOption.value]();
  if (list != null)  sessionStorage.setItem("list", JSON.stringify(list));
  const tableBody = document.getElementById('list');
  while(tableBody.firstChild) tableBody.removeChild(tableBody.firstChild);
  setTableBody();
}

const setSearchBar = () => {
  const container = document.querySelector(".search-container");
  const type = sessionStorage.getItem("currentType");
  const select = COMBOBOX[type].isCombo ? setComboBox() : setPost();
  if (select != null) { // 추가
    container.appendChild(select);
    if (select.id == "post")
      post.addEventListener("click", () => alert("버튼 눌림 - POST")); // 수정
    else select.onchange = () => initTableBySelect(select.id, type); // 추가
  }
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
