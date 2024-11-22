import { BUTTON } from '../../../../../config/customer/customer.js';
import { viewInformationListById } from '../../tableRenderer/customer/informationList.js';
import { viewInformationListAll } from '../../tableRenderer/customer/informationList.js';
import { informationType } from '../../tableRenderer/customer/informationList.js';
import {initialButtons} from "../../common/buttonUtils.js";

const showProductListMenu = () => {
  const buttonContainer = document.getElementById("buttonContainer");
  while (buttonContainer.firstChild) buttonContainer.firstChild.remove();
  initialButtons(BUTTON.TASK.CUSTOMER.PRODUCT_LIST, customerTaskMapper.PRODUCT_LIST);
}

const managementContract = () => {
  viewInformationListById(informationType.MANAGEMENT_CONTRACT);
}

const viewAccident = () => {
  viewInformationListById(informationType.VIEW_ACCIDENT);
}

const viewComplaint = () => {
  viewInformationListById(informationType.VIEW_COMPLAINT);
}

const insuranceList = () => {
  viewInformationListAll(informationType.INSURANCE_LIST);
}

const loanList = () => {
  viewInformationListAll(informationType.LOAN_LIST);
}

const customerTaskMapper = {
  HOME: {
    PRODUCT_LIST: showProductListMenu,
    MANAGEMENT_CONTRACT: managementContract,
    VIEW_ACCIDENT: viewAccident,
    VIEW_COMPLAINT: viewComplaint
  },
  PRODUCT_LIST: {
    INSURANCE_LIST: insuranceList,
    LOAN_LIST: loanList
  }
}

export const renderButtons = () => {
  initialButtons(BUTTON.TASK.CUSTOMER.HOME, customerTaskMapper.HOME);
}
