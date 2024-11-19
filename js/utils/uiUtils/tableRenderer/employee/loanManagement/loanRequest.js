import {COMBOBOX} from "../../../../../../config/employee/loanManagement/loanManagement.js";
import {BUTTON} from "../../../../../../config/common.js";

export const setLoanRequestSearchBar = () => {
  const container = document.querySelector(".search-container");

  const select = setComboBox();
  if (select != null) container.appendChild(select);
  container.appendChild(setInput());
  container.appendChild(setSearchButton());
}

const setComboBox = () => {
  const select = document.createElement("select");
  const boxContext = COMBOBOX[sessionStorage.getItem("currentType")];
  if (Object.keys(boxContext).length == 0) return null;
  select.id = boxContext.id;
  select.className = "combo-Box";
  const optionTypes = boxContext.optionTypes;
  optionTypes.forEach(optionType => {
    const option = document.createElement("option");
    option.value = optionType.value;
    option.textContent = optionType.label;
    select.appendChild(option);
  });
  return select;
}

const setInput = () => {
  const input = document.createElement("input");
  input.type = "text";
  input.id = "searchInput";
  input.placeholder = "검색어 입력";
  return input;
}

const setSearchButton = () => {
  const button = document.createElement("button");
  button.id = "searchButton";
  button.textContent = BUTTON.COMMON.SEARCH;
  return button;
}
