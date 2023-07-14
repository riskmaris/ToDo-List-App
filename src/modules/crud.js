export default class CrudOperations {
  constructor() {
    const previousData = localStorage.getItem('todoData');
    this.todoDetails = previousData ? JSON.parse(previousData) : [];
  }

  addRow(title, completed, index) {
    const todo = { title, completed, index };
    this.todoDetails.push(todo);
    localStorage.setItem('todoData', JSON.stringify(this.todoDetails));
  }

  deleteRow(index, myList) {
    this.todoDetails.splice(index, 1);
    for (let i = index; i < this.todoDetails.length; i += 1) {
      this.todoDetails[i].index = i + 1;
    }
    localStorage.setItem('todoData', JSON.stringify(this.todoDetails));
    myList.displayList();
  }

  updateRowTitle(index, newTitle, myList) {
    this.todoDetails[index].title = newTitle;
    localStorage.setItem('todoData', JSON.stringify(this.todoDetails));
    myList.displayList();
  }

  removeCompletedTask() {
    const incompleteTasks = this.todoDetails.filter((item) => item.completed === false);
    this.todoDetails = incompleteTasks;
    this.todoDetails.forEach((todo, index) => {
      todo.index = index + 1;
    });

    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('todoData', JSON.stringify(this.todoDetails));
    }

    return this.todoDetails;
  }
}