// import './styles.css';

const toDoTasks = [
  {
    description: 'Walk the dog',
    completed: false,
    index: 0,
  },
  {
    description: 'Take breakfast',
    completed: true,
    index: 1,
  },
  {
    description: 'Complete my project',
    completed: false,
    index: 2,
  },
];

// difining the UL id
const listItem = document.getElementById('list-item');

// loop through the array of obj and creat li for each
toDoTasks.forEach((todo) => {
  // Create a new li element
  const listElement = document.createElement('li');
  const spanElement = document.createElement('span');
  spanElement.textContent = todo.description;

  const checkboxElement = document.createElement('input');
  checkboxElement.type = 'checkbox';
  listElement.appendChild(checkboxElement);
  listElement.appendChild(spanElement);

  if (todo.completed) {
    listItem.classList.add('completed');
  }
  listItem.appendChild(listElement);
});