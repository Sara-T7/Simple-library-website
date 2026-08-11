const myLibrary = [];


// ==============================
// BOOK CONSTRUCTOR
// ==============================

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = crypto.randomUUID();
}


// ==============================
// PROTOTYPE METHOD
// ==============================

Book.prototype.toggleRead = function () {
    this.read = !this.read;
};


// ==============================
// ADD BOOK TO LIBRARY
// ==============================

function addToLibrary(title, author, pages, read) {

    const book = new Book(title, author, pages, read);

    myLibrary.push(book);
}


// ==============================
// SAMPLE BOOKS
// ==============================

addToLibrary(
    "The Great",
    "Debebe",
    247,
    false
);

addToLibrary(
    "Remainder",
    "Sara",
    766,
    true
);


// ==============================
// DISPLAY BOOKS
// ==============================

function displayBooks() {

    const libraryContainer =
        document.getElementById("library-container");

    // Clear old cards
    libraryContainer.innerHTML = "";


    myLibrary.forEach(function (book) {

        // Create card
        const bookCard = document.createElement("div");

        bookCard.classList.add("book-card");


        // Put book information inside card
        bookCard.innerHTML = `
            <h2>${book.title}</h2>

            <p>
                <strong>Author:</strong>
                ${book.author}
            </p>

            <p>
                <strong>Pages:</strong>
                ${book.pages}
            </p>

            <p>
                <strong>Status:</strong>
                ${book.read ? "Read ✅" : "Not Read ❌"}
            </p>

            <button class="remove-btn">
                Remove
            </button>

            <button class="read-btn">
                Change Read Status
            </button>
        `;


        // Put card into page
        libraryContainer.appendChild(bookCard);


        // ==============================
        // REMOVE BUTTON
        // ==============================

        const removeButton =
            bookCard.querySelector(".remove-btn");

        removeButton.addEventListener("click", function () {

            const index = myLibrary.findIndex(function (item) {

                return item.id === book.id;

            });


            myLibrary.splice(index, 1);

            displayBooks();

        });


        // ==============================
        // READ BUTTON
        // ==============================

        const readButton =
            bookCard.querySelector(".read-btn");

        readButton.addEventListener("click", function () {

            book.toggleRead();

            displayBooks();

        });

    });
}


// ==============================
// FORM
// ==============================

const bookForm = document.getElementById("book-form");


bookForm.addEventListener("submit", function (event) {

    event.preventDefault();


    const title = document.getElementById("title").value;

    const author = document.getElementById("author").value;

    const pages = document.getElementById("pages").value;

    const read = document.getElementById("read").checked;


    addToLibrary(
        title,
        author,
        pages,
        read
    );


    displayBooks();


    bookForm.reset();

});


// ==============================
// NEW BOOK BUTTON
// ==============================

const newBookButton =
    document.getElementById("new-book-btn");


newBookButton.addEventListener("click", function () {

    bookForm.scrollIntoView({
        behavior: "smooth"
    });

});


// ==============================
// FIRST DISPLAY
// ==============================

displayBooks();