function listOfColours(colours) {
  console.log(colours)
  let content = document.getElementById("content");
  let select = document.createElement("select");
  content.appendChild(select)
  let p = document.createElement("p");
  content.appendChild(p)


  colours.forEach(color =>{
    let option = document.createElement("option");
    option.innerText = color;
    select.appendChild(option)

  })
select.addEventListener("change",function(){
  p.style.color = select.value;
  p.innerText = `You have selected: ${select.value}`
})

  // Write your code here...
}

const colours = ["red", "blue", "green", "yellow", "pink", "brown"];

listOfColours(colours);
