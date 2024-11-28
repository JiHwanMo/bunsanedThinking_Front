import { viewOfficeSupplyListAll } from "../../../tableRenderer/employee/administrative/informationList.js";
import { initialButtons } from "../../../common/buttonUtils.js";
import { BUTTON } from "../../../../../../config/employee/administrative/administrative.js";

const viewOfficeSupply = async () => {
  await viewOfficeSupplyListAll();
};

const administrativeTaskMapper = {
  HOME: {
    OFFICESUPPLY_LIST: viewOfficeSupply
  }
};

export const renderButtons = () => {
  initialButtons(BUTTON.TASK.EMPLOYEE.ADMINISTRATIVE.HOME, administrativeTaskMapper.HOME);
};
