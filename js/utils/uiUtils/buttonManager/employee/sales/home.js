import { BUTTON } from '../../../../../../config/employee/sales/sales.js';
import { viewInformationListAll,informationType } from '../../../tableRenderer/employee/sales/informationList.js';
import {initialButtons} from "../../../common/buttonUtils.js";

export const renderButtons = () => {
  initialButtons(BUTTON.TASK.EMPLOYEE.SALES.HOME, salesTaskMapper);
};

const evaluateSalesPerformance = () => {
  viewInformationListAll(informationType.EVALUATE_SALES_PERFORMANCE);
}

const handleInsuranceConsultation = () => {
  viewInformationListAll(informationType.HANDLE_INSURANCE_CONSULTATION);
}

const induceInsuranceProduct = () => {
  viewInformationListAll(informationType.INDUCE_INSURANCE_PRODUCT);
}

const induceLoanProduct = () => {
  viewInformationListAll(informationType.INDUCE_LOAN_PRODUCT);
}

const salesTaskMapper = {
  // key: value -> constants의 키 이름: 함수
  EVALUATE_SALES_PERFORMANCE: evaluateSalesPerformance,
  HANDLE_INSURANCE_CONSULTATION: handleInsuranceConsultation,
  INDUCE_INSURANCE_PRODUCT: induceInsuranceProduct,
  INDUCE_LOAN_PRODUCT: induceLoanProduct
}
