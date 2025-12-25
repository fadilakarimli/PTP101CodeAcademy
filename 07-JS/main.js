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

let favoriteCounter = localStorage.getItem("favoriteCount")
  ? +localStorage.getItem("favoriteCount")
  : 0;

favCount.innerText = favoriteCounter;



products.forEach((product , index)=>{
  addRow(product, index)
})

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

  // delete
  tr.querySelector(".delete-btn").addEventListener("click", () => {
    const i = products.findIndex(p => p.id === product.id);
    products.splice(i, 1);
    tr.remove();
  });

  // favoori
  tr.querySelector(".fav-btn").addEventListener("click", () => {
    favoriteCounter++;

    favCount.innerText = favoriteCounter;
    localStorage.setItem("favoriteCount", favoriteCounter);
  });


  tableBody.appendChild(tr);
}




// create

addBtn.addEventListener("click" ,()=>{
 addForm.style.display = "block";
})

createBtn.addEventListener("click",()=>{
  const product = {
    title: title.value,
    category: category.value,
    price: +price.value,
    image: image.value,
    rating: {
      rate: +rating.value,
      count: 0
    }
  };
   products.push(product);
  addRow(product, products.length - 1);

  addForm.style.display = "none";

  title.value = "";
  category.value = "";
  price.value = "";
  image.value = "";
  rating.value = "";
})











