import {initialButtons} from "../../../common/buttonUtils.js";
import {
  ALERT,
  BUTTON,
  INPUT_TYPE
} from "../../../../../../config/employee/compensationPlanning/compensationPlanning.js";
import {
  fetchDeletePartnerCompany
} from "../../../../apiUtils/apiDocumentation/employee/compensationPlanning/compensationPlanning.js";
import {KEY, LOCATION} from "../../../../../../config/common.js";

const evaluate = () => {
  sessionStorage.setItem(KEY.SELECTED_BUTTON_TYPE, INPUT_TYPE.EVALUATE);
  window.location.href = LOCATION.INPUT;
}

const cancel = () => {
  window.history.back();
}

const updatePartnerCompany = () => {
  sessionStorage.setItem(KEY.SELECTED_BUTTON_TYPE, INPUT_TYPE.UPDATE);
  window.location.href = LOCATION.INPUT;
}

const deletePartnerCompany = async () => {
  if (!confirm(ALERT.CONFIRM.DELETE_PARTNER_COMPANY)) return;
  const id = sessionStorage.getItem(KEY.SELECTED_DATA_ID);
  await fetchDeletePartnerCompany(id);
  alert(ALERT.OK.DELETE_PARTNER_COMPANY);
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
