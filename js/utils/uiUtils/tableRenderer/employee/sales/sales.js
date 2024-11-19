import { fetchGetAllInsuranceProduct, fetchGetAllLoanProduct, fetchGetAllCounsel, fetchGetAllSales} from '../../../../../../js/utils/apiUtils/apiDocumentation/employee/sales/sales.js';
import {timeStampFormatter} from '../../../../TimeStampFormatter.js';

export const informationType = {
  EVALUATE_SALES_PERFORMANCE: "EVALUATE_SALES_PERFORMANCE",
  HANDLE_INSURANCE_CONSULTATION: "HANDLE_INSURANCE_CONSULTATION",
  INDUCE_INSURANCE_PRODUCT: "INDUCE_INSURANCE_PRODUCT",
  INDUCE_LOAN_PRODUCT: "INDUCE_LOAN_PRODUCT"
}

const evaluateSalesPerformanceRow = (dto) => {
  return `
    <td>${dto.id}</td>
    <td>${dto.name}</td>
    <td>${dto.position}</td>
    <td>${dto.contractCount}</td>
  `;
}

// 보험 상담 처리 정보 리스트(상담 고객 정보(고객 이름, 전화번호, 날짜, 성별), 상담 번호, 처리 상태)
const handleInsuranceConsultationRow = (dto) => {
  return `
    <td>${dto.name}</td>
    <td>${dto.phoneNumber}</td>
    <td>${dto.counselDate}</td>
    <td>${dto.gender}</td>
    <td>${dto.id}</td>
    <td>${dto.processStatus}</td>
  `;
}

const induceInsuranceProductRow = (dto) => {
  return `
    <td>${dto.name}</td>
    <td>${dto.insuranceType}</td>
    <td>${dto.id}</td>
    <td>${dto.ageRange}</td>
    <td>${dto.monthlyPremium}</td>
  `;
}

const induceLoanProductRow = (dto) => {
  return `
    <td>${dto.name}</td>
    <td>${dto.loanType}</td>
    <td>${dto.id}</td>
    <td>${dto.interestRate}</td>
    <td>${dto.maximumMoney}</td>
  `;
}

const context = {
  HANDLE_INSURANCE_CONSULTATION: {
    title : "보험 상담 처리 정보 리스트",
    listFetch: fetchGetAllCounsel,
    rowGetter: handleInsuranceConsultationRow,
    columnList: [
      "고객 이름",
      "전화 번호",
      "날짜",
      "성별",
      "상담 번호",
      "처리 상태"
    ]
  },
  EVALUATE_SALES_PERFORMANCE: {
    title : "영업 직원 정보 리스트",
    listFetch: fetchGetAllSales,
    rowGetter: evaluateSalesPerformanceRow,
    columnList: [
      "직원 정보",
      "직원 이름",
      "직급",
      "계약 건수"
    ]
  },
  INDUCE_INSURANCE_PRODUCT: {
    title : "보험 상품 정보 리스트",
    listFetch: fetchGetAllInsuranceProduct,
    rowGetter: induceInsuranceProductRow,
    columnList: [
      "보험 상품 이름",
      "보험 종류",
      "보험 보험 상품 번호",
      "연령대",
      "월 보험료"
    ]
  },
  INDUCE_LOAN_PRODUCT: {
    title : "대출 상품 정보 리스트",
    listFetch: fetchGetAllLoanProduct,
    rowGetter: induceLoanProductRow,
    columnList: [
      "대출 상품 이름",
      "대출 상품 종류",
      "대출 상품 번호",
      "이자율",
      "대출가능 최대 금액"
    ]
  }
}

export const viewInformationListAll = async (fetchType) => {
  sessionStorage.setItem("currentType", fetchType);
  let list = await context[fetchType].listFetch();
  sessionStorage.setItem("list", JSON.stringify(list));
  window.location.href = "informationList.html";
};

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
