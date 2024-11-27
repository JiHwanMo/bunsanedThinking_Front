import {
  CLASS,
  CLASS_SELECTOR,
  DETAIL_COLUMN_NAME,
  ELEMENT_ID as CUSTOMERINFORMATIONMANAGEMENT_ELEMENT_ID,
  token,
  VALUE
} from "../../../../../../config/employee/customerInformationManagement/customerInformationManagement.js";
import { fetchGetCustomerInformation } from "../../../../apiUtils/apiDocumentation/employee/customerInformationManagement/customerInformationManagement.js";
import { addButtons } from "../../../buttonManager/employee/customerInformationManagement/input.js";
import {BUTTON, ELEMENT_ID, EVENT, KEY, TAG} from "../../../../../../config/common.js";

export const renderInput = async () => {
  const inputFieldsContainer = document.getElementById(ELEMENT_ID.INPUT_FIELDS_CONTAINER);
  const buttonContainer = document.getElementById(ELEMENT_ID.BUTTON_CONTAINER);

  const selectedButtonType = JSON.parse(sessionStorage.getItem(KEY.SELECTED_BUTTON_TYPE));

  if (selectedButtonType === VALUE.POST) {
    // 등록 화면: 빈 입력 필드 생성
    renderInputFields({});
  } else if (selectedButtonType === VALUE.UPDATE) {
    // 수정 화면: 기존 데이터 불러오기
    const selectedDataId = JSON.parse(sessionStorage.getItem(KEY.SELECTED_DATA_ID));
    const customerData = await fetchGetCustomerInformation(selectedDataId);

    renderInputFields(customerData);
  }

  // 버튼 추가
  addButtons(buttonContainer);
  document.getElementById(CUSTOMERINFORMATIONMANAGEMENT_ELEMENT_ID.ADD_ACCIDENT_HISTORY_BUTTON)?.addEventListener(EVENT.CLICK, addAccidentHistory);
  document.getElementById(CUSTOMERINFORMATIONMANAGEMENT_ELEMENT_ID.ADD_SURGERY_HISTORY_BUTTON)?.addEventListener(EVENT.CLICK, addSurgeryHistory);
  document.getElementById(CUSTOMERINFORMATIONMANAGEMENT_ELEMENT_ID.ADD_DISEASE_HISTORY_BUTTON)?.addEventListener(EVENT.CLICK, addDiseaseHistory);
};

const renderInputFields = (data) => {
  const inputFieldsContainer = document.getElementById(ELEMENT_ID.INPUT_FIELDS_CONTAINER);
  const selectedButtonType = JSON.parse(sessionStorage.getItem(KEY.SELECTED_BUTTON_TYPE));

  if (selectedButtonType === VALUE.POST) {
    inputFieldsContainer.innerHTML = `
      <div class="form-group">
        <label for="name">${DETAIL_COLUMN_NAME.CUSTOMER_LIST.NAME}</label>
        <input type="text" id="name" name="name" placeholder="${DETAIL_COLUMN_NAME.CUSTOMER_LIST.NAME}을 입력하세요" required>
      </div>
      <div class="form-group">
        <label for="phoneNumber">${DETAIL_COLUMN_NAME.CUSTOMER_LIST.PHONE_NUMBER}</label>
        <input type="text" id="phoneNumber" name="phoneNumber" placeholder="${DETAIL_COLUMN_NAME.CUSTOMER_LIST.PHONE_NUMBER}를 입력하세요" required>
      </div>
      <div class="form-group">
        <label for="job">${DETAIL_COLUMN_NAME.CUSTOMER_LIST.JOB}</label>
        <input type="text" id="job" name="job" placeholder="${DETAIL_COLUMN_NAME.CUSTOMER_LIST.JOB}을 입력하세요" required>
      </div>
      <div class="form-group">
        <label for="age">${DETAIL_COLUMN_NAME.CUSTOMER_LIST.AGE}</label>
        <input type="number" id="age" name="age" placeholder="${DETAIL_COLUMN_NAME.CUSTOMER_LIST.AGE}를 입력하세요" required>
      </div>
      <div class="form-group">
        <label for="gender">${DETAIL_COLUMN_NAME.CUSTOMER_LIST.GENDER}</label>
        <input type="text" id="gender" name="gender" placeholder="${DETAIL_COLUMN_NAME.CUSTOMER_LIST.GENDER}을 입력하세요" required>
      </div>
      <div class="form-group">
        <label for="residentRegistrationNumber">${DETAIL_COLUMN_NAME.CUSTOMER_LIST.RESIDENT_REGISTRATION_NUMBER}</label>
        <input type="text" id="residentRegistrationNumber" name="residentRegistrationNumber" placeholder="${DETAIL_COLUMN_NAME.CUSTOMER_LIST.RESIDENT_REGISTRATION_NUMBER}를 입력하세요" required>
      </div>
      <div class="form-group">
        <label for="address">${DETAIL_COLUMN_NAME.CUSTOMER_LIST.ADDRESS}</label>
        <input type="text" id="address" name="address" placeholder="${DETAIL_COLUMN_NAME.CUSTOMER_LIST.ADDRESS}를 입력하세요" required>
      </div>
      <div class="form-group">
        <label for="property">${DETAIL_COLUMN_NAME.CUSTOMER_LIST.PROPERTY}</label>
        <input type="number" id="property" name="property" placeholder="${DETAIL_COLUMN_NAME.CUSTOMER_LIST.PROPERTY}을 입력하세요" required>
      </div>
      <div class="form-group">
        <label for="bankName">${DETAIL_COLUMN_NAME.CUSTOMER_LIST.BANK_NAME}</label>
        <input type="text" id="bankName" name="bankName" placeholder="${DETAIL_COLUMN_NAME.CUSTOMER_LIST.BANK_NAME}을 입력하세요" required>
      </div>
      <div class="form-group">
        <label for="bankAccount">${DETAIL_COLUMN_NAME.CUSTOMER_LIST.BANK_ACCOUNT}</label>
        <input type="text" id="bankAccount" name="bankAccount" placeholder="${DETAIL_COLUMN_NAME.CUSTOMER_LIST.BANK_ACCOUNT}를 입력하세요" required>
      </div>
      <div class="form-group" id="accidentHistoryContainer">
        <label>${DETAIL_COLUMN_NAME.CUSTOMER_LIST.ACCIDENT_HISTORY}</label>
        <button type="button" id="addAccidentHistoryButton">추가</button>
      </div>
      <div class="form-group" id="surgeryHistoryContainer">
        <label>${DETAIL_COLUMN_NAME.CUSTOMER_LIST.SURGERY_HISTORY}</label>
        <button type="button" id="addSurgeryHistoryButton">추가</button>
      </div>
      <div class="form-group" id="diseaseHistoryContainer">
        <label>${DETAIL_COLUMN_NAME.CUSTOMER_LIST.DISEASE_HISTORY}</label>
        <button type="button" id="addDiseaseHistoryButton">추가</button>
      </div>
    `;
    // 초기 사고 이력, 수술 이력, 병력 필드 1개씩 생성
    addAccidentHistory();
    addSurgeryHistory();
    addDiseaseHistory();
  } else if(selectedButtonType === VALUE.UPDATE) {
  let selectedIndex = 1; // 기본 선택 항목은 고객 이름
  let placeholderValue = data.name || "";

    inputFieldsContainer.innerHTML = `
    <div class="form-group">
      <label for="id">${DETAIL_COLUMN_NAME.CUSTOMER_LIST.ID}</label>
      <input type="text" id="id" name="id" value="${data.id}" readonly>
    </div>
    <div class="form-group">
      <label for="resident_registration_number">${DETAIL_COLUMN_NAME.CUSTOMER_LIST.RESIDENT_REGISTRATION_NUMBER}</label>
      <input type="text" id="resident_registration_number" name="resident_registration_number" value="${data.residentRegistrationNumber}" readonly>
    </div>
    <div class="form-group">
      <label for="index">수정할 항목</label>
      <select id="index" name="index">
        <option value="1" selected>${DETAIL_COLUMN_NAME.CUSTOMER_LIST.NAME}</option>
        <option value="2">${DETAIL_COLUMN_NAME.CUSTOMER_LIST.PHONE_NUMBER}</option>
        <option value="3">${DETAIL_COLUMN_NAME.CUSTOMER_LIST.JOB}</option>
        <option value="4">${DETAIL_COLUMN_NAME.CUSTOMER_LIST.AGE}</option>
        <option value="5">${DETAIL_COLUMN_NAME.CUSTOMER_LIST.GENDER}</option>
        <option value="6">${DETAIL_COLUMN_NAME.CUSTOMER_LIST.ADDRESS}</option>
        <option value="7">${DETAIL_COLUMN_NAME.CUSTOMER_LIST.PROPERTY}</option>
        <option value="8">${DETAIL_COLUMN_NAME.CUSTOMER_LIST.BANK_NAME}</option>
        <option value="9">${DETAIL_COLUMN_NAME.CUSTOMER_LIST.BANK_ACCOUNT}</option>
        <option value="10">${DETAIL_COLUMN_NAME.CUSTOMER_LIST.ACCIDENT_HISTORY}</option>
        <option value="11">${DETAIL_COLUMN_NAME.CUSTOMER_LIST.SURGERY_HISTORY}</option>
        <option value="12">${DETAIL_COLUMN_NAME.CUSTOMER_LIST.DISEASE_HISTORY}</option>
      </select>
    </div>
    <div class="form-group basic-input-container">
      <label for="input">수정할 값</label>
      <input type="text" id="input" name="input" value="${placeholderValue}" placeholder="수정할 값을 입력하세요" required>
    </div>
    <!-- 이력 업데이트 전용 필드 -->
    <div id="historyFields" class="hidden">
        <div class="form-group">
          <label for="historyId">이력 ID</label>
          <input type="number" id="historyId" name="historyId" placeholder="이력 ID를 입력하세요">
        </div>
        <div id="accidentFields" class="hidden">
          <div class="form-group">
            <label for="accidentDate">사고 날짜</label>
            <input type="date" id="accidentDate" name="accidentDate">
          </div>
          <div class="form-group">
            <label for="accidentDetail">사고 내용</label>
            <input type="text" id="accidentDetail" name="accidentDetail" placeholder="사고 내용을 입력하세요">
          </div>
        </div>
        <div id="surgeryFields" class="hidden">
          <div class="form-group">
            <label for="surgeryDate">수술 날짜</label>
            <input type="date" id="surgeryDate" name="surgeryDate">
          </div>
          <div class="form-group">
            <label for="hospitalName">병원 이름</label>
            <input type="text" id="hospitalName" name="hospitalName" placeholder="병원 이름을 입력하세요">
          </div>
          <div class="form-group">
            <label for="surgeryName">수술명</label>
            <input type="text" id="surgeryName" name="surgeryName" placeholder="수술명을 입력하세요">
          </div>
        </div>
        <div id="diseaseFields" class="hidden">
          <div class="form-group">
            <label for="diseaseDate">진단 날짜</label>
            <input type="date" id="diseaseDate" name="diseaseDate">
          </div>
          <div class="form-group">
            <label for="diseaseName">질병명</label>
            <input type="text" id="diseaseName" name="diseaseName" placeholder="질병명을 입력하세요">
          </div>
        </div>
      </div>
  `;
    // `<select>` 요소의 `onchange` 이벤트 추가
    const selectElement = document.getElementById(CUSTOMERINFORMATIONMANAGEMENT_ELEMENT_ID.INDEX);
    const inputElement = document.getElementById(CUSTOMERINFORMATIONMANAGEMENT_ELEMENT_ID.INPUT);
    const inputContainer = document.querySelector(CLASS_SELECTOR.BASIC_INPUT_CONTAINER);
    const historyFields = document.getElementById(CUSTOMERINFORMATIONMANAGEMENT_ELEMENT_ID.HISTORY_FIELDS);
    const accidentFields = document.getElementById(CUSTOMERINFORMATIONMANAGEMENT_ELEMENT_ID.ACCIDENT_FIELDS);
    const surgeryFields = document.getElementById(CUSTOMERINFORMATIONMANAGEMENT_ELEMENT_ID.SURGERY_FIELDS);
    const diseaseFields = document.getElementById(CUSTOMERINFORMATIONMANAGEMENT_ELEMENT_ID.DISEASE_FIELDS);

    selectElement.addEventListener(EVENT.CHANGE, (event) => {
      selectedIndex = parseInt(event.target.value, 10);

      // 기본 숨김 처리
      inputContainer.classList.add(token.HIDDEN);
      historyFields.classList.add(token.HIDDEN);
      accidentFields.classList.add(token.HIDDEN);
      surgeryFields.classList.add(token.HIDDEN);
      diseaseFields.classList.add(token.HIDDEN);

      if (selectedIndex === 10) {
        historyFields.classList.remove(token.HIDDEN);
        accidentFields.classList.remove(token.HIDDEN);
      } else if (selectedIndex === 11) {
        historyFields.classList.remove(token.HIDDEN);
        surgeryFields.classList.remove(token.HIDDEN);
      } else if (selectedIndex === 12) {
        historyFields.classList.remove(token.HIDDEN);
        diseaseFields.classList.remove(token.HIDDEN);
      } else {
        inputContainer.classList.remove(token.HIDDEN);

        switch (selectedIndex) {
          case 1:
            placeholderValue = data.name || "";
            break;
          case 2:
            placeholderValue = data.phoneNumber || "";
            break;
          case 3:
            placeholderValue = data.job || "";
            break;
          case 4:
            placeholderValue = data.age || "";
            break;
          case 5:
            placeholderValue = data.gender || "";
            break;
          case 6:
            placeholderValue = data.address || "";
            break;
          case 7:
            placeholderValue = data.property || "";
            break;
          case 8:
            placeholderValue = data.bankName || "";
            break;
          case 9:
            placeholderValue = data.bankAccount || "";
            break;
          default:
            placeholderValue = "";
        }
        inputElement.value = placeholderValue;
      }
    });
  }
}
const addAccidentHistory = () => {
  const container = document.getElementById(CUSTOMERINFORMATIONMANAGEMENT_ELEMENT_ID.ACCIDENT_HISTORY_CONTAINER);
  const newEntry = document.createElement(TAG.DIV);
  newEntry.className = CLASS.ACCIDENT_HISTORY_ENTRY;
  newEntry.innerHTML = `
    <input type="date" name="date" placeholder="날짜를 입력하세요" required>
    <input type="text" name="accidentDetail" placeholder="사고 내용을 입력하세요" required>
    <button type="button" class="remove-button">삭제</button>
  `;
  container.appendChild(newEntry);

  newEntry.querySelector(".remove-button").addEventListener(EVENT.CLICK, () => {
    container.removeChild(newEntry);
  });
};

const addSurgeryHistory = () => {
  const container = document.getElementById(CUSTOMERINFORMATIONMANAGEMENT_ELEMENT_ID.SURGERY_HISTORY_CONTAINER);
  const newEntry = document.createElement(TAG.DIV);
  newEntry.className = CLASS.SURGERY_HISTORY_ENTRY;
  newEntry.innerHTML = `
    <input type="date" name="date" placeholder="날짜를 입력하세요" required>
    <input type="text" name="hospitalName" placeholder="병원 이름을 입력하세요" required>
    <input type="text" name="name" placeholder="수술명을 입력하세요" required>
    <button type="button" class="remove-button">삭제</button>
  `;
  container.appendChild(newEntry);

  newEntry.querySelector(".remove-button").addEventListener(EVENT.CLICK, () => {
    container.removeChild(newEntry);
  });
};

const addDiseaseHistory = () => {
  const container = document.getElementById(CUSTOMERINFORMATIONMANAGEMENT_ELEMENT_ID.DISEASE_HISTORY_CONTAINER);
  const newEntry = document.createElement(TAG.DIV);
  newEntry.className = CLASS.DISEASE_HISTORY_ENTRY;
  newEntry.innerHTML = `
    <input type="date" name="dateOfDiagnosis" placeholder="진단 날짜를 입력하세요" required>
    <input type="text" name="name" placeholder="질병명을 입력하세요" required>
    <button type="button" class="remove-button">삭제</button>
  `;
  container.appendChild(newEntry);

  newEntry.querySelector(".remove-button").addEventListener(EVENT.CLICK, () => {
    container.removeChild(newEntry);
  });
};



