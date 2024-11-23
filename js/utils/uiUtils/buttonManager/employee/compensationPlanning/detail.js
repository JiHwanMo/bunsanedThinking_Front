import {initialButtons} from "../../../common/buttonUtils.js";
import {BUTTON} from "../../../../../../config/employee/compensationPlanning/compensationPlanning.js";
import {inputType} from "../../../tableRenderer/employee/compensationPlanning/input.js";
import {
  fetchDeletePartnerCompany
} from "../../../../apiUtils/apiDocumentation/employee/compensationPlanning/compensationPlanning.js";

const evaluate = () => {
  sessionStorage.setItem("selectedButtonType", inputType.EVALUATE);
  window.location.href = "input.html";
}

const cancel = () => {
  window.history.back();
}

const updatePartnerCompany = () => {
  sessionStorage.setItem("selectedButtonType", inputType.UPDATE);
  window.location.href = "input.html";
}

const deletePartnerCompany = async () => {
  const id = sessionStorage.getItem("selectedDataId");
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
  const type = sessionStorage.getItem("currentType");
  initialButtons(BUTTON.TASK.COMPENSATIONPLANNING[type], compensationPlanningTaskMapper[type]);
}
