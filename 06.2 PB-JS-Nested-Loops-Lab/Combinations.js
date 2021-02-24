function solve(input){
    let wantedNumber=Number(input[0]);
    let counter=0;
    let result=0;
    for(let a=0; a<=wantedNumber; a++){
        for(let b=0; b<=wantedNumber; b++){
            for(let c=0; c<=wantedNumber; c++){
                result=a+b+c;
                if(result===wantedNumber){
                    counter++;
                }
            }
        }
    }
    console.log(counter);
}
solve(["25"])