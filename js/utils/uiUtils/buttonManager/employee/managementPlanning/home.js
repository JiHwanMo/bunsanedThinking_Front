import { BUTTON } from '../../../../../../config/employee/managementPlanning/managementPlanning.js';
import { viewDepartmentListAll } from '../../../tableRenderer/employee/managementPlanning/informationList.js';
import { initialButtons } from "../../../common/buttonUtils.js";

const viewDepartment = async () => {
  await viewDepartmentListAll();
};

const managementPlanningTaskMapper = {
  HOME: {
    DEPARTMENT_LIST: viewDepartment
  }
};

export const renderButtons = () => {
  initialButtons(BUTTON.TASK.EMPLOYEE.MANAGEMENTPLANNING.HOME, managementPlanningTaskMapper.HOME);
};
