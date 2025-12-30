import { products } from "./data.js";

const tableBody = document.getElementById("productTableBody");
const addBtn = document.getElementById("addBtn");
const addForm = document.getElementById("addForm");
const createBtn = document.getElementById("createBtn");

const title = document.getElementById("title");
const category = document.getElementById("category");
const price = document.getElementById("price");
const image = document.getElementById("image");
const rating = document.getElementById("rating");

const favCount = document.querySelector(".favCount");

// ⭐ FAVORITES localStorage
let favorites = localStorage.getItem("favorites")
  ? JSON.parse(localStorage.getItem("favorites"))
  : [];

favCount.innerText = favorites.length;

// 🟢 PRODUCTS localStorage (initialProducts YOX)
let productsData = localStorage.getItem("productsLS")
  ? JSON.parse(localStorage.getItem("productsLS"))
  : [...products]; // ⬅️ COPY (VACİB)

// ilk dəfədirsə localStorage-a yaz
if (!localStorage.getItem("productsLS")) {
  localStorage.setItem("productsLS", JSON.stringify(productsData));
}

// 🔢 PAGINATION
const itemsPerPage = 5;
let currentPage = 1;

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const pageInfo = document.getElementById("pageInfo");

// id yoxdursa ver
productsData.forEach(p => {
  if (!p.id) p.id = Date.now() + Math.random();
});

// 📌 TABLE RENDER
function renderTable() {
  tableBody.innerHTML = "";

  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;

  const pageProducts = productsData.slice(start, end);

  pageProducts.forEach((product, index) => {
    addRow(product, start + index);
  });

  const totalPages = Math.ceil(productsData.length / itemsPerPage) || 1;
  pageInfo.innerText = `Page ${currentPage} / ${totalPages}`;

  prevBtn.disabled = currentPage === 1;
  nextBtn.disabled = currentPage === totalPages;
}

function addRow(product, index) {
  const tr = document.createElement("tr");

  tr.innerHTML = `
    <td>${index + 1}</td>
    <td><img src="${product.image}" width="60"></td>
    <td>${product.title}</td>
    <td>${product.category}</td>
    <td>${product.price}</td>
    <td>${product.rating.rate}</td>
    <td>
      <button class="delete-btn">
        <i class="fa-solid fa-trash"></i>
      </button>
      <button class="fav-btn">
        <i class="fa-solid fa-heart"></i>
      </button>
    </td>
  `;

  // 🗑 DELETE
  tr.querySelector(".delete-btn").addEventListener("click", () => {
    const i = productsData.findIndex(p => p.id === product.id);
    if (i !== -1) productsData.splice(i, 1);

    localStorage.setItem("productsLS", JSON.stringify(productsData));

    favorites = favorites.filter(p => p.id !== product.id);
    localStorage.setItem("favorites", JSON.stringify(favorites));
    favCount.innerText = favorites.length;

    if ((currentPage - 1) * itemsPerPage >= productsData.length && currentPage > 1) {
      currentPage--;
    }

    renderTable();
  });

  // ❤️ FAVORITE
  const favBtn = tr.querySelector(".fav-btn");

  if (favorites.some(p => p.id === product.id)) {
    favBtn.classList.add("active");
  }

  favBtn.addEventListener("click", () => {
    const favIndex = favorites.findIndex(p => p.id === product.id);

    if (favIndex === -1) {
      favorites.push(product);
      favBtn.classList.add("active");
    } else {
      favorites.splice(favIndex, 1);
      favBtn.classList.remove("active");
    }

    favCount.innerText = favorites.length;
    localStorage.setItem("favorites", JSON.stringify(favorites));
  });

  tableBody.appendChild(tr);
}

// ➕ CREATE PRODUCT
addBtn.addEventListener("click", () => {
  addForm.style.display = "block";
});

createBtn.addEventListener("click", () => {
  const product = {
    id: Date.now(),
    title: title.value,
    category: category.value,
    price: +price.value,
    image: image.value,
    rating: {
      rate: +rating.value,
      count: 0
    }
  };

  productsData.push(product);
  localStorage.setItem("productsLS", JSON.stringify(productsData));

  currentPage = Math.ceil(productsData.length / itemsPerPage);
  renderTable();

  addForm.style.display = "none";

  title.value = "";
  category.value = "";
  price.value = "";
  image.value = "";
  rating.value = "";
});

// ⏮ ⏭ PAGINATION BUTTONS
nextBtn.addEventListener("click", () => {
  const totalPages = Math.ceil(productsData.length / itemsPerPage);
  if (currentPage < totalPages) {
    currentPage++;
    renderTable();
  }
});

prevBtn.addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    renderTable();
  }
});

// 🚀 FIRST LOAD
renderTable();
