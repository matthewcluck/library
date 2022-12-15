let myLibrary = [];

let list = document.querySelector('#list')

let addBtn = document.querySelector('.btn');

//Form value selectors
let title = document.querySelector('#title');
let author = document.querySelector('#author');
let pages = document.querySelector('#pages');

addBtn.addEventListener('click', addBook);


function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = false;
}


function addBook(){
    let book = new Book(title.value, author.value, pages.value);

    myLibrary.push(book);

    event.preventDefault();

    let entry = document.createElement('div');
    let removeB = document.createElement('button');
    let didReadB = document.createElement('INPUT');
    let br = document.createElement("br");
    didReadB.setAttribute("type","checkbox");

    for (i=0; i<myLibrary.length; i++){

        removeB.id = [i];
        entry.id = [i];
        entry.classList.add("book");
        removeB.classList.add("rmv");
        entry.innerText = `${myLibrary[i].title} by ${myLibrary[i].author} \n ${myLibrary[i].pages} pages \n \n check if read:`;
        removeB.innerText = 'remove';
        console.log(entry);
    }

    list.appendChild(entry);

    entry.appendChild(didReadB);

    entry.appendChild(br);

    entry.appendChild(removeB);
    
    title.value = "";
    author.value = "";
    pages.value = "";
    removeB.addEventListener('click', removeBook);
}

function removeBook(){
    let divId = this.id;

    let libraryList = document.querySelectorAll('div.book');
    let rmvList = document.querySelectorAll('div.rmv');

    for (book of libraryList){
        if (book.id == divId){
            list.removeChild(book);
        }
    }

}