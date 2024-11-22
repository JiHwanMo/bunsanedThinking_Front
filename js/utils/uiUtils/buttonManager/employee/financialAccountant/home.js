import { BUTTON } from '../../../../../../config/employee/financialAccountant/financialAccountant.js';
import { viewInformationListAll } from '../../../tableRenderer/employee/financialAccountant/informationList.js';
import { informationType } from '../../../tableRenderer/employee/financialAccountant/informationList.js';

export const renderButtons = () => {
  initialButtons(BUTTON.TASK.EMPLOYEE.FINANCIAL_ACCOUNTANT.HOME, financialAccountantTaskMapper.HOME);
};

const handlePaymentDetail = () => {
  viewInformationListAll(informationType.HANDLE_PAYMENT_DETAIL);
}

const viewDepositDetail = () => {
  viewInformationListAll(informationType.VIEW_DEPOSIT_DETAIL);
}

const financialAccountantTaskMapper = {
  HOME: {
    HANDLE_PAYMENT_DETAIL: handlePaymentDetail,
    VIEW_DEPOSIT_DETAIL: viewDepositDetail
  }
}
