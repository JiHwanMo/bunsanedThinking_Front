import { fetchGetReport } from "../../../apiUtils/apiDocumentation/partnerCompany/partnerCompany.js";
import { addButtons } from "../../buttonManager/partnerCompany/input.js";
import {DETAIL_COLUMN_NAME, MESSAGES, REPORT_FORM} from "../../../../../config/partnerCompany/partnerCompany.js";
import {CLASS, ELEMENT_ID, KEY, STRING_EMPTY} from "../../../../../config/common.js";

export const renderInput = async () => {
  const inputFieldsContainer = document.getElementById(ELEMENT_ID.INPUT_FIELDS_CONTAINER);
  const buttonContainer = document.getElementById(ELEMENT_ID.BUTTON_CONTAINER);

  const selectedDataId = JSON.parse(sessionStorage.getItem(KEY.SELECTED_DATA_ID));
  const reportData = await fetchGetReport(selectedDataId);
  renderInputFields(reportData);

  // 버튼 렌더링
  addButtons(buttonContainer);
};

const renderInputFields = (data) => {
  const inputFieldsContainer = document.getElementById(ELEMENT_ID.INPUT_FIELDS_CONTAINER);
  let placeholderValue = data.damageAssessmentMoney || STRING_EMPTY;

  inputFieldsContainer.innerHTML = `
    <div class=${CLASS.FORM_GROUP}>
      <label for=${REPORT_FORM.ACCIDENT_FORM.FOR}>${DETAIL_COLUMN_NAME.REPORT_LIST.ACCIDENT_ID}</label>
      <input type=${REPORT_FORM.ACCIDENT_FORM.TYPE} id=${REPORT_FORM.ACCIDENT_FORM.ID} name=${REPORT_FORM.ACCIDENT_FORM.NAME} value="${data.id}" readonly>
    </div>
    <div class=${CLASS.FORM_GROUP}>
      <label for=${REPORT_FORM.DAMAGE_ASSESSMENT_MONEY_FORM.FOR}>${DETAIL_COLUMN_NAME.REPORT_LIST.DAMAGE_ASSESSMENT_MONEY}</label>
      <input type=${REPORT_FORM.DAMAGE_ASSESSMENT_MONEY_FORM.TYPE} id=${REPORT_FORM.DAMAGE_ASSESSMENT_MONEY_FORM.ID} name=${REPORT_FORM.DAMAGE_ASSESSMENT_MONEY_FORM.NAME} value="${placeholderValue}" placeholder="${MESSAGES.PLACE_HOLDER.UPDATE}" required>
    </div>
  `;
};

