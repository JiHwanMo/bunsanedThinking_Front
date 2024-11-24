import { DETAIL_COLUMN_NAME } from '../../../../../config/partnerCompany/partnerCompany.js';
import { fetchGetReport } from '../../../apiUtils/apiDocumentation/partnerCompany/partnerCompany.js';
import { addButtons } from '../../buttonManager/partnerCompany/input.js';

export const renderInput = async () => {
  const inputFieldsContainer = document.getElementById("inputFieldsContainer");
  const buttonContainer = document.getElementById("buttonContainer");

  const selectedDataId = JSON.parse(sessionStorage.getItem("selectedDataId"));
  const reportData = await fetchGetReport(selectedDataId);
  renderInputFields(reportData);

  // 버튼 렌더링
  addButtons(buttonContainer);
};

const renderInputFields = (data) => {
  const inputFieldsContainer = document.getElementById("inputFieldsContainer");
  let placeholderValue = data.damageAssessmentMoney || "";

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

