function solve(input){
    let inputElement=input[0];
    let index=1;
    let maxNumber=Number.MIN_SAFE_INTEGER;
    while(inputElement!=='Stop'){
        let num=Number(inputElement);
        if(num>maxNumber){
          maxNumber=num;
        }
        inputElement=input[index];
        index++;
    }
    console.log(maxNumber);
}    
solve(["100",
"99",
"80",
"70",
"Stop"])
