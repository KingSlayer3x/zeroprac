// console.log(location.host);

// console.log(location.protocol);

// console.log(location.hash);

// location.reload()

// window.open window.close closes the scripts that were opend with window.open

// BOM stop,print,focus, scroll

// myNewWindow = window.open("https://www.google.com","","width=500,height=500")
// practice scroll
// scrollX & scrollY
// let btn = document.querySelector("button");

// window.onscroll = function () {
//     if(window.scrollY >= 600){
//         btn.style.display = "block";
//     } else {
//         btn.style.display = "none";
//     }
// };
// btn.onclick = function () {
//     window.scrollTo({
//         left: 0,
//         top: 0,
//         behavior: "smooth",
//     });
// };

// local storage

// set
// window.localStorage.setItem("color","#f00");
// window.localStorage.fontWeight = "bold";
// window.localStorage['fontSize'] = "20px";

// get

// console.log(window.localStorage.getItem("color"));
// console.log(window.localStorage.color);
// console.log(window.localStorage["color"]);


// remove 1
// window.localStorage.removeItem("color");

// remove all
// window.localStorage.clear();

// get key

// document.body.style.backgroundColor = window.localStorage.color;
// console.log(window.localStorage);
// console.log(typeof window.localStorage);

// let lis = document.querySelectorAll("ul li");
// let exp = document.querySelector(".experiment")

// if(window.localStorage.getItem("color")){
//     // if there is a color in localstorage
//     // [1] add color to div
//     exp.style.backgroundColor = window.localStorage.getItem("color");
//     // [2] remove active class from all lis
//     lis.forEach((li) =>{
//         li.classList.remove("active");
//     });
//     // [3] add active class to current color
//     document.querySelector(`[data-color="${window.localStorage.getItem("color")}"]`).classList.add("active");
// }

// lis.forEach((li) => {
//     li.addEventListener("click", (e) => {
//         // console.log(e.currentTarget.dataset.color)
//         // remove active class from all lis
//         lis.forEach((li) =>{
//             li.classList.remove("active");
//         });
//         // add active class to current element
//         e.currentTarget.classList.add("active");
//         // add current color to local storage
//         window.localStorage.setItem("color",e.currentTarget.dataset.color)
//         // change div background color
//         exp.style.backgroundColor = e.currentTarget.dataset.color;
//     });
// });



// let task = document.querySelector('.add');
// let gtask = document.querySelector('.tasks');
// task.addEventListener("click",() => {
// let ntask = document.querySelector('.input').value;
//     if(ntask.trim() !== ''){
//         const newTaskElemet = document.createElement('p');
//         newTaskElemet.style.cssText = " padding: 20px; border-radius: 5px; background-color: rgb(255, 255, 255); justify-content: space-between; align-items: center;"
//         newTaskElemet.textContent = ntask;
//         const del = document.createElement("button");
//         del.style.cssText = "background-color: rgb(245, 128, 85); border-radius: 7px; border: 0; color: white; float: right;"
//         del.textContent = "delete";
//         newTaskElemet.appendChild(del);
//         gtask.appendChild(newTaskElemet);
//         console.log(typeof ntask);
//         window.localStorage.setItem("task",ntask);

//         del.addEventListener("click", (e) =>{
//             newTaskElemet.remove();
//             window.localStorage.removeItem("task",ntask);
//         });
// }
// });



// const taskButton = document.querySelector('.add');
// const tasksContainer = document.querySelector('.tasks');
// const inputField = document.querySelector('.input');
// let tasks = localStorage.getItem('tasks') || ''; // Initialize with existing tasks

// taskButton.addEventListener('click', () => {
//     const newTask = inputField.value.trim();
//     if (newTask !== '') {
//         const taskElement = document.createElement('p');
//         taskElement.textContent = newTask;
//         tasksContainer.appendChild(taskElement);

//         // Append the new task to the existing tasks string
//         tasks += (tasks ? ',' : '') + newTask;
//         localStorage.setItem('tasks', tasks);

//         const deleteButton = document.createElement('button');
//         deleteButton.textContent = 'Delete';
//         deleteButton.style.backgroundColor = 'rgb(245, 128, 85)';
//         deleteButton.style.borderRadius = '7px';
//         deleteButton.style.border = '0';
//         deleteButton.style.color = 'white';
//         deleteButton.style.float = 'right';

//         deleteButton.addEventListener('click', () => {
//             taskElement.remove();
//             // Remove the task from the string
//             tasks = tasks.replace(newTask, '').replace(',', ',');
//             localStorage.setItem('tasks', tasks);
//         });

//         taskElement.appendChild(deleteButton);
//     }
// });



//
// const taskButton = document.querySelector('.add');
// const tasksContainer = document.querySelector('.tasks');
// const inputField = document.querySelector('.input');
// let tasks = localStorage.getItem('tasks') ? localStorage.getItem('tasks').split(',') : []; // Initialize with existing tasks

// // Function to render tasks
// const renderTasks = () => {
//     tasksContainer.innerHTML = '';
//     tasks.forEach(task => {
//         const taskElement = document.createElement('p');
//         taskElement.textContent = task;

//         const deleteButton = document.createElement('button');
//         deleteButton.textContent = 'Delete';
//         deleteButton.style.backgroundColor = 'rgb(245, 128, 85)';
//         deleteButton.style.borderRadius = '7px';
//         deleteButton.style.border = '0';
//         deleteButton.style.color = 'white';
//         deleteButton.style.float = 'right';

//         deleteButton.addEventListener('click', () => {
//             tasks = tasks.filter(t => t !== task);
//             localStorage.setItem('tasks', tasks.join(','));
//             renderTasks();
//         });

//         taskElement.appendChild(deleteButton);
//         tasksContainer.appendChild(taskElement);
//     });
// };

// // Initial render
// renderTasks();

// taskButton.addEventListener('click', () => {
//     const newTask = inputField.value.trim();
//     if (newTask !== '') {
//         tasks.push(newTask);
//         localStorage.setItem('tasks', tasks.join(','));
//         renderTasks();
//         inputField.value = ''; // Clear the input field
//     }
// });



//


// const taskButton = document.querySelector('.add');
// const tasksContainer = document.querySelector('.tasks');
// const inputField = document.querySelector('.input');
// let tasks = localStorage.getItem('tasks') ? localStorage.getItem('tasks').split(';') : []; // Initialize with existing tasks

// // Function to render tasks
// const renderTasks = () => {
//     tasksContainer.innerHTML = '';
//     tasks.forEach(taskString => {
//         const [id, title] = taskString.split(':');
//         const taskElement = document.createElement('p');
//         taskElement.textContent = title;

//         const deleteButton = document.createElement('button');
//         deleteButton.textContent = 'Delete';
//         deleteButton.style.backgroundColor = 'rgb(245, 128, 85)';
//         deleteButton.style.borderRadius = '7px';
//         deleteButton.style.border = '0';
//         deleteButton.style.color = 'white';
//         deleteButton.style.float = 'right';

//         deleteButton.addEventListener('click', () => {
//             tasks = tasks.filter(task => task.split(':')[0] !== id);
//             localStorage.setItem('tasks', tasks.join(';'));
//             renderTasks();
//         });

//         taskElement.appendChild(deleteButton);
//         tasksContainer.appendChild(taskElement);
//     });
// };

// // Initial render
// renderTasks();

// taskButton.addEventListener('click', () => {
//     const newTaskTitle = inputField.value.trim();
//     if (newTaskTitle !== '') {
//         const newTask = `${Date.now()}:${newTaskTitle}`; // Unique ID based on timestamp
//         tasks.push(newTask);
//         localStorage.setItem('tasks', tasks.join(';'));
//         renderTasks();
//         inputField.value = ''; // Clear the input field
//     }
// });

// const addButton = document.querySelector('.add');
// const tasksContainer = document.querySelector('.tasks');

// addButton.addEventListener('click', () => {
//     const userInput = document.querySelector('.input').value;
//     if (userInput.trim() !== '') {
//         const taskElement = document.createElement('div');
//         taskElement.textContent = userInput;
//         tasksContainer.appendChild(taskElement);
//     }
// });


// destructuring arry
//  let myFriends = ["Ahmed","Sayed","Ali",["shady","amr", ["Mohamed","Gamal"]]];
//  let [a,b,c,d] = myFriends;
//  console.log(myFriends[3][2][1]);

// let [,,,[a,,[,b]]] = myFriends
// console.log(a);
// console.log(b);

// swaping variables
// let book = "Video";
// let video = "Book";
// let stach = book;
// // change book value
// book = video;
// // change video value
// video = stach;

// [book,video] = [video, book]
// console.log(book);
// console.log(video);

// const user = {
//     theName: "Osama",
//     theAge: 30,
//     theTitle: "Developer",
//     theCountry: "Syria",
//     skills: {
//         html: 70,
//         css:80,
//     },
// };

// ({theName, theAge, theTitle, theCountry} = user);
// console.log(theName);
// console.log(theAge);

// ({theName: n, theAge: a, theTitle: t, theCountry: c = "red", skills:{html: h}} = user);
// console.log(n);
// console.log(a);
// console.log(c);
// console.log(`my html skills is ${h}`);

// const {html: skillOne, css: skilltow} = user.skills;
// console.log(`My HTML skill progress is ${skillOne}`);
// console.log(`My css skill progress is ${skilltow}`);

// destructuring function parameters

// const user = {
//     theName: "Osama",
//     theAge: 30,
//     skills: {
//         html: 70,
//         css: 90,
//     },
// };

// showDetails(user);

// function showDetails(obj){
//     console.log(`Your name is ${obj.theName}`);
//     console.log(`Your age is ${obj.theAge}`);
//     console.log(`Your css skill is ${obj.skills.css}`);

// }

// destructuring mixed content

// const user = {
//     theName: "Ali",
//     theAge: 30,
//     skills: ["HTML","CSS","JS"],
//     addresses:{
//         Syria: "Tartous",
//         Syria: "Damascus",
//     },
// };

// const {theName: n,theAge: a, skills: [one, , three], addresses: { Syria: s}} = user;
// console.log(`Your name is ${n}`);
// console.log(`your age is ${a}`);
// console.log(`Your skills is: ${one}, ${three}`);
// console.log(`You live in ${s}`);

// destructuring challenge

// let chosen = 1;

// let myFriends = [
//     {title: "Osama", age: 39, available: true, skills: ["HTML","CSS"]},
//     {title: "Ahmed", age: 25, available: false, skills: ["Python","Django"]},
//     {title: "Osama", age: 39, available: true, skills: ["PHP","Laravel"]},
// ];
// if (chosen ==1){
// let {title: t,age:a,available: v,skills:[,tow]} = myFriends[0];
// console.log(t);
// console.log(a);
// if (v== true){
//     v = "available";
// } else {
//     v= "Not available";
// }
// console.log(v);
// console.log(tow);
// } else if (chosen ==2){
// let {title: t,age:a,available: v,skills:[,tow]} = myFriends[1];
// console.log(t);
// console.log(a);
// if (v== true){
//     v = "available";
// } else {
//     v= "Not available";
// }
// console.log(v);
// console.log(tow);
// } else if (chosen ==3){
//     let {title: t,age:a,available: v,skills:[,tow]} = myFriends[2];
//     console.log(t);
//     console.log(a);
//     if (v== true){
//         v = "available";
//     } else {
//         v= "Not available";
//     }
//     console.log(v);
//     console.log(tow);
//     }


// set & weakSet
// set store unique data
// let myData = [1,1,1,2,3];
// let myUniqueData = new Set([1,1,1,2,3]);
// console.log(myData);
// console.log(myUniqueData);

// set > can store any kind of data
// weakset collection of objects only

// set > have size property
// weakset > does not have size property

// set > have keys, values, entries
//weakset does not have clear, keys, values, entries

// set can use forEach
// weakset can't use forEach

// let mySet = new Set([1,1,1,2,3,"A","A"]);
// console.log(mySet);
// console.log(`size of elements inside set is: ${mySet.size}`);
// let iterator = mySet.keys();
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next());

// for Each

// mySet.forEach((a) => console.log(a));
// let myWs = new WeakSet([{A:1, B:2}]);
// console.log(myWs);

// let iter = myWs.keys(); // error
// console.log(iter.next().value);

// search WeakSet use cases; /////////////////

// map data types vs objects

// syntax: new map(iterable with key/value)

// map vs objects 

// map => does not contain key by default
// object => has default keys

// map => key can be anything [function, object, any primitive data types]
// object => string or symbol

// map ordered by insertion
// object => not 100% till now

//map => get items by size
// Object => need to do manually

// map can be directly iterated
// object => not directly and need to use object.keys() and so on

// map better performance when add or remove data
// object => low performance when comparing to map

// let myObject = {};
// let myEmptyObject = Object.create(null);
// let myMap = new Map();

// console.log(myObject);
// console.log(myEmptyObject);

// console.log(myMap);

// let myNewObject = {
//     10: "Number",
//     "10": "string", // override the first key
// };

// console.log(myNewObject[10]); // will get the last key

// let myNewMap = new Map();
// myNewMap.set()

// const user = {
//     theName: "Ali",
//     theAge: 30,
//     skills: ["HTML",,"JavaScript"],
//     address: {
//         syria: "Tartous",
//         egypt: "Cairo",
//     },
// };

// const {theName: n, theAge: a, skills: [one, two, three], address: {syria: t}} = user;
// console.log(`Your name is: ${n}`);
// console.log(`Your age is: ${a}`);
// console.log(`Your skills is: ${one}, ${three}`);
// console.log(`Your address is: ${t}`);

// let chosen = 2;
// let myFriends = [
//     {name: "Osama", age: 39, available: true, skills: ["HTML","CSS"]},
//     {name: "Ahemd", age: 25, available: false, skills: ["python","Django"]},
//     {name: "Osama", age: 39, available: true, skills: ["PHP","Laravel"]},
// ];

// if (chosen ==1){
//     let {name: n,age: a,available: stat, skills: [s1,s2]} = myFriends[0];
//     console.log(`Name is: ${n}, age: ${a}, status: ${stat}, skills: ${s1}, ${s2}`)
//     console.log(`available: ${stat}`)
// }

// else if (chosen == 2){
//     let {name: n,age: a,available: stat, skills: [s1,s2]} = myFriends[1];
//      console.log(`Name is: ${n}, age: ${a}, status: ${stat}, skills: ${s1}, ${s2}`)
//      console.log(`available: ${stat}`)
// }

// else if (chosen == 3){
//     let {name: n,age: a,available: stat, skills: [s1,s2]} = myFriends[2];
//     console.log(`Name is: ${n}, age: ${a}, status: ${stat}, skills: ${s1}, ${s2}`)
//     console.log(`available: ${stat}`)

// }