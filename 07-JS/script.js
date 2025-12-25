// // // let number = 9;

// // // if (number % 2 === 0) {
// // //     console.log("cut");
// // // } else {
// // //     console.log("tek");
// // // }



// // // let a = 10, b = 25, c = 15;
// // // let max;

// // // if (a > b && a > c) {
// // //     max = a;
// // // } else if (b > a && b > c) {
// // //     max = b;
// // // } else {
// // //     max = c;
// // // }

// // // console.log(max);



// // // let temp = 28;

// // // if (temp < 0) {
// // //     console.log("Buz kimi soyuq");
// // // } else if (temp <= 20) {
// // //     console.log("Sərin");
// // // } else if (temp <= 35) {
// // //     console.log("İsti");
// // // } else { 
// // //     console.log("Çox isti");
// // // }


// // // let brand = "apple";

// // // switch (brand) {
// // //     case "samsung":
// // //         console.log("Samsung seçildi");
// // //         break;
// // //     case "apple":
// // //         console.log("iPhone seçildi");
// // //         break;
// // //     case "xiaomi":
// // //         console.log("Xiaomi seçildi");
// // //         break;
// // //     default:
// // //         console.log("Belə marka yoxdur");
// // // }



// // // let num = 123;

// // // let a = (num - (num % 100)) / 100;        // yuzlukler
// // // let b = ((num % 100) - (num % 10)) / 10;  // onluqlar
// // // let c = num % 10;                          // teklik

// // // let sum = a + b + c;
// // // let product = a * b * c;
// // // let average = sum / 3;

// // // console.log(sum);
// // // console.log(product);
// // // console.log(average);


// // //  2) arrayin icindeki elementlerin cemini tapmaq.
// // // let arr = [1, 2, 3, 4, 5];

// // // let sum = 0;

// // // for (let i = 0; i < arr.length; i++) {
// // //     sum += arr[i];
// // // }

// // // console.log(sum);         



// // // let arr = [1, 2, 3, 4, 5, 6, 7, 8];

// // // let evenCount = 0;

// // // for (let i = 0; i < arr.length; i++) {
// // //     if (arr[i] % 2 === 0) {
// // //         evenCount++;
// // //     }
// // // }

// // // console.log(evenCount); // 4

// // // for (let i = 1; i <= 50; i++) {
// // //     if (i % 3 === 0) {
// // //         console.log(i);
// // //     }
// // // }


// // //let sentence = "JavaScreeeeeeeeeeeeeeeeeeeeeeeeeeeipt cox guclw bir proqramlasdadadaasdirma dilidir";


// // // cumleni sozlre boluruk
// // // let words = sentence.split(" ");

// // // let longest = words[0];

// // // for (let i = 1; i < words.length; i++) {
// // //     if (words[i].length > longest.length) {
// // //         longest = words[i];
// // //     }
// // // }

// // // console.log(longest);


// // // let sentence = "Bugün hami dersi oxumusdu";
// // // let updatedSentence = sentence.replace("oxumusdu", "oxumamisdi");
// // // console.log(updatedSentence); 



// // // let sentence = "JavaScript cox maraqlidir";
// // // let wordLengths = sentence.split(" ").map(word => word.length); 
// // // console.log(wordLengths);  



// // // let sentence = "Hami bilsin Ekber bugun derse vaxtinda gelmeyib yatib qalibmish";

// // // sentence = sentence.replace(",", "");

// // // let words = sentence.split(" ");

// // // for (let word of words) {
// // //     console.log(word + " → " + word.length + " herf");
// // // }


// // // let cumle = "Hüseynəga AI ilə tasklari yazmağa başladı. Amma tapşırıqları o qədər qarışıq yazdı ki, AI belə onu anlamağa çalışarkən '404 Error' verdi. Həmçinin, AI-dan istifadə etmənin nə qədər maraqlı oldugunu bildik. Ve bəzən gözlənilməz nəticələrə səbəb olduğunu da göstərmək istədim!";

// // // let parts = cumle
// // //     .replace("!", ".")
// // //     .split(".")
// // //     .map(s => s.trim())
// // //     .filter(s => s.length > 0);

// // // console.log("count: " + parts.length);















// n ededi verilib , n -nin yerine her hansi bir ededdir ,  və 1-den n-e qeder olan ededlerin cemini tapin tap. (while ile yazn



// let n = 5;
// let sum = 0;

// for (let i = 1; i <= n; i++) {
//     sum += i;
// }

// console.log(sum); // 15


// let n = 5;
// let sum = 0;
// let i = 1;

// while (i <= n) {
//     sum += i;
//     i++;
// }

// console.log(sum); // 15


// let number;

// do {
//     number = parseInt(prompt("Musbet eded daxil edin"));
// } while (number <= 0);

// console.log("Daxil etdiyiniz eded:", number);



// let n = 5; 
// let result = 1;

// for (let i = 1; i <= n; i++) {
//     result *= i;
// }

// console.log(result); 

// 1

// const numStr = prompt("added number:");
// if (numStr !== null) {
//   let sum = 0;
//   for (const ch of numStr) {
//     sum += Number(ch);
//   }
//   alert(" sum: " + sum);
// }



// 2)
// const arr = [2, 3, 4, 5];


// const squared = [];
// for (const n of arr) {
//   squared.push(n * n);
// }
// console.log("Kvadratları:", squared);
// let students = [
//     { name: "Əli", email: "ali@example.com", age: 20 },
//     { name: "Vəli", email: "veli@example.com", age: 22 },
//     { name: "Ramil", email: "ramil@example.com", age: 19 }
// ];

// let totalAge = 0;
// for (let i = 0; i < students.length; i++) {
//     totalAge += students[i].age;
// }

// // console.log(totalAge);

// const students = [
//   { name: "Ali", email: "ali@example.com", age: 17 },
//   { name: "Aysel", email: "aysel@mail.az",age: 21 },
//   { name: "Murad", email: "murad@gmail.com",age: 24 },
//   { name: "Leyla", email: "leyla@edu.org",age: 221 }
// ];
// let sum = 0;
// for (let i = 0; i < students.length; i++) {
//     sum += students[i].age
  
// }
// console.log( "yaslarin cemi " + sum);











// const comStudents = [];

// for (let i = 0; i < students.length; i++) {
//   if (students[i].email.endsWith("com")) {
//     comStudents.push(students[i]);
//   }
// }

// console.log(comStudents);
                   



// function Iseven(num) {
//   if(num % 2 === 0){
//     return "cut";
//   }
//   else{
//     return "tek";
//   }
// }
// console.log(Iseven(7));
// console.log(Iseven(8));

// function isPositive(number){
//   if (number<0) {
//     return number + " - this number is positive"
//   }
//   else if(number > 0) {
//     return number + " - this number is negative"
//   }
//   return number + " - this is number is zero"
// }

// console.log(isPositive(7));




// 05.12.2025

// 1)

// function getFirstElement(arr) {
//     return arr[0];
// }

// console.log(getFirstElement([10, 20, 30])); // 10


// 2)

// function getLastElement(arr) {
//     return arr[arr.length -3 ];
// }

// console.log(getLastElement([10, 20, 30,33,33,55,66,7,8,9,44])); // 30


// 3)

// function countItems(arr) {
//     return arr.length;
// }

// console.log(countItems([1, 5, 9, 7])); // 4


// 4)

// function concatWords(word1, word2) {
//     return word1 + " " + word2;
// }

// console.log(concatWords("Salam", "Ptp101!")); 


// 5)

// function sumDigits(num) {
//     let text = String(num);  
//     let sum = 0;

//     for (let i = 0; i < text.length; i++) {
//         sum += Number(text[i]);
//     }

//     return sum;
// }
// console.log(sumDigits(781)); // 16
        
// 6)

// function countWords(sentence) {
//     let parts = sentence.trim().split(" ");
//     return parts.length;
// }

// console.log(countWords("Good Luck PTP101!")); // 3

// 7)

// function reverseArray(arr) {
//     let newArr = [];

//     for (let i = arr.length - 1; i >= 0; i--) {
//         newArr.push(arr[i]);
//     }

//     return newArr;
// }

// console.log(reverseArray([1, 2, 3])); 


// function reverseArray(arr) {
//     let newArr = [];

//     for (let i = 0; i < arr.length; i++) {
//         newArr.unshift(arr.shift()); 
//     }

//     return newArr;
// }

// console.log(reverseArray([1, 2, 3]));  


// // 8)

// function multiplyDigits(num) {
//     let text = String(num);
//     let result = 1;

//     for (let i = 0; i < text.length; i++) {
//         result *= Number(text[i]);
//     }

//     return result;
// }

// console.log(multiplyDigits(452)); // 40


// 9)

// function maxInArray(arr) {
//     let max = arr[0];

//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > max) {
//             max = arr[i];
//         }
//     }

//     return max;
// }

// console.log(maxInArray([4, 7, 9])); // 9




// 09.12.2025


// 1) Verilmiş ədədləri callback ilə yoxla və yalnız cüt ədədləri qaytar

// function isEven(num) {
//     return num % 2 === 0;
// }

// function filterEven(arr, callback) {
//     let result = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (callback(arr[i])) result.push(arr[i]);
//     }
//     return result;
// }


// console.log(filterEven([1,2,3,4,5], isEven)); // [2,4]


// // 2) Verilmiş sözlərdən yalnız uzunluğu 5-dən böyük olanları callback ilə seçğ

// function filterLongWords(arr, callback) {
//     let result = [];
//     for (let i=0; i<arr.length; i++){
//         if(callback(arr[i])) result.push(arr[i]);
//     }
//     return result;
// }

// function isLong(word) {
//     return word.length > 5;
// }
// console.log(filterLongWords(["car","banana","house"], isLong)); // ["banana","house"]


// // 3) Verilmiş parametr sayından neçə ədəd olduğunu tap (unlimited parameters)
// function countParams(...params){
//     return params.length;
// }

// console.log(countParams(10, 20, "salam", true, 99)); // 5


// // 4) Ədədləri unlimited param alıb hamısını kvadrat edib array qaytar
// function squareAll(...nums){
//     let result = [];
//     for(let n of nums){
//         result.push(n*n);
//     }
//     return result;
// }

// console.log(squareAll(2,4,6)); // [4,16,36]


// // 5) Math.random ilə 6 rəqəmli şans kodu yarat
// function generateCode(){
//     return Math.floor(100000 + Math.random()*900000);
// }

// // 6) Recursive şəkildə string-də olan bütün böyük hərflərin sayını tap
// function countUpper(str, i=0){
//     if(i === str.length) return 0;
//     let count = (str[i] === str[i].toUpperCase() && /[A-Z]/.test(str[i])) ? 1 : 0;
//     return count + countUpper(str, i+1);
// }

// console.log(countUpper("HeLLo WorLD")); // 5



// // 10) Array daxilində neçə string, neçə number olduğunu recursion ilə say
// function countTypes(arr, result={numbers:0, strings:0}){
//     for(let item of arr){
//         if(Array.isArray(item)) countTypes(item, result);
//         else if(typeof item === "number") result.numbers++;
//         else if(typeof item === "string") result.strings++;
//     }
//     return result;
// }

// console.log(countTypes([1,"a",2,"b",[3,"c"]])); // {numbers:3, strings:3}


// console.log(generateCode()); // məsələn: 483920




// // 13) Array-dəki bütün sözləri callback ilə capitalized formada qaytar
// function capitalizeWords(arr){
//     return arr.map(word => word.charAt(0).toUpperCase() + word.slice(1));
// }

// console.log(capitalizeWords(["salam","dunya","ptp"])); // ["Salam","Dunya","Ptp"]


// // 14) Verilmiş function-u callback olaraq qəbul edib onun nəticəsini Math.pow ilə N dəfə gücə yüksəlt
// function powerCallback(callback, n){
//     return Math.pow(callback(), n);
// }

// console.log(powerCallback(()=>3, 3)); // 27









// function tenlik(reqem1,reqem2){
//     return reqem1+reqem2
// }
// console.log(tenlik(1,2));






// 09.12.2025
// 1_
// const words = ["car", "banana", "rocket", "tea", "computer"];

// const result = words.filter(word => word.length > 5);

// console.log(result); 
// // ["banana", "rocket", "computer"]

// // // 2
// const names = ["ali", "nigar", "kamran"];

// const fixed = names.map(ptp => ptp[0].toUpperCase() + ptp.slice(1));

// console.log(fixed);
// // ["Ali", "Nigar", "Kamran"]




// 3


// 15

// 4

// const nums = [1, 2, 3, 4, 5, 6];

// const evens = nums.filter(n => n % 2 === 0);

// console.log(evens);
// [2, 4, 6]


// 5
// const arr = [2, 4, 6, 8];

// const squared = arr.map(n => n * n);

// console.log(squared);
// [4, 16, 36, 64]

// 6
// const products = [
//   { name: "Book", price: 12 },
//   { name: "Pen",  price: 2  }
// ];

// const namesOnly = products.map(ferman => ferman.name);

// console.log(namesOnly);
// // ["Book", "Pen"]



// // 7

// const items = ["12", "car", "44", "house"];

// const nonNumbers = items.filter(item => isNaN(item));

// console.log(nonNumbers);
// // ["car", "house"]



// // 8

// const users = ["Ali", "Nigar", "Veli"];

// const input = "Nigar";

// const exists = users.includes(input);

// console.log(exists);
// // true


// // 9

// const texts = ["hi", "", "hello", "", "js"];

// const cleaned = texts.filter(t => t !== "");

// console.log(cleaned);
// // ["hi", "hello", "js"]




// const users = [{name: "Amin"}, {name: "Elmira"}, {name: "Elmir"}];


// 10.12.2025

// 1
// const products = [
//   { name: "Milk", price: 5 },
//   { name: "Bread", price: 2 },
//   { name: "Coffee", price: 10 }
// ];

// const names = products.map(item => item.name);

// const names = products.map(function(item) {
//   return item.name;
// });


// console.log(names); 
// ["Milk", "Bread", "Coffee"]




// 2
// const words = ["hello", "test1", "world", "js2", "code"];

// const filtered = words.filter(word => /\d/.test(word));

// console.log(filtered);



// 3


// const names = ["Ali", "Nurlan", "Aysun", "Sema"];

// const username = "Nurlan";

// if (names.includes(username)) {
//   console.log("Var");
// } else {
//   console.log("Yoxdur");
// }



// 4
// const arr = ["hi", "", "hello", "", "js", ""];

// const cleaned = arr.filter(item => item !== "");

// console.log(cleaned);
// ["hi", "hello", "js"]


// 5


// const skills = ["HTML", "CSS", "JS", "React"];

// if (skills.includes("JS")) {
//   console.log("Var");
// } else {
//   console.log("Yoxdur");
// }



// 6



// 1
// function co

// console.log(countUpper("HeLLo WorLD")); // 5

// 2

// function minRecursive(arr, i = 0, min = Infinity) {
//   if (i === arr.length) return min;
//   if (arr[i] < min) min = arr[i];
//   return minRecursive(arr, i + 1, min);
// }

// console.log(minRecursive([7, 3, 9, 1, 5])); // 1


// 3

// const products = [
//   { name: "Phone", price: 800 },
//   { name: "Laptop", price: 1500 },
//   { name: "Mouse", price: 50 }
// ];

// const total = products.reduce((sum, item) => sum + item.price, 0);

// console.log(total); // 2350

     
// 4
// const students = [
//   { name: "Ferman", age: 33 },
//   { name: "Fatima", age: 31 }
// ];

// const deepCopy = students.map(s => ({ ...s }));

// console.log(deepCopy);


// 5

// const users = [
//   { id: 1, email: "test@gmail.com" },
//   { id: 2, email: "user@yahoo.com" },
//   { id: 3, email: "fadile@mail.com" }
// ];

// const user = users.find(u => u.email === "fadile@mail.com");

// console.log(user);




// 6


// const arr = [1, 2, 3, 4];

// const copy1 = arr.slice();      // slice
// const copy2 = [].concat(arr);   // concat
// const copy3 = [...arr];         // spread

// console.log(copy1, copy2, copy3);



// 7

// const users2 = [
//   { name: "Aysel", age: 20 },
//   { name: "Eli", age: 30 },
//   { name: "Samir", age: 25 }
// ];

// const avg =
//   users2.reduce((sum, u) => sum + u.age, 0) / users2.length;

// console.log(avg); // 25


// 8

// const words = ["hello", "fadila", "fullstack"];

// const totalLetters = words.reduce((sum, w) => sum + w.length, 0);

// console.log(totalLetters); // 6+6+9 = 21



// 9


// const userObj = {
//   name: "Fadile",
//   hobbies: ["coding", "football"]
// };

// const copy = {
//   ...userObj,
//   hobbies: [...userObj.hobbies]
// };

// console.log(copy);





// let people = [
//     { name: "Ali", age: 25 },
//     { name: "Leyla", age: 19 },
//     { name: "Murad", age: 30 }
// ];

// let sortedPeople = people.sort((a, b) => a.age - b.age);

// console.log(sortedPeople);
// [{ name: "Leyla", age: 19 }, { name: "Ali", age: 25 }, { name: "Murad", age: 30 }]


// 2
// let texts = ["car", "telephone", "tv", "laptop"];

// let sortedTexts = texts.sort((a, b) => b.length - a.length);

// console.log(sortedTexts);
// ["telephone", "laptop", "car", "tv"]


// 3
// let items = [
//     { name: "Mouse", price: 50 },
//     { name: "Keyboard", price: 100 },
//     { name: "Monitor", price: 1200 },
//     { name: "PC", price: 2000 }
// ];

// let foundItem = items.find(item => item.price > 1000);

// console.log(foundItem);
// { name: "Monitor", price: 1200 }





// const arr = ["apple", "banana", "orange", "mango"];

// 2-ci elementin indexi 1-dir, 2 element silirik
// arr.splice(1, 2);

// console.log(arr); // ["apple", "mango"]



// const numbers = [1, 2, 3, 4, 5];

// const newNumbers = [...numbers, 9, 10];

// console.log(newNumbers); // [1, 2, 3, 4, 5, 9, 10]






// const nums = [5, 12, 8, 20, 3];

// const maxNum = nums.reduce((max, current) => {
//   return current > max ? current : max;
// }, nums[0]);

// console.log(maxNum); // 20


// const buttons = document.querySelectorAll('button')



// buttons.forEach(button =>{
//     console.log(button.textContent)
// })



// const pElement = document.getElementsByTagName('p')

// Array.from(pElement).forEach((p)=>{
//     console.log(p.textContent)
// })





// const mainElem = document.getElementById('main')

// console.log(mainElem.children)

// console.log(mainElem.firstElementChild)

// console.log(mainElem.lastElementChild)


// const textElem = document.getElementsByClassName('text')


// console.log(textElem.textContent = '<h1>salam</h1>');

// console.log(textElem.innerHTML = '<h1>salam</h1>');

// 1

// const info = document.querySelector('#info');

// console.log(info.textContent);
// console.log(info.innerText);
// console.log(info.innerHTML);

// info.innerHTML = '<strong>Hello PTP101</strong>';

// 2
// const wrapper = document.querySelector('.wrapper');

// // p elementi yaradırıq
// const p = document.createElement('p');
// p.textContent = 'PTP101 Welcoome';

// // button yaradırıq
// const button = document.createElement('button');
// button.textContent = 'Remove text';

// // p-ni silən click
// button.addEventListener('click', () => {
//   p.remove();
// });

// // elementləri wrapper-ə əlavə edirik
// wrapper.append(p);
// wrapper.append(button);





// 3
// const wrapper = document.querySelector('.wrapper');

// // p yaradılır
// const p = document.createElement('p');
// p.textContent = 'PTP101 JavaScript';

// // button yaradılır
// const button = document.createElement('button');
// button.textContent = 'Hide text';

// // click logic
// button.addEventListener('click', () => {
//   if (p.style.display === 'none') {
//     p.style.display = 'block';
//     button.textContent = 'Hide text';
//   } else {
//     p.style.display = 'none';
//     button.textContent = 'Show text';
//   }
// });

// // wrapper-ə əlavə edirik
// wrapper.append(p);
// wrapper.append(button);



// const display = document.querySelector('.display');
// const buttons = document.querySelectorAll('.buttons button');
// const body = document.body;

// buttons.forEach(btn => {
//   btn.addEventListener('click', () => {
//     const value = btn.textContent;

//     if (btn.classList.contains('number') || btn.classList.contains('operator')) {
//       display.value += value;
//     } 
//     else if (btn.classList.contains('equals')) {
//       try {
//         display.value = eval(display.value);
//         // Background rəngi dəyişir hər dəfə nəticə çıxanda
//         body.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 80%)`;
//       } catch {
//         display.value = 'Error';
//       }
//     } 
//     else if (btn.classList.contains('clear')) {
//       display.value = '';
//       body.style.backgroundColor = '#f5f5f5';
//     }
//   });
// });


// const itemList = document.getElementById('itemList');
// const button = document.getElementById('removeItem');

// // 5 ədəd siyahı elementi yaradıb əlavə et
// for (let i = 1; i <= 5; i++) {
//   const li = document.createElement('li');
//   li.textContent = `Item ${i}`;
//   itemList.appendChild(li);
// }

// // Butona kliklədikdə, sonuncu elementi sil
// button.addEventListener('click', () => {
//   const lastItem = itemList.lastElementChild;
//   if (lastItem) {
//     itemList.removeChild(lastItem);
//   }
// // });


// const box = document.getElementById('box');
// const button = document.getElementById('toggleColor');

// // Arxa plan rəngini dəyişdir
// button.addEventListener('click', () => {
//   if (box.style.backgroundColor === 'red') {
//     box.style.backgroundColor = 'lightgrey';
//   } else {
//     box.style.backgroundColor = 'red';
//   }
// });


// sabah

// 1
//    const button = document.getElementById('toggleButton');
//         const paragraph = document.getElementById('text');

//         button.addEventListener('click', () => {
//             if (paragraph.style.display === 'none') {
//                 paragraph.style.display = 'block';
//                 button.textContent = 'Hide text';
//             } else {
//                 paragraph.style.display = 'none';
//                 button.textContent = 'Show text';
//             }
//         });



//  2      


    // const divWrapper = document.querySelector('.wrapper');
    //     const paragraph = document.createElement('p');
    //     paragraph.textContent = 'ptp101';
    //     divWrapper.appendChild(paragraph);

    //     const button = document.getElementById('removeButton');
    //     button.addEventListener('click', () => {
    //         paragraph.remove();
    //     });






//     const input = document.getElementById('todoInput');
// const addBtn = document.getElementById('addBtn');
// const todoList = document.getElementById('todoList');

// // localStorage-dan əvvəlki tapşırıqları gətiririk
// let todos = JSON.parse(localStorage.getItem('todos')) || [];

// // localStorage-dan gələn tapşırıqları ekrana əlavə edirik
// todos.forEach(todo => addTodoToDOM(todo));

// addBtn.addEventListener('click', () => {
//   const task = input.value.trim();
//   if (task !== '') {
//     todos.push(task);
//     localStorage.setItem('todos', JSON.stringify(todos));
//     addTodoToDOM(task);
//     input.value = '';
//   }
// });

// function addTodoToDOM(task) {
//   const li = document.createElement('li');
//   li.textContent = task;

//   // klikləyincə silinir
//   li.addEventListener('click', () => {
//     li.remove();
//     // localStorage-u yeniləyirik
//     todos = todos.filter(t => t !== task);
//     localStorage.setItem('todos', JSON.stringify(todos));
//   });

//   todoList.appendChild(li);
// }





// const wrapper = document.querySelector('.wrapper');



// const h2 = document.createElement('h2');
// const p = document.createElement('p');
// const button = document.createElement('button');



// h2.textContent = 'Salam bu h2-dir';
// p.textContent = 'Bu p tagi-dir';
// button.textContent ='bu butondur!';



// wrapper.append(h2,p,button);






// const button = document.querySelector('button')

// const colors = ['red', 'yellow','green','orange','purple'];

// let index =0;


// button.addEventListener('click',()=>{
//     document.body.style.backgroundColor = colors[index];
//     index++;

//     if(index === colors.length){
//         index=0;
//     }

// })


// const wrapper=document.querySelector('.wrapper');
// const pelement=document.createElement('p');
// const btn=document.createElement('button');
// pelement.textContent='Ptp101 salam'
// btn.textContent='remove text'
// wrapper.append(pelement,btn);
// btn.addEventListener('click',()=>{
//     // pelement.remove()
//     wrapper.removeChild(pelement)
// })





// sabah
// 1
//   const box = document.getElementById("box");
//   let active = false;

//   box.addEventListener("click", () => {
//     active = !active;
//     box.style.background = active ? "red" : "blue";
//   });



// 2


//   const btn = document.getElementById("btn");

//   btn.addEventListener("mousedown", () => {
//     btn.textContent = "Basılır";
//   });

//   btn.addEventListener("mouseup", () => {
//     btn.textContent = "Buraxıldı";
//   });


//   box.addEventListener("mouseover", () => {
//     console.log("mouseover işlədi");
//   });

//   box.addEventListener("mouseenter", () => {
//     console.log("mouseenter işlədi");
//   });




