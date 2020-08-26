var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");

var todos = JSON.parse(localStorage.getItem("todos")) || [];

//  Your goal is to create a function that will render our todos into a list in the browser.

function saveToStorage() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

function removeTodo(event) {
  // it accesses the `data-index` value and removes that todo element from the list.
  var todoIndex = parseInt(
    event.target.parentElement.getAttribute("data-index")
  );
  todos.splice(todoIndex, 1);
  saveToStorage();
  renderToDos();
}

function renderToDos() {
  // Initially set the text content of the todoList to an empty string.
  todoList.innerHTML = "";
  //    todoCountSpan should show the total count of todos on the page.
  todoCountSpan.textContent = todos.length;
  //    Inside of your render function you will also need a for loop.

  //    It should loop over the `todos` array creating an `li` element for each index of the array.
  for (var i = 0; i < todos.length; i++) {
    // It should set the content of the created `li` element to the value of the current array index.
    var li = document.createElement("li");
    li.innerText = todos[i];
    // When a new todo is created, add a `data-index` for each `li`.
    li.setAttribute("data-index", i);
    // Finally the new `li` should be appended to the `ul` provided.
    var button = document.createElement("button");
    //     Generate a button that says "Complete" and append it to your `li`.
    button.textContent = "Complete";
    li.appendChild(button);
    // Add an event listener so that when a user clicks the Complete button,
    button.addEventListener("click", removeTodo);

    //  Hint

    // You can use `setAttribute` for `data-index` and `splice` to remove your todo from the list.
    //     todoList.appendChild(li);
    todoList.appendChild(li);
  }
}

// Add an event listener so that when a user hits enter, the value from the todo input field is pushed to our todo array.
todoForm.addEventListener("submit", function (event) {
  event.preventDefault();
  var todo = todoInput.value;
  //   Make sure that empty values are not pushed to the array.
  if (todo === "") {
    return;
  }
  todos.push(todo);
  // * Once the value has been added to the array, clear the input field and re-render the todo list.
  saveToStorage();

  todoInput.value = "";
  renderToDos();
});

renderToDos();
