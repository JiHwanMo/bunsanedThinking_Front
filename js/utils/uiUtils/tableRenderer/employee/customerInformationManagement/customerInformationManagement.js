import { fetchGetAllCustomerInformation } from "../../../../apiUtils/apiDocumentation/employee/customerInformationManagement/customerInformationManagement.js";

const customerInformationRow = (dto) => {
  return `
    <td>${dto.name}</td>
    <td>${dto.phoneNumber}</td>
    <td>${dto.job}</td>
    <td>${dto.age}</td>
    <td>${dto.gender}</td>
    <td>${dto.residentRegistrationNumber}</td>
    <td>${dto.address}</td>
    <td>${dto.bankName}</td>
    <td>${dto.bankAccount}</td>
    <td>${dto.id}</td>
  `;
}

const context = {
  CUSTOMERINFORMATION_LIST: {
    title: "고객 정보 리스트",
    listFetch: fetchGetAllCustomerInformation,
    rowGetter: customerInformationRow,
    columnList: [
      "고객 이름",
      "전화 번호",
      "직업",
      "나이",
      "성별",
      "주민등록번호",
      "주소",
      "은행명",
      "계좌 번호",
      "고객 번호"
    ]
  }
}


export const viewCustomerInformationListAll = async () => {
  try {
    const list = await fetchGetAllCustomerInformation();
    if (!list || !list.length) {
      console.warn("No customer information data fetched.");
      return;
    }
    sessionStorage.setItem("list", JSON.stringify(list));
    console.log("Data saved in sessionStorage:", sessionStorage.getItem("list"));
    window.location.href = "informationList.html"; // 경로 확인 필요
  } catch (error) {
    console.error("Error fetching customer information:", error);
  }
};

export const renderTable = () => {
  initialTable();
}

const setTitle = () => {
  const currentContext = context["CUSTOMERINFORMATION_LIST"];
  const contextTitle = document.getElementById("title");
  contextTitle.innerText = currentContext.title;
}

const setColumn = () => {
  const currentContext = context["CUSTOMERINFORMATION_LIST"];
  const head = document.getElementById("tableHead");
  const columns = document.createElement("tr");
  currentContext.columnList.forEach(item => {
    const oneColumn = document.createElement("th");
    oneColumn.innerHTML = item;
    columns.appendChild(oneColumn);
  })
  head.appendChild(columns);
}

const setTableBody = () => {
  const tableBody = document.getElementById("list");
  tableBody.innerHTML= "";
  const contextData = context["CUSTOMERINFORMATION_LIST"]; // 컨텍스트 데이터 캐싱
  const data = JSON.parse(sessionStorage.getItem("list")) || [];
  data.forEach(item => {
    const row = document.createElement("tr");
    row.innerHTML = contextData.rowGetter(item);

    row.addEventListener("click", () => {
      if (window.selectedRow) {
        window.selectedRow.classList.remove("selected");
      }
      row.classList.add("selected");
      window.selectedRow = row;
    });

    row.addEventListener("dblclick", () => {
      sessionStorage.setItem("selectedCustomerInformation", JSON.stringify(item)); // 선택된 데이터 저장
      window.location.href = "detail.html"; // 상세 페이지로 이동
    });

    tableBody.appendChild(row);
  });
};

const initialTable = () => {
  setTitle();
  setColumn();
  setTableBody();
}


