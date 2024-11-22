import {initialButtons} from "../../../common/buttonUtils.js";
import {BUTTON} from "../../../../../../config/employee/compensationPlanning/compensationPlanning.js";
import {BUTTON as COMMON_BUTTON} from "../../../../../../config/common.js";

const evaluate = () => {
  alert("평가-보상기획");
}

const cancel = () => {
  window.history.back();
}

const updatePartnerCompany = () => {
  alert("수정-보상기획");
}

const deletePartnerCompany = () => {
  alert("삭제-보상기획");
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
  const type = sessionStorage.getItem("currentType");
  initialButtons(BUTTON.TASK.COMPENSATIONPLANNING[type], compensationPlanningTaskMapper[type]);
}
