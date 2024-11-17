import { fetchGetAllRequestingInsurance,fetchApplyCoperation, fetchApplyReinsurance, fetchGetCustomer } from '../../../../../../js/utils/apiUtils/apiDocumentation/employee/underWriting/underWriting.js';

export const informationType = {
  REVIEW_ACQUISITION: "REVIEW_ACQUISITION",
  APPLY_COPERATION: "APPLY_COPERATION",
  APPLY_REINSURANCE: "APPLY_REINSURANCE"
}

const reviewAcquisitionRow = (dto) => {
  return `
    <td>${dto.name}</td>
    <td>${dto.phoneNumber}</td>
    <td>${dto.job}</td>
    <td>${dto.age}</td>
    <td>${dto.gender}</td>
    <td>${dto.residentRegistrationNumber}</td>
    <td>${dto.productId}</td>
    <td>${dto.contractStatus}</td>
    <td></td>
  `;
}

const applyCoperationRow = (dto) => {
  return; ``;
}

const applyReinsuranceRow = (dto) => {
  return ``;
}

// 인수 심사 정보 리스트
// (고객 정보(고객 이름, 전화번호, 직업,나이, 성별, 주민등록번호, 주소), 신청한 보험 상품 번호, 심사 상태)
const context = {
  REVIEW_ACQUISITION: {
    title : "인수 심사 정보 리스트",
    listFetch: fetchGetAllRequestingInsurance,
    listCombineResourceFetch: fetchGetCustomer,
    rowGetter: reviewAcquisitionRow,
    columnList: [
      "고객 이름",
      "전화 번호",
      "직업",
      "나이",
      "성별",
      "주민등록번호",
      "주소",
      "신청한 보험 상품 번호",
      "심사 상태"
    ]
  },
APPLY_COPERATION: {
    title : "공동 인수 정보 리스트",
    listFetch: fetchApplyCoperation,
    listCombineResourceFetch: null,
    rowGetter: applyCoperationRow,
    columnList: [
      "보험 종류",
      "보험 상품 이름",
      "타 보험사 이름"
    ]
  },
  APPLY_REINSURANCE: {
    title : "재보험 정보 리스트",
    listFetch: fetchApplyReinsurance,
    listCombineResourceFetch: null,
    rowGetter: applyReinsuranceRow,
    columnList: [
      "보험 종류",
      "보험 상품 이름",
      "보험 상품 번호",
      "타 보험사 이름",
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
