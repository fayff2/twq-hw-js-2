let books = [ 
    {
        title: 'Bill Gates',
        author: 'The Road Ahead',
        number_of_pages:40,
     av_borrowing: true
    },
    {
        title: 'Steve Jobs',
        author: 'Walter Isaacson',
         number_of_pages:70,
         av_borrowing: false
    }
    ,
    {
        title: 'Mockingjay',
        author: 'Suzanne Collins',
        number_of_pages:80,
        av_borrowing: true
    }
    ,
    {
 title: 'Scope',
    author: 'Kyle Simpson',
      number_of_pages:70,
      av_borrowing:false

    },
    {
    title: 'Make your own luck', 
    author: 'Bob Miglani', 
    number_of_pages:100,
    av_borrowing:true

    }


];

///Use a for loop to iterate through the books array and print out the title, author, and number of pages for each book.
console.log("-------------Q1----------------------")
for(let i=0; i<books.length; i++){
    console.log("the title :"+ "" + books[i].title , "the author :"+ "" +books[i].author ,"the number of pages :"+ "" +books[i].number_of_pages)
}



console.log("-------------Q2----------------------")

//Book borrowing
function borrowBook (title , borrower){

    let book = books.find(function(ele) {
        return ele.title == title
    })

   
     if(book.av_borrowing == true){
        book.av_borrowing = false;

        let i = books.indexOf(book)
        books[i].borrower=(borrower)
        console.log(title + "The book is available!");
        
    
    }

   else if(book == undefined){
    
        console.log("This book is not in the library");
    
    }
    else{
     
        console.log("This book is not available ");
    
    }
    
} 


console.log("-----------------------------")

console.log("-------------Q3----------------------")

//ReturnBook

function ReturnBook (title){

    let book = books.find(function(ele) {
        return ele.title == title
    })

   
     if(book.av_borrowing =! true){
        book.av_borrowing = true;

        delete book.borrower;
        console.log(title + "The book was borrowed");
        
    
    }

   else if(book == undefined){
    
        console.log("This book is not in the library");
    
    }
    else{
     
        console.log("This book was never borrowed ");
    
    }
    
} 

console.log("-------------Q4----------------------")

//// test

borrowBook('Make your own luck','fahad')
borrowBook('Bill Gates','saad')
borrowBook('Scope','hamad')
borrowBook('Mockingjay','bella')
borrowBook('Steve Jobs','Fay')



ReturnBook('Make your own luck')
ReturnBook('Bill Gates')
ReturnBook('Scope')
ReturnBook('Mockingjay')
ReturnBook('Steve Jobs')



console.log("-------------Q5----------------------")


//

for (i=0 ; i< books.length ; i++){
    title= books[i].title
    author= books[i].author
    number_of_pages= books[i].number_of_pages
    borrower= books[i].borrower

    console.log(`\n Title: ${title} \n Author: ${author} \n Number of pages: ${number_of_pages}`)  

    if(books[i].borrower){
        console.log(` Borower: ${books[i].borrower}`);
    }else{
        console.log("Borrower: No one");
    }
}


console.log("-------------Q6----------------------")

//addBook
function addBook(newBook) {
    books.push(newBook);
  }
const newBook = {
    title: "SSSSSS",
    author: "Fahad",
    number_of_pages: 123,
    av_borrowing : true
};
addBook(newBook);

console.log(books)


console.log("-------------Q7----------------------")


//searchBook

function searchBook(author){
    let authorB = books.filter(function(ele) {
        return ele.author == author;
    })

    console.log(`the author: ${author}`);

}


console.log("-------------Q8----------------------")

//Test 
searchBook('Walter Isaacson');
searchBook('Suzanne Collins');














