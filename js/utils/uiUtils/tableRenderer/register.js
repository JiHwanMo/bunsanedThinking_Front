import {TITLE, INPUT_FORM, DYNAMIC_SECTION_FORM} from "../../../../config/register.js";
import {renderButton} from "../buttonManager/register.js";

export const renderInput = () => {
  const title = document.getElementById("title");
  title.textContent = TITLE;
  renderInputFields();
  renderButton();
}

const renderInputFields = () => {
  const inputFieldsContainer = document.getElementById("inputFieldsContainer");
  while(inputFieldsContainer.firstChild) inputFieldsContainer.removeChild(inputFieldsContainer.firstChild);
  Object.entries(INPUT_FORM).forEach(([key, form]) => inputFieldsContainer.appendChild(createForm(form)));
  Object.entries(DYNAMIC_SECTION_FORM).forEach(([key, form]) => addDynamicSection(form));
}

const createForm = (form) => {
  const formDiv = document.createElement("div");
  formDiv.className = "form-group";

  const formLabel = document.createElement("label");
  formLabel.for = form.for;
  formLabel.textContent = form.placeholder;
  formDiv.appendChild(formLabel);

  if (form.type === "button-group") {
    const buttonGroup = document.createElement("div");
    buttonGroup.className = "button-group";
    form.options.forEach((option) => {
      const button = document.createElement("button");
      button.textContent = option.text; // 버튼에 표시할 텍스트
      button.className = "gender-button";
      button.addEventListener("click", () => {
        document.querySelectorAll(".gender-button").forEach((btn) => btn.classList.remove("selected"));
        button.classList.add("selected");
        buttonGroup.dataset.selectedValue = option.value; // 선택된 값으로 설정
      });
      buttonGroup.appendChild(button);
    });
    formDiv.appendChild(buttonGroup);
  } else {
    const formInput = form.isTextArea
      ? document.createElement("textarea")
      : document.createElement("input");
    formInput.type = form.type;
    formInput.id = form.id;
    formInput.name = form.name;
    formInput.placeholder = form.placeholder;
    formDiv.appendChild(formInput);
  }

  return formDiv;
};

const addDynamicSection = (form) => {
  const sectionTitle = form.sectionTitle;
  const sectionId = form.sectionId;
  const fieldNames = form.fieldNames;
  const container = document.getElementById("inputFieldsContainer");
  const sectionDiv = document.createElement("div");
  sectionDiv.id = `${sectionId}Container`;
  sectionDiv.className = "dynamic-section";

  const headerDiv = document.createElement("div");
  headerDiv.className = "section-header";

  const sectionLabel = document.createElement("label");
  sectionLabel.textContent = sectionTitle;

  const addButton = document.createElement("button");
  addButton.textContent = "+";
  addButton.className = "add-button";
  addButton.addEventListener("click", () => addInputField(sectionDiv, sectionId, fieldNames));

  headerDiv.appendChild(sectionLabel);
  headerDiv.appendChild(addButton);
  sectionDiv.appendChild(headerDiv);

  container.appendChild(sectionDiv);
};

const addInputField = (sectionDiv, sectionId, fieldNames) => {
  const inputDiv = document.createElement("div");
  inputDiv.className = "form-group";

  // 삭제 버튼 추가
  const removeButton = document.createElement("button");
  removeButton.textContent = "-";
  removeButton.className = "remove-button";
  removeButton.addEventListener("click", () => {
    sectionDiv.removeChild(inputDiv); // 이력 항목 삭제
  });

  fieldNames.forEach((field) => {
    const input = document.createElement("input");
    input.type = field === "date" || field === "dateOfDiagnosis" ? "date" : "text";
    input.name = `${sectionId}${field}`;
    input.placeholder = field === "date" || field === "dateOfDiagnosis" ? "날짜 입력" : `${field} 입력`;
    input.className = "input-field";
    inputDiv.appendChild(input);
  });

  inputDiv.appendChild(removeButton); // 삭제 버튼 추가
  sectionDiv.appendChild(inputDiv);
};
