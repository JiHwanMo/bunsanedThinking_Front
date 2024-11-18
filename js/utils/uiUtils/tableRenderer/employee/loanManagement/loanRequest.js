import {COMBOBOX} from "../../../../../../config/employee/loanManagement/loanManagement.js";
import {BUTTON} from "../../../../../../config/common.js";

export const setLoanRequestTableBody = (rowGetter) => {
  const tableBody = document.getElementById('list');
  const type = sessionStorage.getItem("currentType");
  const data = JSON.parse(sessionStorage.getItem("list"));
  data.forEach(item => {
    const row = document.createElement("tr");
    row.innerHTML = rowGetter(item);
    // 각 행에 클릭 이벤트 추가
    row.addEventListener("click", () => {
      if (selectedRow) {
        selectedRow.classList.remove("selected");
      }
      row.classList.add("selected");
      selectedRow = row;
    });

    // 더블 클릭 시 상세 페이지로 이동
    row.addEventListener("dblclick", () => {
      // 상세 정보를 세션에 저장
      sessionStorage.setItem("selectedInsurance", JSON.stringify(item));
      window.location.href = "detail.html";
    });

    tableBody.appendChild(row);
  });
}

export const setLoanRequestSearchBar = () => {
  const container = document.querySelector(".search-container");

  const select = setComboBox();
  if (select != null) container.appendChild(select);
  container.appendChild(setInput());
  container.appendChild(setButton());
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

const setButton = () => {
  const button = document.createElement("button");
  button.id = "searchButton";
  button.textContent = BUTTON.COMMON.SEARCH;
  return button;
}
