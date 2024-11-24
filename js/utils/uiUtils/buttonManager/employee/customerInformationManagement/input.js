import { fetchAddCustomerInformation, fetchUpdateCustomerInformation } from "../../../../apiUtils/apiDocumentation/employee/customerInformationManagement/customerInformationManagement.js";

export const addButtons = (buttonContainer) => {
  const selectedButtonType = JSON.parse(sessionStorage.getItem("selectedButtonType"));

  const saveButton = document.createElement("button");
  const cancelButton = document.createElement("button");

  saveButton.className = "button-item";
  cancelButton.className = "button-item";

  if (selectedButtonType === "POST") {
    saveButton.textContent = "확인";
    saveButton.addEventListener("click", async () => {
      const formData = collectFormData();
      if (!formData) return;

      try {
        await fetchAddCustomerInformation(formData);

        const modal = document.createElement("div");
        modal.className = "custom-modal";
        modal.innerHTML = `
          <div class="modal-content">
            <p>저장이 완료되었습니다</p>
          </div>
        `;
        document.body.appendChild(modal);

        setTimeout(() => {
          document.body.removeChild(modal);
          window.location.href = "home.html";
        }, 2000);
      } catch (error) {
        console.error("등록 중 오류 발생:", error);
        alert("등록 중 오류가 발생했습니다.");
      }
    });

    cancelButton.textContent = "취소";
    cancelButton.addEventListener("click", () => window.location.href = "home.html");
  } else if (selectedButtonType === "UPDATE") {
    saveButton.textContent = "수정";
    saveButton.addEventListener("click", async () => {
      const formData = collectFormData();
      if (!formData) return;

      const modal = document.createElement("div");
      modal.className = "custom-modal";
      modal.innerHTML = `
        <div class="modal-content">
            <p>수정하시겠습니까?</p>
            <div class="modal-buttons">
              <button id="confirmButton">확인</button>
              <button id="cancelButton">취소</button>
            </div>
        </div>
      `;
      document.body.appendChild(modal);

      document.getElementById("confirmButton").addEventListener("click", async () => {
          await fetchUpdateCustomerInformation(formData);
          alert("수정이 완료되었습니다.");
          document.body.removeChild(modal);
          window.location.href = "home.html";
      });

      document.getElementById("cancelButton").addEventListener("click", () => {
        document.body.removeChild(modal);
        window.history.back();
      });
    });

    cancelButton.textContent = "취소";
    cancelButton.addEventListener("click", () => window.location.href = "home.html");
  }

  buttonContainer.appendChild(saveButton);
  buttonContainer.appendChild(cancelButton);
};

const collectFormData = () => {
  const selectedButtonType = JSON.parse(sessionStorage.getItem("selectedButtonType"));

  if (selectedButtonType === "POST") {
    const name = document.getElementById("name").value.trim();
    const phoneNumber = document.getElementById("phoneNumber").value.trim();
    const job = document.getElementById("job").value.trim();
    const age = parseInt(document.getElementById("age").value, 10);
    const gender = document.getElementById("gender").value.trim();
    const residentRegistrationNumber = document.getElementById("residentRegistrationNumber").value.trim();
    const address = document.getElementById("address").value.trim();
    const property = parseFloat(document.getElementById("property").value);
    const bankName = document.getElementById("bankName").value.trim();
    const bankAccount = document.getElementById("bankAccount").value.trim();

    const accidentHistoryList = [];
    document.querySelectorAll(".accident-history-entry").forEach(entry => {
      const date = entry.querySelector('input[name="date"]').value.trim();
      const accidentDetail = entry.querySelector('input[name="accidentDetail"]').value.trim();
      if (date && accidentDetail) {
        accidentHistoryList.push({ date, accidentDetail });
      }
    });

    const surgeryHistoryList = [];
    document.querySelectorAll(".surgery-history-entry").forEach(entry => {
      const date = entry.querySelector('input[name="date"]').value.trim();
      const hospitalName = entry.querySelector('input[name="hospitalName"]').value.trim();
      const name = entry.querySelector('input[name="name"]').value.trim();
      if (date && hospitalName && name) {
        surgeryHistoryList.push({ date, hospitalName, name });
      }
    });

    const diseaseHistoryList = [];
    document.querySelectorAll(".disease-history-entry").forEach(entry => {
      const dateOfDiagnosis = entry.querySelector('input[name="dateOfDiagnosis"]').value.trim();
      const name = entry.querySelector('input[name="name"]').value.trim();
      if (dateOfDiagnosis && name) {
        diseaseHistoryList.push({ dateOfDiagnosis, name });
      }
    });

    if (!name || !phoneNumber || !job || isNaN(age) || !gender || !residentRegistrationNumber || !address ||
      isNaN(property) || !bankName || !bankAccount){
      alert("잘못된 정보를 입력하였습니다. 다시 입력해주세요.");
      return null;
    }
    return {
      name,
      phoneNumber,
      job,
      age,
      gender,
      residentRegistrationNumber,
      address,
      property,
      bankName,
      bankAccount,
      accidentHistoryList,
      surgeryHistoryList,
      diseaseHistoryList
    };
  } else if (selectedButtonType === "UPDATE") {
    const id = parseInt(sessionStorage.getItem("selectedDataId"), 10);
    const index = parseInt(document.getElementById("index").value, 10);
    const input = document.getElementById("input").value.trim();

    if (!input) {
      alert("잘못된 정보를 입력하였습니다. 다시 입력해주세요.");
      return null;
    }
    return { id, index, input };
  }
  return null;
};
