import { fetchGetReport } from "../../../apiUtils/apiDocumentation/partnerCompany/partnerCompany.js";
import { addButtons } from "../../buttonManager/partnerCompany/input.js";
import { DETAIL_COLUMN_NAME } from "../../../../../config/partnerCompany/partnerCompany.js";
import {ELEMENT_ID, KEY, STRING_EMPTY} from "../../../../../config/common.js";

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
    <div class="form-group">
      <label for="accidentId">${DETAIL_COLUMN_NAME.REPORT_LIST.ACCIDENT_ID}</label>
      <input type="text" id="accidentId" name="accidentId" value="${data.id}" readonly>
    </div>
    <div class="form-group">
      <label for="damageAssessmentMoney">${DETAIL_COLUMN_NAME.REPORT_LIST.DAMAGE_ASSESSMENT_MONEY}</label>
      <input type="text" id="damageAssessmentMoney" name="damageAssessmentMoney" value="${placeholderValue}" placeholder="수정할 값을 입력하세요" required>
    </div>
  `;
};

