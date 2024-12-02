import { BUTTON } from "../../../../../config/partnerCompany/partnerCompany.js";
import { viewSetDamageAssessmentMoney } from "../../tableRenderer/partnerCompany/informationList.js";
import { initialButtons } from "../../common/buttonUtils.js";

const viewReport = async () => {
  await viewSetDamageAssessmentMoney();
}

const partnerCompanyTaskMapper = {
  HOME: {
    REPORT_LIST: viewReport
  }
}

export const renderButtons = () => {
  initialButtons(BUTTON.TASK.PARTNERCOMPANY.HOME, partnerCompanyTaskMapper.HOME);
};
