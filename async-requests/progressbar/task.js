'use strict'

let progress = document.getElementById('progress');
let form = document.getElementById('form');

form.addEventListener('submit', sendFile);

  function sendFile(event) {
  event.preventDefault();
  let formData = new FormData(form);
  let xhr = new XMLHttpRequest();
  xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');

  xhr.upload.onprogress = function(event) {
    progress.value = event.loaded / event.total;
  }

  xhr.send(formData);
}


