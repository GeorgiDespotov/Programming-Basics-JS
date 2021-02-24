function solve(input){
    let firsNumber=input[0];
    let lastNumber=input[1];
    let printLine='';
    for(let num=firsNumber; num<=lastNumber; num++){
        let currentNumber=num + '';
        let evenSum=0;
        let oddSum=0;
        for(let index=0; index<currentNumber.length; index++){
            let digit=Number(currentNumber[index]);
            if(index % 2 === 0){
                evenSum+=digit;
            } else {
                oddSum+=digit;
            } 
        }
        if(evenSum===oddSum){
            printLine+=currentNumber + ' ';


        }
    }
    console.log(printLine);
}
solve(["100000",
"100050"])
