import {BUTTON} from "../../../../../../config/employee/humanResource/humanResource.js";

const context = {
  MANAGEMENT_EMPLOYEE: {
    buttons: BUTTON.TASK.EMPLOYEE.HUMAN_RESOURCE.MANAGEMENT_EMPLOYEE
  }
}

export const renderButtons = () => {
  initialButtons(context[sessionStorage.getItem("currentType")].buttons, humanResourceTaskMapper);
};

const initialButtons = (buttonMessages, buttonActionMapper) => {
  const buttonContainer = document.getElementById("buttonContainer");
  // 객체의 각 항목을 순회하여 버튼 생성
  Object.entries(buttonMessages).forEach(([key, name]) => {
    const button = document.createElement("div");
    button.className = "button-item";
    button.textContent = name; // 버튼에 표시할 텍스트 설정

    button.addEventListener("click", buttonActionMapper[key]);

    buttonContainer.appendChild(button); // 버튼을 buttonContainer에 추가
  });
}

const updateEmployee = () => {
  alert("수정 - 인사관리");
}

const deleteEmployee = () => {
  alert("삭제 - 인사관리");
}

const humanResourceTaskMapper = {
  UPDATE: updateEmployee,
  DELETE: deleteEmployee
}
