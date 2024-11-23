import {BUTTON, POP_UP} from "../../../../../../config/employee/sales/sales.js";
import {fetchEvaluateSalesPerformance} from "../../../../apiUtils/apiDocumentation/employee/sales/sales.js";

const context= {
  EVALUATE_SALES_PERFORMANCE: {
    fetchGetById : fetchEvaluateSalesPerformance
  }
}

export const addStarButtons = () => {
  const starButtonsContainer = document.getElementById("starButtonsContainer");
  const type = sessionStorage.getItem("currentType");
  const employeeId = sessionStorage.getItem("selectedDataId");

  for (let i = 1; i <= 5; i++) {
    const button = document.createElement("div");
    button.className = "star-button";
    button.innerHTML =  BUTTON.TASK.EMPLOYEE.SALES.EVALUATE_SALES_PERFORMANCE.INPUT.STAR.repeat(i);
    button.addEventListener("click", () => {
      context[type].fetchGetById(i, employeeId);
      alert(POP_UP.EVALUATION);
      window.location.href="home.html";
    });
    starButtonsContainer.appendChild(button);
  }
};
