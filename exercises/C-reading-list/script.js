function readingList(books) {
  let content = document.querySelector("#content");
content.style.display ="flex";

  for(let i=0; i<books.length; i++){
    let card = document.createElement("div");
    card.style.width ="340px";
    card.style.marginLeft ="20px";
    card.style.paddingLeft ="20px";

    content.appendChild(card)
    let p = document.createElement("p");
    card.appendChild(p)
    p.innerText = books[i].title +" - "+ books[i].author

    let img =document.createElement("img");
    img.style.marginTop = "20px" 
    img.style.width = "70%" 
    img.style.height = "70%" 
    img.src = books[i].img;
    p.appendChild(img)

    let isRead = document.createElement("p");
    p.appendChild(isRead);
    if(books[i].alreadyRead === true){
      isRead.innerText ="You read this book!!"
      card.style.backgroundColor ="green";

    }else{
      isRead.innerText ="You do not read this book!!"
      isRead.style.color="white"
      isRead.style.fontSize= "16px"
      card.style.backgroundColor ="red";


    }

  }

  // Write your code here...
}

const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false,
    img:"https://pictures.abebooks.com/isbn/9780385267748-uk.jpg"
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
    img:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1295465264l/8884400.jpg"
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true,
    img:"https://m.media-amazon.com/images/I/51A8l+FxFNL.jpg"
  }
];

readingList(books);