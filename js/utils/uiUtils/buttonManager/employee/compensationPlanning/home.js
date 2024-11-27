import {BUTTON, INFORMATION_TYPE} from '../../../../../../config/employee/compensationPlanning/compensationPlanning.js';
import { viewInformationList } from '../../../tableRenderer/employee/compensationPlanning/informationList.js';
import {initialButtons} from "../../../common/buttonUtils.js";

const viewEvaluatePartnerCompany = () => {
  viewInformationList(INFORMATION_TYPE.EVALUATE_PARTNERCOMPANY);
}

const viewManagementPartnerCompany = () => {
  viewInformationList(INFORMATION_TYPE.MANAGEMENT_PARTNERCOMPANY);
}

const compensationPlanningTaskMapper = {
  HOME: {
    EVALUATE_PARTNERCOMPANY: viewEvaluatePartnerCompany,
    MANAGEMENT_PARTNERCOMPANY: viewManagementPartnerCompany
  }
}

export const renderButtons = () => {
  initialButtons(BUTTON.TASK.COMPENSATIONPLANNING.HOME, compensationPlanningTaskMapper.HOME);
}
