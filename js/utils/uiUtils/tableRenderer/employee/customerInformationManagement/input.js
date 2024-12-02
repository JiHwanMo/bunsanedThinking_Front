import {
  ADD_ACCIDENT_HISTORY, ADD_DISEASE_HISTORY, ADD_SURGERY_HISTORY,
  CLASS,
  CLASS_SELECTOR,
  DETAIL_COLUMN_NAME,
  ELEMENT_ID as CUSTOMERINFORMATIONMANAGEMENT_ELEMENT_ID, MESSAGES, POST_FORM,
  token, UPDATE_FORM,
  VALUE
} from "../../../../../../config/employee/customerInformationManagement/customerInformationManagement.js";
import { fetchGetCustomerInformation } from "../../../../apiUtils/apiDocumentation/employee/customerInformationManagement/customerInformationManagement.js";
import { addButtons } from "../../../buttonManager/employee/customerInformationManagement/input.js";
import { BUTTON, ELEMENT_ID, EVENT, KEY, STRING_EMPTY, TAG, CLASS as COMMON_CLASS } from "../../../../../../config/common.js";

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
      <div class=${COMMON_CLASS.FORM_GROUP}>
        <label for=${POST_FORM.NAME_FORM.FOR}>${DETAIL_COLUMN_NAME.CUSTOMER_LIST.NAME}</label>
        <input type=${POST_FORM.NAME_FORM.TYPE} id=${POST_FORM.NAME_FORM.ID} name=${POST_FORM.NAME_FORM.NAME} placeholder="${DETAIL_COLUMN_NAME.CUSTOMER_LIST.NAME}${MESSAGES.PLACE_HOLDER.POST_INPUT}" required>
      </div>
      <div class=${COMMON_CLASS.FORM_GROUP}>
        <label for=${POST_FORM.PHONE_NUMBER_FORM.FOR}>${DETAIL_COLUMN_NAME.CUSTOMER_LIST.PHONE_NUMBER}</label>
        <input type=${POST_FORM.PHONE_NUMBER_FORM.TYPE} id=${POST_FORM.PHONE_NUMBER_FORM.ID} name=${POST_FORM.PHONE_NUMBER_FORM.NAME} placeholder="${DETAIL_COLUMN_NAME.CUSTOMER_LIST.PHONE_NUMBER}${MESSAGES.PLACE_HOLDER.POST_INPUT}" required>
      </div>
      <div class=${COMMON_CLASS.FORM_GROUP}>
        <label for=${POST_FORM.JOB_FORM.FOR}>${DETAIL_COLUMN_NAME.CUSTOMER_LIST.JOB}</label>
        <input type=${POST_FORM.JOB_FORM.TYPE} id=${POST_FORM.JOB_FORM.ID} name=${POST_FORM.JOB_FORM.NAME} placeholder="${DETAIL_COLUMN_NAME.CUSTOMER_LIST.JOB}${MESSAGES.PLACE_HOLDER.POST_INPUT}" required>
      </div>
      <div class=${COMMON_CLASS.FORM_GROUP}>
        <label for=${POST_FORM.AGE_FORM.FOR}>${DETAIL_COLUMN_NAME.CUSTOMER_LIST.AGE}</label>
        <input type=${POST_FORM.AGE_FORM.TYPE} id=${POST_FORM.AGE_FORM.ID} name=${POST_FORM.AGE_FORM.NAME} placeholder="${DETAIL_COLUMN_NAME.CUSTOMER_LIST.AGE}${MESSAGES.PLACE_HOLDER.POST_INPUT}" required>
      </div>
      <div class=${COMMON_CLASS.FORM_GROUP}>
        <label for=${POST_FORM.GENDER_FORM.FOR}>${DETAIL_COLUMN_NAME.CUSTOMER_LIST.GENDER}</label>
        <input type=${POST_FORM.GENDER_FORM.TYPE} id=${POST_FORM.GENDER_FORM.ID} name=${POST_FORM.GENDER_FORM.NAME} placeholder="${DETAIL_COLUMN_NAME.CUSTOMER_LIST.GENDER}${MESSAGES.PLACE_HOLDER.POST_INPUT}" required>
      </div>
      <div class=${COMMON_CLASS.FORM_GROUP}>
        <label for=${POST_FORM.RESIDENT_REGISTRATION_NUMBER_FORM.FOR}>${DETAIL_COLUMN_NAME.CUSTOMER_LIST.RESIDENT_REGISTRATION_NUMBER}</label>
        <input type=${POST_FORM.RESIDENT_REGISTRATION_NUMBER_FORM.TYPE} id=${POST_FORM.RESIDENT_REGISTRATION_NUMBER_FORM.ID} name=${POST_FORM.RESIDENT_REGISTRATION_NUMBER_FORM.NAME} placeholder="${DETAIL_COLUMN_NAME.CUSTOMER_LIST.RESIDENT_REGISTRATION_NUMBER}${MESSAGES.PLACE_HOLDER.POST_INPUT}" required>
      </div>
      <div class=${COMMON_CLASS.FORM_GROUP}>
        <label for=${POST_FORM.ADDRESS_FORM.FOR}>${DETAIL_COLUMN_NAME.CUSTOMER_LIST.ADDRESS}</label>
        <input type=${POST_FORM.ADDRESS_FORM.TYPE} id=${POST_FORM.ADDRESS_FORM.ID} name=${POST_FORM.ADDRESS_FORM.NAME} placeholder="${DETAIL_COLUMN_NAME.CUSTOMER_LIST.ADDRESS}${MESSAGES.PLACE_HOLDER.POST_INPUT}" required>
      </div>
      <div class=${COMMON_CLASS.FORM_GROUP}>
        <label for=${POST_FORM.PROPERTY_FORM.FOR}>${DETAIL_COLUMN_NAME.CUSTOMER_LIST.PROPERTY}</label>
        <input type=${POST_FORM.PROPERTY_FORM.TYPE} id=${POST_FORM.PROPERTY_FORM.ID} name=${POST_FORM.PROPERTY_FORM.NAME} placeholder="${DETAIL_COLUMN_NAME.CUSTOMER_LIST.PROPERTY}${MESSAGES.PLACE_HOLDER.POST_INPUT}" required>
      </div>
      <div class=${COMMON_CLASS.FORM_GROUP}>
        <label for=${POST_FORM.BANK_NAME_FORM.FOR}>${DETAIL_COLUMN_NAME.CUSTOMER_LIST.BANK_NAME}</label>
        <input type=${POST_FORM.BANK_NAME_FORM.TYPE} id=${POST_FORM.BANK_NAME_FORM.ID} name=${POST_FORM.BANK_NAME_FORM.NAME} placeholder="${DETAIL_COLUMN_NAME.CUSTOMER_LIST.BANK_NAME}${MESSAGES.PLACE_HOLDER.POST_INPUT}" required>
      </div>
      <div class=${COMMON_CLASS.FORM_GROUP}>
        <label for=${POST_FORM.BANK_ACCOUNT_FORM.FOR}>${DETAIL_COLUMN_NAME.CUSTOMER_LIST.BANK_ACCOUNT}</label>
        <input type=${POST_FORM.BANK_ACCOUNT_FORM.TYPE} id=${POST_FORM.BANK_ACCOUNT_FORM.ID} name=${POST_FORM.BANK_ACCOUNT_FORM.NAME} placeholder="${DETAIL_COLUMN_NAME.CUSTOMER_LIST.BANK_ACCOUNT}${MESSAGES.PLACE_HOLDER.POST_INPUT}" required>
      </div>
      <div class=${COMMON_CLASS.FORM_GROUP} id=${POST_FORM.ACCIDEN_HISTORY_FORM.ID}>
        <label>${DETAIL_COLUMN_NAME.CUSTOMER_LIST.ACCIDENT_HISTORY}</label>
        <button type=${POST_FORM.ACCIDEN_HISTORY_FORM.BUTTON.TYPE} id=${POST_FORM.ACCIDEN_HISTORY_FORM.BUTTON.ID}>추가</button>
      </div>
      <div class=${COMMON_CLASS.FORM_GROUP} id=${POST_FORM.SURGERY_HISTORY_FORM.ID}>
        <label>${DETAIL_COLUMN_NAME.CUSTOMER_LIST.SURGERY_HISTORY}</label>
        <button type=${POST_FORM.SURGERY_HISTORY_FORM.BUTTON.TYPE} id=${POST_FORM.SURGERY_HISTORY_FORM.BUTTON.ID}>추가</button>
      </div>
      <div class=${COMMON_CLASS.FORM_GROUP} id=${POST_FORM.DISEASE_HISTORY_FORM.ID}>
        <label>${DETAIL_COLUMN_NAME.CUSTOMER_LIST.DISEASE_HISTORY}</label>
        <button type=${POST_FORM.DISEASE_HISTORY_FORM.BUTTON.TYPE} id=${POST_FORM.DISEASE_HISTORY_FORM.BUTTON.ID}>추가</button>
      </div>
    `;
    // 초기 사고 이력, 수술 이력, 병력 필드 1개씩 생성
    addAccidentHistory();
    addSurgeryHistory();
    addDiseaseHistory();
  } else if(selectedButtonType === VALUE.UPDATE) {
  let selectedIndex = 1; // 기본 선택 항목은 고객 이름
  let placeholderValue = `\"${data.name || STRING_EMPTY}\"`;

    inputFieldsContainer.innerHTML = `
    <div class=${COMMON_CLASS.FORM_GROUP}>
      <label for=${UPDATE_FORM.ID_FORM.FOR}>${DETAIL_COLUMN_NAME.CUSTOMER_LIST.ID}</label>
      <input type=${UPDATE_FORM.ID_FORM.TYPE} id=${UPDATE_FORM.ID_FORM.ID} name=${UPDATE_FORM.ID_FORM.NAME} value="${data.id}" readonly>
    </div>
    <div class=${COMMON_CLASS.FORM_GROUP}>
      <label for=${UPDATE_FORM.RESIDENT_REGISTRATION_NUMBER_FORM.FOR}>${DETAIL_COLUMN_NAME.CUSTOMER_LIST.RESIDENT_REGISTRATION_NUMBER}</label>
      <input type=${UPDATE_FORM.RESIDENT_REGISTRATION_NUMBER_FORM.TYPE} id=${UPDATE_FORM.RESIDENT_REGISTRATION_NUMBER_FORM.ID} name=${UPDATE_FORM.RESIDENT_REGISTRATION_NUMBER_FORM.NAME} value="${data.residentRegistrationNumber}" readonly>
    </div>
    <div class=${COMMON_CLASS.FORM_GROUP}>
      <label for=${UPDATE_FORM.INDEX_CONTAINER.FOR}>수정할 항목</label>
      <select id=${UPDATE_FORM.INDEX_CONTAINER.ID} name=${UPDATE_FORM.INDEX_CONTAINER.NAME}>
        <option value=${UPDATE_FORM.INDEX_CONTAINER.OPTION_VALUE.ONE} selected>${DETAIL_COLUMN_NAME.CUSTOMER_LIST.NAME}</option>
        <option value=${UPDATE_FORM.INDEX_CONTAINER.OPTION_VALUE.TWO}>${DETAIL_COLUMN_NAME.CUSTOMER_LIST.PHONE_NUMBER}</option>
        <option value=${UPDATE_FORM.INDEX_CONTAINER.OPTION_VALUE.THREE}>${DETAIL_COLUMN_NAME.CUSTOMER_LIST.JOB}</option>
        <option value=${UPDATE_FORM.INDEX_CONTAINER.OPTION_VALUE.FOUR}>${DETAIL_COLUMN_NAME.CUSTOMER_LIST.AGE}</option>
        <option value=${UPDATE_FORM.INDEX_CONTAINER.OPTION_VALUE.FIVE}>${DETAIL_COLUMN_NAME.CUSTOMER_LIST.GENDER}</option>
        <option value=${UPDATE_FORM.INDEX_CONTAINER.OPTION_VALUE.SIX}>${DETAIL_COLUMN_NAME.CUSTOMER_LIST.ADDRESS}</option>
        <option value=${UPDATE_FORM.INDEX_CONTAINER.OPTION_VALUE.SEVEN}>${DETAIL_COLUMN_NAME.CUSTOMER_LIST.PROPERTY}</option>
        <option value=${UPDATE_FORM.INDEX_CONTAINER.OPTION_VALUE.EIGHT}>${DETAIL_COLUMN_NAME.CUSTOMER_LIST.BANK_NAME}</option>
        <option value=${UPDATE_FORM.INDEX_CONTAINER.OPTION_VALUE.NINE}>${DETAIL_COLUMN_NAME.CUSTOMER_LIST.BANK_ACCOUNT}</option>
        <option value=${UPDATE_FORM.INDEX_CONTAINER.OPTION_VALUE.TEN}>${DETAIL_COLUMN_NAME.CUSTOMER_LIST.ACCIDENT_HISTORY}</option>
        <option value=${UPDATE_FORM.INDEX_CONTAINER.OPTION_VALUE.ELEVEN}>${DETAIL_COLUMN_NAME.CUSTOMER_LIST.SURGERY_HISTORY}</option>
        <option value=${UPDATE_FORM.INDEX_CONTAINER.OPTION_VALUE.TWELVE}>${DETAIL_COLUMN_NAME.CUSTOMER_LIST.DISEASE_HISTORY}</option>
      </select>
    </div>
    <div class=${CLASS.FORM_GROUP_BASIC_INPUT_CONTAINER}>
      <label for=${UPDATE_FORM.INPUT_CONTAINER.FOR}>수정할 값</label>
      <input type=${UPDATE_FORM.INPUT_CONTAINER.TYPE} id=${UPDATE_FORM.INPUT_CONTAINER.ID} name=${UPDATE_FORM.INPUT_CONTAINER.NAME} value=${placeholderValue} placeholder=${MESSAGES.PLACE_HOLDER.UPDATE_INPUT} required>
    </div>
    <!-- 이력 업데이트 전용 필드 -->
    <div id=${UPDATE_FORM.FIELDS.HISTORY_FIELDS_ID} class=${CLASS.HIDDEN}>
      <div class=${COMMON_CLASS.FORM_GROUP}>
        <label for=${UPDATE_FORM.HISTORY_FIELDS.FOR}>이력 ID</label>
        <input type=${UPDATE_FORM.HISTORY_FIELDS.TYPE} id=${UPDATE_FORM.HISTORY_FIELDS.ID} name=${UPDATE_FORM.HISTORY_FIELDS.NAME} placeholder="${UPDATE_FORM.HISTORY_FIELDS.MESSAGES.PLACE_HOLDER}">
      </div>
      <div id=${UPDATE_FORM.FIELDS.ACCIDENT_FIELDS_ID} class=${CLASS.HIDDEN}>
        <div class=${COMMON_CLASS.FORM_GROUP}>
          <label for=${UPDATE_FORM.ACCIDENT_FIELDS.ACCIDENT_DATE.FOR}>사고 날짜</label>
          <input type=${UPDATE_FORM.ACCIDENT_FIELDS.ACCIDENT_DATE.TYPE} id=${UPDATE_FORM.ACCIDENT_FIELDS.ACCIDENT_DATE.ID} name=${UPDATE_FORM.ACCIDENT_FIELDS.ACCIDENT_DATE.NAME}>
        </div>
        <div class=${COMMON_CLASS.FORM_GROUP}>
          <label for=${UPDATE_FORM.ACCIDENT_FIELDS.ACCIDENT_DETAIL.FOR}>사고 내용</label>
          <input type=${UPDATE_FORM.ACCIDENT_FIELDS.ACCIDENT_DETAIL.TYPE} id=${UPDATE_FORM.ACCIDENT_FIELDS.ACCIDENT_DETAIL.ID} name=${UPDATE_FORM.ACCIDENT_FIELDS.ACCIDENT_DETAIL.NAME} placeholder="${UPDATE_FORM.ACCIDENT_FIELDS.ACCIDENT_DETAIL.MESSAGES.PLACE_HOLDER}">
        </div>
      </div>
      <div id=${UPDATE_FORM.FIELDS.SURGERY_FIELDS_ID} class=${CLASS.HIDDEN}>
        <div class=${COMMON_CLASS.FORM_GROUP}>
          <label for=${UPDATE_FORM.SURGERY_FIELDS.SURGERY_DATE.FOR}>수술 날짜</label>
          <input type=${UPDATE_FORM.SURGERY_FIELDS.SURGERY_DATE.TYPE} id=${UPDATE_FORM.SURGERY_FIELDS.SURGERY_DATE.ID} name=${UPDATE_FORM.SURGERY_FIELDS.SURGERY_DATE.NAME}>
        </div>
        <div class=${COMMON_CLASS.FORM_GROUP}>
          <label for=${UPDATE_FORM.SURGERY_FIELDS.HOSPITAL_NAME.FOR}>병원 이름</label>
          <input type=${UPDATE_FORM.SURGERY_FIELDS.HOSPITAL_NAME.TYPE} id=${UPDATE_FORM.SURGERY_FIELDS.HOSPITAL_NAME.ID} name=${UPDATE_FORM.SURGERY_FIELDS.HOSPITAL_NAME.NAME} placeholder="${UPDATE_FORM.SURGERY_FIELDS.HOSPITAL_NAME.MESSAGES.PLACE_HOLDER}">
        </div>
        <div class=${COMMON_CLASS.FORM_GROUP}>
          <label for=${UPDATE_FORM.SURGERY_FIELDS.SURGERY_NAME.FOR}>수술명</label>
          <input type=${UPDATE_FORM.SURGERY_FIELDS.SURGERY_NAME.TYPE} id=${UPDATE_FORM.SURGERY_FIELDS.SURGERY_NAME.ID} name=${UPDATE_FORM.SURGERY_FIELDS.SURGERY_NAME.NAME} placeholder="${UPDATE_FORM.SURGERY_FIELDS.SURGERY_NAME.MESSAGES.PLACE_HOLDER}">
        </div>
      </div>
      <div id=${UPDATE_FORM.FIELDS.DISEASE_FIELDS_ID} class=${CLASS.HIDDEN}>
        <div class=${COMMON_CLASS.FORM_GROUP}>
          <label for=${UPDATE_FORM.DISEASE_FIELDS.DISEASE_DATE.FOR}>진단 날짜</label>
          <input type=${UPDATE_FORM.DISEASE_FIELDS.DISEASE_DATE.TYPE} id=${UPDATE_FORM.DISEASE_FIELDS.DISEASE_DATE.ID} name=${UPDATE_FORM.DISEASE_FIELDS.DISEASE_DATE.NAME}>
        </div>
        <div class=${COMMON_CLASS.FORM_GROUP}>
          <label for=${UPDATE_FORM.DISEASE_FIELDS.DISEASE_NAME.FOR}>질병명</label>
          <input type=${UPDATE_FORM.DISEASE_FIELDS.DISEASE_NAME.TYPE} id=${UPDATE_FORM.DISEASE_FIELDS.DISEASE_NAME.ID} name=${UPDATE_FORM.DISEASE_FIELDS.DISEASE_NAME.NAME} placeholder="${UPDATE_FORM.DISEASE_FIELDS.DISEASE_NAME.MESSAGES.PLACE_HOLDER}">
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
            placeholderValue = data.name || STRING_EMPTY;
            break;
          case 2:
            placeholderValue = data.phoneNumber || STRING_EMPTY;
            break;
          case 3:
            placeholderValue = data.job || STRING_EMPTY;
            break;
          case 4:
            placeholderValue = data.age || STRING_EMPTY;
            break;
          case 5:
            placeholderValue = convertGenderToKorean(data.gender) || STRING_EMPTY;
            break;
          case 6:
            placeholderValue = data.address || STRING_EMPTY;
            break;
          case 7:
            placeholderValue = data.property || STRING_EMPTY;
            break;
          case 8:
            placeholderValue = data.bankName || STRING_EMPTY;
            break;
          case 9:
            placeholderValue = data.bankAccount || STRING_EMPTY;
            break;
          default:
            placeholderValue = STRING_EMPTY;
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
    <input type=${ADD_ACCIDENT_HISTORY.ACCIDENT_DATE.TYPE} name=${ADD_ACCIDENT_HISTORY.ACCIDENT_DATE.NAME} placeholder="${MESSAGES.PLACE_HOLDER.ACCIDENT_DATE}" required>
    <input type=${ADD_ACCIDENT_HISTORY.ACCIDENT_DETAIL.TYPE} name=${ADD_ACCIDENT_HISTORY.ACCIDENT_DETAIL.NAME} placeholder="${MESSAGES.PLACE_HOLDER.ACCIDENT_DETAIL}" required>
    <button type=${ADD_ACCIDENT_HISTORY.TYPE} class=${COMMON_CLASS.REMOVE_BUTTON}>삭제</button>
  `;
  container.appendChild(newEntry);

  newEntry.querySelector(CLASS_SELECTOR.REMOVE_BUTTON).addEventListener(EVENT.CLICK, () => {
    container.removeChild(newEntry);
  });
};

const addSurgeryHistory = () => {
  const container = document.getElementById(CUSTOMERINFORMATIONMANAGEMENT_ELEMENT_ID.SURGERY_HISTORY_CONTAINER);
  const newEntry = document.createElement(TAG.DIV);
  newEntry.className = CLASS.SURGERY_HISTORY_ENTRY;
  newEntry.innerHTML = `
    <input type=${ADD_SURGERY_HISTORY.SURGERY_DATE.TYPE} name=${ADD_SURGERY_HISTORY.SURGERY_DATE.NAME} placeholder="${MESSAGES.PLACE_HOLDER.SURGERY_DATE}" required>
    <input type=${ADD_SURGERY_HISTORY.HOSPITAL_NAME.TYPE} name=${ADD_SURGERY_HISTORY.HOSPITAL_NAME.NAME} placeholder="${MESSAGES.PLACE_HOLDER.HOSPITAL_NAME}" required>
    <input type=${ADD_SURGERY_HISTORY.SURGERY_NAME.TYPE} name=${ADD_SURGERY_HISTORY.SURGERY_NAME.NAME} placeholder="${MESSAGES.PLACE_HOLDER.SURGERY_NAME}" required>
    <button type=${ADD_SURGERY_HISTORY.TYPE} class=${COMMON_CLASS.REMOVE_BUTTON}>삭제</button>
  `;
  container.appendChild(newEntry);

  newEntry.querySelector(CLASS_SELECTOR.REMOVE_BUTTON).addEventListener(EVENT.CLICK, () => {
    container.removeChild(newEntry);
  });
};

const addDiseaseHistory = () => {
  const container = document.getElementById(CUSTOMERINFORMATIONMANAGEMENT_ELEMENT_ID.DISEASE_HISTORY_CONTAINER);
  const newEntry = document.createElement(TAG.DIV);
  newEntry.className = CLASS.DISEASE_HISTORY_ENTRY;
  newEntry.innerHTML = `
    <input type=${ADD_DISEASE_HISTORY.DISEASE_DATE.TYPE} name=${ADD_DISEASE_HISTORY.DISEASE_DATE.NAME} placeholder="${MESSAGES.PLACE_HOLDER.DISEASE_DATE}" required>
    <input type=${ADD_DISEASE_HISTORY.DISEASE_NAME.TYPE} name=${ADD_DISEASE_HISTORY.DISEASE_NAME.NAME} placeholder="${MESSAGES.PLACE_HOLDER.DISEASE_NAME}" required>
    <button type=${ADD_DISEASE_HISTORY.TYPE} class=${COMMON_CLASS.REMOVE_BUTTON}>삭제</button>
  `;
  container.appendChild(newEntry);

  newEntry.querySelector(CLASS_SELECTOR.REMOVE_BUTTON).addEventListener(EVENT.CLICK, () => {
    container.removeChild(newEntry);
  });
};

// 성별 한글 변환 함수
const convertGenderToKorean = (gender) => {
  if (gender === "Male") return "남성";
  if (gender === "Female") return "여성";
  return gender; // 알 수 없는 값은 그대로 반환
};

