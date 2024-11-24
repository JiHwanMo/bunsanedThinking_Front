import { BUTTON } from '../../../../../../config/employee/compensation/compensation.js';
import { viewInformationList } from '../../../tableRenderer/employee/compensation/informationList.js';
import { informationType } from '../../../tableRenderer/employee/compensation/informationList.js';
import { initialButtons } from "../../../common/buttonUtils.js";

const viewRequestCompensation = () => {
  viewInformationList(informationType.REQUEST_COMPENSATION);
}

const viewRequestInsuranceMoney = () => {
  viewInformationList(informationType.REQUEST_INSURANCE_MONEY);
}

const compensationTaskMapper = {
  HOME: {
    REQUEST_COMPENSATION: viewRequestCompensation,
    REQUEST_INSURANCE_MONEY: viewRequestInsuranceMoney
  }
}

export const renderButtons = () => {
  initialButtons(BUTTON.TASK.COMPENSATION.HOME, compensationTaskMapper.HOME);
}
