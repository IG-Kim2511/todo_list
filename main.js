"use strict";

//js refresh page every 8 seconds (완성 이후 지우기)

// setTimeout(function () {
//   window.location.reload(1);
// }, 8000);

//  c58 . js58
//Make navbar trasnparent when it is on the top

// Selectors

const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

// event listeners
todoButton.addEventListener("click", addTodo);

//functions
// JS2
function addTodo(event) {
  // prevent form from submitting
  event.preventDefault();

  //   Todo DIV
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  //   Create LI
  const newTodo = document.createElement("li");
  newTodo.innerText = "hey";
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);

  //   check mark button
  // B:"<i class="fas fa-check"></i>" 로하면 따옴표때문에 에러 생김
  const completedButton = document.createElement("button");
  completedButton.innerText = '<i class="fas fa-check"></i>';

  completedButton.classList.add("complete-btn");
  todoDiv.appendChild(completedButton);

  //   check trash button
  const trashButton = document.createElement("button");
  trashButton.innerText = '<i class="fas fa-trash"></i>';
  trashButton.classList.add("complete-btn");
  todoDiv.appendChild(trashButton);

  //   Append to list
  todoList.appendChild(todoDiv);
}
