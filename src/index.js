// import './styles.css';

// const toDoTasks = [
//   {
//     description: 'Walk the dog',
//     completed: false,
//     index: 0,
//   },
//   {
//     description: 'Take breakfast',
//     completed: true,
//     index: 1,
//   },
//   {
//     description: 'Complete my project',
//     completed: false,
//     index: 2,
//   },
// ];

// // difining the UL id
// const listItem = document.getElementById('list-item');

// // loop through the array of obj and creat li for each
// toDoTasks.forEach((todo) => {
//   // Create a new li element
//   const listElement = document.createElement('li');
//   const spanElement = document.createElement('span');
//   spanElement.textContent = todo.description;

//   const checkboxElement = document.createElement('input');
//   checkboxElement.type = 'checkbox';
//   listElement.appendChild(checkboxElement);
//   listElement.appendChild(spanElement);

//   if (todo.completed) {
//     listItem.classList.add('completed');
//   }
//   listItem.appendChild(listElement);
// });


import './style.css';
import UI from './modules/UI.js';
import Store from './modules/localstorage.js';

// Event for Displaying the to do tasks
document.addEventListener('DOMContentLoaded', UI.displayToDoList);

// Event for adding new to do tasks
document.querySelector('#todo-form').addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    UI.getNewToDoTask();
  }
});

// Event for deleting new item for the list
document.querySelector('#list-item').addEventListener('click', (e) => {
  Store.removetodoTask(e.target);
  UI.deletetodoTask(e.target);
});

// Event for editing the to do list
document.querySelector('#list-item').addEventListener('click', (e) => {
  if (e.target.classList.contains('bi-pencil-square')) {
    UI.editToDoTask(e.target);
  }
});

// Event for updating tasks
document.querySelector('#list-item').addEventListener('keypress', (e) => {
  if (e.key === 'Enter' && e.target.classList.contains('edit-list')) {
    e.preventDefault();
    Store.updatetodoTask(e.target);
    window.location.reload();
  }
});