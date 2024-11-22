import {BUTTON} from "../../../../../../config/employee/humanResource/humanResource.js";
import {initialButtons} from "../../../common/buttonUtils.js";

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
