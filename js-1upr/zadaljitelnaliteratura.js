function solve(pagesBook,pagesHour,daysForOneBook){
    pagesBook = Number(pagesBook);
    pagesHour = Number(pagesHour);
    daysForOneBook = Number(daysForOneBook);
    let timeToReedOneBook = pagesBook/pagesHour;
    console.log(timeToReedOneBook/daysForOneBook);
}
solve('212','20','2');