let content =document.getElementById("content")
let h1 = document.createElement("h1")
h1.innerText = "Todo List";
content.appendChild(h1)

function todoList(todos) {
let content =document.getElementById("content")
  console.log(todos[2])
  let ul = document.createElement("ul")
  content.appendChild(ul)
  for(let i = 0; i<todos.length; i++){
  let li = document.createElement("li")

  li.innerText = todos[i].todo;
  ul.appendChild(li)

  console.log(li)
  li.addEventListener("click",function(){
    li.style.textDecoration = "line-through"

  })
  li.addEventListener("dblclick",function(){
    ul.removeChild(li)

  })
  }


  // Write your code here...
}

const todos = [
  {todo: "wash the dishes"}, 
  {todo: "walk the dog"}, 
  {todo: "learn javascript"}, 
  {todo: "go shopping"}
];

todoList(todos);
