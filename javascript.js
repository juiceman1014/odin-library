let myLibrary = [];

function Book(title, author, pages, readStatus){
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.readStatus = readStatus
}

function addBookToLibrary(){
    let title = prompt("Title: ");
    let author = prompt("Author: ");
    let pages = prompt("Pages: ");
    let readStatus = prompt("Read?: ");
    const newBook = new Book(title, author, pages, readStatus);
    myLibrary.push(newBook);
}

function displayBook(){
    const bookContainer = document.getElementById("bodyContainer");

    bodyContainer.innerHTML = "";

    for(let i = 0; i < myLibrary.length; i++){
        const book = myLibrary[i];

        const bookDiv = document.createElement("div");
        bookDiv.classList.add("book-card");
        bookDiv.innerHTML= `
        <p>Title: ${book.title}</p>
        <p>Author: ${book.author}</p>
        <p>Pages: ${book.pages}</p>
        <p>Read?: ${book.readStatus}</p>
        <button>Remove Book</button>
        `

        bookContainer.appendChild(bookDiv);
    }
}

const addButton = document.getElementById("showDialog");
const bookDialog = document.getElementById("addBookDialog");
const confirmBtn = bookDialog.querySelector("#confirmBtn");

addButton.addEventListener("click", () => {
    bookDialog.showModal();
})

window.addEventListener("load", () =>{
    if(localStorage.getItem("myLibrary")) {
        myLibrary = JSON.parse(localStorage.getItem("myLibrary"));
        displayBook();
    }
});

function saveLibraryToStorage(){
    localStorage.setItem("myLibrary", JSON.stringify(myLibrary));
}

confirmBtn.addEventListener("click", (event) =>{
    event.preventDefault();


    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const readStatus = document.getElementById("readStatus").value;

    const newBook = new Book(title, author, pages, readStatus);
    myLibrary.push(newBook);

    saveLibraryToStorage();
    bookDialog.close();
    displayBook();
})