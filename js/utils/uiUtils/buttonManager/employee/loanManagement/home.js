import { BUTTON } from '../../../../../../config/employee/loanManagement/loanManagement.js';
import { viewInformationListAll } from '../../../tableRenderer/employee/loanManagement/informationList.js';
import { informationType } from '../../../tableRenderer/employee/loanManagement/informationList.js';
import {initialButtons} from "../../../common/buttonUtils.js";

export const renderButtons = () => {
  initialButtons(BUTTON.TASK.EMPLOYEE.LOAN_MANAGEMENT.HOME, loanManagementTaskMapper.HOME);
};

const managementLoanProduct = () => {
  viewInformationListAll(informationType.MANAGEMENT_LOAN_PRODUCT);
}

const loanRequest = () => {
  viewInformationListAll(informationType.LOAN_REQUEST);
}

const loanManagementTaskMapper = {
  HOME: {
    MANAGEMENT_LOAN_PRODUCT: managementLoanProduct,
    LOAN_REQUEST: loanRequest
  }
}
