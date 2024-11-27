import {BUTTON, INFORMATION_TYPE} from '../../../../../config/customer/customer.js';
import { viewInformationListById } from '../../tableRenderer/customer/informationList.js';
import { viewInformationListAll } from '../../tableRenderer/customer/informationList.js';
import {initialButtons} from "../../common/buttonUtils.js";
import {ELEMENT_ID} from "../../../../../config/common.js";

const showProductListMenu = () => {
  const buttonContainer = document.getElementById(ELEMENT_ID.BUTTON_CONTAINER);
  while (buttonContainer.firstChild) buttonContainer.firstChild.remove();
  initialButtons(BUTTON.TASK.CUSTOMER.PRODUCT_LIST, customerTaskMapper.PRODUCT_LIST);
}

const managementContract = async () => {
  await viewInformationListById(INFORMATION_TYPE.MANAGEMENT_CONTRACT);
}

const viewAccident = async () => {
  await viewInformationListById(INFORMATION_TYPE.VIEW_ACCIDENT);
}

const viewComplaint = async () => {
  await viewInformationListById(INFORMATION_TYPE.VIEW_COMPLAINT);
}

const insuranceList = async () => {
  await viewInformationListAll(INFORMATION_TYPE.INSURANCE_LIST);
}

const loanList = async () => {
  await viewInformationListAll(INFORMATION_TYPE.LOAN_LIST);
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
