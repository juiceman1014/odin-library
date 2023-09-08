const myLibrary = [];

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
    for(let i = 0; i < myLibrary.length; i++){
        console.log(myLibrary[i]);
    }
}

addBookToLibrary();
addBookToLibrary();
addBookToLibrary();
displayBook();