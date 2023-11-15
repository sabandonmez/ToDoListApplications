//! selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const todoFilter = document.querySelector(".filter-todo");

//? alerts
const alertWarning = document.querySelector(".alert-warning");
const successWarning = document.querySelector(".alert-success");

//* events

todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click",deleteCheck);
todoFilter.addEventListener("click",filterTodo);

//functions

function addTodo(e) {
  e.preventDefault();

  // const isEmpty = str => !str.trim().length; Aşağıdaki metot bu şekilde de yazılabilir.

  function isEmpty(str) {
    return !str.trim().length;
  }

  if (isEmpty(todoInput.value)) {
    alertWarning.style.display = "block";
    setTimeout(() => {
      alertWarning.style.display = "none";
    }, 1500);
    //?clear todo input value

    todoInput.value = "";
  } else {
    successWarning.style.display = "block";
    setTimeout(() => {
      successWarning.style.display = "none";
    }, 1500);
    //! create todo div

    const todoDiv = document.createElement("div"); //* div oluşturdu
    todoDiv.classList.add("todo"); //*div ' e class="todo" ekledi

    //? create complete button
    const completedButton = document.createElement("button");
    completedButton.innerHTML = "<i class='fa fa-check-circle'></i>";
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    //? create todo list element
    const contentLi = document.createElement("li");
    contentLi.classList.add("todo-item");
    contentLi.innerText = todoInput.value;
    todoDiv.appendChild(contentLi);

    //? create trash button
    const trashButton = document.createElement("button");
    trashButton.innerHTML = "<i class='fa fa-minus-circle'></i>";
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    //? append todo list
    todoList.appendChild(todoDiv);

    //?clear todo input value

    todoInput.value = "";
  }
}

function deleteCheck(e) {
  const item =e.target;

  //? delete todo
  if (item.classList[0]==="trash-btn") {
  const todo =item.parentElement;
  todo.classList.add("fall");
  todo.addEventListener("transitionend",function(){
    todo.remove();
  });    
  }

  if (item.classList[0]==="complete-btn") {
    const todo =item.parentElement;
    todo.classList.toggle("completed");
  }
}

function filterTodo(e) {
  const todos = Array.from(todoList.children); 
    todos.forEach(function(item){
      switch(e.target.value){
        case "all":
          item.style.display="flex";
          break;
        case "completed":
          if (item.classList.contains("completed")) {
            item.style.display="flex";
          }else{
            item.style.display="none";
          }
          break;
        case "uncompleted":
          if (!item.classList.contains("completed")) {
            item.style.display="flex";
          }else{
            item.style.display="none";
          }
          break;
      }


    })
  };
  
