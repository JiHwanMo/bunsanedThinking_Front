import {BUTTON} from "../../../../../../config/employee/humanResource/humanResource.js";
import {initialButtons} from "../../../common/buttonUtils.js";
import {fetchDeleteEmployee} from "../../../../apiUtils/apiDocumentation/employee/humanResource/humanResource.js";

export const renderButtons = () => {
  const type = sessionStorage.getItem("currentType");
  initialButtons(BUTTON.TASK.EMPLOYEE.HUMAN_RESOURCE[type], humanResourceTaskMapper[type]);
};

const updateEmployee = () => {
  sessionStorage.setItem("selectedButtonType", "UPDATE");
  window.location.href = "input.html";
}

const deleteEmployee = async () => {
  const selectedDataId = sessionStorage.getItem("selectedDataId");

  alert("정말 삭제하시겠습니까?");
  await fetchDeleteEmployee(selectedDataId);

  window.location.href = "home.html";
}

const humanResourceTaskMapper = {
  MANAGEMENT_EMPLOYEE: {
    UPDATE: updateEmployee,
    DELETE: deleteEmployee
  }
}
