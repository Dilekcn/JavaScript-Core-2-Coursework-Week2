function listOfNames(arrayOfPeople) {
  console.log(arrayOfPeople[0].name)
  let content = document.querySelector("#content");

for(let i=0; i<arrayOfPeople.length; i++){
  let h1 =document.createElement("h1")
  let h2 =document.createElement("h2")
  h1.innerText = arrayOfPeople[i].name
  h2.innerText = arrayOfPeople[i].job
  content.appendChild(h1);
  content.appendChild(h2);
}
}

let people = [
  { name: "Chris", job: "Teacher" },
  { name: "Joanna", job: "Student" },
  { name: "Boris", job: "Prime Minister" },
];

listOfNames(people);



{/* <div id="content">
  <h1>{Name Here}</h1>
  <h2>{Job Here}</h2>
  .....
</div> */}