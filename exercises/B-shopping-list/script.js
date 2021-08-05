function shoppingList(arrayOfPeople) {
  // Write your code here...
  let content = document.querySelector("#content");
  let ul = document.createElement("ul")
  content.appendChild(ul);

  arrayOfPeople.forEach(element =>{
  let li = document.createElement("li");
      li.innerHTML = element;
      ul.appendChild(li);
  });

  // for(let i =0 ; i<arrayOfPeople.length; i++){
  //  li.innerHTML = arrayOfPeople[i] ;
  //     }
  
console.log(list)

}

let shopping = ["Milk", "Bread", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

shoppingList(shopping);