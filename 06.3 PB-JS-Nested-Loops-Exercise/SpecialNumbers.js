function solve(input){
    let n=Number(input[0]);
    let printLine="";
    for(let num=1111; num<=9999; num++){
        let currentNum=num + "";
        let isSpecial=true;
        for(let index=0; index<4; index++){
            let digit=Number(currentNum[index]);
            let result= n % digit;
            if( result !==0){
               isSpecial=false;
               break;
            }
        }
        if(isSpecial){
           printLine+=Number(currentNum) + " ";
        }
    }
    console.log(printLine);
}
solve(["3"])