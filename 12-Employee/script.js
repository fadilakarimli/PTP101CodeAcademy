
/* script.js */
const form = document.getElementById("employeeForm");
const tableBody = document.getElementById("employeeTableBody");
const toggleFormBtn = document.getElementById("toggleFormBtn");
const formContainer = document.getElementById("formContainer");

const API_URL = "http://localhost:3000/employees";

// Toggle form visibility
toggleFormBtn.addEventListener("click", () => {
  formContainer.classList.toggle("active");
  
  if (formContainer.classList.contains("active")) {
    toggleFormBtn.textContent = "Cancel";
    document.getElementById("fullName").focus();
  } else {
    toggleFormBtn.textContent = "New Employee";
    form.reset();
  }
});

// Fetch & show employees
async function getEmployees() {
  try {
    const res = await fetch(API_URL);
    const data = await res.json();
    renderTable(data);
  } catch (error) {
    console.error("Error fetching employees:", error);
    tableBody.innerHTML = '<tr><td colspan="6" class="empty-state">Unable to load employees. Please check if the server is running.</td></tr>';
  }
}

function renderTable(employees) {
  tableBody.innerHTML = "";

  if (employees.length === 0) {
    tableBody.innerHTML = '<tr><td colspan="6" class="empty-state">No employees yet. Click "New Employee" to add one.</td></tr>';
    return;
  }

  employees.forEach((emp, index) => {
    tableBody.innerHTML += `
      <tr>
        <td>${index + 1}</td>
        <td>${emp.fullName}</td>
        <td>${emp.email}</td>
        <td>${emp.age}</td>
        <td>${emp.price}</td>
        <td>
          <button class="delete-btn" onclick="deleteEmployee('${emp.id}')">Delete</button>
        </td>
      </tr>
    `;
  });
}

// Create employee
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const employee = {
    fullName: fullName.value,
    email: email.value,
    age: Number(age.value),
    price: Number(price.value)
  };

  try {
    await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(employee)
    });

    form.reset();
    formContainer.classList.remove("active");
    toggleFormBtn.textContent = "New Employee";
    getEmployees();
  } catch (error) {
    console.error("Error adding employee:", error);
    alert("Failed to add employee. Please try again.");
  }
});

// Delete employee
async function deleteEmployee(id) {
  if (!confirm("Are you sure you want to delete this employee?")) {
    return;
  }

  try {
    await fetch(`${API_URL}/${id}`, {
      method: "DELETE"
    });
    
    getEmployees();
  } catch (error) {
    console.error("Error deleting employee:", error);
    alert("Failed to delete employee. Please try again.");
  }
}

// Make deleteEmployee globally accessible
window.deleteEmployee = deleteEmployee;

// First load
getEmployees();