document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();
  let name = document.getElementById('name').value.trim();
  let email = document.getElementById('email').value.trim();
  let message = document.getElementById('message').value.trim();
  let error = document.getElementById('formError');
  let success = document.getElementById('formSuccess');
  error.textContent = "";
  success.textContent = "";
  let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (name === "" || email === "" || message === "") {
    error.textContent = "All fields are required.";
    return;
  }
  if (!emailPattern.test(email)) {
    error.textContent = "Please enter a valid email address.";
    return;
  }
  success.textContent = "Form submitted successfully!";
  document.getElementById('contactForm').reset();
});

document.getElementById('addTaskBtn').addEventListener('click', function() {
  let taskInput = document.getElementById('taskInput');
  let taskText = taskInput.value.trim();
  let taskList = document.getElementById('taskList');
  if (taskText === "") return;

  let li = document.createElement('li');
  li.textContent = taskText;

  let deleteBtn = document.createElement('button');
  deleteBtn.textContent = "Delete";
  deleteBtn.addEventListener('click', function() {
    taskList.removeChild(li);
  });

  li.appendChild(deleteBtn);
  taskList.appendChild(li);
  taskInput.value = "";
});
