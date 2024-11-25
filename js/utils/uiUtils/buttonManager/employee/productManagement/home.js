import { BUTTON } from '../../../../../../config/employee/productManagement/productManagement.js';
import { viewInformationListAll,informationType } from '../../../tableRenderer/employee/productManagement/informationList.js';
import {initialButtons} from "../../../common/buttonUtils.js";

export const renderButtons = () => {
  initialButtons(BUTTON.TASK.EMPLOYEE.PRODUCT_MANAGEMENT.HOME, productManagementTaskMapper);
};

const manageInsuranceProduct = () => {
  viewInformationListAll(informationType.MANAGE_INSURANCE_PRODUCT);
}

const productManagementTaskMapper = {
  // key: value -> constants의 키 이름: 함수
  MANAGE_INSURANCE_PRODUCT: manageInsuranceProduct,
}
