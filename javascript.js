const bookContainer = document.getElementById("bodyContainer");
const addButton = document.getElementById("showDialog");
const bookDialog = document.getElementById("addBookDialog");
const confirmBtn = bookDialog.querySelector("#confirmBtn");

let myLibrary = [];

function Book(title, author, pages, readStatus){
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = readStatus
}

function displayBook(){

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
        <button class = "remove-btn" data-book-id="${i}">Remove Book</button>
        <input type="checkbox" class="read-checkbox" data-book-id="${i}" ${book.read ? 'checked' : ''}> Read
        `

        bookContainer.appendChild(bookDiv);
    }


    const checkboxes = document.querySelectorAll(".read-checkbox");
    checkboxes.forEach((checkbox) => {
        checkbox.addEventListener("change", (event) => {
            const bookId = parseInt(event.target.dataset.bookId, 10);
            myLibrary[bookId].read = event.target.checked;
            saveLibraryToStorage();
        });
    });

}

addButton.addEventListener("click", () => {
    bookDialog.showModal();
})

confirmBtn.addEventListener("click", (event) =>{
    event.preventDefault();


    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const readStatus = document.getElementById("readStatus").checked;


    const newBook = new Book(title, author, pages, readStatus);
    myLibrary.push(newBook);

    saveLibraryToStorage();
    bookDialog.close();
    displayBook();
})

bookContainer.addEventListener("click", (event) => {
    const target = event.target;

    if (target.classList.contains("remove-btn")) {
        const bookIdToRemove = parseInt(target.dataset.bookId, 10);
        console.log(`Removing book with ID: ${bookIdToRemove}`);
        removeBookFromLibrary(bookIdToRemove);
    }
});

function removeBookFromLibrary(bookId){
    
    myLibrary.splice(bookId, 1);
    saveLibraryToStorage();
    displayBook();

}

window.addEventListener("load", () =>{
    if(localStorage.getItem("myLibrary")) {
        myLibrary = JSON.parse(localStorage.getItem("myLibrary"));
        console.log("just refreshed!")
        displayBook();
    }

});

function saveLibraryToStorage(){
    localStorage.setItem("myLibrary", JSON.stringify(myLibrary));
}