import { fetchGetAllInsurance } from '../../../../../js/utils/apiUtils/apiDocumentation/customer/customer.js';
import { fetchGetAllLoan } from '../../../../../js/utils/apiUtils/apiDocumentation/customer/customer.js';
import { fetchGetAllContractByCustomerId } from '../../../../../js/utils/apiUtils/apiDocumentation/customer/customer.js';
import { fetchGetAllAccidentByCustomerId } from '../../../../../js/utils/apiUtils/apiDocumentation/customer/customer.js';
import { fetchGetAllComplaintsByCustomerId } from '../../../../../js/utils/apiUtils/apiDocumentation/customer/customer.js';

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
    <td></td>
  `;
}

const contractRow = (dto) => {
  return ``;
}

const accidentRow = (dto) => {
  return; ``;
}

const complaintRow = (dto) => {
  return ``;
}

const context = {
  INSURANCE_LIST: {
    title : "보험 상품 정보 리스트",
    listFetch: fetchGetAllInsurance,
    rowGetter: insuranceRow,
    columnList: [
      "보험 상품 이름",
      "보험 종류",
      "보험 상품 번호",
      "연령대",
      "월 보험료"
    ]
  },
  LOAN_LIST: {
    title : "대출 상품 정보 리스트",
    listFetch: fetchGetAllLoan,
    rowGetter: loanRow,
    columnList: [
      "대출 상품 이름",
      "대출 상품 종류",
      "대출 상품 번호",
      "이자율",
      "대출가능 최대 금액",
      "대출 상태(얜 모르것음)"
    ]
  },
  MANAGEMENT_CONTRACT: {
    title : "기가입 보험 상품 정보 리스트",
    listFetch: fetchGetAllContractByCustomerId,
    rowGetter: contractRow,
    columnList: [
      "보험 상품 이름",
      "보험 종류",
      "보험 상품 번호",
      "연령대",
      "월 보험료",
      "만기일",
      "가입일",
      "납부일",
      "보험 상태"
    ]
  },
  VIEW_ACCIDENT: {
    title : "사고 신고 정보 리스트",
    listFetch: fetchGetAllAccidentByCustomerId,
    rowGetter: accidentRow,
    columnList: [
      "사고 번호",
      "서비스 종류",
      "사고 날짜",
      "이름",
      "전화번호",
      "처리 상태"
    ]
  },
  VIEW_COMPLAINT: {
    title : "민원 신청 정보 리스트",
    listFetch: fetchGetAllComplaintsByCustomerId,
    rowGetter: complaintRow,
    columnList: [
      "민원 종류",
      "민원 번호",
      "제목",
      "등록 날짜",
      "등록 시간",
      "처리된 날짜",
      "처리상태"
    ]
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
  // const list = await fetchType();
  sessionStorage.setItem("currentType", fetchType);
  const list = await context[fetchType].listFetch();
  sessionStorage.setItem("list", JSON.stringify(list));
  window.location.href = "informationList.html";
}

export const renderTable = () => {
  initialTable();
}

const setTitle = (title) => {
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
