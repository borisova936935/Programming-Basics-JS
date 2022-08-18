function oldBooks(input) {

   let index = 0;
   let favouriteBook = input[index];
   index++;
   let currentBook = input[index];
   index++
   let isBookFound = false;

   let books = 0;
 
   while(currentBook !== "No More Books"){
       if(currentBook === favouriteBook){
           isBookFound = true;
           break;
       }
       books++
       currentBook = input[index];
       index++
   }

   if(isBookFound === false){
       console.log("The book you search is not here!");
       console.log(`You checked ${books} books.`);
   }else{
       console.log(`You checked ${books} books and found it.`);
   }

}
oldBooks(["Troy",
"Stronger",
"Life Style",
"Troy"])