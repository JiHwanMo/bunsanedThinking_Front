import {BUTTON} from "../../../../../../config/employee/humanResource/humanResource.js";
import {initialButtons} from "../../../common/buttonUtils.js";

const context = {
  MANAGEMENT_EMPLOYEE: {
    buttons: BUTTON.TASK.EMPLOYEE.HUMAN_RESOURCE.MANAGEMENT_EMPLOYEE
  }
}

export const renderButtons = () => {
  const type = sessionStorage.getItem("currentType");
  initialButtons(BUTTON.TASK.EMPLOYEE.HUMAN_RESOURCE[type], humanResourceTaskMapper[type]);
};

const updateEmployee = () => {
  alert("수정 - 인사관리");
}

const deleteEmployee = () => {
  alert("삭제 - 인사관리");
}

const humanResourceTaskMapper = {
  MANAGEMENT_EMPLOYEE: {
    UPDATE: updateEmployee,
    DELETE: deleteEmployee
  }
}
