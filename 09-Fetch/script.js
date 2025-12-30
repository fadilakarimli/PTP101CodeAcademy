// const container = document.getElementById("categoryContainer");
// const STORAGE_KEY = "categories";

// // 🔹 Ekrana category-ləri çıxaran funksiya
// function renderCategories(categories) {
//   container.innerHTML = "";

//   categories.forEach(category => {
//     const card = document.createElement("div");
//     card.className = "card";

//     card.innerHTML = `
//       <h2>${category.name}</h2>
//       <p>${category.description}</p>
//       <span>ID: ${category.id}</span>
//     `;

//     container.appendChild(card);
//   });
// }

// // 🔹 Əgər localStorage-da varsa → ordan oxu
// const storedCategories = localStorage.getItem(STORAGE_KEY);

// if (storedCategories) {
//   let categories = JSON.parse(storedCategories);

//   // AZDAN → ÇOXA SORT (A → Z)
//   categories.sort((a, b) => a.name.localeCompare(b.name));

//   renderCategories(categories);
// } 
// // 🔹 localStorage boşdursa → API-dən gətir, saxla
// else {
//   fetch("https://northwind.vercel.app/api/categories")
//     .then(res => res.json())
//     .then(data => {

//       // localStorage-a yaz
//       localStorage.setItem(STORAGE_KEY, JSON.stringify(data));

//       // sort et
//       data.sort((a, b) => a.name.localeCompare(b.name));

//       renderCategories(data);
//     })
//     .catch(err => {
//       container.innerHTML = "<p>Xəta baş verdi 😢</p>";
//       console.error(err);
//     });
// }


const usersContainer = document.getElementById("users");

fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())
  .then(data => {
    data.forEach(user => {
      const card = document.createElement("div");
      card.className = "user-card";

      card.innerHTML = `
        <h3>${user.name}</h3>
        <p><b>Username:</b> ${user.username}</p>
        <p class="email"><b>Email:</b> ${user.email}</p>
        <p><b>City:</b> ${user.address.city}</p>
        <p><b>Company:</b> ${user.company.name}</p>
      `;

      usersContainer.appendChild(card);
    });
  })
  .catch(error => {
    usersContainer.innerHTML = "Xəta baş verdi 😢";
    console.error(error);
  });
