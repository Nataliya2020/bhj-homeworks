'use strict'

let taskInput = document.getElementById('task__input');
let taskAdd = document.getElementById('tasks__add');
let tasksList = document.getElementById('tasks__list');

taskInput.value = '';

taskAdd.addEventListener('click', (event) => event.preventDefault());
taskInput.addEventListener('keyup', addTask);
tasksList.addEventListener('click', checkForDeletion)

function addTask(event) {
  if (event.key !== 'Enter') {
    return;
  }

  let taskText = taskInput.value;
  let count = 0;

  for (let symbol of taskText) {
    if (symbol === ' ') {
      count++;
    }
  }

  if (!taskText || count === taskText.length) {
    return;
  }

  tasksList.innerHTML += `
    <div class='task'>
    <div class='task__title'>
     ${taskText}
    </div>
    <a href='#' class='task__remove'>&times;</a>
    </div>`

  taskInput.value = '';
}

function checkForDeletion(event) {
  if (!event.target.classList.contains('task__remove')) {
    return;
  } else {
    removeTask(event);
  }
}

function removeTask(event) {
  let taskRemove = event.target.closest('.task');
  taskRemove.remove();
}
