import { BUTTON } from "../../../../../../config/employee/customerInformationManagement/customerInformationManagement.js";
import { viewCustomerInformationListAll } from "../../../tableRenderer/employee/customerInformationManagement/informationList.js";
import { initialButtons } from "../../../common/buttonUtils.js";

const viewCustomerInformation = async () => {
  await viewCustomerInformationListAll();
}

const customerInformationManagementTaskMapper = {
  HOME: {
    CUSTOMERINFORMATION_LIST: viewCustomerInformation
  }
}

export const renderButtons = () => {
  initialButtons(BUTTON.TASK.EMPLOYEE.CUSTOMERINFORMATIONMANAGEMENT.HOME, customerInformationManagementTaskMapper.HOME);
}
