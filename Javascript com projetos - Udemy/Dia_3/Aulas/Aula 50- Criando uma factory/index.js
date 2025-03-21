

function createBook(title, author, pages){

    const book = {
        bookTitle: title,
        bookAuthor: author,
        bookPages: pages,
        printBook: function(){
            console.log("Printing...");
        }
    };
    return book;
}
 

const book1 = createBook("Harry Potter", "J.K. Rowling", 300);
const book2 = createBook("Senhor dos Anéis", "J.R.R. Tolkien", 500);
const book3 = createBook("Percy Jackson", "Rick Riordan", 400);


console.log(book1);
console.log(book2);
console.log(book3);


