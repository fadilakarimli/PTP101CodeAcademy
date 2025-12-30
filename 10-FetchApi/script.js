const API_URL = "https://northwind.vercel.app/api/customers";

const tableBody = document.getElementById("customerTableBody");
const addBtn = document.getElementById("addBtn");
const addForm = document.getElementById("addForm");
const createBtn = document.getElementById("createBtn");

const companyName = document.getElementById("companyName");
const contactName = document.getElementById("contactName");
const contactTitle = document.getElementById("contactTitle");
const city = document.getElementById("city");
const country = document.getElementById("country");
const phone = document.getElementById("phone");

let customers = [];

function loadCustomers() {
  fetch(API_URL)
    .then(res => res.json())
    .then(data => {
      customers = data;
      renderTable();
    })
    .catch(err => console.error("Error loading customers:", err));
}


function renderTable() {
  tableBody.innerHTML = "";
  customers.forEach((c, index) => {
    const tr = document.createElement("tr");

    tr.innerHTML = `
      <td>${index + 1}</td>
      <td>${c.companyName}</td>
      <td>${c.contactName}</td>
      <td>${c.contactTitle}</td>
      <td>${c.address?.city}</td>
      <td>${c.address?.country}</td>
      <td>${c.address?.phone}</td>
      <td>
        <button class="delete-btn">Delete</button>
      </td>
    `;

    tr.querySelector(".delete-btn").onclick = function () {
      if (!c.id) return alert("Cannot delete this item");

      fetch(`${API_URL}/${c.id}`, { 
        method: "DELETE"
       })
        .then(() => {
          customers = customers.filter(x => x.id !== c.id);
          renderTable();
        })
        .catch(err => console.error(err));
    };

    tableBody.appendChild(tr);
  });
}


addBtn.onclick = function () {
  addForm.style.display = addForm.style.display === "block" ? "none" : "block";
};

createBtn.onclick = function () {
  if (!companyName.value || !contactName.value || !contactTitle.value || !city.value || !country.value || !phone.value) {
    return alert("Zəhmət olmasa bütün inputları doldurun!");
  }

  const newCustomer = {
    companyName: companyName.value,
    contactName: contactName.value,
    contactTitle: contactTitle.value,
    address: {
      city: city.value,
      country: country.value,
      phone: phone.value
    }
  };

  fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newCustomer)
  })
    .then(res => res.json())
    .then(addedCustomer => {
      customers.push(addedCustomer);
      renderTable();

      companyName.value = contactName.value = contactTitle.value = city.value = country.value = phone.value = "";
      addForm.style.display = "none";
    })
    .catch(err => console.error(err));
};



loadCustomers();
