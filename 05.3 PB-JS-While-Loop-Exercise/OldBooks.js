function solve(input){
    let wantedBook=input[0];
    let index=1;
    let nextBookName=input[index];
    let bookFound=false;
    let booksCheked=0
    while(nextBookName !== 'No More Books'){
        if(nextBookName===wantedBook){
            bookFound=true;
            break;
        }
        index++;
        nextBookName=input[index];
        booksCheked++;
    }
    if(bookFound===false){
        console.log(`The book you search is not here!`);
        console.log(`You checked ${booksCheked} books.`);
    } else {
        console.log(`You checked ${booksCheked} books and found it.`);
    }
}
solve(["Bourne",
"True Story",
"Forever",
"More Space",
"The Girl",
"Spaceship",
"Strongest",
"Profit",
"Tripple",
"Stella",
"The Matrix",
"Bourne"])


