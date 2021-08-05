
function listOfNames(arrayOfPeople) {
  let content = document.querySelector("#content");
  let h1 = document.createElement("h1")
  let h2 = document.createElement("h2")
  content.append(h1)
  content.append(h2)
  for(let i =0 ; i<arrayOfPeople.length; i++){
h1.innerHTML += arrayOfPeople[i].name + " ";
h2.innerHTML += arrayOfPeople[i].job + " ";
  }
}

let people = [
  { name: "Chris", job: "Teacher" },
  { name: "Joanna", job: "Student" },
  { name: "Boris", job: "Prime Minister" },
];

listOfNames(people);


/**
 <div id="content">
  <h1>{Name Here}</h1>
  <h2>{Job Here}</h2>
  .....
</div>
 */