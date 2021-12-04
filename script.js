
function Book(title, author, read) {
    this.title = title;
    this.author = author;
    this.read = read;
}
let books = [];

function newBook(title, author, read) {
    books.push(new Book(title, author, read));
    console.log(books[books.length-1].title);
}

const bookshelf = document.querySelector('#bookshelf');
function clearShelf() {
    bookshelf.innerHTML = "";
}
function load(book) {
    const bookCard = document.createElement('div');
    bookCard.classList.add('book');

    const infoList = document.createElement('ul');
    infoList.classList.add('book-info');
    
    const bookTitle = document.createElement('li');
    bookTitle.textContent = book.title;
    bookTitle.classList.add('book-title');
    infoList.appendChild(bookTitle);
    const bookAuthor = document.createElement('li');
    bookAuthor.textContent = book.author;
    bookAuthor.classList.add('book-author');
    infoList.appendChild(bookAuthor);

    const options = document.createElement('li');
    options.classList.add('options')

    const readBtn = document.createElement('button');
    readBtn.textContent = 'read';
    readBtn.classList.add('read-btn')
    if (book.read) {
        readBtn.classList.add('read');
    }
    readBtn.addEventListener('click', () => {
        book.read = !book.read;
        loadBooks();
    });
    options.appendChild(readBtn)
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'delete';
    deleteBtn.classList.add('delete-btn')
    deleteBtn.addEventListener('click', () => {
        books.splice(books.indexOf(book), 1);
        loadBooks();
    });
    options.appendChild(deleteBtn);

    infoList.appendChild(options);

    bookCard.appendChild(infoList);
    
    bookshelf.appendChild(bookCard);
}

function loadBooks() {
    clearShelf();
    books.forEach(book => {
        load(book);
    });
}

const submit = document.querySelector('#submit-btn');
submit.addEventListener('click', () => {
    const newTitle = document.querySelector('#new-title').value;
    const newAuthor = document.querySelector('#new-author').value;
    const newRead = document.querySelector('#new-read').checked;

    newBook(newTitle, newAuthor, newRead);

    loadBooks();
});
