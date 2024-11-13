export const fetchGetCustomerByIdHandler = async () => {
  try {
    const response = await fetch("http://localhost:8080/customer/getCustomerById?id=2001", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }, body: JSON.stringify({})
    });

    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }

    const data = await response.json(); // JSON 데이터를 파싱
    return data; // 받아온 JSON 데이터 반환
  } catch (error) {
    console.error("Error fetching customer name:", error);
    return null; // 에러 발생 시 null 반환
  }
};

(async () => {
  const data = await fetchGetCustomerNameDocumentation();
  console.log(data); // 받아온 데이터를 콘솔에 출력
})();


// API를 통해 버튼 데이터를 가져오는 함수 (샘플 데이터)
export const fetchGetData = async () => {
  return [
    { id: 1, name: "상품 리스트" },
    { id: 2, name: "가입 보험 관리" },
    { id: 3, name: "사고 신고" },
    { id: 4, name: "민원 신청" }
  ];
};
