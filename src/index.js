import AddList from './todos.js';

const myList = new AddList();
myList.displayList();

function todoCheckbox() {
  const checkboxes = document.querySelectorAll('.edit-text');
  checkboxes.forEach((checkbox) => {
    const index = checkbox.parentNode.querySelector('.editBtn').getAttribute('data-index');
    const editInput = checkbox.parentNode.querySelector('.editBtn');
    const { completed } = myList.todoDetails[index];

    checkbox.checked = completed;
    editInput.classList.toggle('completed', completed);

    checkbox.addEventListener('change', (event) => {
      const isChecked = event.target.checked;
      editInput.classList.toggle('completed', isChecked);
      myList.todoDetails[index].completed = isChecked;
      localStorage.setItem('todoData', JSON.stringify(myList.todoDetails));
    });
  });
}

const addButton = document.getElementById('add-button');
addButton.addEventListener('click', () => {
  const task = document.getElementById('task').value.trim();
  const completed = false;
  const index = myList.todoDetails.length + 1;
  if (task) {
    myList.addRow(task, completed, index);
    myList.displayList();
    document.getElementById('task').value = '';
    todoCheckbox();
  }
});

window.addEventListener('DOMContentLoaded', todoCheckbox);