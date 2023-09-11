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
    const bookContainer = document.getElementById("bodyContianer");

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
        `

        bodyContainer.appendChild(bookDiv);
    }
}

const addButton = document.getElementById("showDialog");
const bookDialog = document.getElementById("addBookDialog");
const outputBox = document.querySelector("output");
const selectStatus = bookDialog.querySelector("select");
const inputElement = bookDialog.querySelector("input");
const confirmBtn = bookDialog.querySelector("#confirmBtn");

addButton.addEventListener("click", () => {
    bookDialog.showModal();
})

// bookDialog.addEventListener("close", () => {
//     outputBox.value = 
//         bookDialog.returnValue === "defualt"
//         ? "No return value."
//         :`ReturnValue ${bookDialog.returnValue}.`;
// });

confirmBtn.addEventListener("click", (event) =>{
    event.preventDefault();

    //bookmark: return multiple values
    // const selectedValue = selectStatus.value;
    // const inputValue = inputElement.value;
    // const combinedValue = `Dropdown: ${selectedValue}, Input: ${inputValue}`;

    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const readStatus = document.getElementById("readStatus").value;

    const newBook = new Book(title, author, pages, readStatus);
    myLibrary.push(newBook);
    bookDialog.close();
    displayBook();
})