const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");

function addTodoItem(event) {
  event.preventDefault();

  const todoText = todoInput.value.trim();

  if (todoText !== "") {
    const li = document.createElement("li");
    li.textContent = todoText;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Remove";
    deleteButton.classList.add("delete");
    li.appendChild(deleteButton);

    li.addEventListener("click", function () {
      li.classList.toggle("completed");
    });

    deleteButton.addEventListener("click", function () {
      todoList.removeChild(li);
    });

    todoList.appendChild(li);

    todoInput.value = "";
  }
}

todoForm.addEventListener("submit", addTodoItem);
