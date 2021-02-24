function solve(input){
    let firstNumber=Number(input[0]);
    let lastNumber=Number(input[1]);
    let WantedNumber=Number(input[2]);
    let result=0;
    let counter=0;
    let isFound=false;
    for(let a=firstNumber; a<=lastNumber; a++){
        for(let b=firstNumber; b<=lastNumber; b++){
            result=a+b;
            counter++;
            if(result===WantedNumber){
                isFound=true;
                console.log(`Combination N:${counter} (${a} + ${b} = ${WantedNumber})`);
                break;
            }
        }
        if(isFound){
            break;
        }
    }
    if(!isFound){
        console.log(`${counter} combinations - neither equals ${WantedNumber}`)
    }
  
}
solve(["1",
"10",
"5"])


