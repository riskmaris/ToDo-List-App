import '../styles.css';
import CrudOperations from './crud.js';

const myCrud = new CrudOperations();

export default class AddList {
  displayList() {
    const reciveData = localStorage.getItem('todoData');
    const row = document.getElementById('lists');
    row.innerHTML = '';
    if (reciveData && JSON.parse(reciveData).length > 0) {
      myCrud.todoDetails = JSON.parse(reciveData);

      for (let i = 0; i < myCrud.todoDetails.length; i += 1) {
        row.innerHTML += `<li class="removeLine">
                            <div class="rowData" > <input class="edit-text" type="checkbox"  ${myCrud.todoDetails[i].completed ? 'checked' : ''} /> 
                            <input class="editBtn" type="text" value="${myCrud.todoDetails[i].title}" data-index="${i}" readonly /> </div>
                            <button id="${i}" class="remove-btn"> <i class="fas fa-trash"></i></button>
                        </li> <hr>`;
      }
    }
    // ----------------Row Code Removed-------------------------------------
    const removeBtn = document.querySelectorAll('.remove-btn');
    removeBtn.forEach((btn, index) => {
      btn.addEventListener('click', () => {
        myCrud.deleteRow(index, this);
      });
    });

    const editBtn = document.querySelectorAll('.editBtn');
    editBtn.forEach((editElement) => {
      editElement.addEventListener('click', () => {
        const index = editElement.getAttribute('data-index');
        const editInput = document.querySelector(`input.editBtn[data-index="${index}"]`);
        editInput.readOnly = false;
        editInput.addEventListener('blur', (event) => {
          const newTitle = event.target.value;
          myCrud.updateRowTitle(index, newTitle, this);
          event.target.readOnly = true;
        });
      });
    });

    // ---------------checkbox code------------------

    const checkboxes = document.querySelectorAll('.edit-text');
    checkboxes.forEach((checkbox) => {
      const index = checkbox.parentNode.querySelector('.editBtn').getAttribute('data-index');
      const editInput = checkbox.parentNode.querySelector('.editBtn');
      const { completed } = myCrud.todoDetails[index];

      checkbox.checked = completed;
      editInput.classList.toggle('completed', completed);

      checkbox.addEventListener('change', (event) => {
        const isChecked = event.target.checked;
        editInput.classList.toggle('completed', isChecked);
        myCrud.todoDetails[index].completed = isChecked;
        localStorage.setItem('todoData', JSON.stringify(myCrud.todoDetails));
      });
    });

    // -----------Clear Completed Btn-----------

    document.getElementById('clearCompletedBtn').addEventListener('click', () => {
      myCrud.todoDetails = myCrud.removeCompletedTask();
      this.displayList();
    });
  }
}