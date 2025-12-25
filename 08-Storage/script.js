// 1
// const decraseBtn = document.querySelector(".decrease")
// const increaseBtn = document.querySelector(".increase")
// const countEl = document.querySelector(".count")

// let count;
// if(localStorage.getItem("counter") !== null){
//     count = Number(localStorage.getItem("counter"))
// }else{
//     count = 0; 
// }

// countEl.textContent = count ;


// increaseBtn.addEventListener("click", ()=>{
//     count++;
//     countEl.textContent = count;
//     localStorage.setItem("counter" , count);
// })


// decraseBtn.addEventListener("click",()=>{
//     count--;
//     countEl.textContent=count;
//     localStorage.setItem("counter", count );
// })


// 2
// const darkBtn = document.getElementById("darkBtn");
// const lightBtn = document.getElementById("lightBtn");

// const savedTheme = localStorage.getItem("theme");

// if (savedTheme) {
//   document.body.classList.add(savedTheme);
// }

// darkBtn.addEventListener("click", () => {
//   document.body.classList.remove("light");
//   document.body.classList.add("dark");
//   localStorage.setItem("theme", "dark");
// });

// lightBtn.addEventListener("click", () => {
//   document.body.classList.remove("dark");
//   document.body.classList.add("light");
//   localStorage.setItem("theme", "light");
// });
