const myArr = ["Dat", "Kien", "Son"];
// const app = document.getElementById("app");

let content = "";

// for
// for (let i = 0; i < myArr.length; i++) {
//     content += `<li>${myArr[i]}</li>`;
// }

// for...in
// for (let i in myArr) {
//     content += `<li>${myArr[i]}</li>`;
// }

// for..of
// for (let name of myArr) {
//     content += `<li>${name}</li>`;
// }

// forEach
// myArr.forEach((name, index) => (content += `<li>${name} + ${index}</li>`));

// app.innerHTML = `<ul> ${content}</ul>`;
const app = document.getElementById("app");
// const products = [{
//     id: 1, fname: "Nguyễn Trung Kiên", age: 20
// },
// {
//     id: 2, fname: "Nguyễn Trung Kiên2", age: 21
// },
// {
//     id: 3, fname: "Nguyễn Trung Kiên3", age: 22
// }]
// content =products.map ((item)=> `<div class="border hover:border-green-300">
// <h2>${item.fname}</h2>
// <span>${item.age}</span>
// </div>`).join("");
// app.innerHTML = `<div class="max-w-6xl mx-auto grid grid-cols-3 gap-8"> ${content}</div>`;
const students = [{
    id: 1, fname: "Nguyễn Trung Kiên", age: 20
},
{
    id: 2, fname: "Nguyễn Trung Kiên2", age: 21
},
{
    id: 3, fname: "Nguyễn Trung Kiên3", age: 22
}]
const student = students.reduce(((a,b)=>a+b.fname+'&nbsp;')," &nbsp;");
app.innerHTML = `<div class="max-w-6xl mx-auto grid grid-cols-3 gap-8"> ${student}</div>`;