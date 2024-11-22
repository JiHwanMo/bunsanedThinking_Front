import { BUTTON } from '../../../../../../config/employee/customerSupport/customerSupport.js';
import { viewInformationListAll } from '../../../tableRenderer/employee/customerSupport/informationList.js';
import { informationType } from '../../../tableRenderer/employee/customerSupport/informationList.js';
import {initialButtons} from "../../../common/buttonUtils.js";

export const renderButtons = () => {
  initialButtons(BUTTON.TASK.EMPLOYEE.CUSTOMER_SUPPORT.HOME, customerSupportTaskMapper.HOME);
};

const handleReport = () => {
  viewInformationListAll(informationType.HANDLE_REPORT);
}

const handleComplaint = () => {
  viewInformationListAll(informationType.HANDLE_COMPLAINT);
}

const customerSupportTaskMapper = {
  HOME: {
    HANDLE_REPORT: handleReport,
    HANDLE_COMPLAINT: handleComplaint
  }
}
