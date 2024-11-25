import { DETAIL_COLUMN_NAME } from "../../../../../../config/employee/customerInformationManagement/customerInformationManagement.js";
import { fetchGetCustomerInformation } from "../../../../apiUtils/apiDocumentation/employee/customerInformationManagement/customerInformationManagement.js";
import { addButtons } from "../../../buttonManager/employee/customerInformationManagement/input.js";

export const renderInput = async () => {
  const inputFieldsContainer = document.getElementById("inputFieldsContainer");
  const buttonContainer = document.getElementById("buttonContainer");

  const selectedButtonType = JSON.parse(sessionStorage.getItem("selectedButtonType"));

  if (selectedButtonType === "POST") {
    // 등록 화면: 빈 입력 필드 생성
    renderInputFields({});
  } else if (selectedButtonType === "UPDATE") {
    // 수정 화면: 기존 데이터 불러오기
    const selectedDataId = JSON.parse(sessionStorage.getItem("selectedDataId"));
    const customerData = await fetchGetCustomerInformation(selectedDataId);

    renderInputFields(customerData);
  }

  // 버튼 추가
  addButtons(buttonContainer);
  document.getElementById("addAccidentHistoryButton")?.addEventListener("click", addAccidentHistory);
  document.getElementById("addSurgeryHistoryButton")?.addEventListener("click", addSurgeryHistory);
  document.getElementById("addDiseaseHistoryButton")?.addEventListener("click", addDiseaseHistory);
};

const renderInputFields = (data) => {
  const inputFieldsContainer = document.getElementById("inputFieldsContainer");
  const selectedButtonType = JSON.parse(sessionStorage.getItem("selectedButtonType"));

  if (selectedButtonType === "POST") {
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
  }else if(selectedButtonType === "UPDATE"){

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
      </select>
    </div>
    <div class="form-group">
      <label for="input">수정할 값</label>
      <input type="text" id="input" name="input" value="${placeholderValue}" placeholder="수정할 값을 입력하세요" required>
    </div>
  `;
    // `<select>` 요소의 `onchange` 이벤트 추가
    const selectElement = document.getElementById("index");
    const inputElement = document.getElementById("input");

    selectElement.addEventListener("change", (event) => {
      selectedIndex = parseInt(event.target.value, 10);

      // 선택된 항목에 따라 입력 필드 값 변경
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
    });
  }
}
const addAccidentHistory = () => {
  const container = document.getElementById("accidentHistoryContainer");
  const newEntry = document.createElement("div");
  newEntry.className = "accident-history-entry";
  newEntry.innerHTML = `
    <input type="date" name="date" placeholder="날짜를 입력하세요" required>
    <input type="text" name="accidentDetail" placeholder="사고 내용을 입력하세요" required>
    <button type="button" class="remove-button">삭제</button>
  `;
  container.appendChild(newEntry);

  newEntry.querySelector(".remove-button").addEventListener("click", () => {
    container.removeChild(newEntry);
  });
};

const addSurgeryHistory = () => {
  const container = document.getElementById("surgeryHistoryContainer");
  const newEntry = document.createElement("div");
  newEntry.className = "surgery-history-entry";
  newEntry.innerHTML = `
    <input type="date" name="date" placeholder="날짜를 입력하세요" required>
    <input type="text" name="hospitalName" placeholder="병원 이름을 입력하세요" required>
    <input type="text" name="name" placeholder="수술명을 입력하세요" required>
    <button type="button" class="remove-button">삭제</button>
  `;
  container.appendChild(newEntry);

  newEntry.querySelector(".remove-button").addEventListener("click", () => {
    container.removeChild(newEntry);
  });
};

const addDiseaseHistory = () => {
  const container = document.getElementById("diseaseHistoryContainer");
  const newEntry = document.createElement("div");
  newEntry.className = "disease-history-entry";
  newEntry.innerHTML = `
    <input type="date" name="dateOfDiagnosis" placeholder="진단 날짜를 입력하세요" required>
    <input type="text" name="name" placeholder="질병명을 입력하세요" required>
    <button type="button" class="remove-button">삭제</button>
  `;
  container.appendChild(newEntry);

  newEntry.querySelector(".remove-button").addEventListener("click", () => {
    container.removeChild(newEntry);
  });
};



