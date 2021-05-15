'use strict'

let taskInput = document.getElementById('task__input');
let taskAdd = document.getElementById('tasks__add');
let tasksList = document.getElementById('tasks__list');

taskInput.value = '';

taskAdd.addEventListener('click', acceptingTaskButton);
taskInput.addEventListener('keyup', acceptingTaskEnter);
tasksList.addEventListener('click', checkForDeletion)

function acceptingTaskButton(event) {
  event.preventDefault();
  addTask();
}

function acceptingTaskEnter(event) {

  if (event.key !== 'Enter') {
    return;
  }

  addTask();
}

function addTask() {
  let taskText = taskInput.value;

  taskText = taskText.trim();

  if (!taskText) {
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
  if (event.target.classList.contains('task__remove')) {
    removeTask(event);
  }
}

function removeTask(event) {
  let taskRemove = event.target.closest('.task');
  taskRemove.remove();
}
