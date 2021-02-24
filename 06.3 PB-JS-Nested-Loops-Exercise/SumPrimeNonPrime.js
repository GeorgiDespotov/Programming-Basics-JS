function solve(input){
    let index=0;
    let command=input[index];
    let sumPrime=0;
    let sumNonPrime=0;

    while(command !== "stop"){
        let num=Number(command);
        let lastDivider=num - 1;
        let isPrime=true;
        if(num >= 0){
            for(let divider=2; divider<=lastDivider; divider++){
                let result= num % divider;
                if(result === 0){
                    isPrime=false;
                    break;
                }
            }
            if(isPrime){
                sumPrime+=num;
            } else {
                sumNonPrime+=num;
            }
        } else {
            console.log(`Number is negative.`);
        }
        index++;
        command=input[index];
    }
   console.log(`Sum of all prime numbers is: ${sumPrime}`);
   console.log(`Sum of all non prime numbers is: ${sumNonPrime}`);
}
solve(["30",
"83",
"33",
"-1",
"20",
"stop"])
