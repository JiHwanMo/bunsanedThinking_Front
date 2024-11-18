import { fetchGetAll } from '../../../../apiUtils/apiDocumentation/employee/compensationPlanning/compensationPlanning.js';
import { BUTTON } from '../../../../../../config/common.js';
import { TABLE_TITLE } from '../../../../../../config/employee/compensationPlanning/compensationPlanning.js';
import { COLUMN_NAME } from '../../../../../../config/employee/compensationPlanning/compensationPlanning.js';

export const informationType = {
  EVALUATE_PARTNERCOMPANY: "EVALUATE_PARTNERCOMPANY",
  MANAGEMENT_PARTNERCOMPANY: "MANAGEMENT_PARTNERCOMPANY"
}

const partnerCompanyRow = (dto) => {
  return `
    <td>${dto.id}</td>
    <td>${dto.name}</td>
    <td>${dto.partnerCompanyType}</td>
    <td>${dto.phoneNumber}</td>
  `;
}

const context = {
  EVALUATE_PARTNERCOMPANY: {
    isSubmit: false,
    listFetch: fetchGetAll,
    rowGetter: partnerCompanyRow
  },
  MANAGEMENT_PARTNERCOMPANY: {
    isSubmit: true,
    listFetch: fetchGetAll,
    rowGetter: partnerCompanyRow
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

const setPost = () => {
  const post = document.createElement("div");
  post.id = "post";
  post.className = "post-button";
  post.textContent = BUTTON.COMMON.POST;
  post.addEventListener("click", () => {
    alert("등록 - 보상기획");
  });
  return post;
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

  const select = context[type].isSubmit ? setPost() : null;
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
