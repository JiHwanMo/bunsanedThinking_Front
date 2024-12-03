import {
  BUTTON,
  QUESTION,
  RESULT_MESSAGE,
  SELECTED_BUTTON_TYPE
} from "../../../../../../config/employee/humanResource/humanResource.js";
import {initialButtons} from "../../../common/buttonUtils.js";
import {fetchDeleteEmployee} from "../../../../apiUtils/apiDocumentation/employee/humanResource/humanResource.js";
import {KEY, LOCATION} from "../../../../../../config/common.js";

export const renderButtons = () => {
  const type = sessionStorage.getItem(KEY.CURRENT_TYPE);
  initialButtons(BUTTON.TASK.EMPLOYEE.HUMAN_RESOURCE[type], humanResourceTaskMapper[type]);
};

const updateEmployee = () => {
  sessionStorage.setItem(KEY.SELECTED_BUTTON_TYPE, SELECTED_BUTTON_TYPE.UPDATE);
  window.location.href = LOCATION.INPUT;
}

const deleteEmployee = async () => {
  const selectedDataId = sessionStorage.getItem(KEY.SELECTED_DATA_ID);

  const check = confirm(QUESTION.CONFIRM_DELETE_EMPLOYEE);

  if (!check)
    return;

  const response = await fetchDeleteEmployee(selectedDataId);
  if (response == null)
    return;
  alert(RESULT_MESSAGE.COMPLETE_DELETE_EMPLOYEE);
  window.location.href = LOCATION.HOME;
}

const humanResourceTaskMapper = {
  MANAGEMENT_EMPLOYEE: {
    UPDATE: updateEmployee,
    DELETE: deleteEmployee
  }
}
