import { BUTTON } from '../../../../../config/partnerCompany/partnerCompany.js';
import { viewSetDamageAssessmentMoney } from "../../tableRenderer/partnerCompany/partnerCompany.js";

export const renderButtons = () => {
  // BUTTON 정의에 따라 ADMINISTRATIVE.HOME 버튼들을 렌더링
  initialButtons(BUTTON.TASK.PARTNERCOMPANY.HOME, partnerCompanyTaskMapper);
};

// 버튼 동작 정의
const viewReport = async () => {
  await viewSetDamageAssessmentMoney(); // 데이터 가져오기 및 sessionStorage 저장
};

// 버튼 동작 매핑 객체
const partnerCompanyTaskMapper = {
  REPORT_LIST: viewReport
};

// 버튼 생성 및 렌더링 함수
const initialButtons = (buttonMessages, buttonActionMapper) => {
  const buttonContainer = document.getElementById('buttonContainer');
  // 기존 버튼 제거
  while (buttonContainer.firstChild) {
    buttonContainer.firstChild.remove();
  }

  // 새로운 버튼 생성
  Object.entries(buttonMessages).forEach(([key, name]) => {
    const button = document.createElement('div');
    button.className = 'button-item';
    button.textContent = name; // 버튼에 표시할 텍스트 설정

    // 클릭 이벤트 추가
    button.addEventListener('click', buttonActionMapper[key]);

    buttonContainer.appendChild(button); // 버튼을 컨테이너에 추가
  });
};
