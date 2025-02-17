const myLibrary = [];
const dialog = document.querySelector("dialog")
class Book {
  // the constructor...
  constructor(title, author, color){
  this.title = title; this.author = author; this.backgroundColor = color; }
//   console.log(this.title, this.author, this.backgroundColor)
}

function addBookToLibrary(book) {
  // do stuff here
  myLibrary.push(book); 
}

function displayBooks(){
    bookContainer = document.querySelector(".bookContainer")
    bookContainer.replaceChildren(); 
    for(let i = 0; i < myLibrary.length; i++){
        let book = myLibrary[i]
        let temp = document.createElement("div"); 
        temp.className= "book";
        let title = document.createElement("div"); title.className = "title"; title.innerText = book.title; temp.appendChild(title);
        let author = document.createElement("div"); author.className = "author"; author.innerText = "by " + book.author; temp.appendChild(author);
        //Delete Button Functionality
        let deleteButton = document.createElement("button"); deleteButton.className = "delete"; deleteButton.innerText = "X"; deleteButton.id = i;
        deleteButton.addEventListener("mousedown", (e)=>{
            const currButton = e.target;
            let idx = parseInt(currButton.id); 
            myLibrary.splice(idx, 1); displayBooks(); i--;
            
        })

        temp.appendChild(deleteButton)

        let readUnread = document.createElement("img"); readUnread.className = "readUnread"; readUnread.src = "images/book-cancel.svg";
        readUnread.id = "1";
        readUnread.addEventListener("mousedown", (e)=>{
            const currButton = e.target; 
            if(currButton.id=="1"){
                console.log(currButton.src)
                currButton.src = "images/book-check.svg";
                console.log(currButton.src)
                currButton.id = "2"; 
            }
            else{
                currButton.src = "images/book-cancel.svg";
                currButton.id = "1"; 
            }
        })
        temp.appendChild(readUnread);
        temp.style.backgroundColor = book.backgroundColor;
        bookContainer.appendChild(temp); 
    }
}
function deleteDialog(e){
    const title = document.getElementById("title")
    const author = document.getElementById("author")
    const color = document.getElementById("color")
    let newBook = new Book(title.value, author.value, color.value)
    addBookToLibrary(newBook)
    title.value = ""; author.value = ""; color.value = "";
    dialog.close();
    displayBooks();
}
function getDialog(e){
    // console.log("hi"); 
    // const dialog = document.createElement("dialog"); let header = document.createElement("div"); header.class = "formHeader"; header.innerText = "New Book";
    // dialog.appendChild(header); const form = document.createElement("form"); form.method = "dialog";
    // let label = document.createElement("label"); label.for = "title"; label.innerText = "Title"; 
    // let input = document.createElement("input"); input.id = "title"; input.type = "text"; input.name = "title";
    // form.appendChild(label); form.appendChild(input);
    
    // label = document.createElement("label"); label.for = "author"; label.innerText = "Author";
    // input = document.createElement("input"); input.id = "author"; input.type = "text"; input.name = "author";
    // form.appendChild(label); form.appendChild(input);
    
    // label = document.createElement("label"); label.for = "color"; label.innerText = "Book Color";
    // input = document.createElement("input"); input.id = "color"; input.type = "text"; input.name = "color";
    // let submit = document.createElement("button"); submit.type = "submit"; submit.innerText = "Submit";
    // submit.addEventListener("mouseDown", (e)=>{deleteDialog(e)})
    // form.appendChild(label); form.appendChild(input); form.appendChild(submit);
    // dialog.appendChild(form);
    // let body = document.querySelector("body"); body.appendChild(dialog);
    dialog.showModal();
}
let theHobbit = new Book("The Hobbit", "JR R Tolkien", "yellow")
addBookToLibrary(theHobbit); 
displayBooks();
const createButton = document.querySelector(".create"); 
createButton.addEventListener("click", (e)=>{getDialog(e)})

const submitButton = document.getElementsByClassName("submitButton"); submitButton[0].addEventListener("click", deleteDialog)
console.log(dialog)