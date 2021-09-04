function shoppingList(arrayOfPeople) {

  let content = document.querySelector("#content");
  let ol = document.createElement("ol");
  content.appendChild(ol)
  arrayOfPeople.forEach(item =>{
  let li = document.createElement("li");
  ol.appendChild(li)
  li.innerText =item;
  })
  // Write your code here...
}

let shopping = ["Milk", "Bread", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea","Coffe"];

shoppingList(shopping);
