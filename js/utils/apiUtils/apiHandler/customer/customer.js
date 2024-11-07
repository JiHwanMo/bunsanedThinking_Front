// 사용자 정보를 가져오는 함수 (샘플 데이터)
export const fetchGetCustomerName = async () => {
  return { id: "KIM" }; // 예시 데이터
};

// API를 통해 버튼 데이터를 가져오는 함수 (샘플 데이터)
export const fetchGetData = async () => {
  return [
    { id: 1, name: "상품 리스트" },
    { id: 2, name: "가입 보험 관리" },
    { id: 3, name: "사고 신고" },
    { id: 4, name: "민원 신청" }
  ];
};
