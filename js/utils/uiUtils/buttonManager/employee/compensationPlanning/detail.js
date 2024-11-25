import {initialButtons} from "../../../common/buttonUtils.js";
import {BUTTON} from "../../../../../../config/employee/compensationPlanning/compensationPlanning.js";
import {inputType} from "../../../tableRenderer/employee/compensationPlanning/input.js";
import {
  fetchDeletePartnerCompany
} from "../../../../apiUtils/apiDocumentation/employee/compensationPlanning/compensationPlanning.js";
import {KEY, LOCATION} from "../../../../../../config/common.js";

const evaluate = () => {
  sessionStorage.setItem(KEY.SELECTED_BUTTON_TYPE, inputType.EVALUATE);
  window.location.href = LOCATION.INPUT;
}

const cancel = () => {
  window.history.back();
}

const updatePartnerCompany = () => {
  sessionStorage.setItem(KEY.SELECTED_BUTTON_TYPE, inputType.UPDATE);
  window.location.href = LOCATION.INPUT;
}

const deletePartnerCompany = async () => {
  const id = sessionStorage.getItem(KEY.SELECTED_DATA_ID);
  await fetchDeletePartnerCompany(id);
  alert("삭제되었습니다.");
  window.history.back();
  window.history.back();
}

const compensationPlanningTaskMapper = {
  EVALUATE_PARTNERCOMPANY: {
    EVALUATE: evaluate,
    CANCEL: cancel
  },
  MANAGEMENT_PARTNERCOMPANY: {
    UPDATE: updatePartnerCompany,
    DELETE: deletePartnerCompany
  }
}

export const renderButtons = () => {
  const type = sessionStorage.getItem(KEY.CURRENT_TYPE);
  initialButtons(BUTTON.TASK.COMPENSATIONPLANNING[type], compensationPlanningTaskMapper[type]);
}
