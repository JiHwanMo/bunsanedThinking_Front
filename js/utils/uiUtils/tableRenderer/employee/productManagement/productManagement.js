import { fetchGetAll } from '../../../../../../js/utils/apiUtils/apiDocumentation/employee/productManagement/productManagement.js';

export const informationType = {
  MANAGE_INSURANCE_PRODUCT: "MANAGE_INSURANCE_PRODUCT",
}

const manageInsuranceProductRow = (dto) => {
  return `
    <td>${dto.name}</td>
    <td>${dto.insuranceType}</td>
    <td>${dto.id}</td>
    <td>${dto.ageRange}</td>
    <td>${dto.monthlyPremium}</td>
    <td></td>
  `;
}

const context = {
  MANAGE_INSURANCE_PRODUCT: {
    title : "보험 상품 정보 리스트",
    listFetch: fetchGetAll,
    listCombineResourceFetch: null,
    rowGetter: manageInsuranceProductRow,
    columnList: [
      "보험 상품 이름",
      "보험 종류",
      "보험 상품 번호",
      "연령대",
      "월 보험료"
    ]
  }
}

export const viewInformationListAll = async (fetchType) => {
  sessionStorage.setItem("currentType", fetchType);

  let list = await context[fetchType].listFetch();

  if (context[fetchType].listCombineResourceFetch != null) {
    list = await listCombine(list, fetchType);
  }

  sessionStorage.setItem("list", JSON.stringify(list));

  window.location.href = "informationList.html";
};

export const listCombine = async (list, fetchType) => {
  if (context[fetchType].listCombineResourceFetch.length == 1) {
    let combineResourceList = [];
    for (const e of list) {
      //이부분 추상화 추천 받습니다
      const combineResource = await context[fetchType].listCombineResourceFetch(e.customerID);
      //
      combineResourceList.push(combineResource);
    }
    return list.map((item, index) => {
      return { ...item, ...combineResourceList[index] };
    });
  } else {
    const combineResourceList = await context[fetchType].listCombineFetch();
    return list.map((item, index) => {
      return { ...item, ...combineResourceList[index] };
    });
  }
}

export const renderTable = () => {
  initialTable();
}

const setTitle = () => {
  const currentContext = context[sessionStorage.getItem("currentType")];
  const contextTitle = document.getElementById("title");
  contextTitle.innerText = currentContext.title;
}

const setColoumn = () => {
  const currentContext = context[sessionStorage.getItem("currentType")];
  const head = document.getElementById('tableHead');
  const columns = document.createElement('tr');
  currentContext.columnList.forEach(item => {
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
    row.addEventListener("click", () => {
      if (selectedRow) {
        selectedRow.classList.remove("selected");
      }
      row.classList.add("selected");
      selectedRow = row;
    });

    // 더블 클릭 시 상세 페이지로 이동
    row.addEventListener("dblclick", () => {
      // 상세 정보를 세션에 저장
      sessionStorage.setItem("selectedInsurance", JSON.stringify(item));
      window.location.href = "detail.html";
    });

    tableBody.appendChild(row);
  });
}

const initialTable = () => {
  setTitle();
  setColoumn();
  setTableBody();
}

const insuranceData = [
  { name: "건강보험A", type: "건강보험", number: "001", ageGroup: "20대", premium: "30,000원", coverage: "상해 보장", conditions: "없음", term: "1년", disease: "고혈압" },
  { name: "자동차보험B", type: "자동차보험", number: "002", ageGroup: "30대", premium: "50,000원", coverage: "사고 보장", conditions: "무사고 경력", term: "5년", disease: "없음" },
  { name: "생명보험C", type: "생명보험", number: "003", ageGroup: "40대", premium: "70,000원", coverage: "생명 보장", conditions: "건강검진 필요", term: "10년", disease: "없음" }
];
