import { BUTTON } from '../../../../../../config/employee/humanResource/humanResource.js';
import { viewInformationListAll } from '../../../tableRenderer/employee/humanResource/informationList.js';
import { informationType } from '../../../tableRenderer/employee/humanResource/informationList.js';

export const renderButtons = () => {
  initialButtons(BUTTON.TASK.EMPLOYEE.HUMAN_RESOURCE.HOME, humanResourceTaskMapper.HOME);
};

const managementEmployee = () => {
  viewInformationListAll(informationType.MANAGEMENT_EMPLOYEE);
}

const humanResourceTaskMapper = {
  HOME: {
    MANAGEMENT_EMPLOYEE: managementEmployee
  }
}
