function leapYears(leapYear,normalYear){
    leapYear=Number(leapYear);
    normalYear=Number(normalYear); 
    for(let i=leapYear; i<=normalYear; i++){
        if((i%4===0 && i%100 !==0)||(i%400===0)){
            console.log(i);
        }
    }
}
leapYears(1999,2011)